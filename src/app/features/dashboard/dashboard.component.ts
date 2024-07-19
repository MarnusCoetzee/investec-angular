import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { AccountsApiComponent } from './accounts-api/accounts-api.component';
import { CardsApiComponent } from './cards-api/cards-api.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatTabsModule, AccountsApiComponent, CardsApiComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  constructor() {}
}
