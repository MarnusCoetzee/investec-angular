import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AccountFacade } from '../../../../../core/store/accounts-store/accounts.facade';
import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-account-transactions',
  standalone: true,
  imports: [
    NgIf,
    JsonPipe,
    AsyncPipe,
    MatCardModule,
    NgFor,
    MatGridListModule,
    MatExpansionModule,
  ],
  templateUrl: './account-transactions.component.html',
  styleUrl: './account-transactions.component.scss',
})
export class AccountTransactionsComponent {
  transactions$ = this.accountsFacade.transactions$;
  expanded = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private accountsFacade: AccountFacade
  ) {
    this.accountsFacade.getAccountTransactions(data.accountId);
  }
}
