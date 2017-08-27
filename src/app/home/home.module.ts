import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {HomeService} from './home.service';
import {HomeRoutingModule} from './home.routing';
import {VideoContainerComponent} from '../shared/components/video-container/video-container.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [HomeComponent],
  declarations: [HomeComponent, VideoContainerComponent],
  providers: [HomeService]
})
export class HomeModule {
}
