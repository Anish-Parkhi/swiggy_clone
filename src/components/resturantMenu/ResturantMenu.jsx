import useFetchApi from '../../../utils/useFetchApi';
import { useLocation } from 'react-router-dom';
import ResturantName from './ResturantName';

const ResturantMenu = () => {
  const location = useLocation();
  const resId = location.state;

  const apiData = useFetchApi(
    `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.8258884&lng=80.0395205&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
  );

  return (
    <div className="w-3/6 m-auto p-4">
      <ResturantName apiData={apiData} />
    </div>
  );
};

export default ResturantMenu;
