import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as CardActions from './card.actions';

@Injectable({
  providedIn: 'root',
})
export class CardFacade {
  cardCountries$ = this.store.select(
    (state) => state.card.countries.data?.result
  );

  cardCurrencies$ = this.store.select(
    (state) => state.card.currencies
  );

  cardMerchants$ = this.store.select(
    (state) => state.card.merchants.data?.result
  );

  convertCurrencyResult$ = this.store.select(
    (state) => state.card.convertCurrencyResult
  );

  loading$ = this.store.select(
    (state) => state.card.loading
  );

  error$ = this.store.select(
    (state) => state.card.error
  )

  constructor(private store: Store<any>) {}

  loadCardData() {
    this.store.dispatch(CardActions.getAllCurrencies());
  }

  convertCurrency(fromCurrency: string, toCurrency: string, fromAmount: number) {
    this.store.dispatch(CardActions.convertCurrency({ fromCurrency, toCurrency, fromAmount}));
  }
}
