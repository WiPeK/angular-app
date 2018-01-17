import {RouterModule, Routes} from '@angular/router';
import {BonusesComponent} from './bonuses/bonuses.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: 'accounts/bonuses',
    component: BonusesComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AccountsRoutingModule {
}
