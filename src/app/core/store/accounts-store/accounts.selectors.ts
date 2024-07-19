import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AccountState } from './accounts.reducer';

export const selectAccountState =
  createFeatureSelector<AccountState>('account');

export const selectAllAccounts = createSelector(
  selectAccountState,
  (state) => state.accounts.accounts
);

export const selectAccountBalances = createSelector(
  selectAccountState,
  (state) => state.balances
);

export const selectAccountTransactions = createSelector(
  selectAccountState,
  (state) => state.transactions
);

export const selectAccountLoading = createSelector(
  selectAccountState,
  (state) => state.loading
);

export const selectAccountError = createSelector(
  selectAccountState,
  (state) => state.error
);
