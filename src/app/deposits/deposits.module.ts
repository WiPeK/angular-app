import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule } from '@angular/common';
import {PersonalComponent } from './regular/regular.component';
import {AccountsService} from './services/accounts.service';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {BrowserModule} from '@angular/platform-browser';
import {TransferTypesService} from './services/transfer-types.service';
import {DepositsRoutingModule} from './deposits.routing';
import {CustomersDialogComponent} from './regular/customers/customers-dialog.component';
import {CustomersService} from './services/customers.service';
import { DisplayerComponent } from './displayer/displayer.component';
import {DepositsService} from './services/deposits.service';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    DepositsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [PersonalComponent, CustomersDialogComponent, DisplayerComponent],
  providers: [AccountsService, CustomersService, TransferTypesService, DepositsService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [CustomersDialogComponent]
})
export class DepositsModule { }
