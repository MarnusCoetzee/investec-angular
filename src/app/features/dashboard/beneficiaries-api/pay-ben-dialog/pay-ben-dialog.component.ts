import { Component, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { AccountFacade } from '../../../../core/store/accounts-store/accounts.facade';
import { map } from 'rxjs';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pay-ben-dialog',
  standalone: true,
  imports: [
    MatSelectModule,
    ReactiveFormsModule,
    AsyncPipe,
    MatInputModule,
    NgIf,
    NgForOf,
    MatButtonModule,
    MatDialogModule,
  ],
  templateUrl: './pay-ben-dialog.component.html',
  styleUrl: './pay-ben-dialog.component.scss',
})
export class PayBenDialogComponent implements OnInit {
  accounts$ = this.accountFacade.accounts$.pipe(
    map((accounts: any) => accounts.accounts)
  );
  myForm!: FormGroup;
  constructor(
    private accountFacade: AccountFacade,
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<PayBenDialogComponent>
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      fromAccount: ['', Validators.required],
      amountField: ['', [Validators.required, Validators.min(0)]],
      toReferenceField: ['', Validators.required],
      yourReferenceField: ['', Validators.required],
    });
  }

  onSubmit(): void {
    this.matDialogRef.close(this.myForm.value);
  }
}
