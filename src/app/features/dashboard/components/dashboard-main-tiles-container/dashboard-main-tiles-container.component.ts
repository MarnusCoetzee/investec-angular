import { Component } from '@angular/core';
import { TotalExpensesTileComponent } from './total-expenses-tile/total-expenses-tile.component';
import { GoalSavingsTileComponent } from './goal-savings-tile/goal-savings-tile.component';

@Component({
  selector: 'app-dashboard-main-tiles-container',
  standalone: true,
  imports: [TotalExpensesTileComponent, GoalSavingsTileComponent],
  templateUrl: './dashboard-main-tiles-container.component.html',
  styleUrl: './dashboard-main-tiles-container.component.scss',
})
export class DashboardMainTilesContainerComponent {}
