import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
  <div className="border p-4 shadow hover:scale-105 transition">
    <Link to={`/products/${product.id}`}>
      <img src={product.image} alt={product.title} className="h-48 w-full object-contain" />
      <h2 className="text-lg font-bold mt-2">{product.title}</h2>
      <p className="text-gray-700">${product.price}</p>
    </Link>
  </div>
);

export default ProductCard;
