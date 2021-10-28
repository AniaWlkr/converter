import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectors } from '../../redux/currencyRates';
import { ReactComponent as ArrowsIcon } from '../../image/icons/arrows.svg';
import styles from './ConversionForm.module.scss';

const ConversionForm = () => {
  const convertCcyInputRef = useRef(null);
  const baseCcyRef = useRef(null);
  const convertCcyRef = useRef(null);

  const ccySaleRatesArr = useSelector(selectors.getCcySaleRates);

  const [baseCcy, setBaseCcy] = useState(ccySaleRatesArr[0].ccy);
  const [convertCcy, setConvertCcy] = useState(ccySaleRatesArr[0].ccy);
  const [baseCcyValue, setBaseCcyValue] = useState(1);
  const [convertCcyValue, setConvertCcyValue] = useState(1);

  useEffect(() => {
    console.log('ConversionForm_useEffect');
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

  const handleFormFieldChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'baseCcyInput':
        setBaseCcyValue(value);
        break;
      case 'baseCcySelect':
        setBaseCcy(value);
        break;
      case 'convertCcySelect':
        setConvertCcy(value);
        break;
      default:
        console.error('This field is not defined');
    }
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

  // input data check - min /max values

  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <div className={styles.formDiv}>
          <div className={styles.inputWrapper}>
            <label htmlFor="baseCcyInput" className={styles.label}>
              Change
            </label>
            <input
              type="number"
              id="baseCcyInput"
              name="baseCcyInput"
              defaultValue={baseCcyValue}
              onChange={handleFormFieldChange}
              className={styles.input}
            />
          </div>

          <select
            name="baseCcySelect"
            defaultValue={baseCcy}
            onChange={handleFormFieldChange}
            ref={baseCcyRef}
            className={styles.select}
          >
            {ccySaleRatesArr?.map(item => (
              <option key={item.ccy}>{item.ccy}</option>
            ))}
          </select>
        </div>
        <button
          type="button"
          onClick={switchCcyOption}
          className={styles.button}
        >
          <ArrowsIcon className={styles.icon} />
        </button>
        <div className={styles.formDiv}>
          <div className={styles.inputWrapper}>
            <label htmlFor="convertCcyInput" className={styles.label}>
              Get
            </label>
            <input
              type="number"
              id="convertCcyInput"
              name="convertCcyInput"
              defaultValue={convertCcyValue}
              disabled={true}
              ref={convertCcyInputRef}
              className={styles.input}
            />
          </div>
          <select
            name="convertCcySelect"
            defaultValue={convertCcy}
            onChange={handleFormFieldChange}
            ref={convertCcyRef}
            className={styles.select}
          >
            {ccySaleRatesArr?.map(item => (
              <option key={item.ccy}>{item.ccy}</option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
};

export default ConversionForm;
