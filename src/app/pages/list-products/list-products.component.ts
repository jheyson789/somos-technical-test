import { Component } from '@angular/core';
import { ShoppingCartService } from '../../shared/services/shopping-cart.service';
import { productsData } from '../../shared/data/products.data';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
})
export class ListProductsComponent {
  public products = productsData;
  constructor(public _shoppingCart: ShoppingCartService) {}
}
