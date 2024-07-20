import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CurrencyConversionComponent } from './cards-api/currency-conversion/currency-conversion.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'main',
        loadComponent: () =>
          import('./components/dashboard-main/dashboard-main.component').then(
            (m) => m.DashboardMainComponent
          ),
      },
    ],
  },
  {
    path: 'currency-convertion',
    component: CurrencyConversionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
