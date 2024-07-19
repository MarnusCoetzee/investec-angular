import { createAction, props } from '@ngrx/store';

export const getAllCountries = createAction('[Cards] Get All Countries');
export const getAllCountriesSuccess = createAction(
  '[Cards] Get All Countries Success',
  props<{ countries: any }>()
);
export const getAllCountriesFailure = createAction(
  '[Cards] Get All Countries Failure',
  props<{ error: any }>()
);

export const getAllCurrencies = createAction('[Cards] Get All Currencies');
export const getAllCurrenciesSuccess = createAction(
  '[Cards] Get All Currencies Success',
  props<{ currencies: any }>()
);
export const getAllCurrenciesFailure = createAction(
  '[Cards] Get All Currencies Failure',
  props<{ error: any }>()
);

export const getAllMerchants = createAction('[Cards] Get All merchants');
export const getAllMerchantsSuccess = createAction(
  '[Cards] Get All Merchants Success',
  props<{ merchants: any }>()
);
export const getAllMerchantsFailure = createAction(
  '[Cards] Get All Merchants Failure',
  props<{ error: any }>()
);
