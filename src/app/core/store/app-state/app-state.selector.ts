import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoadingState } from '../../interfaces/app-state/app-state.interface';

export const selectLoadingState =
  createFeatureSelector<LoadingState>('loading');

export const selectIsLoading = createSelector(
  selectLoadingState,
  (state) => state.isLoading
);
