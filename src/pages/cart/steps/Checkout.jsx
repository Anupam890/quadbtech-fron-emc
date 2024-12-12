import React from 'react';

const Checkout = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="checkout-container grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div className="md:col-span-2 space-y-6 ">
          {/* Contact Information */}
          <div className=" p-6 rounded-lg border-2 border-black ">
            <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name"
                className="border border-gray-300 p-3 rounded-md w-full"
              />
              <input
                type="text"
                placeholder="Last name"
                className="border border-gray-300 p-3 rounded-md w-full"
              />
              <input
                type="text"
                placeholder="Phone number"
                className="border border-gray-300 p-3 rounded-md w-full md:col-span-2"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 p-3 rounded-md w-full md:col-span-2"
              />
            </form>
          </div>

          {/* Shipping Address */}
          <div className=" p-6 rounded-lg border-2 border-black">
            <h2 className="text-lg font-semibold mb-4">Shipping Address</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Street Address"
                className="border border-gray-300 p-3 rounded-md w-full md:col-span-2"
              />
              <select className="border border-gray-300 p-3 rounded-md w-full">
                <option>Country</option>
              </select>
              <input
                type="text"
                placeholder="Town / City"
                className="border border-gray-300 p-3 rounded-md w-full"
              />
              <input
                type="text"
                placeholder="State"
                className="border border-gray-300 p-3 rounded-md w-full"
              />
              <input
                type="text"
                placeholder="Zip Code"
                className="border border-gray-300 p-3 rounded-md w-full"
              />
              <div className="md:col-span-2">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
                  <span className="ml-2 text-gray-700">Use a different billing address (optional)</span>
                </label>
              </div>
            </form>
          </div>

          {/* Payment Method */}
          <div className=" p-6 rounded-lg border-2 border-black">
            <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
            <form className="space-y-4">
              <div>
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="payment"
                    className="form-radio h-5 w-5 text-indigo-600"
                  />
                  <span className="text-gray-700">Pay by Card Credit</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <input
                    type="text"
                    placeholder="Card Number"
                    className="border border-gray-300 p-3 rounded-md w-full md:col-span-3"
                  />
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="border border-gray-300 p-3 rounded-md w-full"
                  />
                  <input
                    type="text"
                    placeholder="CVC code"
                    className="border border-gray-300 p-3 rounded-md w-full"
                  />
                </div>
              </div>
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="payment"
                  className="form-radio h-5 w-5 text-indigo-600"
                />
                <span className="text-gray-700">Paypal</span>
              </label>
            </form>
          </div>
        </div>

        {/* Right Section */}
        <div className=" p-6 rounded-lg  space-y-6 border-2 border-black">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Tray Table</span>
              <span>$38.00</span>
            </div>
            <div className="flex justify-between">
              <span>Tray Table</span>
              <span>$38.00</span>
            </div>
            <div className="flex justify-between">
              <span>Table lamp</span>
              <span>$39.00</span>
            </div>
            <div className="flex justify-between items-center">
              <input
                type="text"
                placeholder="Input"
                className="border border-gray-300 p-2 rounded-md w-2/3"
              />
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md">Apply</button>
            </div>
            <div className="flex justify-between">
              <span>JenKateMW</span>
              <span className="text-green-600">-$25.00</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Subtotal</span>
              <span>$99.00</span>
            </div>
            <div className="flex justify-between font-bold text-xl">
              <span>Total</span>
              <span>$234.00</span>
            </div>
          </div>
          <button className="w-full bg-black text-white py-3 rounded-md font-semibold">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;