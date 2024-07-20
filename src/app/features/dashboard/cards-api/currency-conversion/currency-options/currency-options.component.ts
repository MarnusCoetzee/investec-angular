import { Component, EventEmitter, Output } from "@angular/core";
import { IYDIconsComponent } from "iyd-icons";
import { CardFacade } from "../../../../../core/store/cards-state/card.facade";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'currency-options',
    templateUrl: 'currency-options.component.html',
    styleUrl: 'currency-options.component.scss',
    standalone: true,
    imports: [IYDIconsComponent, CommonModule]
})
export class CurrencyOptionsComponent {
    cardCurrencies$ = this.cardFacade.cardCurrencies$;
    @Output() selectedCurrency = new EventEmitter<string>();
    results =[
        {
            "code": "ZAR",
            "name": "South African Rand"
        },
        {
            "code": "GBP",
            "name": "British Pound"
        },
        {
            "code": "USD",
            "name": "United States Dollar"
        },
        {
            "code": "EUR",
            "name": "Euro"
        },
        {
            "code": "AUD",
            "name": "Australian Dollar"
        },
        {
            "code": "CHF",
            "name": "Swiss Franc"
        },
        {
            "code": "CAD",
            "name": "Canadian Dollar"
        },
        {
            "code": "DKK",
            "name": "Danish Krone"
        },
        {
            "code": "HKD",
            "name": "Hong Kong Dollar"
        },
        {
            "code": "JPY",
            "name": "Japanese Yen"
        },
        {
            "code": "MUR",
            "name": "Mauritius Rupee"
        },
        {
            "code": "NZD",
            "name": "New Zealand Dollar"
        },
        {
            "code": "NOK",
            "name": "Norwegian Krone"
        },
        {
            "code": "SGD",
            "name": "Singapore Dollar"
        },
        {
            "code": "SEK",
            "name": "Swedish Krona"
        },
        {
            "code": "AED",
            "name": "Emirati Dirham"
        },
        {
            "code": "BWP",
            "name": "Botswana Pula"
        },
        {
            "code": "INR",
            "name": "Indian Rupee"
        },
        {
            "code": "KES",
            "name": "Kenyan Shilling"
        },
        {
            "code": "NGN",
            "name": "Nigerian Naira"
        },
        {
            "code": "RUB",
            "name": "Russian Ruble"
        },
        {
            "code": "TRY",
            "name": "Turkish Lira"
        }
    ]
    constructor (private cardFacade: CardFacade) {}

    handleSelectedCurrency(currencyCode: string) {
        this.selectedCurrency.emit(currencyCode);
    }
}