import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { useParams } from 'react-router-dom';
import { fetchData } from './api';
import ProductItem from './ProductItem';

const WomenPage = () => {
  const { category } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(category)
      .then(response => {
        setData(response);
        console.log('Products fetched successfully:', response);
  })
      .catch(error => console.error('Error fetching data:', error));
  }, [category]);

  return (
    <Layout>
      <div>
        <h1>WOMEN</h1>
        {data.map(item => (
          console.log(item),
          <ProductItem
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </Layout>
  );
};

export default WomenPage;
