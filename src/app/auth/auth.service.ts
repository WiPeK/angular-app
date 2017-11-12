import {Injectable} from '@angular/core';
import {DictionaryItem} from '../shared/models/distionary-item.model';
import {API_URL} from '../app.consts';
import {StoreService} from '../shared/store/store.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CustomDictionaryItemFactory} from '../shared/dictionary/CustomDictionaryItemFactory';

@Injectable()
export class AuthService {
  constructor(private storeService: StoreService, private http: HttpClient) {
  }

  login(userLoginAndPassword: any): DictionaryItem {
    let status: DictionaryItem = CustomDictionaryItemFactory.status_ok;

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    this.http.post(API_URL + 'auth/login', userLoginAndPassword, {headers: headers, observe: 'response'})
      .subscribe((response) => console.log(response.headers));

    return status;
  }

  logout(): DictionaryItem {
    let status: DictionaryItem = CustomDictionaryItemFactory.status_ok;

    this.http.get(API_URL + 'auth/logout').subscribe();

    return status;
  }
}
