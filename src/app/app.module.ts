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
import {HttpClientModule} from '@angular/common/http';
import {AuthModule} from './auth/auth.module';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app.routing';
import {PaymentsModule} from './payments/payments.module';
import {LoansModule} from './loans/loans.module';
import {DepositsModule} from './deposits/deposits.module';
import {AccountsModule} from './accounts/accounts.module';


@NgModule({
  declarations: [
    AppComponent,
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
    AuthModule,
    HttpClientModule,
    PaymentsModule,
    LoansModule,
    DepositsModule,
    AccountsModule
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
    AppRoutingModule,
    PaymentsModule,
    LoansModule,
    DepositsModule,
    AccountsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
