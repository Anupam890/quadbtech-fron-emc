import React, { useState } from 'react';
import { X } from 'lucide-react';

const OrderSummary = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // User login state

  return (
    <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-lg">
      {/* If user is not logged in */}
      {!isLoggedIn ? (
        <div>
          {/* Login Prompt */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Login Required</h2>
            <button>
              <X className="w-6 h-6 text-gray-500 hover:text-gray-800" />
            </button>
          </div>
          <p className="text-gray-700 mb-4">
            You need to log in to view your cart and complete the checkout process.
          </p>
          <button
            onClick={() => setIsLoggedIn(true)} // Mock login action
            className="w-full bg-black text-white py-2 rounded-lg shadow hover:bg-gray-800"
          >
            Login
          </button>
        </div>
      ) : (
        // If user is logged in, show Order Summary
        <>
          {/* Cart Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Cart</h2>
            <button>
              <X className="w-6 h-6 text-gray-500 hover:text-gray-800" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="space-y-4">
            {/* Sample cart items */}
            {[
              {
                name: 'Tray Table',
                price: 19.19,
                color: 'Black',
                quantity: 2,
                imgSrc: 'https://via.placeholder.com/50',
              },
              {
                name: 'Tray Table',
                price: 19.19,
                color: 'Red',
                quantity: 2,
                imgSrc: 'https://via.placeholder.com/50',
              },
              {
                name: 'Table Lamp',
                price: 39.0,
                color: 'Gold',
                quantity: 2,
                imgSrc: 'https://via.placeholder.com/50',
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={item.imgSrc}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg border"
                  />
                  <div className="ml-4">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500">Color: {item.color}</p>
                    <div className="flex items-center mt-2">
                      <button className="w-8 h-8 border rounded-lg text-center font-medium text-gray-700">
                        -
                      </button>
                      <span className="w-10 text-center">{item.quantity}</span>
                      <button className="w-8 h-8 border rounded-lg text-center font-medium text-gray-700">
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">${item.price.toFixed(2)}</p>
                  <button>
                    <X className="w-5 h-5 text-gray-400 hover:text-red-500" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Subtotal and Total */}
          <div className="mt-6 border-t pt-4">
            <div className="flex justify-between">
              <p className="text-gray-500">Subtotal</p>
              <p className="font-medium">$99.00</p>
            </div>
            <div className="flex justify-between mt-2">
              <p className="text-gray-700 font-semibold">Total</p>
              <p className="font-semibold text-lg">$234.00</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6">
            <button className="w-full bg-black text-white py-2 rounded-lg shadow hover:bg-gray-800">
              Checkout
            </button>
            <button className="w-full mt-2 text-center text-black py-2 border rounded-lg hover:bg-gray-100">
              View Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default OrderSummary;
