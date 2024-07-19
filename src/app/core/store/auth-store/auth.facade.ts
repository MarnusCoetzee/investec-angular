import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as AuthActions from './auth.actions';
import { AuthState } from '../../interfaces/auth/auth.state';

@Injectable({
  providedIn: 'root',
})
export class AuthFacade {
  constructor(private store: Store<AuthState>) {}

  login(username: string, password: string) {
    this.store.dispatch(AuthActions.loginStart({ username, password }));
  }
}
