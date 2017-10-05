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
        name: 'STRONA GŁÓWNA',
        icon: 'home'
      },
      {
        url: '/offers',
        name: 'OFERTY',
        icon: 'local_offer'
      },
      {
        url: '/cv',
        name: 'CV',
        icon: 'account_box'
      },
      {
        url: '',
        name: 'Lorem ipsum',
        icon: 'dashboard',
        subItems: [
          {
            url: '/d',
            name: 'Lorem ipsum',
            icon: 'room'
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
        name: 'O MNIE',
        icon: 'speaker_notes'
      },
      {
        url: '/contact',
        name: 'KONTAKT',
        icon: 'contacts'
      }
    ];
  }

  getMenuItems(): Observable<MenuItem[]> {
    return <BehaviorSubject<MenuItem[]>>new BehaviorSubject(this._menuItems).asObservable();
  }
}
