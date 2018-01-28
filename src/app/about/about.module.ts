import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutComponent} from './about.component';
import {AboutService} from './about.service';
import {AboutRoutingModule} from './about.routing';
import {InformationComponent} from './information/information.component';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule
  ],
  exports: [AboutComponent],
  declarations: [AboutComponent, InformationComponent],
  providers: [AboutService]
})
export class AboutModule {
}
