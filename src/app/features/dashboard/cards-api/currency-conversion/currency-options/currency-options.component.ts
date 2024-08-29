import { Component, EventEmitter, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Currency } from "../../../../../core/interfaces/cards-state/cards-state.interface";
import { MatIcon } from "@angular/material/icon";

@Component({
    selector: 'currency-options',
    templateUrl: 'currency-options.component.html',
    styleUrl: 'currency-options.component.scss',
    standalone: true,
    imports: [CommonModule, MatIcon]
})
export class CurrencyOptionsComponent {
    currencies: Currency[] = [];
    selectedCurrency: Currency | null = null;
    @Output() onCloseModal = new EventEmitter<Currency>();

    isSelected(currency: Currency) {
        return currency.code === this.selectedCurrency?.code;
    }

    selectCurrency(currency: Currency) {
        this.selectedCurrency = currency;
        this.closeModal();
    }

    closeModal() {
        this.onCloseModal.emit(this.selectedCurrency!);
    }
}