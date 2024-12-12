import React from "react";
import { ShoppingCart, Search, User } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
   
        <Link to="/" className="text-2xl font-bold">
          3legant.
        </Link>

        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-black">
            Home
          </Link>
          <Link to="/shop" className="text-gray-700 hover:text-black">
            Shop
          </Link>
          <Link to="/product" className="text-gray-700 hover:text-black">
            Product
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-black">
            Contact Us
          </Link>
        </div>
        <div className="flex space-x-4">
          <Search className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
          <Link to="/cart">
            <ShoppingCart className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
          </Link>
          <Link to='/register'>
          <User className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
