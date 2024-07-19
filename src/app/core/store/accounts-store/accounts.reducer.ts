import { createReducer, on } from '@ngrx/store';
import * as AccountActions from './accounts.actions';

export interface AccountState {
  accounts: any;
  balances: any;
  transactions: any;
  loading: boolean;
  error: string | null;
}

export const initialState: AccountState = {
  accounts: [],
  balances: {},
  transactions: {},
  loading: false,
  error: null,
};

export const accountsReducer = createReducer(
  initialState,
  on(AccountActions.getAllAccounts, (state) => ({ ...state, loading: true })),
  on(AccountActions.getAllAccountsSuccess, (state, { accounts }) => ({
    ...state,
    accounts: accounts.accounts,
    loading: false,
  })),
  on(AccountActions.getAllAccountsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(AccountActions.getAccountBalances, (state) => ({
    ...state,
    loading: true,
  })),
  on(AccountActions.getAccountBalancesSuccess, (state, { accountBalance }) => ({
    ...state,
    balances: accountBalance,
    loading: false,
  })),
  on(AccountActions.getAccountBalancesFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(AccountActions.getAccountTransactions, (state) => ({
    ...state,
    loading: true,
  })),
  on(
    AccountActions.getAccountTransactionsSuccess,
    (state, { transactions }) => ({
      ...state,
      transactions: {
        transactions: transactions,
      },
      loading: false,
    })
  ),
  on(AccountActions.getAccountTransactionsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(AccountActions.addNewAccount, (state) => ({ ...state, loading: true })),
  on(AccountActions.addNewAccountSuccess, (state, { account }) => ({
    ...state,
    loading: false,
    accounts: [...state.accounts, { account }],
  })),
  on(AccountActions.addNewAccountFailure, (state) => ({
    ...state,
    loading: false,
  }))
);
