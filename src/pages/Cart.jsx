import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handlePlaceOrder = () => {
    // Simulate placing order
    setOrderPlaced(true);
    clearCart(); // Clear cart after order
  };

  if (orderPlaced) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Order Placed!</h2>
        <p className="text-green-600">Thank you for your purchase.</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="border-b py-2">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p>${item.price}</p>
            </div>
          ))}

          <div className="mt-4 text-xl font-bold">
            Total: ${total.toFixed(2)}
          </div>

          <button
            onClick={handlePlaceOrder}
            className="mt-4 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Place Order
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
