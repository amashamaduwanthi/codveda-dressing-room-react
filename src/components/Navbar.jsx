import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="flex justify-between items-center px-6 py-4 bg-black text-white">
    <Link to="/" className="text-xl font-bold">Clothing Shop</Link>
    <div className="flex gap-4">
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
    </div>
  </nav>
);

export default Navbar;
