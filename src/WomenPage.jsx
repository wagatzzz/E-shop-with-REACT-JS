import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { fetchData } from './api';
import ProductItem from './ProductItem';

const WomenPage = () => {
  const category = "women's clothing";
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(category)
      .then(response => {
        setData(response);
        console.log(response);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [category]);

  const addToCart = (product) => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);

    if (existingItemIndex !== -1) {
      // If the item already exists in the cart, update its quantity
      cartItems[existingItemIndex].quantity += 1;
    } else {
      // If the item is new to the cart, add it with a quantity of 1
      product.quantity = 1;
      cartItems.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cartItems));

    // Create toast notification element
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.textContent = 'Product added to cart!';
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 1000);
  };

  return (
    <Layout showBanner={true}>
      <div>
        <div className="product-grid">
          {data.map(item => (
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
