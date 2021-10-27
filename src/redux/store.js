import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import currencyRatesReducer from './currencyRates/currencyReducer';

const middleware = [...getDefaultMiddleware({})];

const store = configureStore({
  reducer: { currencyRates: currencyRatesReducer },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
