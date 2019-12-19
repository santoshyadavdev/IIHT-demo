import { Component, OnInit, SkipSelf, Optional } from '@angular/core';
import { IProduct } from './iproduct';
import { OrdersService } from '../orders/services/orders.service';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [OrdersService]
})
export class ProductComponent implements OnInit {

  name = 'MacBook Pro';

  price = 1500;

  hidden = false;

  product: IProduct;

  products: Array<IProduct> = [];

  constructor(@Optional() private orderService: OrdersService,
    @SkipSelf() private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  toggle() {
    this.hidden = !this.hidden;
  }

  trackByFn(i: number, data: IProduct) {
    return i;
  }

  getProduct(product: IProduct) {
    this.product = product;
  }

  addProduct() {
    this.products = [...this.products, { name: 'Product4', mfd: new Date('12-Dev-2019'), price: 45000, seller: 'Amazon' }];

    // this.products.push(
    //   { name: 'Product4', mfd: new Date('12-Dev-2019'), price: 45000, seller: 'Amazon' }

    // )
  }

}
