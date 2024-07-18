import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { AuthState } from '../../interfaces/auth/auth.state';

export const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  error: null,
  loading: false,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.loginStart, (state) => ({ ...state, loading: true })),
  on(AuthActions.loginSuccess, (state, { user }) => ({
    ...state,
    isAuthenticated: true,
    user,
    loading: false,
  })),
  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    isAuthenticated: false,
    error,
    loading: false,
  })),
  on(AuthActions.logout, (state) => ({
    ...state,
    isAuthenticated: false,
    user: null,
    error: null,
    loading: false,
  }))
);
