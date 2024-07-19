import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AccountActions from './accounts.actions';
import { AccountState } from './accounts.reducer';

@Injectable({
  providedIn: 'root',
})
export class AccountFacade {
  accounts$ = this.store.select((state) => state.accounts);
  accountBalance$ = this.store.select((state) => state.accounts.balances);
  transactions$ = this.store.select(
    (state) => state.accounts.transactions.transactions?.data?.transactions
  );
  constructor(private store: Store<AccountState>) {}

  getAllAccounts() {
    this.store.dispatch(AccountActions.getAllAccounts());
  }

  getAccountBalance(accountNumber: string) {
    this.store.dispatch(AccountActions.getAccountBalances({ accountNumber }));
  }

  getAccountTransactions(accountId: string) {
    this.store.dispatch(AccountActions.getAccountTransactions({ accountId }));
  }

  addNewAccount() {
    this.store.dispatch(AccountActions.addNewAccount());
  }
}
