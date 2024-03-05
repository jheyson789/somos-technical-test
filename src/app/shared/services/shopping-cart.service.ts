import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductWithAmount } from '../interfaces/product.interface';
import { productsData } from '../data/products.data';

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

  getCartItems(): Observable<ProductWithAmount[]> {
    return new Observable((observer) => observer.next(this.cartItems));
  }
  getCartItemById(id: string): Observable<ProductWithAmount> {
    return new Observable((observer) => {
      const product = this.cartItems.find((pr) => pr.id === id);
      observer.next(product);
    });
  }

  getTotalProducts(): Observable<number> {
    return this.totalProducts.asObservable();
  }

  getTotalCost(): Observable<number> {
    return this.totalCost.asObservable();
  }

  getAmount(productId: string): number {
    const product = this.cartItems.find((product) => product.id === productId);
    return product ? product.amount : 0;
  }

  setProduct(product: ProductWithAmount): Observable<void> {
    const productIndex = this.cartItems.findIndex((pr) => pr.id === product.id);
    if (productIndex === -1) this.cartItems.push(product);
    else this.cartItems[productIndex] = product;
    this.updateCartTotals();
    return new Observable((observable) => observable.next());
  }

  addAmountProduct(data: { productId: string; amount: number }): void {
    const productIndex = this.cartItems.findIndex(
      (product) => product.id === data.productId
    );
    if (productIndex === -1) {
      const product = productsData.find((pr) => pr.id === data.productId)!;
      this.cartItems.push({ ...product, amount: data.amount });
    } else {
      this.cartItems[productIndex].amount += data.amount;
      if (this.cartItems[productIndex].amount <= 0)
        this.cartItems.splice(productIndex, 1);
    }
    this.updateCartTotals();
  }

  private updateCartTotals(): void {
    this.totalProducts.next(
      this.cartItems.reduce((total, product) => total + product.amount, 0)
    );
    this.totalCost.next(this.calculateTotalCost());
  }

  private calculateTotalCost(): number {
    return this.cartItems.reduce(
      (total, product) => total + product.price * product.amount,
      0
    );
  }
}
