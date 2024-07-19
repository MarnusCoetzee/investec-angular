import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-account-tile',
  standalone: true,
  imports: [
    MatCardModule,
    MatGridListModule,
    NgIf,
    MatButtonModule,
    MatExpansionModule,
  ],
  templateUrl: './account-tile.component.html',
  styleUrl: './account-tile.component.scss',
})
export class AccountTileComponent {
  @Input() accountData: any | undefined;
  @Output() viewBalanceSelected = new EventEmitter();
  @Output() viewTransactionsSelected = new EventEmitter();
  @Output() createNewTransaction = new EventEmitter();
  @Output() deleteAccount = new EventEmitter();

  handleViewBalance(): void {
    this.viewBalanceSelected.emit(this.accountData);
  }

  handleViewTransactions(): void {
    this.viewTransactionsSelected.emit(this.accountData);
  }

  handleNewTransaction(): void {
    this.createNewTransaction.emit(this.accountData);
  }

  handleDeleteAccount(): void {
    this.deleteAccount.emit(this.accountData);
  }
}
