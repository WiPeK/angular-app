import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutModule} from './layout/layout.module';
import {MaterialModule} from './material-module/material.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    MaterialModule
  ],
  exports: [
    LayoutModule,
    MaterialModule
  ],
  declarations: []
})
export class SharedModule {
}
