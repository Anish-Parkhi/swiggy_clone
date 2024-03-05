import React from 'react'
import { CartContext } from '../utils/CartContext'
import { useState } from 'react'

const MenuProvider = ({children}) => {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (foodItem) => {
    setCartItems((prev) => [
      ...prev,
      foodItem
    ]);
  }

  return (
    <CartContext.Provider value={{cartItems, setCartItems, addToCart}} >
      {children}
    </CartContext.Provider>
  )
}

export default MenuProvider

