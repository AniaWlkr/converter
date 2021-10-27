import { createSelector } from '@reduxjs/toolkit';

const getRates = state => {
  console.log('getRates - state', state);
  return state.currencyRates.rates;
};

const getLoading = state => state.currencyRates.loading;

const getCcySaleRates = createSelector(getRates, data => {
  console.log('Selector data', data);
  if (!data) return console.log('No data in state found');
  const ccyRatesArr = data.reduce((acc, item) => {
    if (item.ccy === 'BTC') {
      const usdData = data.find(item => item.ccy === 'USD');
      acc.push({ ccy: item.ccy, rate: item.sale * usdData.sale });
    } else acc.push({ ccy: item.ccy, rate: item.sale });
    return acc;
  }, []);
  ccyRatesArr.unshift({ ccy: 'UAH', rate: 1 });
  return ccyRatesArr;
});

export default { getRates, getLoading, getCcySaleRates };
