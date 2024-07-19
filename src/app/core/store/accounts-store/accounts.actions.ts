import { createAction, props } from '@ngrx/store';

export const getAllAccounts = createAction('[Accounts] Get All Accounts');

export const getAllAccountsSuccess = createAction(
  '[Accounts] Get All Accounts Success',
  props<{ accounts: any }>()
);

export const getAllAccountsFailure = createAction(
  '[Accounts] Get All Accounts Failure',
  props<{ error: any }>()
);

export const getAccountBalances = createAction(
  '[Accounts] Get Account Balances',
  props<{ accountNumber: string }>()
);

export const getAccountBalancesSuccess = createAction(
  '[Accounts] Get Account Balances Success',
  props<{ accountBalance: any }>()
);

export const getAccountBalancesFailure = createAction(
  '[Accounts] Get Account Balances Failure',
  props<{ error: any }>()
);

export const getAccountTransactions = createAction(
  '[Accounts] Get Account Transactions',
  props<{ accountId: string }>()
);

export const getAccountTransactionsSuccess = createAction(
  '[Accounts] Get Account Transactions Success',
  props<{ transactions: any[] }>()
);

export const getAccountTransactionsFailure = createAction(
  '[Accounts] Get Account Transactions Failure',
  props<{ error: any }>()
);

export const addNewAccount = createAction(
  '[Accounts] Add New Account',
  props<{ account: any }>()
);
export const addNewAccountSuccess = createAction(
  '[Accounts] Add New Account',
  props<{ account: any }>()
);
export const addNewAccountFailure = createAction(
  '[Accounts] Add New Account',
  props<{ error: any }>()
);

export const createTransaction = createAction(
  '[Transaction] Create Transaction',
  props<{ accountId: any }>()
);

export const createTransactionSuccess = createAction(
  '[Transaction] Create Transaction Success',
  props<{ transaction: any }>()
);

export const createTransactionFailure = createAction(
  '[Transaction] Create Transaction Failure',
  props<{ error: any }>()
);

export const deleteAccount = createAction(
  '[Accounts] Delete Account',
  props<{ accountId: string }>()
);
export const deleteAccountSuccess = createAction(
  '[Accounts] Delete Account Success',
  props<{ accountId: string }>()
);
export const deleteAccountFailure = createAction(
  '[Accounts] Delete Account Failure',
  props<{ error: any }>()
);
