import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './material-module/material.module';
import {StoreService} from './store/store.service';
import {AuthInterceptor} from './http/auth-interceptor';
import {AuthGuard} from './guards/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule
  ],
  declarations: [],
  providers: [StoreService, AuthGuard]
})
export class SharedModule {
}
