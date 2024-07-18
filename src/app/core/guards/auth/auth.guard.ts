import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectIsAuthenticated } from '../../store/auth-store/auth.selectors';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private store: Store, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.store.select(selectIsAuthenticated).pipe(
      map((isAuthenticated) => {
        if (isAuthenticated) {
          return true;
        } else {
          this.router.navigate(['/']);
          return false;
        }
      })
    );
  }
}
