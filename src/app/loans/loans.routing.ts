import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PersonalComponent} from './personal/personal.component';

const routes: Routes = [
  {
    path: 'loans/regular',
    component: PersonalComponent
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
