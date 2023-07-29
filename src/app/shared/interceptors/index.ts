import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {APIInterceptor} from './api-interceptor';
import {AuthInterceptor} from "@app/shared/interceptors/auth-interceptor";

export const httpInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: APIInterceptor, multi: true},
  {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
];
