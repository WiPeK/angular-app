import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import {Deposit} from '../../shared/models/Deposit.model';
import {FormGroup} from '@angular/forms';
import {DepositsService} from '../services/deposits.service';



@Component({
  selector: 'app-deposits-displayer',
  templateUrl: './displayer.component.html',
  styleUrls: ['./displayer.component.scss']
})
export class DisplayerComponent implements OnInit {


  form: FormGroup;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  deposits$: Observable<Deposit[]>;

  displayedColumns = ['account',  'name', 'amount', 'dateFrom', 'dateTo', 'id'];

  dataSource: MatTableDataSource<Deposit>;

  constructor(public dialog: MatDialog, private depositsService: DepositsService) {


  }

  ngOnInit() {
    this.getDeposits();
  }

  public getDeposits(): void {
    this.deposits$ = this.depositsService.getDeposits();
    this.deposits$.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(data);
    });

  }

  public openDialog(container: Deposit): void {
     // this.dialog.open(SpecSchTransferComponent, {
     //   width: '60%',
     //   data: container
     // });
  }
}
