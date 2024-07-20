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
  },
  {
    path: 'dashboard/view-trip/:id',
    loadComponent: () =>
      import(
        './features/dashboard/components/dashboard-upcoming-trips/view-trip/view-trip.component'
      ).then((m) => m.ViewTripComponent),
  },
  {
    path: 'dashboard/edit-trip/:id',
    loadComponent: () =>
      import(
        './features/dashboard/components/dashboard-upcoming-trips/edit-trip/edit-trip.component'
      ).then((m) => m.EditTripComponent),
  },

  {
    path: '**',
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
];
