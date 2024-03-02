import useFetchApi from '../../utils/useFetchApi';
import { cuisineAPIURL } from '../../utils/common/apiURL';

const Cuisines = () => {
  const apiData = useFetchApi(cuisineAPIURL);
  console.log(apiData?.data?.cards[0]?.card?.card?.header?.title);

  return (
    <div>
      <div>Cuisines</div>
    </div>
  );
};

export default Cuisines;
