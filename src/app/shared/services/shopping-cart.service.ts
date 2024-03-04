import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product, ProductWithAmount } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private cartItems: ProductWithAmount[] = [];
  private totalProducts: BehaviorSubject<number> = new BehaviorSubject<number>(
    0
  );
  private totalCost: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() {}

  getCartItems(): Observable<Product[]> {
    return new Observable((observer) => observer.next(this.cartItems));
  }

  getTotalProducts(): Observable<number> {
    return this.totalProducts.asObservable();
  }

  getTotalCost(): Observable<number> {
    return this.totalCost.asObservable();
  }
}
