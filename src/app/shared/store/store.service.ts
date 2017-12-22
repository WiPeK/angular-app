import {Injectable} from '@angular/core';
import {User} from '../models/user.model';

@Injectable()
export class StoreService {
  private _token: string;
  private _user: User;

  get user(): User {
    this._user = {
      id: '6075205366900CAAE050EDD4221D1C44',
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
