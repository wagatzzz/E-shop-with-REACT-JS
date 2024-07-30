import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import { fetchData } from '../services/dataServices';
import ProductItem from '../components/specific/ProductItem';

const All = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const categories = ["women's clothing", "men's clothing", 'jewelery'];
        const allData = await Promise.all(categories.map(category => fetchData(category)));
        const combinedData = allData.flat();
        setAllProducts(combinedData);
        setFilteredProducts(combinedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAllData();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filteredItems = allProducts.filter(item =>
        item && item.title && item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filteredItems);
    } else {
      setFilteredProducts(allProducts);
    }
  }, [searchQuery, allProducts]);

  const addToCart = (product) => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      const newCartItem = { ...product, quantity: 1 };
      cartItems.push(newCartItem);
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
          {filteredProducts.map(product => (
            <ProductItem
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default All;
