import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {API_URL} from '../../app.consts';
import {DomesticTransfer} from '../../shared/models/domestic-transfer.model';

@Injectable()
export class DomesticTransferService {

  constructor(private http: HttpClient) {
  }

  tryExecuteTransfer(userId: string, domesticTransfer: DomesticTransfer): Observable<any[]> {
    return this.http.post<any[]>(API_URL + 'payments/domestic/' + userId, domesticTransfer);
  }
}
