import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {API_URL} from "../../app.consts";
import {ScheduledTransfer} from "../../shared/models/scheduled-transfer.model";

@Injectable()
export class ScheduledTransferService {
  constructor(private http: HttpClient) {
  }

  getTransfers(): Observable<ScheduledTransfer[]> {
    return this.http.get<ScheduledTransfer[]>(API_URL + 'payments/scheduled-transfer');
  }
}

