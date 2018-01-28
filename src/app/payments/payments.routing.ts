import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DomesticComponent} from './domestic/domestic.component';

const routes: Routes = [
  {
    path: 'payments/deposits',
    component: DomesticComponent
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
