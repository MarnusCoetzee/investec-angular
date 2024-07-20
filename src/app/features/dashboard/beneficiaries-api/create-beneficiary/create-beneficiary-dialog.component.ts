import { CommonModule } from "@angular/common";
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

@Component({
    selector: 'app-create-beneficiary-dialog',
    templateUrl: 'create-beneficiary-dialog.component.html',
    styleUrl: 'create-beneficiary-dialog.component.scss',
    standalone: true,
    imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatButtonModule, CommonModule]
})
export class CreateBeneficiaryDialogComponent implements OnInit {
    @Output() onCreateBeneficiary = new EventEmitter<any>();
    createBeneficiaryFormGroup!: FormGroup;

    get beneficaryNameRequired() {
        return this.createBeneficiaryFormGroup.get('beneficiaryName')?.hasError('required');
    }

    get cellNoRequired() {
        return this.createBeneficiaryFormGroup.get('cellNo')?.hasError('required');
    }

    get emailRequired() {
        return this.createBeneficiaryFormGroup.get('emailAddress')?.hasError('required');
    }

    get emailInvalid() {
        return this.createBeneficiaryFormGroup.get('emailAddress')?.hasError('email');
    }

    get referenceNameRequired() {
        return this.createBeneficiaryFormGroup.get('referenceName')?.hasError('required');
    }

    ngOnInit(): void {
        this.createBeneficiaryFormGroup = new FormGroup({
            beneficiaryName: new FormControl('', { validators: Validators.required, updateOn: 'blur' }),
            cellNo: new FormControl('', { validators: Validators.required }),
            emailAddress: new FormControl('', { validators: [Validators.required, Validators.email] }),
            referenceName: new FormControl('', { validators: Validators.required })
        });
    }

    handleCreateBeneficiary() {
        if (this.createBeneficiaryFormGroup.valid) {
            this.onCreateBeneficiary.emit(this.createBeneficiaryFormGroup.value);
        }
    }
}