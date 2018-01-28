import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import {Loan} from '../../shared/models/Loan.model';
import {FormGroup} from '@angular/forms';
import {LoansService} from '../services/loans.service';


@Component({
  selector: 'app-loans-loansForm',
  templateUrl: './loansForm.component.html',
  styleUrls: ['./loansForm.component.scss']
})
export class LoansFormComponent implements OnInit {


  form: FormGroup;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  loans$: Observable<Loan[]>;

  displayedColumns = ['account', 'name', 'amount', 'dateFrom', 'dateTo', 'id'];

  dataSource: MatTableDataSource<Loan>;

  constructor(public dialog: MatDialog, private loansService: LoansService) {


  }

  ngOnInit() {
    this.getLoans();
  }

  public getLoans(): void {
    this.loans$ = this.loansService.getLoans();
    this.loans$.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(data);
    });

  }

  public openDialog(container: Loan): void {
    // this.dialog.open(SpecSchTransferComponent, {
    //   width: '60%',
    //   data: container
    // });
  }
}
