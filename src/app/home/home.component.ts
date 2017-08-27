import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Video} from '../shared/models/video.model';
import {HomeService} from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posterUrl: Observable<string>;
  videoUrls: Observable<Video[]>;

  constructor(private homeService: HomeService) {
    this.posterUrl = this.homeService.getPosterUrl();
    this.videoUrls = this.homeService.getVideoUrls();
  }

  ngOnInit() {
  }

}
