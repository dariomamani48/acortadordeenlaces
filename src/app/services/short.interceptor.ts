import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class ShortInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const TOKEN = "3c1229f5aeec2835fb38e7f998492194a21a9adb";

    request=request.clone({setHeaders: {Authorization:'Bearer '+ TOKEN}})
    return next.handle(request);
  }
}
