import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-add-account',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,
  ],
  templateUrl: './add-account.component.html',
  styleUrl: './add-account.component.scss',
})
export class AddAccountComponent implements OnInit {
  addAccountForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<AddAccountComponent>
  ) {}

  ngOnInit(): void {
    this.addAccountForm = this.fb.group({
      accountName: ['', Validators.required],
    });
  }

  handleSaveNewAccount(): void {
    this.matDialogRef.close(this.addAccountForm.value);
  }
}
