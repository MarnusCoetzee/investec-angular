import { createAction, props } from '@ngrx/store';

export const loginStart = createAction(
  '[Auth] Login Start',
  props<{ username: string; password: string }>()
);
export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: any }>()
);
export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: string }>()
);
export const logout = createAction('[Auth] Logout');
