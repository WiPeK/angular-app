import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactComponent} from './contact.component';
import {ContactService} from './contact.service';
import {ContactRoutingModule} from './contact.routing';
import {ClientPostComponent} from './clientPost/clientPost.component';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule
  ],
  exports: [ContactComponent],
  declarations: [ContactComponent, ClientPostComponent],
  providers: [ContactService]
})
export class ContactModule {
}
