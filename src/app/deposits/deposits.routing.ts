import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PersonalComponent} from './regular/regular.component';
import {DisplayerComponent} from './displayer/displayer.component';


const routes: Routes = [
  {
    path: 'deposits/regular',
    component: PersonalComponent
  },
  {
    path: 'deposits/all',
    component: DisplayerComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class DepositsRoutingModule {
}
