import {Component} from '@angular/core';
import {Account} from '../../shared/models/account.model';
import {Observable} from 'rxjs/Observable';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AccountsService} from '../services/accounts.service';
import {Borrowers} from '../../shared/models/borrowers.model';
import {BorrowersService} from '../services/borrowers.service';
import {StoreService} from '../../shared/store/store.service';
import {MyErrorStateMatcher} from '../../shared/validators/error-matcher.validator';
import {MatDialog} from '@angular/material';
import {BorrowersDialogComponent} from './borrowers/borrowers-dialog.component';
import {TransferTypesService} from '../services/transfer-types.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent {
  accounts$: Observable<Account[]>;
  borrowers$: Observable<Borrowers[]>;
  paymentTypes$: Observable<any[]>;

  form: FormGroup;

  matcher: MyErrorStateMatcher;

  constructor(public dialog: MatDialog,
              private accountService: AccountsService,
              private borrowersService: BorrowersService,
              private storeService: StoreService,
              private transferTypesService: TransferTypesService,
              private fb: FormBuilder) {
    this.accounts$ = this.accountService.getAll(this.storeService.user.id);
    this.paymentTypes$ = this.transferTypesService.getPersonalTransferTypes();
    this.borrowers$ = this.borrowersService.getAllPersonalBorrowers(this.storeService.user.id);
    this._createForm();
    this.matcher = new MyErrorStateMatcher();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(BorrowersDialogComponent, {
      width: '250px',
      data: this.borrowers$
    });

    dialogRef.afterClosed().subscribe(result => {
      this.form.controls.borrowers.setValue(result);
    });
  }

  private _createForm() {
    this.form = this.fb.group({
      userAccount: ['', Validators.compose([Validators.required])],
      borrower: ['', Validators.compose([Validators.required])],
      borrowerAccount: ['', Validators.compose([Validators.required])],
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

