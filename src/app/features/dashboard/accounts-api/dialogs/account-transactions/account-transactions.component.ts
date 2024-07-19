import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AccountFacade } from '../../../../../core/store/accounts-store/accounts.facade';
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-account-transactions',
  standalone: true,
  imports: [NgIf, JsonPipe, AsyncPipe, MatCardModule],
  templateUrl: './account-transactions.component.html',
  styleUrl: './account-transactions.component.scss',
})
export class AccountTransactionsComponent {
  transactions$ = this.accountsFacade.transactions$;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private accountsFacade: AccountFacade
  ) {
    this.accountsFacade.getAccountTransactions(data.accountId);
  }
}
