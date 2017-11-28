import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {API_URL} from '../../app.consts';
import {DictionaryItem} from '../../shared/models/distionary-item.model';

@Injectable()
export class PaymentTypesService {
  constructor(private http: HttpClient) {
  }

  getDomesticPaymentTypes(): Observable<DictionaryItem[]> {
    return this.http.get(API_URL + 'payments/types/domestic');
  }
}
