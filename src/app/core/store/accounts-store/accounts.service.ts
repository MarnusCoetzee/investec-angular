import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';

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

  addNewAccount(newAccount: any): Observable<any> {
    const url = `${this.baseUrl}`;
    const headers = new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'YOUR_AUTHORIZATION_TOKEN', // Replace with your actual token
    });

    const body = {
      accountId: newAccount.accountId,
      accountNumber: newAccount.accountNumber,
      accountName: newAccount.accountName,
      referenceName: newAccount.referenceName,
      productName: newAccount.productName,
    };

    return this.http.post<any>(url, body, { headers });
  }

  createNewTransaction(accountId: string): Observable<any> {
    const url = `${this.baseUrl}/${accountId}/transactions`;
    return this.http.post<any>(url, {});
  }

  deleteAccount(accountId: string): Observable<any> {
    const url = `${this.baseUrl}/${accountId}`;
    return this.http.delete<any>(url);
  }

  createNewAccountDetails(accountName: string): any {
    const newAccount = {
      accountName,
      referenceName: accountName,
      accountId: this.generateAccountNumber(23),
      accountNumber: this.generateAccountNumber(10),
      productName: 'Private Bank Account',
    };
    return newAccount;
  }

  private generateAccountNumber(length: number): string {
    const characters = '0123456789';
    let accountNumber = '';

    for (let i = 0; i < length; i++) {
      accountNumber += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    return accountNumber;
  }
}
