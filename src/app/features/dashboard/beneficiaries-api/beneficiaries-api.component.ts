import { Component, OnInit } from '@angular/core';
import { BeneficiaryFacade } from '../../../core/store/beneficiaries-store/beneficiaries.facade';
import { AsyncPipe, NgFor } from '@angular/common';
import { BeneficiaryDetailsComponent } from './beneficiary-details/beneficiary-details.component';
import { BeneficiaryData, BeneficiaryPaymentItem } from '../../../core/store/beneficiaries-store/beneficiaries.service';
import { AuthFacade } from '../../../core/store/auth-store/auth.facade';
import { first } from 'rxjs';
import { CreateBeneficiaryDialogComponent } from './create-beneficiary/create-beneficiary-dialog.component';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-beneficiaries-api',
  standalone: true,
  imports: [
    NgFor,
    AsyncPipe,
    BeneficiariesApiComponent,
    BeneficiaryDetailsComponent,
    CreateBeneficiaryDialogComponent,
    MatButtonModule,
    MatDialogModule
  ],
  templateUrl: './beneficiaries-api.component.html',
  styleUrl: './beneficiaries-api.component.scss',
})
export class BeneficiariesApiComponent implements OnInit {
  private token: string = '';
  beneficiaries$ = this.benFacade.beneficiaries$;

  constructor(private benFacade: BeneficiaryFacade, private authFacade: AuthFacade, private dialog: MatDialog) {
    this.benFacade.loadBeneficiaries();
  }

  ngOnInit(): void {
    this.getUserToken();
  }

  private getUserToken() {
    this.authFacade.user$.pipe(first()).subscribe((user) => {
      this.token = user!.access_token;
    });
  }

  handleShowCreateBeneficiaryDialog() {
    const createBeneficiaryDialogRef = this.dialog.open(CreateBeneficiaryDialogComponent, {data: {id: ''}});

    createBeneficiaryDialogRef.componentInstance.onCreateBeneficiary.pipe(first())
      .subscribe((beneficaryData) => {
        this.handleCreateBeneficary(beneficaryData);
        createBeneficiaryDialogRef.close();
    });
  }

  handlePayBeneficiary(benItem: BeneficiaryPaymentItem) {
    this.benFacade.payBeneficiary(benItem);
  }

  handleCreateBeneficary(beneficiaryData: BeneficiaryData) {
    this.benFacade.createBeneficiary(beneficiaryData, this.token);
  }
}
