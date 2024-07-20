import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as CardActions from './card.actions';
import { CurrencyConversion } from './card.reducer';

@Injectable({
  providedIn: 'root',
})
export class CardFacade {
  cardCountries$ = this.store.select(
    (state) => state.card.countries.data?.result
  );
  cardCurrencies$ = this.store.select(
    (state) => state.card.currencies.data?.result
  );
  cardMerchants$ = this.store.select(
    (state) => state.card.merchants.data?.result
  );
  conversionResult$ = this.store.select((state) => {console.log(state);return state.card.currencyConvertion?.toAmount});

  constructor(private store: Store<any>) {}

  loadCardData() {
    this.store.dispatch(CardActions.getAllCountries());
    this.store.dispatch(CardActions.getAllCurrencies());
    this.store.dispatch(CardActions.getAllMerchants());
  }

  convertCurrency(currencyConvertion: CurrencyConversion) {
    this.store.dispatch(CardActions.convertCurrency({ currencyConvertion }));
  }
}
