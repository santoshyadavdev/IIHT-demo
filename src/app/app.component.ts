import { Component, DoCheck, Host } from '@angular/core';
import { OrdersService } from './orders/services/orders.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<h1>Hello World!</h1>
  // <h2>Angular</h2>`,
  styleUrls: ['./app.component.css'],
  // styles: ['h1 { background-color: steelblue; }']
})
export class AppComponent implements DoCheck {
  role = 'Users';
  title = 'ecomapp';

  constructor(@Host() private orderService: OrdersService) {

  }

  ngDoCheck() {
    console.log('do check is called');
  }

  addOrders(){
    this.orderService.addOrder();
  }
}
