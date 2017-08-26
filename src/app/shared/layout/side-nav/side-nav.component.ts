import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Observable} from 'rxjs/Observable';
import {MenuItem} from '../../models/menu-item.model';
import {SideNavService} from './side-nav.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  animations: [
    trigger('collapseChange', [
      state('true',
        style({height: '0', overflow: 'hidden'}),
      ),
      state('false',
        style({height: '*'})
      ),
      transition('* => *', animate('.25s ease-in'))
    ]),
    trigger('iconChange', [
      state('true',
        style({transform: 'rotate( -180deg )'})
      ),
      state('false',
        style({transform: 'rotate( 0deg )'})
      ),
      transition('* => *', animate('.25s'))
    ])
  ]
})
export class SideNavComponent implements OnInit {
  isCollapsed = false;
  menuItems: Observable<MenuItem[]>;

  constructor(private sideNavService: SideNavService,
              private router: Router) {
    this.menuItems = this.sideNavService.getMenuItems();
  }

  ngOnInit() {
  }

  isItemActive(menuItem: MenuItem): boolean {
    // return this.router.url === menuItem.url;
    return true;
  }

}
