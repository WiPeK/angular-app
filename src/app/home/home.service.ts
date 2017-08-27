import {Injectable} from '@angular/core';
import {Video} from '../shared/models/video.model';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class HomeService {
  private _posterUrl: string;

  private _videoUrls: Video[];

  constructor() {
    this._posterUrl = 'assets/video/Aloha-Mundo.jpg';

    this._videoUrls = [
      {
        url: 'assets/video/Aloha-Mundo.mp4',
        type: 'video/mp4'
      },
      {
        url: 'assets/video/Aloha-Mundo.webm',
        type: 'video/webm'
      },
      {
        url: 'assets/video/Aloha-Mundo.ogv',
        type: 'video/ogv'
      }
    ]
  }

  getPosterUrl(): Observable<string> {
    return <BehaviorSubject<string>>new BehaviorSubject(this._posterUrl).asObservable();
  }

  getVideoUrls(): Observable<Video[]> {
    return <BehaviorSubject<Video[]>>new BehaviorSubject(this._videoUrls).asObservable();
  }
}
