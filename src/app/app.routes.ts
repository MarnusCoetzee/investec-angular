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
    //canActivate: [AuthGuard],
  },
  {
    path: 'dashboard/view-trip/:id',
    loadComponent: () =>
      import(
        './features/dashboard/components/dashboard-upcoming-trips/view-trip/view-trip.component'
      ).then((m) => m.ViewTripComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard/edit-trip/:id',
    loadComponent: () =>
      import(
        './features/dashboard/components/dashboard-upcoming-trips/edit-trip/edit-trip.component'
      ).then((m) => m.EditTripComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard/ai-chatbot',
    loadComponent: () =>
      import(
        './features/dashboard/components/ai-chatbot/ai-chatbot.component'
      ).then((m) => m.AiChatbotComponent),
    canActivate: [AuthGuard],
  },

  {
    path: '**',
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
    canActivate: [AuthGuard],
  },
];
