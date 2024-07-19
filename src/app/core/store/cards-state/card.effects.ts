import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as CardActions from './card.actions';
import { CardService } from './card.service';

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
          catchError((error) =>
            of(CardActions.getAllCurrenciesFailure({ error }))
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
}
