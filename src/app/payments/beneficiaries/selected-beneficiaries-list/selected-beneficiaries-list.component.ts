import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {DomesticBeneficiary} from '../../../shared/models/domestic-beneficiary.model';

@Component({
  selector: 'app-selected-beneficiaries-list',
  templateUrl: './selected-beneficiaries-list.component.html',
  styleUrls: ['./selected-beneficiaries-list.component.scss']
})
export class SelectedBeneficiariesListComponent {
  @Input('beneficiaries')
  beneficiaries: DomesticBeneficiary[];

  constructor() { }
}
