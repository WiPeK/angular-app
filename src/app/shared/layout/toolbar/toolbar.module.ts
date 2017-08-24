import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToolbarComponent} from './toolbar.component';
import {MaterialModule} from '../../material-module/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ToolbarComponent
  ],
  declarations: [ToolbarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ToolbarModule {
}
