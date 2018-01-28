import {AfterViewInit, Component, ElementRef, Inject, OnInit, Optional, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import {DomesticBeneficiary} from '../../../shared/models/domestic-beneficiary.model';
import {BeneficiariesService} from '../../services/beneficiaries.service';
import {StoreService} from '../../../shared/store/store.service';

@Component({
  selector: 'app-beneficiaries-dialog',
  templateUrl: 'beneficiaries-dialog.component.html',
  styleUrls: ['./beneficiaries-dialog.component.scss']
})
export class BeneficiariesDialogComponent implements OnInit {
  displayedColumns = ['select', 'accountNumber', 'name', 'address'];

  dataSource: MatTableDataSource<any>;
  selection = new SelectionModel<any>(true, []);
  beneficiaries$: Observable<DomesticBeneficiary[]>;

  @ViewChild(MatSort)
  private sort: MatSort;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialogRef: MatDialogRef<BeneficiariesDialogComponent>,
              private beneficiariesService: BeneficiariesService,
              private storeService: StoreService) {
  }

  ngOnInit(): void {
    this.beneficiaries$ = this.beneficiariesService.getAllDomesticBeneficiaries(this.storeService.user.id);
    this.beneficiaries$
      .subscribe((beneficiaries: DomesticBeneficiary[]) => {
        this.dataSource = new MatTableDataSource<any>(beneficiaries);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
