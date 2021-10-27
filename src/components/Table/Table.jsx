// import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Table.module.css';
// import { selectors } from '../../redux/currencyRates';

const Table = ({ data }) => {
  // const data = useSelector(selectors.getRates);

  const round = number => {
    return parseFloat(number).toFixed(1);
  };

  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Currency</th>
            <th>Buy</th>
            <th>Sell</th>
          </tr>
        </thead>
        <tbody>
          {data?.map(item => (
            <tr key={item.ccy}>
              <td>{`${item.ccy} / ${item.base_ccy}`}</td>
              <td>{round(item.buy)}</td>
              <td>{round(item.sale)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  data: PropTypes.array,
};

export default Table;
