import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BonusesComponent } from './bonuses/bonuses.component';
import {AccountsRoutingModule} from './accounts.routing';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {AccountBonusesService} from './services/account-bonuses.service';
import { BonusDialogComponent } from './bonuses/bonus-dialog/bonus-dialog.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AccountsRoutingModule
  ],
  providers: [AccountBonusesService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [BonusesComponent, BonusDialogComponent],
  entryComponents: [BonusDialogComponent]
})
export class AccountsModule { }
