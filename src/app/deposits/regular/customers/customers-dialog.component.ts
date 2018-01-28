import {AfterViewInit, Component, ElementRef, Inject, Optional, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-customers-dialog',
  templateUrl: 'customers-dialog.component.html',
})
export class CustomersDialogComponent implements AfterViewInit {
  displayedColumns = ['accountNumber', 'balance', 'address'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort)
  private sort: MatSort;

  @ViewChild('filter')
  private filter: ElementRef;

  constructor(
    public dialogRef: MatDialogRef<CustomersDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    this.dataSource = new MatTableDataSource<any>(data);
  }

  private _addEventListener() {
    console.log(this.filter);
    this.filter.nativeElement.addEventListener('keyup', (even: KeyboardEvent) => {
      let filterValue = this.filter.nativeElement.value;
      filterValue = filterValue.trim();
      filterValue = filterValue.toLowerCase();
      this.dataSource.filter = filterValue;
    });

    // this.filter.addEventListener('keyup', (even: KeyboardEvent) => {
    //   let filterValue = this.filter.value;
    //   filterValue = filterValue.trim();
    //   filterValue = filterValue.toLowerCase();
    //   this.dataSource.filter = filterValue;
    // });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this._addEventListener();
  }

}
