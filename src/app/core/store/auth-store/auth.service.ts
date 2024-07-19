import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    let authorizationData = 'Basic ' + btoa(username + ':' + password);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: authorizationData,
        'x-api-key':
          'eUF4elFSRlg5N3ZPY3lRQXdsdUVVNkg2ZVB4TUE1ZVk6YVc1MlpYTjBaV010ZW1FdGNHSXRZV05qYjNWdWRITXRjMkZ1WkdKdmVBPT0=',
      }),
    };
    return this.http.post(`localhost:3000/identity/v2/oauth2/token`, {
      httpOptions,
    });
  }
}
