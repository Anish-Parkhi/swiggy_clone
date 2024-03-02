import { useEffect, useState } from 'react';

const useFetchApi = (apiURL) => {
  const [apiData, setApiData] = useState('');
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const data = await fetch(apiURL);
        const json = await data.json();
        setApiData(json);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  }, []);
  return apiData;
};

export default useFetchApi;
