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

  const addToCart = (product) => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = [...cartItems, product];
    localStorage.setItem('cart', JSON.stringify(updatedCart));

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
