import { Component } from '@angular/core';
import { BeneficiaryFacade } from '../../../core/store/beneficiaries-store/beneficiaries.facade';
import { AsyncPipe, NgFor } from '@angular/common';
import { BeneficiaryDetailsComponent } from './beneficiary-details/beneficiary-details.component';

@Component({
  selector: 'app-beneficiaries-api',
  standalone: true,
  imports: [
    NgFor,
    AsyncPipe,
    BeneficiariesApiComponent,
    BeneficiaryDetailsComponent,
  ],
  templateUrl: './beneficiaries-api.component.html',
  styleUrl: './beneficiaries-api.component.scss',
})
export class BeneficiariesApiComponent {
  beneficiaries$ = this.benFacade.beneficiaries$;
  constructor(private benFacade: BeneficiaryFacade) {
    this.benFacade.loadBeneficiaries();
  }
}
