import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {BonusContainer} from '../../../shared/models/bonus-container.model';

@Component({
  selector: 'app-bonus-dialog',
  templateUrl: './bonus-dialog.component.html',
  styleUrls: ['./bonus-dialog.component.scss']
})
export class BonusDialogComponent {

  constructor(public dialogRef: MatDialogRef<BonusDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: BonusContainer) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }



}
