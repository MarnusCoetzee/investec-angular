import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from '../../interfaces/auth/auth.state';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state) => state.isAuthenticated
);
