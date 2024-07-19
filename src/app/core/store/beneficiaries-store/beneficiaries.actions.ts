import { createAction, props } from '@ngrx/store';

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
