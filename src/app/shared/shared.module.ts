import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutModule} from './layout/layout.module';
import {MenuModule} from './layout/side-nav/side-nav.module';
import {ToolbarModule} from './layout/toolbar/toolbar.module';
import {MaterialModule} from './material-module/material.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    MenuModule,
    ToolbarModule,
    MaterialModule
  ],
  exports: [
    LayoutModule,
    MenuModule,
    ToolbarModule,
    MaterialModule
  ],
  declarations: []
})
export class SharedModule {
}
