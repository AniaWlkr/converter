import apiService from '../../utils/pb-service/api-service';
import {
  fetchCurrencyRatesRequest,
  fetchCurrencyRatesSuccess,
  fetchCurrencyRatesError,
} from './currencyActions';

const fetchCurrencyRatesOperation = () => dispatch => {
  dispatch(fetchCurrencyRatesRequest());

  let requestQty = JSON.parse(localStorage.getItem('requestCounter'));
  console.log('getCurrencyRates -> requestQty', requestQty);

  if (requestQty && requestQty === 4) {
    console.log('No data found');
    localStorage.setItem('requestCounter', JSON.parse(0));
    dispatch(fetchCurrencyRatesSuccess([]));
    return Error('No data found');
  } else {
    requestQty += 1;
    localStorage.setItem('requestCounter', JSON.parse(requestQty));
  }

  return apiService
    .getCurrencyRates()
    .then(res => {
      console.log('res', res);
      dispatch(fetchCurrencyRatesSuccess(res));
    })
    .catch(err => dispatch(fetchCurrencyRatesError(err)));
};

export default { fetchCurrencyRatesOperation };
