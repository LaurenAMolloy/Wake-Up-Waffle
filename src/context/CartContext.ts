import { createContext } from 'react';
import type { CartContextType } from '@/types/Cart';

export const CartContext = createContext<CartContextType | undefined>(undefined);