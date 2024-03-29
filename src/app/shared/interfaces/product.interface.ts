export interface Product {
  id: string;
  name: string;
  price: number;
}

export interface ProductWithAmount extends Product {
  amount: number;
}
