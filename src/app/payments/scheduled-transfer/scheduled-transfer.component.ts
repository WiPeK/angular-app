import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {ScheduledTransfer} from "../../shared/models/scheduled-transfer.model";
import {Observable} from "rxjs/Observable";
import {ScheduledTransferService} from "../services/scheduled-transfer.service";
import {FormGroup} from "@angular/forms";
import {SpecSchTransferComponent} from "./spec-sch-transfer/spec-sch-transfer.component";



@Component({
  selector: 'app-scheduled-transfer',
  templateUrl: './scheduled-transfer.component.html',
  styleUrls: ['./scheduled-transfer.component.scss']
})
export class ScheduledTransferComponent implements OnInit {


  form: FormGroup;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  accountTransfers$: Observable<ScheduledTransfer[]>;

  displayedColumns = ['account', 'balance', 'trans_state', 'ben_iban', 'trans_date', 'transferId'];

  dataSource: MatTableDataSource<ScheduledTransfer>;

  constructor(      public dialog: MatDialog, private scheduledTransferService: ScheduledTransferService) {


  }

  ngOnInit() {
    this.getTransfers();
  }

  public getTransfers(): void {
    this.accountTransfers$ = this.scheduledTransferService.getTransfers();
    this.accountTransfers$.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(data);
    });

  }

  public openDialog(container: ScheduledTransfer): void {
    this.dialog.open(SpecSchTransferComponent, {
      width: '60%',
      data: container
    });
  }
}
