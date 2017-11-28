import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomesticComponent } from './domestic/domestic.component';
import {PaymentsRoutingModule} from './payments.routing';
import {AccountsService} from './services/accounts.service';
import {BeneficiariesService} from './services/beneficiaries.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {BrowserModule} from '@angular/platform-browser';
import {PaymentTypesService} from './services/payment-types.service';
import {BeneficiariesDialogComponent} from './domestic/beneficiaries/beneficiaries-dialog.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    PaymentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [DomesticComponent, BeneficiariesDialogComponent],
  providers: [AccountsService, BeneficiariesService, PaymentTypesService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [BeneficiariesDialogComponent]
})
export class PaymentsModule { }
