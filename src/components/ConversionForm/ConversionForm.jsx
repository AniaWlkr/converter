import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';
import { ReactComponent as ArrowsIcon } from '../../image/icons/arrows.svg';
import styles from './ConversionForm.module.css';

const ConversionForm = ({ data }) => {
  const convertCcyInputRef = useRef(null);
  const baseCcyRef = useRef(null);
  const convertCcyRef = useRef(null);

  const ccySaleRatesArr = data.reduce((acc, item) => {
    if (item.ccy === 'BTC') {
      const usdData = data.find(item => item.ccy === 'USD');
      acc.push({ ccy: item.ccy, rate: item.sale * usdData.sale });
    } else acc.push({ ccy: item.ccy, rate: item.sale });
    return acc;
  }, []);
  ccySaleRatesArr.unshift({ ccy: 'UAH', rate: 1 });

  const [baseCcy, setBaseCcy] = useState(ccySaleRatesArr[0].ccy);
  const [convertCcy, setConvertCcy] = useState(ccySaleRatesArr[0].ccy);
  const [baseCcyValue, setBaseCcyValue] = useState(1);
  const [convertCcyValue, setConvertCcyValue] = useState(1);

  useEffect(() => {
    conversionCalc();
    baseCcyRef.current.value = baseCcy;
    convertCcyRef.current.value = convertCcy;
    convertCcyInputRef.current.value = convertCcyValue;
  }, [baseCcy, convertCcy, baseCcyValue, convertCcyValue]);

  const switchCcyOption = () => {
    if (!baseCcy.localeCompare(convertCcy)) return;

    const temp = baseCcy;
    setBaseCcy(convertCcy);
    setConvertCcy(temp);
  };

  const onBaseCcyChange = event => {
    const { value } = event.currentTarget;
    setBaseCcy(value);
  };

  const onConvertCcyChange = event => {
    const { value } = event.currentTarget;
    setConvertCcy(value);
  };

  const onBaseCcyInputChange = event => {
    const { value } = event.currentTarget;
    setBaseCcyValue(value);
  };

  const conversionCalc = () => {
    const ccyDataFrom = ccySaleRatesArr.find(
      item => !baseCcy.localeCompare(item.ccy),
    );
    const ccyDataTo = ccySaleRatesArr.find(
      item => !convertCcy.localeCompare(item.ccy),
    );

    const convertedValue = (baseCcyValue * ccyDataFrom.rate) / ccyDataTo.rate;
    setConvertCcyValue(parseFloat(convertedValue).toFixed(2));
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <div className={styles.inputWrapper}>
          <label htmlFor="from" className={styles.label}>
            Change
          </label>
          <input
            type="number"
            id="from"
            defaultValue={baseCcyValue}
            onChange={onBaseCcyInputChange}
            className={styles.input}
          />
        </div>

        <select
          name="baseCcy"
          defaultValue={baseCcy}
          onChange={onBaseCcyChange}
          ref={baseCcyRef}
          className={styles.select}
        >
          {ccySaleRatesArr?.map(item => (
            <option key={item.ccy}>{item.ccy}</option>
          ))}
        </select>
        <button
          type="button"
          onClick={switchCcyOption}
          className={styles.button}
        >
          <ArrowsIcon className={styles.icon} />
        </button>
        <div className={styles.inputWrapper}>
          <label htmlFor="to" className={styles.label}>
            Get
          </label>
          <input
            type="number"
            id="to"
            defaultValue={convertCcyValue}
            disabled={true}
            ref={convertCcyInputRef}
            className={styles.input}
          />
        </div>
        <select
          name="convertCcy"
          defaultValue={convertCcy}
          onChange={onConvertCcyChange}
          ref={convertCcyRef}
          className={styles.select}
        >
          {ccySaleRatesArr?.map(item => (
            <option key={item.ccy}>{item.ccy}</option>
          ))}
        </select>
      </form>
    </div>
  );
};

ConversionForm.propTypes = {
  data: PropTypes.array,
};

export default ConversionForm;
