import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {API_URL} from '../../app.consts';
import {DictionaryItem} from '../../shared/models/distionary-item.model';
import {map} from 'rxjs/operator/map';

@Injectable()
export class TransferTypesService {
  constructor(private http: HttpClient) {
  }

  getRegularTransferTypes(): Observable<DictionaryItem[]> {
    return this.http.get<DictionaryItem[]>(API_URL + 'deposits/types/regular');
  }
}
