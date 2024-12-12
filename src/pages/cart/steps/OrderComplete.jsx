import React from 'react';
import { ShoppingCart, CheckCircle } from 'lucide-react';

const OrderComplete = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-6 sm:p-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <CheckCircle className="text-green-500 w-10 h-10" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800">Thank you! 🎉</h2>
          <p className="mt-2 text-gray-600">Your order has been received</p>
        </div>

        {/* Ordered Items */}
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center">
            <div className="relative w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
              <ShoppingCart className="w-6 h-6 text-gray-400" />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">1</span>
            </div>
            <p className="text-sm text-gray-600 mt-2">Item 1</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
              <ShoppingCart className="w-6 h-6 text-gray-400" />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">2</span>
            </div>
            <p className="text-sm text-gray-600 mt-2">Item 2</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
              <ShoppingCart className="w-6 h-6 text-gray-400" />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">3</span>
            </div>
            <p className="text-sm text-gray-600 mt-2">Item 3</p>
          </div>
        </div>

        {/* Order Details */}
        <div className="mt-6">
          <div className="flex justify-between text-sm text-gray-600 py-1">
            <span>Order code:</span>
            <span className="font-medium text-gray-800">#0123_45678</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600 py-1">
            <span>Date:</span>
            <span className="font-medium text-gray-800">October 19, 2023</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600 py-1">
            <span>Total:</span>
            <span className="font-medium text-gray-800">$1,345.00</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600 py-1">
            <span>Payment method:</span>
            <span className="font-medium text-gray-800">Credit Card</span>
          </div>
        </div>

        {/* Purchase History Button */}
        <div className="mt-6">
          <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
            Purchase history
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderComplete;