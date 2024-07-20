import { CommonModule } from "@angular/common";
import { Component, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormField, MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { Store } from "@ngrx/store";
import { CardFacade } from "../../../../core/store/cards-state/card.facade";

@Component({
    selector: 'conversion',
    templateUrl: 'conversion-dialogue.component.html',
    styleUrl: 'conversion-dialogue.component.scss',
    standalone: true,
    imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatButtonModule, CommonModule]
})
export class ConversionDialogue implements OnInit {
    conversionFormGroup!:FormGroup;
    conversionResult$ = this.cardFacade.conversionResult$;

    constructor (private cardFacade: CardFacade) {}

    ngOnInit() {
        this.conversionFormGroup = new FormGroup({
            fromCurrency: new FormControl(''),
            toCurrency: new FormControl(''),
            fromAmount: new FormControl('')
        });

        this.conversionResult$.subscribe((v) => console.log('Check this ', v))
    }

    handleConvertCurrency() {
        this.cardFacade.convertCurrency(this.conversionFormGroup.value);
    }
}