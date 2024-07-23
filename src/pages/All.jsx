import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import { fetchData } from '../services/api';
import ProductItem from '../components/specific/ProductItem';

const All = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const categories = ["women's clothing", "men's clothing", 'jewelery'];
        const allData = await Promise.all(categories.map(category => fetchData(category)));
        const combinedData = allData.flat();
        setAllProducts(combinedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAllData();
  }, []);

  const addToCart = (product) => {
    // Retrieve cart items from local storage
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product already exists in the cart
    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
      // If the item exists, increase its quantity
      existingItem.quantity += 1;
    } else {
      // Otherwise, add the product to the cart with a quantity of 1
      const newCartItem = { ...product, quantity: 1 };
      cartItems.push(newCartItem);
    }

    // Update local storage with the updated cart items
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
          {allProducts.map(product => (
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
