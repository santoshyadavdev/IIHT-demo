import { Injectable } from '@angular/core';

import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { IComments } from './comments';
import { IProduct } from 'src/app/product/iproduct';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getComments() {
    return this.http.get<IComments[]>('https://jsonplaceholder.typicode.com/comments');
  }

  addComments(comment: IComments) {
    return this.http.post<IComments>('https://jsonplaceholder.typicode.com/comments', comment, 
    { headers : new HttpHeaders().set('apiKey', 'dsfsdjkhdshg56')});
  }

  addProduct(product: IProduct) {
    return this.http.post<IComments>('https://jsonplaceholder.typicode.com/comments', product, 
    { headers : new HttpHeaders().set('apiKey', 'dsfsdjkhdshg56')});
  }

  getPhotos() {
    const photosRequest = new HttpRequest('GET',
      'https://jsonplaceholder.typicode.com/photos', {
      reportProgress: true ,  headers : new HttpHeaders().set('apiKey', 'dsfsdjkhdshg56')
    });
    return this.http.request(photosRequest);
  }

}
