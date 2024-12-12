import React from "react";
import { X } from "lucide-react";

const Cart = () => {
  return (
    <div className="flex flex-col lg:flex-row h-full items-start lg:items-center justify-center gap-6 p-4">

      <div className="w-full lg:w-96 p-4">
        <h3 className="text-xl font-bold mb-4">Have a Coupon?</h3>
        <p className="mb-4">Add your code for an instant cart discount</p>
        <div className="flex items-center gap-2">
          <input
            type="text"
            className="flex-grow border-2 border-black rounded p-2"
            placeholder="Coupon Code"
          />
          <button className="bg-black text-white px-4 py-2 rounded">
            Apply
          </button>
        </div>
      </div>

      {/* Cart Summary Section */}
      <div className="w-full lg:w-96 border-2 border-black rounded-lg p-4">
        <h3 className="text-xl font-bold mb-4">Cart Summary</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between border-2 border-black p-4">
            <div className="flex items-center gap-2">
              <input type="radio" name="shipping" id="free-shipping" />
              <label htmlFor="free-shipping">Free Shipping</label>
            </div>
            <p>$0.00</p>
          </div>
          <div className="flex items-center justify-between border-2 border-black p-4">
            <div className="flex items-center gap-2">
              <input type="radio" name="shipping" id="express-shipping" />
              <label htmlFor="express-shipping">Express Shipping</label>
            </div>
            <p>+$15.00</p>
          </div>
          <div className="flex items-center justify-between border-2 border-black p-4">
            <div className="flex items-center gap-2">
              <input type="radio" name="shipping" id="pick-up" />
              <label htmlFor="pick-up">Pick Up</label>
            </div>
            <p>-$21.00</p>
          </div>
        </div>

        <div className="mt-6 pt-4">
          <div className="flex border-b justify-between mb-2">
            <p>Subtotal</p>
            <p>$1234.00</p>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <p>Total</p>
            <p>$1345.00</p>
          </div>
        </div>

        <button className="w-full bg-black text-white py-3 mt-4 rounded">
          Checkout
        </button>
      </div>

    </div>
  );
};

export default Cart;
