import { Component } from '@angular/core';
import { CardFacade } from '../../../core/store/cards-state/card.facade';
import { MatTabsModule } from '@angular/material/tabs';
import { AsyncPipe, NgIf } from '@angular/common';
import { CcmTableComponent } from './ccm-table/ccm-table.component';

@Component({
  selector: 'app-cards-api',
  standalone: true,
  imports: [MatTabsModule, NgIf, AsyncPipe, CcmTableComponent],
  templateUrl: './cards-api.component.html',
  styleUrl: './cards-api.component.scss',
})
export class CardsApiComponent {
  cardCountries$ = this.cardFacade.cardCountries$;
  cardCurrencies$ = this.cardFacade.cardCurrencies$;
  cardMerchants$ = this.cardFacade.cardMerchants$;
  constructor(private cardFacade: CardFacade) {
    this.cardFacade.loadCardData();
  }
}
