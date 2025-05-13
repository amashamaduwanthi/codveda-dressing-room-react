import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/api';
import Loader from '../components/Loader';


const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
 

  useEffect(() => {
    getProductById(id).then(data => {
      setProduct(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <Loader />;
  if (!product) return <p>Product not found.</p>;

  return (
    <div className="p-6 flex flex-col md:flex-row gap-6">
      <img src={product.image} alt={product.title} className="h-96 w-96 object-contain" />
      <div>
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <p className="text-xl font-semibold mt-4">${product.price}</p>
        <button
          className="mt-4 px-6 py-2 bg-black text-white rounded hover:bg-gray-800"
        
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;

