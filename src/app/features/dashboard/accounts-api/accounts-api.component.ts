import { Component } from '@angular/core';
import { AccountFacade } from '../../../core/store/accounts-store/accounts.facade';
import { MatButtonModule } from '@angular/material/button';
import { AsyncPipe, JsonPipe, NgFor } from '@angular/common';
import { map, take } from 'rxjs';
import { AccountTileComponent } from './account-tile/account-tile.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AccountBalanceComponent } from './dialogs/account-balance/account-balance.component';
import { AccountTransactionsComponent } from './dialogs/account-transactions/account-transactions.component';
import { AddAccountComponent } from './dialogs/add-account/add-account.component';
import { AccountService } from '../../../core/store/accounts-store/accounts.service';

@Component({
  selector: 'app-accounts-api',
  standalone: true,
  imports: [
    MatButtonModule,
    AsyncPipe,
    JsonPipe,
    NgFor,
    AccountTileComponent,
    MatDialogModule,
  ],
  templateUrl: './accounts-api.component.html',
  styleUrl: './accounts-api.component.scss',
})
export class AccountsApiComponent {
  accounts$ = this.accountFacade.accounts$.pipe(map((res) => res.accounts));
  constructor(
    private accountFacade: AccountFacade,
    private matDialog: MatDialog,
    private accountService: AccountService
  ) {
    this.accountFacade.getAllAccounts();
    this.accounts$.subscribe((res) => console.log(res));
  }

  handleViewBalanceSelected(event: any): void {
    this.matDialog.open(AccountBalanceComponent, {
      data: event,
    });
  }

  handleViewTransactionsSelected(event: any): void {
    this.matDialog.open(AccountTransactionsComponent, {
      data: event,
    });
  }

  handleAddAccountDialog(): void {
    this.matDialog
      .open(AddAccountComponent)
      .afterClosed()
      .pipe(take(1))
      .subscribe((accountNameForm) => {
        if (accountNameForm) {
          const newAccount = this.accountService.createNewAccountDetails(
            accountNameForm.accountName
          );
          this.accountFacade.addNewAccount(newAccount);
        }
      });
  }

  handleCreateNewTransaction(event: any): void {
    this.accountFacade.createNewTransaction(event.accountId);
  }

  handleDeleteAccount(event: any): void {
    this.accountFacade.deleteAccount(event.accountId);
  }
}
