import {Injectable} from '@angular/core';
import {API_URL} from '../../app.consts';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class BorrowersService {
  constructor(private http: HttpClient) {
  }

  getAllPersonalBorrowers(userId: string): Observable<Account[]> {
    return this.http.get<Account[]>(API_URL + 'borrowers/personal/customers/' + userId);
  }
}
