import apiClient from './api';

export const fetchData = async (category) => {
  try {
    const response = await apiClient.get(`/products/category/${category}`);
    
    if (response.status !== 200) {
      throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
    }

    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
