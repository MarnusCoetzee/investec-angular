import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private baseUrl = 'http://localhost:3000/za/pb/v1/accounts';

  constructor(private http: HttpClient) {}

  getAccounts(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  getAccountBalance(accountId: string): Observable<any> {
    const url = `${this.baseUrl}/${accountId}/balance`;
    return this.http.get<any>(url);
  }

  getAccountTransactions(accountId: string): Observable<any> {
    const url = `${this.baseUrl}/${accountId}/transactions`;
    return this.http.get<any>(url);
  }

  addNewAccount(): Observable<any> {
    const url = `${this.baseUrl}/balance`;
    return this.http.post<any>(url, {});
  }

  createNewTransaction(accountId: string): Observable<any> {
    const url = `${this.baseUrl}/${accountId}/transactions`;
    return this.http.post<any>(url, {});
  }

  deleteAccount(accountId: string): Observable<any> {
    const url = `${this.baseUrl}/${accountId}`;
    return this.http.delete<any>(url);
  }
}
