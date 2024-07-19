import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-account-tile',
  standalone: true,
  imports: [MatCardModule, MatGridListModule, NgIf, MatButtonModule],
  templateUrl: './account-tile.component.html',
  styleUrl: './account-tile.component.scss',
})
export class AccountTileComponent {
  @Input() accountData: any | undefined;
  @Output() viewBalanceSelected = new EventEmitter();
  @Output() viewTransactionsSelected = new EventEmitter();

  handleViewBalance(): void {
    this.viewBalanceSelected.emit(this.accountData);
  }

  handleViewTransactions(): void {
    this.viewTransactionsSelected.emit(this.accountData);
  }
}
