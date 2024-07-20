import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface User {
  access_token: string;
  expires_in: string;
  scope: string;
  token_type: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<User> {
    const url = 'http://localhost:3000/identity/v2/oauth2/token';
    const headers = new HttpHeaders({
      'x-api-key':
        'eUF4elFSRlg5N3ZPY3lRQXdsdUVVNkg2ZVB4TUE1ZVk6YVc1MlpYTjBaV010ZW1FdGNHSXRZV05qYjNWdWRITXRjMkZ1WkdKdmVBPT0=',
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${btoa(username + ':' + password)}`,
    });

    const body = new HttpParams({
      fromString: 'grant_type=client_credentials',
    });

    return this.http.post<User>(url, body.toString(), { headers });
  }
}
