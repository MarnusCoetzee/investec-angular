import { createAction, props } from '@ngrx/store';
import {
  BeneficiaryPaymentItem,
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
