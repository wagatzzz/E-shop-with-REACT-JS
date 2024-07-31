import { useState, useEffect } from 'react';
import { fetchData } from '../services/dataServices';

const useFetchCategoryData = (category) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataForCategory = async () => {
      try {
        const result = await fetchData(category);
        setData(result);
      } catch (error) {
        setError(error);
        console.error('Error fetching data:', error);
      }
    };

    fetchDataForCategory();
  }, [category]);

  return { data, error };
};

export default useFetchCategoryData;
