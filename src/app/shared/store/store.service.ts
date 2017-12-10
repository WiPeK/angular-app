import {Injectable} from '@angular/core';
import {User} from '../models/user.model';

@Injectable()
export class StoreService {
  private _token: string;
  private _user: User;

  get user(): User {
    this._user = {
      id: '5a2c48b072938305fc481165',
      login: 'wipekwipek'
    };
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

  get token(): string {
    return this._token;
  }

  set token(value: string) {
    this._token = value;
  }
}
