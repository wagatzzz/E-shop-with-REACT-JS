import React from 'react';
import Layout from '../components/layout/Layout';
import ProductItem from '../components/specific/ProductItem';
import useFetchCategoryData from '../hooks/useFetchCategoryData';  // Correct import path
import useSearch from '../hooks/useSearch';
import useCart from '../hooks/useCart';

const MenPage = () => {
  const category = "men's clothing";
  const { data, error } = useFetchCategoryData(category);
  const { searchQuery, filteredItems, handleSearch } = useSearch(data);
  const { addToCart } = useCart();

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    <Layout showBanner={true} onSearch={handleSearch}>
      <div>
        <div className="product-grid">
          {filteredItems.map(item => (
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

export default MenPage;
