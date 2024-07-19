import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BeneficiaryState } from './beneficiaries.reducer';

export const selectBeneficiaryState =
  createFeatureSelector<BeneficiaryState>('beneficiary');

export const selectAllBeneficiaries = createSelector(
  selectBeneficiaryState,
  (state) => state.beneficiaries
);

export const selectBeneficiaryLoading = createSelector(
  selectBeneficiaryState,
  (state) => state.loading
);

export const selectBeneficiaryError = createSelector(
  selectBeneficiaryState,
  (state) => state.error
);
