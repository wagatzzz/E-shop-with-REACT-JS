export const fetchData = async (category) => {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  };
  