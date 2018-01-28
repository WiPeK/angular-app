import {AfterViewInit, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {
  @Input('transferForm')
  transferForm: any;

  panelOpenState = false;

  constructor() { }

}
