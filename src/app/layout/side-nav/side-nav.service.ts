import {Injectable} from '@angular/core';
import {MenuItem} from '../../shared/models/menu-item.model';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class SideNavService {
  private _menuItems: MenuItem[];

  constructor() {
    this._menuItems = [
      {
        url: '/',
        name: 'STRONA GŁÓWNA'
      },
      {
        url: '/offers',
        name: 'OFERTY'
      },
      {
        url: '/cv',
        name: 'CV'
      },
      {
        url: '',
        name: 'Lorem ipsum',
        subItems: [
          {
            url: '/d',
            name: 'Lorem ipsum'
          },
          {
            url: '/',
            name: 'Lorem ipsum'
          },
          {
            url: '/f',
            name: 'Lorem ipsum'
          }
        ]
      },
      {
        url: '/about',
        name: 'O MNIE'
      },
      {
        url: '/contact',
        name: 'KONTAKT'
      }
    ];
  }

  getMenuItems(): Observable<MenuItem[]> {
    return <BehaviorSubject<MenuItem[]>>new BehaviorSubject(this._menuItems).asObservable();
  }
}
