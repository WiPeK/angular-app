import {AfterViewInit, Component, ElementRef, Inject, Optional, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-borrowers-dialog',
  templateUrl: 'borrowers-dialog.component.html',
})
export class BorrowersDialogComponent implements AfterViewInit {
  displayedColumns = ['accountNumber', 'name', 'address'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort)
  private sort: MatSort;

  @ViewChild('filter')
  private filter: ElementRef;

  constructor(
    public dialogRef: MatDialogRef<BorrowersDialogComponent>,
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
