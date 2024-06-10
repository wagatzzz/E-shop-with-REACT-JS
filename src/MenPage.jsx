import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { useParams } from 'react-router-dom';
import { fetchData } from './api';
import ProductItem from './ProductItem';

const WomenPage = () => {
  const category = "men's clothing";
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(category)
      .then(response => {
        setData(response);
        console.log(response);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [category]);

  return (
    <Layout showBanner={true}>
      <div>
        <h1>MEN</h1>
        {data.map(item => {
          return (
            <ProductItem
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          );
        })}
      </div>
    </Layout>
  );
};

export default WomenPage;
