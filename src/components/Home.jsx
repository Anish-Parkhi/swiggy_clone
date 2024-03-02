import useFetchApi from '../../utils/useFetchApi';
import Cuisines from './Cuisines';
import ResturantsListing from './ResturantsListing';

import { cuisineAPIURL } from '../../utils/common/apiURL';

//make an api call over here and then pass it down to all the components

const Home = () => {
  const apiData = useFetchApi(cuisineAPIURL);
  return (
    <div>
      <div className="w-4/5 m-auto">
        <Cuisines apiData={apiData} />
        <ResturantsListing apiData={apiData} />
      </div>
    </div>
  );
};

export default Home;
