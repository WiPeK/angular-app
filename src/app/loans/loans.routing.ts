import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PersonalComponent} from './personal/personal.component';
import {LoansFormComponent} from '../loans/loansForm/loansForm.component';

const routes: Routes = [
  {
    path: 'loans/personal',
    component: PersonalComponent
  },
  {
    path: 'loans/all',
    component: LoansFormComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class LoansRoutingModule {
}
