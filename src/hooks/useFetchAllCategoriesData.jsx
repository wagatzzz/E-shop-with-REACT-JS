import { useState, useEffect } from 'react';
import { fetchData } from '../services/dataServices';

const useFetchAllCategoriesData = (categories) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const allData = await Promise.all(categories.map(category => fetchData(category)));
        const combinedData = allData.flat();
        setData(combinedData);
      } catch (error) {
        setError(error);
        console.error('Error fetching data:', error);
      }
    };

    fetchAllData();
  }, [categories]);

  return { data, error };
};

export default useFetchAllCategoriesData;
