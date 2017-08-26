import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout.component';
import {MaterialModule} from '../material-module/material.module';
import {MenuComponent} from './menu/menu.component';
import {SideNavComponent} from './side-nav/side-nav.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {RouterModule} from '@angular/router';
import {SideNavService} from './side-nav/side-nav.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [LayoutComponent],
  declarations: [
    LayoutComponent,
    SideNavComponent,
    MenuComponent,
    ToolbarComponent,
    MenuComponent
  ],
  providers: [SideNavService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutModule {
}
