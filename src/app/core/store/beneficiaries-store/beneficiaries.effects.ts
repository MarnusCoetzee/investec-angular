import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as BeneficiaryActions from './beneficiaries.actions';
import { BeneficiaryService } from './beneficiaries.service';

@Injectable()
export class BeneficiaryEffects {
  constructor(
    private actions$: Actions,
    private beneficiaryService: BeneficiaryService
  ) {}

  loadBeneficiaries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BeneficiaryActions.getBeneficiaries),
      switchMap(() =>
        this.beneficiaryService.getBeneficiaries().pipe(
          tap((data) => console.log(data)),
          map((beneficiaries) =>
            BeneficiaryActions.getBeneficiariesSuccess({ beneficiaries })
          ),
          catchError((error) =>
            of(BeneficiaryActions.getBeneficiariesFailure({ error }))
          )
        )
      )
    )
  );
}
