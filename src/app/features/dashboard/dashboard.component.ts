import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { AccountsApiComponent } from './accounts-api/accounts-api.component';
import { CardsApiComponent } from './cards-api/cards-api.component';
import { BeneficiariesApiComponent } from './beneficiaries-api/beneficiaries-api.component';
import { RouterModule } from '@angular/router';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { DashboardMainTilesContainerComponent } from './components/dashboard-main-tiles-container/dashboard-main-tiles-container.component';
import { DashboardFastActionsContainerComponent } from './components/dashboard-fast-actions-container/dashboard-fast-actions-container.component';
import { DashboardUpcomingTripsComponent } from './components/dashboard-upcoming-trips/dashboard-upcoming-trips.component';
import { BudgetComponent } from './components/budget/budget.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatTabsModule,
    AccountsApiComponent,
    CardsApiComponent,
    BeneficiariesApiComponent,
    RouterModule,
    DashboardHeaderComponent,
    DashboardMainTilesContainerComponent,
    DashboardFastActionsContainerComponent,
    DashboardUpcomingTripsComponent,
    BudgetComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  constructor() {}
}
