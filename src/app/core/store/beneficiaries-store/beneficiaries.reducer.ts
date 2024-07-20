import { createReducer, on } from '@ngrx/store';
import * as BeneficiaryActions from './beneficiaries.actions';

export interface BeneficiaryState {
  beneficiaries: any[];
  loading: boolean;
  error: string | null;
}

export const initialState: BeneficiaryState = {
  beneficiaries: [],
  loading: false,
  error: null,
};

export const beneficiaryReducer = createReducer(
  initialState,
  on(BeneficiaryActions.getBeneficiaries, (state) => ({
    ...state,
    loading: true,
  })),
  on(
    BeneficiaryActions.getBeneficiariesSuccess,
    (state, { beneficiaries }) => ({ ...state, beneficiaries, loading: false })
  ),
  on(BeneficiaryActions.getBeneficiariesFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(BeneficiaryActions.payBeneficiary, (state) => ({
    ...state,
    loading: true,
  })),
  on(BeneficiaryActions.payBeneficiarySuccess, (state) => ({
    ...state,
    loading: false,
  })),
  on(BeneficiaryActions.payBeneficiaryFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(BeneficiaryActions.createBeneficiary,
    (state) => ({...state, loading: true})
  ),
  on(BeneficiaryActions.createBeneficiarySuccess,
    (state, r) => { return { ...state, beneficiaries: [...state.beneficiaries, r], loading: false }}
  ),
  on(BeneficiaryActions.createBeneficiaryFailure,
    (state) => ({ ...state, loading: false })
  )
);
