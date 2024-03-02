import CDNURL from '../../../utils/common/cdnURl';
import { vegLogo, nonVegLogo } from '../../../utils/common/imageLinks';

const MenuItems = ({ foodItem }) => {
  const name = foodItem?.card?.info?.name;
  const image = foodItem?.card?.info?.imageId;
  const price = foodItem?.card?.info?.price;
  const description = foodItem?.card?.info?.description;
  const isVeg = foodItem?.card?.info?.itemAttribute?.vegClassifier;

  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <div className="basis-3/4">
          <img
            className="w-5 mb-2"
            src={isVeg !== 'NONVEG' ? vegLogo : nonVegLogo}
          />
          <div className="font-bold">{name}</div>
          <div>₹ {price / 100}</div>
          <div className="text-sm">{description}</div>
        </div>
        <div className="basis-1/5 items-end">
          <img className="w-4/5 self-end" src={CDNURL + image} />
        </div>
      </div>
      <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-300"></hr>
    </>
  );
};

export default MenuItems;
