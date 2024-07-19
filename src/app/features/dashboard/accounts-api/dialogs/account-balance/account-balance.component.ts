import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AccountFacade } from '../../../../../core/store/accounts-store/accounts.facade';
import { AsyncPipe, CurrencyPipe, NgIf } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-account-balance',
  standalone: true,
  imports: [AsyncPipe, MatGridListModule, MatCardModule, CurrencyPipe, NgIf],
  templateUrl: './account-balance.component.html',
  styleUrl: './account-balance.component.scss',
})
export class AccountBalanceComponent {
  accountBalance$ = this.accountFacade.accountBalance$;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private accountFacade: AccountFacade
  ) {
    this.accountFacade.getAccountBalance(data.accountId);
  }
}
