import { Injectable } from '@angular/core';
import { IProduct } from '../iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productList: Array<IProduct> = [];
  constructor() { }

  getProducts() {
    return this.productList = [
      { name: 'Product1', mfd: new Date('12-Feb-2019'), price: 50000, seller: 'Amazon' },
      { name: 'Product2', mfd: new Date('12-Mar-2019'), price: 40000, seller: 'Filpkart' },
      { name: 'Product3', mfd: new Date('12-Jan-2019'), price: 5000, seller: 'Ebay' }
    ];
  }
}
