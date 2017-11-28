import {Injectable} from '@angular/core';
import {API_URL} from '../../app.consts';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class BeneficiariesService {
  constructor(private http: HttpClient) {
  }

  getAllDomesticBeneficiaries(userId: string): Observable<Account[]> {
    return this.http.get(API_URL + 'beneficiaries/domestic/users/' + userId);
  }
}
