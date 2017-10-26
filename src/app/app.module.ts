import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {LayoutModule} from './layout/layout.module';
import {HomeModule} from './home/home.module';
import { AuthComponent } from './auth/auth.component';
import {AuthModule} from './auth/auth.module';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app.routing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    HttpModule,
    AppRoutingModule,
    RouterModule,
    LayoutModule,
    HomeModule,
    AuthModule
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpModule,
    SharedModule,
    LayoutModule,
    HomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
