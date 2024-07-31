import React from 'react';
import Layout from '../components/layout/Layout';
import ProductItem from '../components/specific/ProductItem';
import useFetchAllCategoriesData from '../hooks/useFetchAllCategoriesData';
import useSearch from '../hooks/useSearch';
import useCart from '../hooks/useCart';

const All = () => {
  const categories = ["women's clothing", "men's clothing", 'jewelery'];
  const { data, error } = useFetchAllCategoriesData(categories);
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

export default All;
