import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart } = useCart(); // ✅ Access cart from context

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="border-b py-2">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p>${item.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
