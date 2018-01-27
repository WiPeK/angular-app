import {Injectable} from '@angular/core';
import {API_URL} from '../../app.consts';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CustomersService{
  constructor(private http: HttpClient) {
  }

  getAllPersonalCustomers(userId: string): Observable<Account[]> {
    return this.http.get<Account[]>(API_URL + 'customers/regular/customers/' + userId);
  }
}
