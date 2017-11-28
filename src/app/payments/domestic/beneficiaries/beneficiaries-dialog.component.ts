import {Component, Inject, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-beneficiaries-dialog',
  templateUrl: 'beneficiaries-dialog.component.html',
})
export class BeneficiariesDialogComponent {
  displayedColumns = ['accountNumber', 'name', 'address'];


  constructor(
    public dialogRef: MatDialogRef<BeneficiariesDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
