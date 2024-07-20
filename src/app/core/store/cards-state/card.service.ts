import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { CurrencyConversion } from './card.reducer';

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

  convertCurrency({ fromCurrency, toCurrency, fromAmount }: CurrencyConversion) {
    const url = `https://v6.exchangerate-api.com/v6/7b8df871dbe4648310218152/pair/${fromCurrency}/${toCurrency}/${fromAmount}`;
    return this.http.get<any>(url).pipe(map((response) => response.conversion_result));
  }

  getMerchants(): Observable<any[]> {
    const url = `${this.baseUrl}/merchants`;
    return this.http.get<any[]>(url);
  }
}
