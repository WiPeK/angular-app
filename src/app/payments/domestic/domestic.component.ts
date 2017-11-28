import { Component, OnInit } from '@angular/core';
import {Account} from '../../shared/models/account.model';
import {Observable} from 'rxjs/Observable';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AccountsService} from '../services/accounts.service';
import {Beneficiary} from '../../shared/models/beneficiary.model';
import {BeneficiariesService} from '../services/beneficiaries.service';
import {moneyInAccountValidator} from '../../shared/validators/money-in-account.validator';
import {StoreService} from '../../shared/store/store.service';
import {MyErrorStateMatcher} from '../../shared/validators/error-matcher.validator';
import {PaymentTypesService} from '../services/payment-types.service';
import {MatDialog} from '@angular/material';
import {BeneficiariesDialogComponent} from './beneficiaries/beneficiaries-dialog.component';

@Component({
  selector: 'app-domestic',
  templateUrl: './domestic.component.html',
  styleUrls: ['./domestic.component.scss']
})
export class DomesticComponent {
  accounts$: Observable<Account[]>;
  beneficiaries$: Observable<Beneficiary[]>;
  paymentTypes$: Observable<any[]>;

  form: FormGroup;

  matcher: MyErrorStateMatcher;

  constructor(public dialog: MatDialog,
              private accountService: AccountsService,
              private beneficiariesService: BeneficiariesService,
              private storeService: StoreService,
              private paymentTypesService: PaymentTypesService,
              private fb: FormBuilder) {
    this.accounts$ = this.accountService.getAll(this.storeService.user.idUsers);
    this.paymentTypes$ = this.paymentTypesService.getDomesticPaymentTypes();
    this.beneficiaries$ = this.beneficiariesService.getAllDomesticBeneficiaries(this.storeService.user.idUsers);
    this._createForm();
    this.matcher = new MyErrorStateMatcher();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(BeneficiariesDialogComponent, {
      width: '250px',
      data: this.beneficiaries$
    });

    dialogRef.afterClosed().subscribe(result => {
      this.form.controls.beneficiary.setValue(result);
    });
  }

  private _createForm() {
    this.form = this.fb.group({
      userAccount: ['', Validators.compose([Validators.required])],
      beneficiary: ['', Validators.compose([Validators.required])],
      beneficiaryAccount: ['', Validators.compose([Validators.required])],
      address: ['', Validators.compose([])],
      type: ['', Validators.compose([Validators.required])],
      amount: ['', Validators.compose([Validators.required, Validators.min(1), Validators.max(99999999999.99)])],
      title: ['', Validators.compose([Validators.required, Validators.maxLength(2000)])],
      date: ['', Validators.compose([Validators.required])],
      template: [''],
      token: [''],
    },
      {
        // validators: Validators.compose([moneyInAccountValidator('userAccount', 'amount')])
      });
    // todo number validation
  }
}

