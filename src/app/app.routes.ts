import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/landing-page/landing-page.module').then(
        (m) => m.LandingPageModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
    canActivate: [AuthGuard],
  },
];
