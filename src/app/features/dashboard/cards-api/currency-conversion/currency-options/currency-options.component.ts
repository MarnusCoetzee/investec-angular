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

    constructor (private cardFacade: CardFacade) {}

    handleSelectedCurrency(currencyCode: string) {
        this.selectedCurrency.emit(currencyCode);
    }
}