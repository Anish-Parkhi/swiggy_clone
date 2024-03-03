import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CartContext from '../../utils/CartContext';
import CartItems from './CartItems';

const Cart = () => {
  const cartData = useContext(CartContext);
  const navigate = useNavigate();

  const EmptyCart = () => {
    return (
      <div className="flex flex-col justify-between items-center gap-8 p-2">
        <div className="text-xl">Your cart is empty</div>
        <div>You can go to home page to view more restaurants</div>
        <button
          onClick={() => navigate('/')}
          className="border-2 p-2 bg-orange-700	text-white rounded"
        >
          SEE RESTAURANTS NEAR YOU
        </button>
      </div>
    );
  };

  return (
    <div className="w-2/3 m-auto p-3 ">
      <div>
        {cartData.length > 0 ? (
          <>
            <div className="font-bold text-lg	">Cart</div>
            cartData?.cartItems?.map((item, index) => (
            <CartItems data={item} key={index} />
            ))
          </>
        ) : (
          <EmptyCart />
        )}
      </div>
    </div>
  );
};

export default Cart;
