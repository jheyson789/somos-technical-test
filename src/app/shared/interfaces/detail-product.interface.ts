import { ProductWithAmount } from './product.interface';

export interface DetailProduct {
  id: string;
  total: number;
  products: ProductWithAmount[];
}
