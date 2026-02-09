import type { Product } from './Product';

export interface CartItem extends Product {
  quantity: number;
}

export interface Cart {
  items: CartItem[];
}
