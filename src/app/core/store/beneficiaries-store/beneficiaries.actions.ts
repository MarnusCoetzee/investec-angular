import { createAction, props } from '@ngrx/store';
import {
  BeneficiaryData,
  BeneficiaryPaymentItem,
  CreatedBeneficiaryResponse,
  PayBeneficiaryRequest,
} from './beneficiaries.service';

export const getBeneficiaries = createAction(
  '[Beneficiaries] Get Beneficiaries'
);
export const getBeneficiariesSuccess = createAction(
  '[Beneficiaries] Get Beneficiaries Success',
  props<{ beneficiaries: any[] }>()
);
export const getBeneficiariesFailure = createAction(
  '[Beneficiaries] Get Beneficiaries Failure',
  props<{ error: any }>()
);

export const payBeneficiary = createAction(
  '[Beneficiaries] Pay Beneficiary',
  props<{ benItem: BeneficiaryPaymentItem }>()
);

export const payBeneficiarySuccess = createAction(
  '[Beneficiaries] Pay Beneficiary Success'
);

export const payBeneficiaryFailure = createAction(
  '[Beneficiaries] Pay Beneficiary Failure',
  props<{ error: any }>()
);

export const createBeneficiary = createAction(
  '[Beneficiaries] Create beneficiary',
  props<{ beneficiaryData: BeneficiaryData, token: string }>()
);

export const createBeneficiarySuccess = createAction(
  '[Beneficiaries] Create beneficiary Success',
  props<{ createdBeneficiary: CreatedBeneficiaryResponse }>()
);

export const createBeneficiaryFailure = createAction(
  '[Beneficiaries] Create beneficiary Failure'
);
