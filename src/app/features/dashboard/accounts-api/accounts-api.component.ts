import { Component } from '@angular/core';
import { AccountFacade } from '../../../core/store/accounts-store/accounts.facade';
import { MatButtonModule } from '@angular/material/button';
import { AsyncPipe, JsonPipe, NgFor } from '@angular/common';
import { map } from 'rxjs';
import { AccountTileComponent } from './account-tile/account-tile.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AccountBalanceComponent } from './dialogs/account-balance/account-balance.component';
import { AccountTransactionsComponent } from './dialogs/account-transactions/account-transactions.component';

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
    private matDialog: MatDialog
  ) {
    this.accountFacade.getAllAccounts();
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
}
