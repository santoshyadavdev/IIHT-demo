import { Component, OnInit, Self } from '@angular/core';
import { OrdersService } from './services/orders.service';
import { IOrders } from './services/order';
import { NeworderService } from './services/neworder.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  // providers: [OrdersService]
  providers : [{ provide : OrdersService , useClass: NeworderService }]
})
export class OrdersComponent implements OnInit {

  orderList: Array<IOrders>;
  // orderService = new OrdersService();
  constructor(@Self() public orderService: OrdersService) {
    this.orderList = [];
  }

  ngOnInit() {
    this.orderList = this.orderService.getOrders();
  }

}
