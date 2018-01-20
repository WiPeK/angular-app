import { Injectable } from '@angular/core';
import {API_URL} from '../../app.consts';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TokenService {

  constructor(private http: HttpClient) {}

  generateToken(accountId: string): Observable<string> {
    return this.http.get<string>(API_URL + 'payments/token/' + accountId);
  }

}
