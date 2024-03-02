import { useLocation } from 'react-router-dom';
import useFetchApi from '../../../utils/useFetchApi';
import CategoryItems from './CategoryItems';
import ResturantName from './ResturantName';

const ResturantMenu = () => {
  const location = useLocation();
  const resId = location.state;

  const apiData = useFetchApi(
    `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.8258884&lng=80.0395205&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
  );

  const categoriesData =
    apiData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (item) =>
        item?.card?.card['@type'] ===
        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    );

  return (
    <div className="w-3/6 m-auto p-4">
      <ResturantName apiData={apiData} />
      <div className="flex flex-col gap-3 mt-5">
        {categoriesData?.map((categoryItem, index) => (
          <CategoryItems key={index} categoryItem={categoryItem} />
        ))}
      </div>
    </div>
  );
};

export default ResturantMenu;
