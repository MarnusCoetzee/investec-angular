import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as BeneficiaryActions from './beneficiaries.actions';
import { BeneficiaryService } from './beneficiaries.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable()
export class BeneficiaryEffects {
  constructor(
    private actions$: Actions,
    private beneficiaryService: BeneficiaryService,
    private snackBar: MatSnackBar
  ) {}

  loadBeneficiaries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BeneficiaryActions.getBeneficiaries),
      switchMap(() =>
        this.beneficiaryService.getBeneficiaries().pipe(
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

  payBeneficiary$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BeneficiaryActions.payBeneficiary),
      switchMap((action) =>
        this.beneficiaryService.payBeneficiary(action.benItem).pipe(
          map(() => BeneficiaryActions.payBeneficiarySuccess()),
          catchError((error) =>
            of(BeneficiaryActions.payBeneficiaryFailure({ error }))
          )
        )
      )
    )
  );

  createBeneficiary$ = createEffect(() => 
    this.actions$.pipe(
      ofType(BeneficiaryActions.createBeneficiary),
      switchMap((action) => 
        this.beneficiaryService.createBeneficiary(action.beneficiaryData, action.token).pipe(
          map((response: any) => {
            this.snackBar.open('Created beneficiary', undefined, { duration: 4000 });
            return BeneficiaryActions.createBeneficiarySuccess(response.data);
          }),
          catchError((error) => {
            this.snackBar.open('Failed to create beneficiary', undefined, { duration: 4000 });
            return of(BeneficiaryActions.createBeneficiaryFailure());
          })
        )
      )
    )
  );
}
