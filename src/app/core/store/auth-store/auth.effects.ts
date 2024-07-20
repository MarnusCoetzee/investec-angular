import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as AuthActions from './auth.actions';
import { AuthService } from './auth.service';
import { LoadingFacade } from '../app-state/app-state.facade';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private loadingFacade: LoadingFacade,
    private router: Router
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginStart),
      tap(() => this.loadingFacade.startLoading()),
      switchMap((action) =>
        this.authService.login(action.username, action.password).pipe(
          map((user) => {
            this.router.navigate(['/dashboard/main']);
            return AuthActions.loginSuccess({ user });
          }),
          catchError((error) =>
            of(AuthActions.loginFailure({ error: error.message }))
          )
        )
      ),
      tap(() => this.loadingFacade.stopLoading())
    )
  );
}
