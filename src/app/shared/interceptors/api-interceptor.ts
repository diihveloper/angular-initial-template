import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL = 'http://localhost:3000'; // TODO: Substituir pelo endereço da API, importando o environment

@Injectable()
export class APIInterceptor implements HttpInterceptor {


  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.url.startsWith('blob:') && req.url.match(/^(?:(?:\w+:\/\/)|\/)/) === null) {
      const apiReq = req.clone({url: `${API_URL.replace(/\/$/, '')}/${req.url}`});
      return next.handle(apiReq);
    }
    return next.handle(req);
  }
}
