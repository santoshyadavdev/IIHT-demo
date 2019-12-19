import { Injectable } from '@angular/core';
import { OrdersService } from './orders.service';

@Injectable({
  providedIn: 'root'
})
export class NeworderService extends OrdersService {

  constructor() {
    super();
  }

  getOrders() {
    return this.orders = [
      { customerName: 'John', productQty: 2, total: 4000, orderDate: new Date('11-Dec-2019') },
      { customerName: 'Chris', productQty: 4, total: 5000, orderDate: new Date('13-Dec-2019') },
      { customerName: 'Tim', productQty: 5, total: 7000, orderDate: new Date('15-Dec-2019') },
      { customerName: 'Tim', productQty: 3, total: 2000, orderDate: new Date('15-Dec-2019') }
    ];
  }

}
