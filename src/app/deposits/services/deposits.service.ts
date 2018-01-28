import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {API_URL} from '../../app.consts';
import {Deposit} from '../../shared/models/Deposit.model';

@Injectable()
export class DepositsService {
  constructor(private http: HttpClient) {
  }

  getDeposits(): Observable<Deposit[]> {
    return this.http.get<Deposit[]>(API_URL + 'deposits/deposits/all');
  }
}
