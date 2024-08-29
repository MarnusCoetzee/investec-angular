import { createReducer, on } from '@ngrx/store';
import * as CardActions from './card.actions';
import { ConvertCurrencyResult, Currency } from '../../interfaces/cards-state/cards-state.interface';

export interface CurrencyConversion {
  fromCurrency: string;
  toCurrency: string;
  fromAmount: number;
  toAmount: number;
  rate: number;
}

export interface CardState {
  countries: any[];
  currencies: Currency[];
  merchants: any[];
  loading: boolean;
  error: string | null;
  convertCurrencyResult: ConvertCurrencyResult | null;
}

export const initialState: CardState = {
  countries: [],
  currencies: [],
  merchants: [],
  convertCurrencyResult: null,
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
    currencies: currencies.data?.result,
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
  on(CardActions.convertCurrency, (state) => ({
    ...state,
    loading: true
  })),
  on(CardActions.convertCurrencySuccess, (state, { convertCurrencyResult } ) => ({
    ...state,
    loading: false,
    error: null,
    convertCurrencyResult,
  })),
  on(CardActions.convertCurrencyFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  }))
);
