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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    SharedModule,
    HttpModule,
    // AppRoutingModule,
    RouterModule,
    LayoutModule,
    HomeModule
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpModule,
    SharedModule,
    LayoutModule,
    HomeModule
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
