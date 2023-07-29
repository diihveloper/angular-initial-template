import {Injectable, Inject, inject} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

// import {AuthService} from '@app/services/auth.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  // auth = inject(AuthService);
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let apiReq = req.clone();
    // Todo auth service
    /*
    if (this.auth.isLogged()) {
      apiReq = apiReq.clone({
        setHeaders: {Authorization: `Bearer ${this.auth.token}`}
      });
    }
     */

    return next.handle(apiReq);
  }
}
