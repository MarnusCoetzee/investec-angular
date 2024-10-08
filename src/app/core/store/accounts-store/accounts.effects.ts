import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, take, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as AccountActions from './accounts.actions';
import { AccountService } from './accounts.service';
import { LoadingFacade } from '../app-state/app-state.facade'; // Assuming a loading facade for handling loading states

@Injectable()
export class AccountEffects {
  constructor(
    private actions$: Actions,
    private accountService: AccountService,
    private loadingFacade: LoadingFacade
  ) {}

  getAllAccounts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AccountActions.getAllAccounts),
      tap(() => this.loadingFacade.startLoading()),
      switchMap(() =>
        this.accountService.getAccounts().pipe(
          map((accounts) =>
            AccountActions.getAllAccountsSuccess({ accounts: accounts.data })
          ),
          catchError((error) =>
            of(AccountActions.getAllAccountsFailure({ error }))
          )
        )
      ),
      tap(() => this.loadingFacade.stopLoading())
    )
  );

  getAccountBalances$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AccountActions.getAccountBalances),
      tap(() => this.loadingFacade.startLoading()),
      switchMap((action) =>
        this.accountService.getAccountBalance(action.accountNumber).pipe(
          map((balances) =>
            AccountActions.getAccountBalancesSuccess({
              accountBalance: balances.data,
            })
          ),
          catchError((error) =>
            of(AccountActions.getAccountBalancesFailure({ error }))
          )
        )
      ),
      tap(() => this.loadingFacade.stopLoading())
    )
  );

  getAccountTransactions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AccountActions.getAccountTransactions),
      tap(() => this.loadingFacade.startLoading()),
      switchMap((action) =>
        this.accountService.getAccountTransactions(action.accountId).pipe(
          map((transactions) =>
            AccountActions.getAccountTransactionsSuccess({ transactions })
          ),
          catchError((error) =>
            of(AccountActions.getAccountTransactionsFailure({ error }))
          )
        )
      ),
      tap(() => this.loadingFacade.stopLoading())
    )
  );

  addNewAccount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AccountActions.addNewAccount),
      take(1),
      switchMap((action) =>
        this.accountService.addNewAccount(action.account).pipe(
          map((account) => AccountActions.addNewAccountSuccess({ account })),
          catchError((error) =>
            of(AccountActions.addNewAccountFailure({ error }))
          )
        )
      ),
      tap(() => this.loadingFacade.stopLoading())
    )
  );

  createNewTransaction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AccountActions.createTransaction),
      tap(() => this.loadingFacade.startLoading()),
      switchMap((action) =>
        this.accountService.createNewTransaction(action.accountId).pipe(
          map((transactionResponse) =>
            AccountActions.createTransactionSuccess({
              transaction: transactionResponse.data,
            })
          ),
          catchError((error) =>
            of(AccountActions.createTransactionFailure({ error }))
          )
        )
      ),
      tap(() => this.loadingFacade.stopLoading())
    )
  );

  deleteAccount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AccountActions.deleteAccount),
      tap(() => this.loadingFacade.startLoading()),
      switchMap((action) =>
        this.accountService.deleteAccount(action.accountId).pipe(
          map(() =>
            AccountActions.deleteAccountSuccess({ accountId: action.accountId })
          ),
          catchError((error) =>
            of(AccountActions.deleteAccountFailure({ error }))
          )
        )
      ),
      tap(() => this.loadingFacade.stopLoading())
    )
  );
}
