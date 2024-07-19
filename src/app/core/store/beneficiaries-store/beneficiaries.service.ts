import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface PayBeneficiaryRequest {
  paymentList: PaymentList[];
}

export interface PaymentList {
  beneficiaryId: string;
  amount: number;
  myReference: string;
  theirReference: string;
}

export interface BeneficiaryPaymentItem {
  paymentList: PaymentList[];
  accountId: string;
}

@Injectable({
  providedIn: 'root',
})
export class BeneficiaryService {
  private baseUrl = 'http://localhost:3000/za/pb/v1/accounts/beneficiaries';

  constructor(private http: HttpClient) {}

  getBeneficiaries(): Observable<any[]> {
    return this.http
      .get<{ data: { result: any[] } }>(this.baseUrl)
      .pipe(map((response) => response.data.result));
  }

  payBeneficiary(
    beneficiaryPaymentItem: BeneficiaryPaymentItem
  ): Observable<any> {
    const url = `http://localhost:3000/za/pb/v1/accounts/${beneficiaryPaymentItem.accountId}/paymultiple`;
    const headers = new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'YOUR_AUTHORIZATION_TOKEN',
    });
    const body: PayBeneficiaryRequest = {
      paymentList: beneficiaryPaymentItem.paymentList,
    };
    return this.http.post(url, body, { headers });
  }
}
