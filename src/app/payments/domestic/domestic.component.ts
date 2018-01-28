import { Component, OnInit } from '@angular/core';
import {Account} from '../../shared/models/account.model';
import {Observable} from 'rxjs/Observable';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AccountsService} from '../services/accounts.service';
import {DomesticBeneficiary} from '../../shared/models/domestic-beneficiary.model';
import {BeneficiariesService} from '../services/beneficiaries.service';
import {moneyInAccountValidator} from '../../shared/validators/money-in-account.validator';
import {StoreService} from '../../shared/store/store.service';
import {MyErrorStateMatcher} from '../../shared/validators/error-matcher.validator';
import {MatDialog} from '@angular/material';
import {BeneficiariesDialogComponent} from './beneficiaries/beneficiaries-dialog.component';
import {TransferTypesService} from '../services/transfer-types.service';
import {TokenService} from '../services/token.service';
import {tokenValidator} from '../../shared/validators/token.validator';
import {DomesticTransferService} from '../services/domestic-transfer.service';
import {DomesticTransfer} from '../../shared/models/domestic-transfer.model';
import {TransferResponse} from '../../shared/models/transfer-response.model';

@Component({
  selector: 'app-domestic',
  templateUrl: './domestic.component.html',
  styleUrls: ['./domestic.component.scss']
})
export class DomesticComponent {
  accounts$: Observable<Account[]>;
  paymentTypes$: Observable<any[]>;
  transferResponse: any;

  form: FormGroup;
  tokenForm: FormGroup;

  matcher: MyErrorStateMatcher;

  noBeneficiariesSelected = true;
  firstStepSubmited = false;
  secondStepSubmited = false;
  waitForTransferExecutionResult = true;

  constructor(public dialog: MatDialog,
              private accountService: AccountsService,
              private storeService: StoreService,
              private transferTypesService: TransferTypesService,
              private tokenService: TokenService,
              private domesticTransferService: DomesticTransferService,
              private fb: FormBuilder) {
    this.accounts$ = this.accountService.getAll(this.storeService.user.id);
    this.paymentTypes$ = this.transferTypesService.getDomesticTransferTypes();
    this._createForm();
    this.matcher = new MyErrorStateMatcher();
    this.valueChangesListeners();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(BeneficiariesDialogComponent, {
      width: '100%',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.length > 0) {
        this.form.controls.beneficiary.setValue(result);
        this.noBeneficiariesSelected = false;
        this.form.controls.beneficiaryAccount.clearValidators();
        this.form.controls.beneficiaryAccount.setErrors(null);
      }
    });
  }

  removeSelectedBeneficiaries() {
    this.form.controls.beneficiary.setValue('');
    this.noBeneficiariesSelected = true;
  }

  submitFirstStep() {
    this.firstStepSubmited = true;
    this._whenOneBeneficiaryConvertToArray();
    this._generateToken();
  }

  reload() {
    window.location.reload();
  }

  tryExecuteTransfer() {
    this.waitForTransferExecutionResult = true;
    this.secondStepSubmited = true;
    // this._whenOneBeneficiaryConvertToArray();
    let formValue: DomesticTransfer = this.form.value;
    formValue = this._convertJson(formValue);
    console.log(formValue);
    const transferExecutionResult = this.domesticTransferService.tryExecuteTransfer(this.storeService.user.id, formValue);
    transferExecutionResult.subscribe(data => {
      this.waitForTransferExecutionResult = false;
      console.log(data);
      this.transferResponse = data;
    })
  }

  private _convertJson(formValue: DomesticTransfer): DomesticTransfer {
    formValue.beneficiary = this.form.controls.beneficiary.value.map(i => {
      i = {
        id: i.id,
        name: i.name,
        accountNumber: i.accountNumber,
        address: i.address
      };
      return i;
    });
    formValue.userAccount = {
      id: formValue.userAccount.id
    };
    delete formValue.beneficiaryAccount;
    delete formValue.address;
    return formValue;
  }

  private _whenOneBeneficiaryConvertToArray() {
    if (this.noBeneficiariesSelected) {
      const beneficiary: DomesticBeneficiary = {
        name: this.form.controls.beneficiary.value,
        address: this.form.controls.address.value,
        accountNumber: this.form.controls.beneficiaryAccount.value
      };

      this.form.controls.beneficiary.setValue([
        beneficiary
      ]);
    }
  }

  private _generateToken() {
    const token: Observable<string> = this.tokenService.generateToken(this.form.controls.userAccount.value.id);
    token.subscribe(data => {
      this.storeService.domesticTransferToken = data;
      console.log(data);
      this.tokenForm.controls.token.setValidators(Validators.compose([Validators.required, tokenValidator(data)]))
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
      emailConfirm: [''],
      email: ['']
    });

    this.tokenForm = this.fb.group({
      token: ['']
    });
  }

  private valueChangesListeners(): void {
    this.form.controls.emailConfirm.valueChanges.subscribe(e => {
      this.form.controls.email.setValidators(e ? Validators.email : null);
    });
  }
}

