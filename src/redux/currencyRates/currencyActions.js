import { createAction } from '@reduxjs/toolkit';
import types from './currencyActionsTypes';

export const fetchCurrencyRatesRequest = createAction(
  types.CURRENCIES_FETCH_REQUEST,
);
export const fetchCurrencyRatesSuccess = createAction(
  types.CURRENCIES_FETCH_SUCCESS,
);
export const fetchCurrencyRatesError = createAction(
  types.CURRENCIES_FETCH_ERROR,
);
