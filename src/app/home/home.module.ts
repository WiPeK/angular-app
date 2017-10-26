import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {HomeService} from './home.service';
import {HomeRoutingModule} from './home.routing';
import {WelcomeComponent} from './welcome/welcome.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [HomeComponent],
  declarations: [HomeComponent, WelcomeComponent],
  providers: [HomeService]
})
export class HomeModule {
}
