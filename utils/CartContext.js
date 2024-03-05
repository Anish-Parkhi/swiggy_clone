import { createContext, useContext } from 'react';

export const CartContext = createContext(null);

export function useCartContext() {
  const context = useContext(CartContext);
  if (!context) return null;

  return context;
}



