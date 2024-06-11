import React from 'react';

const ProductItem = ({ product, addToCart }) => {
  const { image, title, description, price } = product;

  const handleClick = () => {
    // Call the addToCart function with the product object
    addToCart(product);
  };

  return (
    <div className="card bg-white shadow-md rounded-md p-4" onClick={handleClick}>
      <div className="flex flex-col">
        <img 
          src={image} 
          alt="Product Image" 
          className="rounded-md mb-4" 
          style={{ width: '150px', height: '150px' }} 
        />
        <h2 
          className="text-lg font-semibold mb-2" 
          style={{ 
            overflow: 'hidden', 
            textOverflow: 'ellipsis', 
            display: '-webkit-box', 
            WebkitLineClamp: '2', 
            WebkitBoxOrient: 'vertical' 
          }}
        >
          {title}
        </h2>
        <p 
          className="text-sm text-gray-600 mb-2" 
          style={{ 
            overflow: 'hidden', 
            textOverflow: 'ellipsis', 
            display: '-webkit-box', 
            WebkitLineClamp: '4', 
            WebkitBoxOrient: 'vertical' 
          }}
        >
          {description}
        </p>
        <p className="text-lg text-gray-800">${price}</p>
      </div>
    </div>
  );
};

export default ProductItem;
