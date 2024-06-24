// ProductCard.js (Component)

import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
  <Link to={`/products/${product._id}`}>
    <img
      src={product.image}
      alt={product.title}
      className="w-full h-48 object-cover object-center"
    />
  </Link>
  <div className="p-4">
    <h2 className="text-lg font-semibold text-gray-900 mb-2">{product.title}</h2>
    <p className="text-gray-700">${product.price}</p>
    <p className="text-gray-700">{product.color}</p>
    <div className="flex justify-center mt-3">
      <Link
        to={`/products/${product._id}`}
        className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded-sm text-sm text-center transition duration-300"
        style={{ backgroundColor: '#27374D' }}
      >
        View Details
      </Link>
    </div>
  </div>
</div>

  );
};

export default ProductCard;
