import { Component, OnDestroy, OnInit } from "@angular/core";
import { CardFacade } from "../../../../core/store/cards-state/card.facade";
import { MatDialog } from "@angular/material/dialog";
import { CurrencyOptionsComponent } from "./currency-options/currency-options.component";
import { CommonModule } from "@angular/common";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { Router } from "@angular/router";
import { MatIcon } from "@angular/material/icon";
import { first, Subject, takeUntil, tap } from "rxjs";
import { Currency } from "../../../../core/interfaces/cards-state/cards-state.interface";
import { MatProgressBar } from "@angular/material/progress-bar";

@Component({
    selector: 'currency-conversion',
    templateUrl: 'currency-conversion.component.html',
    styleUrl: 'currency-conversion.component.scss',
    standalone: true,
    imports: [
        MatIcon, 
        CommonModule, 
        FormsModule, 
        MatFormFieldModule, 
        MatInputModule, 
        MatCardModule, 
        ReactiveFormsModule,
        MatProgressBar
    ]
})
export class CurrencyConversionComponent implements OnInit, OnDestroy {
    conversionFormGroup!: FormGroup;
    fromCurrency: Currency | null = null;
    toCurrency: Currency | null = null;
    conversionRate = 0;
    loading$ = this.cardFacade.loading$;
    error$ = this.cardFacade.error$;

    private currencies: Currency[] = [];
    private getAllCurrencies$ = new Subject();
    private convertCurrency$ = new Subject();

    get fromAmountInvalid() {
        const fromCurrencyControl = this.conversionFormGroup.get('fromCurrencyAmount');
        return fromCurrencyControl?.dirty && fromCurrencyControl?.invalid;
    }

    get toAmountInvalid() {
        const toCurrencyControl = this.conversionFormGroup.get('toCurrencyAmount');
        return toCurrencyControl?.dirty && toCurrencyControl?.invalid;
    }

    constructor (private cardFacade: CardFacade, private matDialog: MatDialog, private router: Router) {}

    ngOnInit() {
        this.cardFacade.loadCardData();
        this.initCurrencies(); // Await currencies return and set currency variables;
        this.buildForm();
    }

    initCurrencies() {
        this.cardFacade.cardCurrencies$
        .pipe(
            takeUntil(this.getAllCurrencies$),
            tap((currencies: Currency[]) =>  {
                this.currencies = currencies;
                this.fromCurrency = currencies?.[0];
                this.toCurrency = currencies?.[1];
            }))
        .subscribe();
    }

    buildForm() {
        this.conversionFormGroup = new FormGroup({
            fromCurrencyAmount: new FormControl('', { validators: [Validators.required, Validators.pattern('[0-9]+')] }),
            toCurrencyAmount: new FormControl('')
        });
    }

    showFromCurrencyOptions() {
        const currencyOptionsRef = this.matDialog.open(CurrencyOptionsComponent);
        currencyOptionsRef.componentInstance.currencies = this.currencies.filter((currency) => currency.code !== this.toCurrency?.code);
        currencyOptionsRef.componentInstance.selectedCurrency = this.fromCurrency;

        currencyOptionsRef.componentInstance.onCloseModal.pipe(first()).subscribe((fromCurrency) => {
            this.fromCurrency = fromCurrency;
            currencyOptionsRef.close();
        });
    }

    showToCurrencyOptions() {
        const currencyOptionsRef = this.matDialog.open(CurrencyOptionsComponent);
        currencyOptionsRef.componentInstance.currencies = this.currencies.filter((currency) => currency.code !== this.fromCurrency?.code);;
        currencyOptionsRef.componentInstance.selectedCurrency = this.toCurrency;

        currencyOptionsRef.componentInstance.onCloseModal.pipe(first()).subscribe((toCurrency) => {
            this.toCurrency = toCurrency;
            currencyOptionsRef.close();
        });
    }

    convertCurrency() {
        if (!this.conversionFormGroup) return;

        const fromCurrencyAmountControl = this.conversionFormGroup.get('fromCurrencyAmount')!;
        const toCurrencyAmountControl = this.conversionFormGroup.get('toCurrencyAmount')!;

        if (fromCurrencyAmountControl.invalid || toCurrencyAmountControl.invalid) {
            fromCurrencyAmountControl.markAsDirty();
            toCurrencyAmountControl.markAsDirty();
            return;
        }

        const fromCurrency = this.fromCurrency!.code;
        const toCurrency = this.toCurrency!.code;
        const fromAmount = fromCurrencyAmountControl.value;

        this.cardFacade.convertCurrency(fromCurrency, toCurrency, fromAmount);

        this.cardFacade.convertCurrencyResult$
            .pipe(takeUntil(this.convertCurrency$))
            .subscribe((convertCurrencyResult) => {
                this.conversionRate = convertCurrencyResult?.conversionRate?.toFixed(4);
                toCurrencyAmountControl.setValue(convertCurrencyResult?.conversionResult?.toFixed(2));
            });
    }

    handleBack() {
        this.router.navigateByUrl('dashboard/main');
    }

    ngOnDestroy(): void {
        this.getAllCurrencies$.complete();
        this.getAllCurrencies$.unsubscribe();
        this.convertCurrency$.complete();
        this.convertCurrency$.unsubscribe();
    }
}