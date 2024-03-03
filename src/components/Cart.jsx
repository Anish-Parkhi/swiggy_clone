import { useContext } from 'react';
import CartContext from '../../utils/CartContext';

const Cart = () => {
  const cartData = useContext(CartContext);
  console.log(cartData.cartItems);

  return (
    <div>
      <div>Cart</div>
    </div>
  );
};

export default Cart;
