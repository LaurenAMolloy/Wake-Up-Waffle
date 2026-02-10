import type { Product } from './Product';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
}

export type CartContextType = {
  cart: CartItem[]
  addToCart: (product: Product, quantity: number) => void
  deleteFromCart: (id: string) => void
  incrementItem: (id: string) => void
  decrementItem: (id: string) => void
  emptyCart: () => void
}