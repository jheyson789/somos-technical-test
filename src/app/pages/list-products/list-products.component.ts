import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../shared/services/shopping-cart.service';
import { Product } from '../../shared/interfaces/product.interface';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
})
export class ListProductsComponent implements OnInit {
  public products: Product[] = [];
  constructor(
    public _shoppingCart: ShoppingCartService,
    private productService: ProductService
  ) {}
  ngOnInit(): void {
    this.loadProducts();
  }
  loadProducts() {
    this.productService
      .getProducts()
      .subscribe({ next: (values) => (this.products = values) });
  }
}
