import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { operations, selectors } from '../../redux/currencyRates';
import Container from '../../components/Container/Container';
import Table from '../../components/Table';
import ConversionForm from '../../components/ConversionForm';
import Loader from '../../components/Loader';

const CurrencyPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectors.getLoading);
  const ccyRates = useSelector(selectors.getRates);

  useEffect(() => {
    dispatch(operations.fetchCurrencyRatesOperation());
  }, []);

  return (
    <Container>
      {isLoading && <Loader />}
      {ccyRates?.length ? (
        <>
          <Table data={ccyRates} />
          <ConversionForm />
        </>
      ) : (
        <p>Error 404. Data not found</p>
      )}
    </Container>
  );
};

export default CurrencyPage;
