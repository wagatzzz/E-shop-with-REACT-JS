import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { fetchData } from './api';
import ProductItem from './ProductItem';

const All = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const categories = ["women's clothing", "men's clothing", 'jewelery'];
        const allData = await Promise.all(categories.map(category => fetchData(category)));
        const combinedData = allData.flat();
        setAllProducts(combinedData);
        console.log(combinedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAllData();
  }, []);

  return (
    <Layout showBanner={true}>
      <div>
        <h1>ALL</h1>
        {allProducts.map(product => (
          <ProductItem
            key={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </Layout>
  );
};

export default All;
