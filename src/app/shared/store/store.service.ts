import {Injectable} from '@angular/core';

@Injectable()
export class StoreService {
  private _token: string;

  get token(): string {
    return this._token;
  }

  set token(value: string) {
    this._token = value;
  }
}
