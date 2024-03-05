import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  Product,
  ProductWithAmount,
} from '../../shared/interfaces/product.interface';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss'],
})
export class CardProductComponent {
  @Input('product') product: Product = {
    id: '',
    name: '',
    price: 0,
  };
  @Input('amount') amount: number = 0;
  @Input('typeCard') typeCard: string = '';

  @Output('productValue') productValue = new EventEmitter<{
    productId: string;
    amount: number;
  }>();

  emitAmount(amount: number) {
    this.productValue.emit({ productId: this.product.id, amount });
  }
}
