import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {StoreService} from '../store/store.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private storeService: StoreService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('loggedUser')['token'];
    const headers = req.headers.set('Authorization', 'Bearer ' + token || '');
    // headers.set('Access-Control-Allow-Origin', '*');
    const authReq = req.clone({headers: headers});
    return next.handle(authReq);
  }
}
