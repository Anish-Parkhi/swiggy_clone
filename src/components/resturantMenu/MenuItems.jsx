/* eslint-disable react/prop-types */
import { useCartContext } from '../../../utils/CartContext';
import CDNURL from '../../../utils/common/cdnURl';
import { nonVegLogo, vegLogo } from '../../../utils/common/imageLinks';

const MenuItems = ({ foodItem }) => {
  const { name, imageId: image, price, description, isVeg } = foodItem || {};
  console.log(foodItem);

  const { addToCart } = useCartContext();

  const notFound =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkTzf4dWIc65K6-mymapJODZEtobt7J-XXbkNCcz8gVQ&s';

  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <div className="basis-3/4">
          <img className="w-5 mb-2" src={isVeg ? vegLogo : nonVegLogo} />
          <div className="font-bold">{name}</div>
          <div>₹ {price / 100}</div>
          <div className="text-sm">{description}</div>
        </div>
        <div
          style={{ zIndex: 999 }}
          className="relative flex flex-col justify-center basis-1/5 items-end"
        >
          <img
            className="w-4/5 self-center text-white h-4/5	basis-4/5"
            src={image ? CDNURL + image : notFound}
          />
          <button
            onClick={() => {
              addToCart(foodItem?.card?.info);
            }}
            className="absolute top-3/4 bg-white p-2 self-center border-2 rounded-md text-lime-600	w-2/3 m-auto"
          >
            Add
          </button>
        </div>
      </div>
      <hr className="h-px mt-8 mb-4 bg-gray-200 border-0 dark:bg-gray-300"></hr>
    </>
  );
};

export default MenuItems;
