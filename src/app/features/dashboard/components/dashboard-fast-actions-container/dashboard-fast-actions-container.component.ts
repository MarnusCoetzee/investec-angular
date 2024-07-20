import { Component } from '@angular/core';
import { FastActionItemComponent } from './fast-action-item/fast-action-item.component';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

export const FastActionItems = [
  {
    name: 'AI Chat',
    navigateTo: '/dashboard/ai-chatbot',
    iconName: 'chat',
  },
  {
    name: 'Conversion',
    navigateTo: '/coversion',
    iconName: 'currency_exchange',
  },
  {
    name: 'Add trip',
    navigateTo: '/add-trip',
    iconName: 'add',
  },
];

@Component({
  selector: 'app-dashboard-fast-actions-container',
  standalone: true,
  imports: [FastActionItemComponent, NgFor],
  templateUrl: './dashboard-fast-actions-container.component.html',
  styleUrl: './dashboard-fast-actions-container.component.scss',
})
export class DashboardFastActionsContainerComponent {
  actionItems = FastActionItems;

  constructor(private router: Router) {}

  handleActionItemClicked(event: any): void {
    this.router.navigate([event.navigateTo]);
  }
}
