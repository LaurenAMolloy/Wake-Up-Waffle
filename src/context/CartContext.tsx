//Combine Reducers with Context
import { createContext, useReducer } from 'react';
import type { ReactNode } from 'react';

type CartProviderProps = {
    children: ReactNode;
};

type Product = {
    id: String,
    name: String,
    description: String,
    image: String,
    price: Number,
}

type CartItem = {
    id: string;
    product: any;
    quantity: number;
}

type CartAction = 
    | { type: 'ADD_ITEM'; payload: { product: any, quantity: number } }
    | { type: 'DELETE_ITEM'; payload: { id: string } }
    | { type: 'DECREMENT_ITEM'; payload: { id: string } }
    | { type: 'INCREMENT_ITEM'; payload: { id: string } }

//We need to tell Typescript what exists in this context!
type CartContextType = {
    cart: CartItem[];
    addToCart: (product: Product, quantity: number) => void;
    deleteFromCart: (id: string) => void;
    incrementItem: (id: string) => void;
    decrementItem: (id: string) => void;
}
//Cart Reducer
//cart is the initial state
//action describes what happens
function cartReducer(cart: CartItem[], action: CartAction) {
    switch(action.type) {
      case 'ADD_ITEM':{
        //Find existing item
        const existingItem = cart.find(
            item => item.id === action.payload.product.id
        )

        //if item in cart update quantity
        if(existingItem) {
            return cart.map(item => 
            item.id === action.payload.product.id ? {...item, quantity: item.quantity + action.payload.quantity} : item
        )}

        return [
            ...cart,
            {
                id: action.payload.product.id,
                product: action.payload.product,
                quantity: 1,
            },
        ];
      }

      case 'DELETE_ITEM': {
        //Return cart with everything but this...
        return cart.filter(item => item.id !== action.payload.id)
      }

      case 'DECREMENT_ITEM': {
        //REDUCE THE QUANITY
        //IF QUANTITY IS 0 DELETE ITEM
        return cart
        .map(item =>
            item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1}
            : item)
            //RETURN ITEMS WITH Q BIGGER THAN 0
            .filter(item => item.quantity > 0)
      }
      case 'INCREMENT_ITEM': {
        //INCREASE THE QUANITY
        return cart
        .map(item =>
            item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1}
            : item)
      }

        default:
            return cart
    }
  }


export function CartProvider({children}: CartProviderProps) {
    //cart initial state is an empty array
    const[cart, dispatch] = useReducer(cartReducer, []);

    //add or update an object
    function addToCart(product: Product, quantity: number) {
        dispatch({
            type: 'ADD_ITEM',
            payload: { product, quantity }
        })
    };

    //remove from cart remove an object
    function deleteFromCart(id: string) {
        dispatch({
            type: 'DELETE_ITEM',
            payload: {id},
        })
    };

    function incrementItem(id: string) {
        dispatch({
            type: 'INCREMENT_ITEM',
            payload: { id },
        })
    };

    function decrementItem(id: string) {
        dispatch({
            type: 'DECREMENT_ITEM',
            payload: { id },
        })
    }

    return (
      <CartContext.Provider value={{ cart, addToCart, deleteFromCart, incrementItem, decrementItem }}> 
            {children}
      </CartContext.Provider> 
    ) 
}

//values to be added from app?
export const CartContext = createContext<CartContextType | undefined>(undefined);

