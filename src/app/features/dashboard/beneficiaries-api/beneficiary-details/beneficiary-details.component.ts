import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { PayBenDialogComponent } from '../pay-ben-dialog/pay-ben-dialog.component';
import { take } from 'rxjs';
import { BeneficiaryPaymentItem } from '../../../../core/store/beneficiaries-store/beneficiaries.service';

@Component({
  selector: 'app-beneficiary-details',
  standalone: true,
  imports: [
    MatCardModule,
    MatGridListModule,
    NgIf,
    MatExpansionModule,
    MatButtonModule,
    MatDialogModule,
  ],
  templateUrl: './beneficiary-details.component.html',
  styleUrl: './beneficiary-details.component.scss',
})
export class BeneficiaryDetailsComponent {
  @Input() beneficiary: any;
  @Output() payBeneficiary = new EventEmitter<any>();

  constructor(private matDialog: MatDialog) {}

  openDialog() {
    this.matDialog
      .open(PayBenDialogComponent)
      .afterClosed()
      .pipe(take(1))
      .subscribe((result) => {
        if (result) {
          const payBenItem: BeneficiaryPaymentItem = {
            accountId: result.fromAccount.accountId,
            paymentList: [
              {
                beneficiaryId: this.beneficiary.id,
                amount: result.amountField,
                myReference: result.yourReferenceField,
                theirReference: result.toReferenceField,
              },
            ],
          };
          this.payBeneficiary.emit(payBenItem);
        }
      });
  }
}
