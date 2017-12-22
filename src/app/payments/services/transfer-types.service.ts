import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {API_URL} from '../../app.consts';
import {DictionaryItem} from '../../shared/models/distionary-item.model';

@Injectable()
export class TransferTypesService {
  constructor(private http: HttpClient) {
  }

  getDomesticTransferTypes(): Observable<DictionaryItem[]> {
    return this.http.get(API_URL + 'payments/types/domestic');
  }
}
