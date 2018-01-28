import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule } from '@angular/common';
import {PersonalComponent } from './personal/personal.component';
import {LoansRoutingModule} from './loans.routing';
import {BorrowersService} from './services/borrowers.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {BrowserModule} from '@angular/platform-browser';
import {BorrowersDialogComponent} from './personal/borrowers/borrowers-dialog.component';
import {AccountsService} from 'app/loans/services/accounts.service';
import {TransferTypesService} from 'app/loans/services/transfer-types.service';
import {LoansFormComponent} from './loansForm/loansForm.component';
import {LoansService} from './services/loans.service';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    LoansRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [PersonalComponent, BorrowersDialogComponent, LoansFormComponent],
  providers: [AccountsService, BorrowersService, TransferTypesService, LoansService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [BorrowersDialogComponent]
})
export class LoansModule { }

