import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import {MenuModule} from './side-nav/side-nav.module';
import {MaterialModule} from '../material-module/material.module';

@NgModule({
  imports: [
    CommonModule,
    MenuModule,
    MaterialModule
  ],
  exports: [LayoutComponent],
  declarations: [LayoutComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutModule { }
