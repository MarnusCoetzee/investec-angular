import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(): Observable<any> {
    return of({ id: 1, email: 'test@example.com' });
  }
}
