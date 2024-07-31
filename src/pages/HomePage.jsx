import React from 'react';
import Layout from '../components/layout/Layout';
import ProductItem from '../components/specific/ProductItem';
import { Link } from 'react-router-dom';
import useFetchCategoryData from '../hooks/useFetchCategoryData';
import useCart from '../hooks/useCart';

const HomePage = () => {
  const category = "women's clothing";
  const { data: womenProducts, error } = useFetchCategoryData(category);
  const { addToCart } = useCart();

  if (error) {
    return <div>Error fetching women's products: {error.message}</div>;
  }

  const firstFourItems = womenProducts.slice(0, 4);

  return (
    <Layout>
      <div className="container mx-auto p-4 md:p-10">
        <section className="flex flex-col md:flex-row md:justify-between gap-10 z-30">
          <div className="flex flex-col items-start text-black z-10">
            <h1 className="text-2xl font-black leading-[125%] sm:text-2xl md:text-[48px] md:leading-[125%]">
              <span className="relative after:w-[120%] after:h-full after:bg-white after:block after:absolute after:-z-10 after:top-0 after:-rotate-2">
                NEW
              </span>
              <br /> ARRIVALS <br />
              <span className="relative after:w-[120%] after:h-full after:bg-primary after:block after:absolute after:-z-10 after:top-0 after:-rotate-2">
                ONLY!
              </span>
            </h1>
            <p className="md:text-[32px]">Latest collections for everyone.</p>
            <div className="flex flex-col md:flex-row md:items-center justify-evenly gap-9 pt-8">
              <Link
                to={`/all`}
                className="bg-black text-white rounded-md py-4 px-4 text-center hover:bg-white hover:text-black hover:shadow-md"
              >
                Shop Now
              </Link>
            </div>
          </div>
          <div>
            <img
              className="w-full"
              src="banner-image2-removebg-preview.png"
              alt="banner image"
            />
          </div>
        </section>
        <section>
          <div className="flex justify-center items-center mt-10 mb-8 relative">
            <h1 className="text-2xl font-black">
              POPULAR IN WOMEN
            </h1>
            <span className="w-48 h-1 bg-red-500 absolute mt-10"></span>
          </div>
          <div className="product-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {firstFourItems.map(product => (
              <ProductItem
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default HomePage;
