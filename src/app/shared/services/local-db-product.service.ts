import { Injectable } from '@angular/core';
import { ProductService } from './product.service';
import { Observable, of } from 'rxjs';
import { Product } from '../interfaces/product.interface';
import { productsData } from '../data/products.data';

@Injectable({ providedIn: 'root' })
export class LocalDBProductService extends ProductService {
  private products = productsData;
  getProducts(): Observable<Product[]> {
    return of(this.products);
  }
  addProduct(product: Product): Observable<void> {
    this.products.push(product);
    return of();
  }
  updateProduct(id: string, product: Product): Observable<void> {
    const productIndex = this.products.findIndex((pr) => pr.id === id);
    if (!productIndex) throw new Error('No se encontró el producto');
    this.products[productIndex] = product;
    return of();
  }
  deleteProduct(id: string): Observable<void> {
    const productIndex = this.products.findIndex((pr) => pr.id === id);
    if (!productIndex) throw new Error('No se encontró el producto');
    this.products.splice(productIndex, 1);
    return of();
  }
}
