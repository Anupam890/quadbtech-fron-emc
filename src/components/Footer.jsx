import React from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <div className="bg-black text-white">
      {/* Top Section */}
      <div className="border-b-2 border-gray-700 px-6 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2">
          <h5 className="text-xl font-bold">3legant.</h5>
          <p className="text-sm text-gray-400">| Gift & Decoration Store</p>
        </div>
        <ul className="flex flex-wrap justify-center md:justify-end space-x-4 mt-4 md:mt-0">
          <li className="hover:text-gray-400 cursor-pointer">Home</li>
          <li className="hover:text-gray-400 cursor-pointer">Shop</li>
          <li className="hover:text-gray-400 cursor-pointer">Product</li>
          <li className="hover:text-gray-400 cursor-pointer">Blog</li>
          <li className="hover:text-gray-400 cursor-pointer">Contact Us</li>
        </ul>
      </div>
      
      {/* Bottom Section */}
      <div className="px-6 py-4 flex flex-col md:flex-row justify-between items-center">
        
        <div className="flex space-x-4 mt-4 md:mt-0">
        <p className="text-sm text-gray-400">
          Copyright &copy; 2023 3legant. All rights reserved
        </p>
          <a href="#" className="hover:text-gray-400">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-400">
            Terms of Use
          </a>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Instagram className="hover:text-gray-400 cursor-pointer" />
          <Facebook className="hover:text-gray-400 cursor-pointer" />
          <Youtube className="hover:text-gray-400 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
