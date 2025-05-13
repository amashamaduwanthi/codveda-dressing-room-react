import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <div className="p-6 text-center bg-green-50 rounded-lg shadow-md max-w-xl mx-auto mt-10">
        <h2 className="text-3xl font-bold text-green-700 mb-4">✅ Order Placed!</h2>
        <p className="text-lg text-green-600">Thank you for your purchase.</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto mt-10 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 border-b pb-2">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-center">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b pb-3"
              >
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-500">${item.price}</p>
                </div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-contain rounded"
                />
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-between items-center">
            <span className="text-xl font-bold">Total:</span>
            <span className="text-xl font-bold text-green-700">
              ${total.toFixed(2)}
            </span>
          </div>

          <button
            onClick={handlePlaceOrder}
            className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            ✅ Place Order
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
