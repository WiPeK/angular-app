import { Component, OnInit } from '@angular/core';
import {Account} from '../../shared/models/account.model';
import {Observable} from 'rxjs/Observable';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AccountsService} from '../services/accounts.service';
import {Customers} from '../../shared/models/customers.model';
import {CustomersService} from '../services/customers.service';
import {StoreService} from '../../shared/store/store.service';
import {MyErrorStateMatcher} from '../../shared/validators/error-matcher.validator';
import {MatDialog} from '@angular/material';
import {CustomersDialogComponent} from './customers/customers-dialog.component';
import {TransferTypesService} from '../services/transfer-types.service';

@Component({
  selector: 'app-personal',
  templateUrl: './regular.component.html',
  styleUrls: ['./regular.component.scss']
})
export class PersonalComponent {
  accounts$: Observable<Account[]>;
  customers$: Observable<Customers[]>;
  paymentTypes$: Observable<any[]>;
  disabled = true;
  form: FormGroup;

  matcher: MyErrorStateMatcher;

  constructor(public dialog: MatDialog,
              private accountService: AccountsService,
              private customersService: CustomersService,
              private storeService: StoreService,
              private transferTypesService: TransferTypesService,
              private fb: FormBuilder) {
    this.accounts$ = this.accountService.getAll();
    this.paymentTypes$ = this.transferTypesService.getRegularTransferTypes();
    this.customers$ = this.customersService.getAllPersonalCustomers(this.storeService.user.id);
    this._createForm();
    this.matcher = new MyErrorStateMatcher();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CustomersDialogComponent, {
      width: '250px',
      data: this.accounts$
    });

    dialogRef.afterClosed().subscribe(result => {
      this.form.controls.customers.setValue(result);
    });
  }

  private _createForm() {
    this.form = this.fb.group({
      userAccount: ['', Validators.compose([Validators.required])],
      customer: ['', Validators.compose([Validators.required])],
      amount: ['', Validators.compose([Validators.required, Validators.min(1), Validators.max(99999999999.99)])],
      title: ['', Validators.compose([Validators.required, Validators.maxLength(2000)])],
      date: ['', Validators.compose([Validators.required])],
      template: [''],
    },
      {
        // validators: Validators.compose([moneyInAccountValidator('userAccount', 'amount')])
      });
    // todo number validation
  }
}

