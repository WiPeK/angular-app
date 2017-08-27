import {Component, Input, OnInit} from '@angular/core';
import {Video} from '../../models/video.model';

@Component({
  selector: 'app-video-container',
  templateUrl: './video-container.component.html',
  styleUrls: ['./video-container.component.scss']
})
export class VideoContainerComponent implements OnInit {
  @Input()
  posterUrl: string;

  @Input()
  videoUrls: Video[];

  constructor() { }

  ngOnInit() {
    console.log(this.posterUrl);
  }

}
