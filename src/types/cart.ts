import type  { Product }  from './product';

export type CartItem = {
    product: Product;
    quantity: number;
}

//We need to tell Typescript what exists in this context!
export type CartContextType = {
    cart: CartItem[];
    addToCart: (product: Product, quantity: number) => void;
    deleteFromCart: (id: string) => void;
    incrementItem: (id: string) => void;
    decrementItem: (id: string) => void;
    emptyCart: () => void
}