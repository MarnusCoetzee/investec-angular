import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as CardActions from './card.actions';
import { CardService } from './card.service';
import { ConvertCurrencyResult } from '../../interfaces/cards-state/cards-state.interface';

@Injectable()
export class CardEffects {
  constructor(private actions$: Actions, private cardService: CardService) {}

  loadCountries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardActions.getAllCountries),
      switchMap(() =>
        this.cardService.getCountries().pipe(
          map((countries) => CardActions.getAllCountriesSuccess({ countries })),
          catchError((error) =>
            of(CardActions.getAllCountriesFailure({ error }))
          )
        )
      )
    )
  );

  loadCurrencies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardActions.getAllCurrencies),
      switchMap(() =>
        this.cardService.getCurrencies().pipe(
          map((currencies) =>
            CardActions.getAllCurrenciesSuccess({ currencies })
          ),
          catchError(() =>
            of(CardActions.getAllCurrenciesFailure({ error: 'Failed to get currencies, please refresh' }))
          )
        )
      )
    )
  );

  loadMerchants$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardActions.getAllMerchants),
      switchMap(() =>
        this.cardService.getMerchants().pipe(
          map((merchants) => CardActions.getAllMerchantsSuccess({ merchants })),
          catchError((error) =>
            of(CardActions.getAllMerchantsFailure({ error }))
          )
        )
      )
    )
  );

  convertCurrency$ = createEffect(() => 
    this.actions$.pipe(
      ofType(CardActions.convertCurrency),
      switchMap(({ fromCurrency, toCurrency, fromAmount  }) => 
        this.cardService.convertCurrency(fromCurrency, toCurrency, fromAmount).pipe(
          map((response) => {
            const convertCurrencyResult: ConvertCurrencyResult = {
              conversionRate: response.conversion_rate,
              conversionResult: response.conversion_result
            }

            return CardActions.convertCurrencySuccess({ convertCurrencyResult });
          }),
          catchError(() => of(CardActions.convertCurrencyFailure({ error: 'Failed to convert currency' })))
        )
      )
    )
  );
}
