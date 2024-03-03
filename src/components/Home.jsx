import { useState } from 'react';
import { cuisineAPIURL } from '../../utils/common/apiURL';
import useFetchApi from '../../utils/useFetchApi';
import Cuisines from './Cuisines';
import Footer from './Footer';
import ResturantsListing from './ResturantsListing';
import ShimmerMain from './Shimmer/ShimmerMain';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const apiData = useFetchApi(cuisineAPIURL, setLoading);

  return (
    <div>
      {loading ? (
        <ShimmerMain />
      ) : (
        <div className="w-4/5 m-auto">
          {' '}
          <Cuisines apiData={apiData} />
          <ResturantsListing apiData={apiData} /> <Footer />
        </div>
      )}
    </div>
  );
};

export default Home;
