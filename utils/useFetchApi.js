import { useEffect, useState } from 'react';

const useFetchApi = (apiURL) => {
  const [apiData, setApiData] = useState('');
  useEffect(() => {
    const fetchApi = async () => {
      const data = await fetch(apiURL);
      const json = await data.json();
      setApiData(json);
    };
    fetchApi();
  }, []);
  return apiData;
};

export default useFetchApi;
