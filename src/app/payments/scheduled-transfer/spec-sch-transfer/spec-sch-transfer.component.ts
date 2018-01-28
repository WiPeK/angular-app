import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ScheduledTransfer} from '../../../shared/models/scheduled-transfer.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {PostSchTransfer} from 'app/shared/models/post-sch-transfer.model';
import {PostScheduledTransferService} from "../../services/sch-transfer-modify.service";

@Component({
  selector: 'app-spec-sch-transfer',
  templateUrl: './spec-sch-transfer.component.html',
  styleUrls: ['./spec-sch-transfer.component.scss']
})
export class SpecSchTransferComponent implements OnInit {

  form: FormGroup;

  constructor( public dialogRef: MatDialogRef<SpecSchTransferComponent>, @Inject(MAT_DIALOG_DATA) private data: ScheduledTransfer, private fb: FormBuilder, private postScheduledTransferService: PostScheduledTransferService ){

    //console.log(data);
  }


  ngOnInit() {
    this._createForm();
  }



  modifyTransfer() {
    const modification: PostSchTransfer = {
      transferId: this.data['scheduledTransferShared'].id,
      trans_state: this.form.controls.state.value,
      ben_iban: this.form.controls.beneficaryIBan.value,
      balance: this.form.controls.balance.value,
      trans_date: this.form.controls.date.value
    }

    //console.log(modification);
    //console.log(this.data.transferId);

    this.postScheduledTransferService.tryExecuteTransfer(modification);


    this.dialogRef.close();
  }

  deleteTransfer() {


    this.dialogRef.close();
  }

  private _createForm() {
    this.form = this.fb.group({
      beneficaryIBan: [''],
      balance: [''],
      state: [''],
      date: ['']

    })


  }
}
