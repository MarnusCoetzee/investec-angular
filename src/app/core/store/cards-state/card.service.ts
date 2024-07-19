import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private baseUrl = 'http://localhost:3000/za/v1/cards';

  constructor(private http: HttpClient) {}

  getCountries(): Observable<any[]> {
    const url = `${this.baseUrl}/countries`;
    return this.http.get<any[]>(url);
  }

  getCurrencies(): Observable<any[]> {
    const url = `${this.baseUrl}/currencies`;
    return this.http.get<any[]>(url);
  }

  getMerchants(): Observable<any[]> {
    const url = `${this.baseUrl}/merchants`;
    return this.http.get<any[]>(url);
  }
}
