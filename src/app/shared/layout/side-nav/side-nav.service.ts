import {Injectable} from '@angular/core';
import {MenuItem} from '../../models/menu-item.model';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class SideNavService {
  private _menuItems: MenuItem[];

  constructor() {
    this._menuItems = [
      {
        url: '/',
        name: 'Lorem ipsum'
      },
      {
        url: '/a',
        name: 'Lorem ipsum'
      },
      {
        url: '/b',
        name: 'Lorem ipsum'
      },
      {
        url: '/c',
        name: 'Lorem ipsum',
        subItems: [
          {
            url: '/d',
            name: 'Lorem ipsum'
          },
          {
            url: '/e',
            name: 'Lorem ipsum'
          },
          {
            url: '/f',
            name: 'Lorem ipsum'
          }
        ]
      },
      {
        url: 'g',
        name: 'Lorem ipsum'
      },
      {
        url: '/h',
        name: 'Lorem ipsum',
        subItems: [
          {
            url: '/i',
            name: 'Lorem ipsum'
          },
          {
            url: '/j',
            name: 'Lorem ipsum'
          },
          {
            url: '/k',
            name: 'Lorem ipsum'
          }
        ]
      }
    ];
  }

  getMenuItems(): Observable<MenuItem[]> {
    return <BehaviorSubject<MenuItem[]>>new BehaviorSubject(this._menuItems).asObservable();
  }
}
