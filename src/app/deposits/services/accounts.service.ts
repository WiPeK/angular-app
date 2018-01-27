import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Account} from '../../shared/models/account.model';
import {API_URL} from '../../app.consts';

@Injectable()
export class AccountsService {
  constructor(private http: HttpClient) {
  }

  getAll(userId: string): Observable<Account[]> {
    return this.http.get<Account[]>(API_URL + 'accounts/customers/' + userId);
  }
}
