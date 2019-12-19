import {
  Component, OnInit, Input, Output, OnDestroy,
  EventEmitter, ChangeDetectionStrategy, OnChanges, SimpleChanges
} from '@angular/core';
import { IProduct } from '../iproduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit, OnChanges, OnDestroy {

  @Input() productList: Array<IProduct> = [];
  @Input() title: string;

  @Output() selectedProduct = new EventEmitter<IProduct>();
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    // if (changes.title.currentValue === 'Test') {
    //   // logic 
    // }
    console.log(changes);
  }

  ngOnInit() {
  }

  currentProduct(product: IProduct) {
    this.selectedProduct.emit(product);
  }

  ngOnDestroy() {
    console.log('destroy event is called');
  }

}
