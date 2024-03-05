import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';

export abstract class ProductService {
  abstract getProducts(): Observable<Product[]>;
  abstract addProduct(product: Product): Observable<void>;
  abstract updateProduct(id: string, product: Product): Observable<void>;
  abstract deleteProduct(id: string): Observable<void>;
}
