import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '../../app.consts';
import {Observable} from 'rxjs/Observable';
import {PostSchTransfer} from '../../shared/models/post-sch-transfer.model';

@Injectable()
export class PostScheduledTransferService {

  constructor(private http: HttpClient) {
  }

  tryExecuteTransfer(postSchTransfer: PostSchTransfer): Observable<any[]> {
    console.log(postSchTransfer);
    return this.http.post<any[]>(API_URL + 'payments/scheduled-transfer', postSchTransfer);
  }
}
