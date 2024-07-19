import { Component } from '@angular/core';
import { AuthFacade } from '../../core/store/auth-store/auth.facade';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  constructor() {}
}
