import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as LoadingActions from './app-state.actions';
import { selectIsLoading } from './app-state.selector';

@Injectable({
  providedIn: 'root',
})
export class LoadingFacade {
  isLoading$: Observable<boolean>;

  constructor(private store: Store) {
    this.isLoading$ = this.store.select(selectIsLoading);
  }

  startLoading() {
    this.store.dispatch(LoadingActions.startLoading());
  }

  stopLoading() {
    this.store.dispatch(LoadingActions.stopLoading());
  }
}
