import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as AuthActions from './auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthFacade {
  constructor(private store: Store) {}

  login(username: string, password: string) {
    this.store.dispatch(AuthActions.loginStart({ username, password }));
  }
}
