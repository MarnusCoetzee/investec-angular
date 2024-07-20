import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CardState } from './card.reducer';

export const selectCardState = createFeatureSelector<CardState>('card');

export const selectAllCountries = createSelector(
  selectCardState,
  (state) => state.countries
);

export const selectAllCurrencies = createSelector(
  selectCardState,
  (state) => state.currencies
);

export const selectAllMerchants = createSelector(
  selectCardState,
  (state) => state.merchants
);

export const selectCardLoading = createSelector(
  selectCardState,
  (state) => state.loading
);

export const selectCardError = createSelector(
  selectCardState,
  (state) => state.error
);

export const selectCurrencyConversion = createSelector(
  selectCardState,
  (state) => state.currencyConvertion
);