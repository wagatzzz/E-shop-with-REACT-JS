import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import { fetchData } from '../services/dataServices';
import ProductItem from '../components/specific/ProductItem';

const WomenPage = () => {
  const category = "women's clothing";
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchData(category)
      .then(response => {
        setData(response);
        setFilteredData(response);
        console.log(response);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [category]);

  useEffect(() => {
    if (searchQuery) {
      const filteredItems = data.filter(item =>
        item && item.title && item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filteredItems);
    } else {
      setFilteredData(data);
    }
  }, [searchQuery, data]);

  const addToCart = (product) => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);

    if (existingItemIndex !== -1) {
      cartItems[existingItemIndex].quantity += 1;
    } else {
      product.quantity = 1;
      cartItems.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cartItems));

    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.textContent = 'Product added to cart!';
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 1000);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Layout showBanner={true} onSearch={handleSearch}>
      <div>
        <div className="product-grid">
          {filteredData.map(item => (
            <ProductItem
              key={item.id}
              product={item}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default WomenPage;
