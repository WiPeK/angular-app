import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomesticComponent } from './domestic/domestic.component';
import {PaymentsRoutingModule} from './payments.routing';
import {AccountsService} from './services/accounts.service';
import {BeneficiariesService} from './services/beneficiaries.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {BrowserModule} from '@angular/platform-browser';
import {TransferTypesService} from './services/transfer-types.service';
import {BeneficiariesDialogComponent} from './domestic/beneficiaries/beneficiaries-dialog.component';
import { SelectedBeneficiariesListComponent } from './beneficiaries/selected-beneficiaries-list/selected-beneficiaries-list.component';
import {TokenService} from './services/token.service';
import { SummaryComponent } from './domestic/summary/summary.component';
import {DomesticTransferService} from './services/domestic-transfer.service';
import { ScheduledTransferComponent } from './scheduled-transfer/scheduled-transfer.component';
import {ScheduledTransferService} from "./services/scheduled-transfer.service";
import { SpecSchTransferComponent } from './scheduled-transfer/spec-sch-transfer/spec-sch-transfer.component';
import {PostScheduledTransferService} from "./services/sch-transfer-modify.service";

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    PaymentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [DomesticComponent, BeneficiariesDialogComponent, SelectedBeneficiariesListComponent, SummaryComponent, ScheduledTransferComponent, SpecSchTransferComponent],
  providers: [AccountsService, BeneficiariesService, TransferTypesService, TokenService, DomesticTransferService, ScheduledTransferService, PostScheduledTransferService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [BeneficiariesDialogComponent, SpecSchTransferComponent],

})
export class PaymentsModule { }
