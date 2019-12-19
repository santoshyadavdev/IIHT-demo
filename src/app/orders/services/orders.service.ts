import { Injectable } from '@angular/core';
import { IOrders } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  orders: Array<IOrders> = [
    { customerName: 'John', productQty: 2, total: 4000, orderDate: new Date('11-Dec-2019') },
    { customerName: 'Chris', productQty: 4, total: 5000, orderDate: new Date('13-Dec-2019') },
    { customerName: 'Tim', productQty: 5, total: 7000, orderDate: new Date('15-Dec-2019') }
  ];
  constructor() {
    console.log('new instance created');
  }

  getOrders() {
    return this.orders
  }

  addOrder() {
    this.orders.push(
      { customerName: 'Tim', productQty: 8, total: 9000, orderDate: new Date('15-Dec-2019') }
    )
  }
}
