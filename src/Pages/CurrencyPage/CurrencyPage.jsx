import { useState, useEffect } from 'react';
import Container from '../../components/Container/Container';
import Table from '../../components/Table';
import ConversionForm from '../../components/ConversionForm';
import apiService from '../../utils/pb-service/api-service';

const CurrencyPage = () => {
  const [rates, setRates] = useState([]);

  useEffect(() => {
    getRates();
  }, []);

  const getRates = () => {
    apiService
      .getCurrencyRates()
      .then(res => setRates(res))
      .catch(err => console.log(err));
  };

  return (
    <Container>
      <Table data={rates} />
      <ConversionForm data={rates} />
    </Container>
  );
};

export default CurrencyPage;
