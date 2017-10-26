import {Injectable} from '@angular/core';
import {MenuItem} from '../../shared/models/menu-item.model';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SideNavService {

  constructor(private http: Http) {
  }

  getMenuItems(): Observable<MenuItem[]> {
    return this.http.get('/assets/data/json/menu-items.json')
      .map((res: any) => res.json());
  }
}
