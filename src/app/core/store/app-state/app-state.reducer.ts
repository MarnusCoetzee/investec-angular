import { createReducer, on } from '@ngrx/store';
import { LoadingState } from '../../interfaces/app-state/app-state.interface';
import * as LoadingActions from './app-state.actions';
export const initialState: LoadingState = {
  isLoading: false,
};

export const loadingReducer = createReducer(
  initialState,
  on(LoadingActions.startLoading, (state) => ({ ...state, isLoading: true })),
  on(LoadingActions.stopLoading, (state) => ({ ...state, isLoading: false }))
);
