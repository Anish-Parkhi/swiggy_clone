import useFetchApi from '../../utils/useFetchApi';
import Cuisines from './Cuisines';
import ResturantsListing from './ResturantsListing';
import Footer from './Footer';

import { cuisineAPIURL } from '../../utils/common/apiURL';
import { useState } from 'react';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const apiData = useFetchApi(cuisineAPIURL);
  return (
    <div>
      <div className="w-4/5 m-auto">
        <Cuisines apiData={apiData} />
        <ResturantsListing apiData={apiData} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
