import { Injectable, Inject } from '@angular/core';

import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { IComments } from './comments';
import { IProduct } from '../../product/iproduct';
import { APP_SERVICE } from '../../valuprovider/app.config.service';
import { IAppConfig } from '../../valuprovider/appprovider';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient,
    @Inject(APP_SERVICE) private appConfig: IAppConfig) { }

  getComments() {
    return this.http.get<IComments[]>(`${this.appConfig.jsonAPI}/comments`);
  }

  addComments(comment: IComments) {
    return this.http.post<IComments>('https://jsonplaceholder.typicode.com/comments', comment,
      { headers: new HttpHeaders().set('apiKey', 'dsfsdjkhdshg56') });
  }

  addProduct(product: IProduct) {
    return this.http.post<IComments>('https://jsonplaceholder.typicode.com/comments', product,
      { headers: new HttpHeaders().set('apiKey', 'dsfsdjkhdshg56') });
  }

  getPhotos() {
    const photosRequest = new HttpRequest('GET',
      'https://jsonplaceholder.typicode.com/photos', {
      reportProgress: true, headers: new HttpHeaders().set('apiKey', 'dsfsdjkhdshg56')
    });
    return this.http.request(photosRequest);
  }

}
