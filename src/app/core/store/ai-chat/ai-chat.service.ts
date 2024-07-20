import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private apiUrl =
    'https://voyage-finance-app.grayground-7c55fa74.southafricanorth.azurecontainerapps.io/chat';

  constructor(private http: HttpClient) {}

  sendMessage(message: string): Observable<string> {
    const url = `${this.apiUrl}?chat=${encodeURIComponent(message)}`;
    const headers = { accept: 'text/plain' };

    return this.http.get(url, { headers, responseType: 'text' }).pipe(
      map((response) => response as string),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
