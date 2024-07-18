import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as AuthActions from './auth.actions';
import { AuthService } from './auth.service'; // Replace with your authentication service

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginStart),
      switchMap(() =>
        this.authService.login().pipe(
          map((user) => AuthActions.loginSuccess({ user })),
          catchError((error) =>
            of(AuthActions.loginFailure({ error: error.message }))
          )
        )
      )
    )
  );
}
