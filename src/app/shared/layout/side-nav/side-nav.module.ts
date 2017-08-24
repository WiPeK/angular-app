import {NgModule} from '@angular/core';
import {SideNavComponent} from './side-nav.component';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../../material-module/material.module';
import {ToolbarModule} from '../toolbar/toolbar.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ToolbarModule
  ],
  exports: [SideNavComponent],
  declarations: [SideNavComponent]
})
export class SideNavModule { }
