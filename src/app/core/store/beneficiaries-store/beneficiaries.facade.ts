import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as BeneficiaryActions from './beneficiaries.actions';
import { selectAllBeneficiaries } from './beneficiaries.selectors';

@Injectable({
  providedIn: 'root',
})
export class BeneficiaryFacade {
  beneficiaries$ = this.store.select(selectAllBeneficiaries);

  constructor(private store: Store) {}

  loadBeneficiaries() {
    this.store.dispatch(BeneficiaryActions.getBeneficiaries());
  }

  payBeneficiary(benItem: any) {
    this.store.dispatch(BeneficiaryActions.payBeneficiary({ benItem }));
  }
}
