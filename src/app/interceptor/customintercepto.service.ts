import { Injectable } from '@angular/core';

import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustomInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method == 'GET') {
      const newRequest = req.clone({ headers: new HttpHeaders().set('jwtToken', 'dsghfkjhgfdjkgh56567') });
      return next.handle(newRequest);
    }

    return next.handle(req);
  }
}
