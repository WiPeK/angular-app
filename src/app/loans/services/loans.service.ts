import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {API_URL} from '../../app.consts';
import {Loan} from '../../shared/models/Loan.model';

@Injectable()
export class LoansService {
  constructor(private http: HttpClient) {
  }

  getLoans(): Observable<Loan[]> {
    return this.http.get<Loan[]>(API_URL + 'loans/loans/all');
  }
}
