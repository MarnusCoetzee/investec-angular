import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as BeneficiaryActions from './beneficiaries.actions';
import { selectAllBeneficiaries } from './beneficiaries.selectors';
import { BeneficiaryData } from './beneficiaries.service';
import { BeneficiaryState } from './beneficiaries.reducer';

@Injectable({
  providedIn: 'root',
})
export class BeneficiaryFacade {
  beneficiaries$ = this.store.select(selectAllBeneficiaries);

  constructor(private store: Store<BeneficiaryState>) {}

  loadBeneficiaries() {
    this.store.dispatch(BeneficiaryActions.getBeneficiaries());
  }

  payBeneficiary(benItem: any) {
    this.store.dispatch(BeneficiaryActions.payBeneficiary({ benItem }));
  }

  createBeneficiary(beneficiaryData: BeneficiaryData, token: string) {
    this.store.dispatch(BeneficiaryActions.createBeneficiary({ beneficiaryData, token }));
  }
}
