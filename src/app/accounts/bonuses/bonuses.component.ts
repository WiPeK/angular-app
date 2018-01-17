import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AccountBonusesService} from '../services/account-bonuses.service';
import {BonusContainer} from '../../shared/models/bonus-container.model';
import {Observable} from 'rxjs/Observable';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {BonusDialogComponent} from './bonus-dialog/bonus-dialog.component';

@Component({
  selector: 'app-bonuses',
  templateUrl: './bonuses.component.html',
  styleUrls: ['./bonuses.component.scss']
})
export class BonusesComponent implements OnInit, AfterViewInit {
  accountBonuses$: Observable<BonusContainer[]>;
  displayedColumns = ['accountNumber', 'balance', 'name', 'type', 'numberOfBonuses'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  isTableVisible = false;
  isSpinnerVisible = false;
  isCreateButtonVisible = true;

  dataSource: MatTableDataSource<BonusContainer>;

  constructor(public dialog: MatDialog,
              private accountBonusesService: AccountBonusesService) {
  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  public getCreatedBonuses(): void {
    this.isCreateButtonVisible = false;
    this.isSpinnerVisible = true;
    this.accountBonuses$ = null;
    this.accountBonuses$ = this.accountBonusesService.getCreatedBonuses();
    this.accountBonuses$.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.isSpinnerVisible = false;
      this.isTableVisible = true;
    });
  }

  public openDialog(container: BonusContainer): void {
    this.dialog.open(BonusDialogComponent, {
      width: '100%',
      data: container
    });
  }

  countBonuses(container: BonusContainer): number {
    let bonuses = 0;
    bonuses += container.saldoBonus.granted ? 1 : 0;
    bonuses += container.voucherBonus.granted ? 1 : 0;
    bonuses += container.moneyBackBonus.granted ? 1 : 0;
    bonuses += container.transactionsBonus.granted ? 1 : 0;
    return bonuses;
  }
}
