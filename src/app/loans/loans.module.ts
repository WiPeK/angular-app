import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule } from '@angular/common';
import {PersonalComponent } from './personal/personal.component';
import {LoansRoutingModule} from './loans.routing';
import {AccountsService} from './services/accounts.service';
import {BorrowersService} from './services/borrowers.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {BrowserModule} from '@angular/platform-browser';
import {TransferTypesService} from './services/transfer-types.service';
import {BorrowersDialogComponent} from './personal/borrowers/borrowers-dialog.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    LoansRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [PersonalComponent, BorrowersDialogComponent],
  providers: [AccountsService, BorrowersService, TransferTypesService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [BorrowersDialogComponent]
})
export class LoansModule { }
