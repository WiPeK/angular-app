import {Component, Input, OnInit} from '@angular/core';
import {STATUS_OK, STATUS_ERROR, TransferResponse} from '../../../shared/models/transfer-response.model';

@Component({
  selector: 'app-execution-status',
  templateUrl: './execution-status.component.html',
  styleUrls: ['./execution-status.component.scss']
})
export class ExecutionStatusComponent implements OnInit {

  @Input('transferResponse')
  transferResponse: TransferResponse;

  readonly STATUS_OK = STATUS_OK;
  readonly STATUS_ERROR = STATUS_ERROR;

  constructor() { }

  ngOnInit() {
  }

}
