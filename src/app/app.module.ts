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
import {AboutModule} from './about/about.module';
import {ContactModule} from './contact/contact.module';
import {PaymentsModule} from './payments/payments.module';
import {LoansModule} from './loans/loans.module';
import {DepositsModule} from './deposits/deposits.module';
import {AccountsModule} from './accounts/accounts.module';
import {LoansFormComponent} from './loans/loansForm/loansForm.component';

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
    DepositsModule,
    RouterModule,
    LayoutModule,
    LoansModule,
    AboutModule,
    ContactModule,
    HomeModule,
    AuthModule,
    HttpClientModule,
    PaymentsModule,
    AccountsModule
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpModule,
    DepositsModule,
    SharedModule,
    LoansModule,
    LayoutModule,
    AboutModule,
    ContactModule,
    HomeModule,
    AppRoutingModule,
    PaymentsModule,
    AccountsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
