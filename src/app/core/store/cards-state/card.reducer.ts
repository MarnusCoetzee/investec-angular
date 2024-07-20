import { createReducer, on } from '@ngrx/store';
import * as CardActions from './card.actions';

export interface CurrencyConversion {
  fromCurrency: string;
  toCurrency: string;
  fromAmount: number;
  toAmount: number;
}

export interface CardState {
  countries: any[];
  currencies: any[];
  merchants: any[];
  loading: boolean;
  error: string | null;
  currencyConvertion: CurrencyConversion | null;
}

export const initialState: CardState = {
  countries: [],
  currencies: [],
  merchants: [],
  currencyConvertion: null,
  loading: false,
  error: null,
};

export const cardReducer = createReducer(
  initialState,
  on(CardActions.getAllCountries, (state) => ({ ...state, loading: true })),
  on(CardActions.getAllCountriesSuccess, (state, { countries }) => ({
    ...state,
    countries,
    loading: false,
  })),
  on(CardActions.getAllCountriesFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(CardActions.getAllCurrencies, (state) => ({ ...state, loading: true })),
  on(CardActions.getAllCurrenciesSuccess, (state, { currencies }) => ({
    ...state,
    currencies,
    loading: false,
  })),
  on(CardActions.getAllCurrenciesFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(CardActions.getAllMerchants, (state) => ({ ...state, loading: true })),
  on(CardActions.getAllMerchantsSuccess, (state, { merchants }) => ({
    ...state,
    merchants,
    loading: false,
  })),
  on(CardActions.getAllMerchantsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(CardActions.convertCurrency, (state, { currencyConvertion }) => ({
    ...state,
    currencyConvertion: currencyConvertion
  })),
  on(CardActions.convertCurrencySuccess, (state, {conversionResult} ) => { console.log('Got ', conversionResult); return {
    ...state,
    currencyConvertion: { ...state.currencyConvertion!, toAmount: conversionResult }
  }})
);
