import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { authReducer } from './core/store/auth-store/auth.reducers';
import { provideEffects } from '@ngrx/effects';
import { AuthEffects } from './core/store/auth-store/auth.effects';
import { provideHttpClient } from '@angular/common/http';
import { loadingReducer } from './core/store/app-state/app-state.reducer';
import { accountsReducer } from './core/store/accounts-store/accounts.reducer';
import { AccountEffects } from './core/store/accounts-store/accounts.effects';
import { cardReducer } from './core/store/cards-state/card.reducer';
import { CardEffects } from './core/store/cards-state/card.effects';
import { beneficiaryReducer } from './core/store/beneficiaries-store/beneficiaries.reducer';
import { BeneficiaryEffects } from './core/store/beneficiaries-store/beneficiaries.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideStore({
      auth: authReducer,
      loading: loadingReducer,
      accounts: accountsReducer,
      card: cardReducer,
      beneficiary: beneficiaryReducer,
    }),
    provideEffects(
      AuthEffects,
      AccountEffects,
      CardEffects,
      BeneficiaryEffects
    ),
    provideHttpClient(),
  ],
};
