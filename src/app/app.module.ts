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
/*import {MenuComponent} from './layout/menu/menu.component';*/
import {AboutModule} from './about/about.module';
import {ContactModule} from './contact/contact.module';
import {HttpClientModule} from '@angular/common/http';
import {AuthModule} from './auth/auth.module';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app.routing';
import {PaymentsModule} from './payments/payments.module';
import {LoansModule} from './loans/loans.module';
import {AccountsModule} from './accounts/accounts.module';

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
    AboutModule,
    ContactModule,
    AuthModule,
    HttpClientModule,
    PaymentsModule,
    LoansModule,
    AccountsModule
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpModule,
    SharedModule,
    HomeModule,
    AboutModule,
    ContactModule,
    LayoutModule,
    AppRoutingModule,
    PaymentsModule,
    LoansModule,
    AccountsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
