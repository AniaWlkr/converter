import PropTypes from 'prop-types';
import styles from './Table.module.scss';

const Table = ({ data }) => {
  const round = number => {
    return parseFloat(number).toFixed(1);
  };

  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tr}>
            <th className={styles.th}>Currency</th>
            <th className={styles.th}>Buy</th>
            <th className={styles.th}>Sell</th>
          </tr>
        </thead>
        <tbody>
          {data?.map(item => (
            <tr key={item.ccy} className={styles.tr}>
              <td className={styles.td}>{`${item.ccy} / ${item.base_ccy}`}</td>
              <td className={styles.td}>{round(item.buy)}</td>
              <td className={styles.td}>{round(item.sale)}</td>
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
