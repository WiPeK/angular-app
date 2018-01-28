import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DomesticComponent} from './domestic/domestic.component';
import {ScheduledTransferComponent} from "./scheduled-transfer/scheduled-transfer.component";

const routes: Routes = [
  {
    path: 'payments/domestic',
    component: DomesticComponent
  },
  {
    path: 'payments/scheduled-transfer',
    component: ScheduledTransferComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class PaymentsRoutingModule {
}
