//Combine Reducers with Context
import { useReducer, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { CartItem } from '../types/cart';
import type { Product } from '../types/product';
import { CartContext } from './CartContext';

const initCart = () => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : []
}

type CartProviderProps = {
    children: ReactNode;
};

//This is our contract!
type CartAction = 
    | { type: 'ADD_ITEM'; payload: { product: any, quantity: number } }
    | { type: 'DELETE_ITEM'; payload: { id: string } }
    | { type: 'DECREMENT_ITEM'; payload: { id: string } }
    | { type: 'INCREMENT_ITEM'; payload: { id: string } }


function cartReducer(cart: CartItem[], action: CartAction) {
    switch(action.type) {
      case 'ADD_ITEM':{
        const existingItem = cart.find(
            item => item.product.id === action.payload.product.id
        )

        if(existingItem) {
            return cart.map(item => 
            item.product.id === action.payload.product.id ? {...item, quantity: item.quantity + action.payload.quantity} : item
        )}

        return [
            ...cart,
            {  
                product: action.payload.product,
                quantity: action.payload.quantity,
            },
        ];
      }


      case 'DELETE_ITEM': {
        return cart.filter(item => item.product.id !== action.payload.id)
      }

      case 'DECREMENT_ITEM': {
        return cart
        .map(item =>
            item.product.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1}
            : item)
            .filter(item => item.quantity > 0)
      }

      case 'INCREMENT_ITEM': {
        return cart
        .map(item =>
            item.product.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1}
            : item)
      }

        default:
            return cart
    }
  }


export function CartProvider({children}: CartProviderProps) {
    //lazy initializer only runs once
    const[cart, dispatch] = useReducer(cartReducer, [], initCart);
    console.log(cart)

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart]);

    
    function addToCart(product: Product, quantity: number) {
        dispatch({
            type: 'ADD_ITEM',
            payload: { product, quantity }
        })
    };

    function deleteFromCart(id: string) {
        dispatch({
            type: 'DELETE_ITEM',
            payload: { id },
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



