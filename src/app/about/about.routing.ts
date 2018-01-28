import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AboutComponent} from './about.component';

const routes: Routes = [
  {
    path: 'about/information',
    component: AboutComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AboutRoutingModule {
}
