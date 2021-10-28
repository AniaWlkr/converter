import styles from './AppBar.module.scss';
import logo from '../../image/logo192.png';

const AppBar = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" className={styles.logo} />
      <p className={styles.title}>Converter</p>
    </header>
  );
};

export default AppBar;
