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

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideStore({
      auth: authReducer,
      loading: loadingReducer,
      accounts: accountsReducer,
    }),
    provideEffects(AuthEffects, AccountEffects),
    provideHttpClient(),
  ],
};
