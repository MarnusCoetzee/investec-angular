import { Component } from "@angular/core";
import { IYDIconsComponent } from "iyd-icons";
import { CardFacade } from "../../../../core/store/cards-state/card.facade";
import { MatDialog } from "@angular/material/dialog";
import { CurrencyOptionsComponent } from "./currency-options/currency-options.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { CurrencyConversion } from "../../../../core/store/cards-state/card.reducer";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { Router } from "@angular/router";

@Component({
    selector: 'currency-conversion',
    templateUrl: 'currency-conversion.component.html',
    styleUrl: 'currency-conversion.component.scss',
    standalone: true,
    imports: [IYDIconsComponent, CommonModule, FormsModule,MatFormFieldModule, MatInputModule,MatCardModule]
})
export class CurrencyConversionComponent {
    fromCurrency: string = 'USD';
    toCurrency: string = 'ZAR';
    fromValue = '';
    toValue = '';
    conversionResult$ = this.cardFacade.conversionResult$;
    constructor (private cardFacade: CardFacade, private matDialog: MatDialog, private router: Router) {}

    handleRouteBack(): void {
        this.router.navigate(['/dashboard/main']);
      }
      
    showFromCurrencyOptions() {
        const currencyOptionsRef = this.matDialog.open(CurrencyOptionsComponent);
        currencyOptionsRef.componentInstance.selectedCurrency.subscribe((fromCurrency) => {
            this.fromCurrency = fromCurrency;
            currencyOptionsRef.close();
        })
    }

    showToCurrencyOptions() {
        const currencyOptionsRef = this.matDialog.open(CurrencyOptionsComponent);
        currencyOptionsRef.componentInstance.selectedCurrency.subscribe((toCurrency) => {
            this.toCurrency = toCurrency;
            currencyOptionsRef.close();
        } )
    }

    handleConvertCurrency() {
        if (!this.fromValue) return;

        const currencyConvertion: any = {fromCurrency: this.fromCurrency, toCurrency: this.toCurrency, fromAmount: this.fromValue }
        this.cardFacade.convertCurrency(currencyConvertion);
    }
}