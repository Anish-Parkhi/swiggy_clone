import { useEffect, useState } from 'react';

const useFetchApi = (apiURL, setLoading) => {
  const [apiData, setApiData] = useState('');
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const data = await fetch(apiURL);
        const json = await data.json();
        setApiData(json);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  }, [apiURL, setLoading]);
  return apiData;
};

export default useFetchApi;
