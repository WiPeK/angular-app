import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {API_URL} from '../../app.consts';
import {BonusContainer} from '../../shared/models/bonus-container.model';

@Injectable()
export class AccountBonusesService {
  constructor(private http: HttpClient) {
  }

  getCreatedBonuses(): Observable<BonusContainer[]> {
    return this.http.get<BonusContainer[]>(API_URL + 'accounts/bonuses');
  }
}
