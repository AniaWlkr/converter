import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  fetchCurrencyRatesRequest,
  fetchCurrencyRatesSuccess,
  fetchCurrencyRatesError,
} from './currencyActions';

const rates = createReducer([], {
  [fetchCurrencyRatesSuccess]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchCurrencyRatesRequest]: () => true,
  [fetchCurrencyRatesSuccess]: () => false,
  [fetchCurrencyRatesError]: () => false,
});

export default combineReducers({ rates, loading });
