import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Beneficiary {
  beneficiaryId: string;
  accountNumber: string;
  code: string;
  bank: string;
  beneficiaryName: string;
  lastPaymentAmount: string;
  lastPaymentDate: string;
  cellNo: string | null;
  emailAddress: string | null;
  name: string;
  referenceAccountNumber: string;
  referenceName: string;
  categoryId: string;
  profileId: string;
}

@Injectable({
  providedIn: 'root',
})
export class BeneficiaryService {
  private baseUrl = 'http://localhost:3000/za/pb/v1/accounts/beneficiaries';

  constructor(private http: HttpClient) {}

  getBeneficiaries(): Observable<Beneficiary[]> {
    return this.http
      .get<{ data: { result: Beneficiary[] } }>(this.baseUrl)
      .pipe(map((response) => response.data.result));
  }
}
