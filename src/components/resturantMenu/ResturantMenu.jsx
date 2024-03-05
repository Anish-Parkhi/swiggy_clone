import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import useFetchApi from '../../../utils/useFetchApi';
import CategoryItems from './CategoryItems';
import ResturantName from './ResturantName';
import ShimmerResturant from '../../components/Shimmer/ShimmerResturant';

const ResturantMenu = () => {
  const location = useLocation();
  const resId = location.state;
  const [loading, setLoading] = useState(true);

  const apiData = useFetchApi(
    `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.8258884&lng=80.0395205&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`,
    setLoading
  );

  const categoriesData =
    apiData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (item) =>
        item?.card?.card['@type'] ===
        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    );

  if (loading) {
    return (
      <div className="w-3/6 m-auto p-4">
        <ShimmerResturant />
      </div>
    );
  }

  return (
    <div className="w-3/6 m-auto p-4">
      <ResturantName apiData={apiData} />
      <div className="flex flex-col gap-3 mt-5">
        {categoriesData?.map((categoryItem, index) => (
          <CategoryItems
            key={index}
            categoryItem={categoryItem}
            myIndex={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ResturantMenu;
