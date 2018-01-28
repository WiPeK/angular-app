import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ContactComponent} from './contact.component';

const routes: Routes = [
  {
    path: 'contact/clientPost',
    component: ContactComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class ContactRoutingModule {
}
