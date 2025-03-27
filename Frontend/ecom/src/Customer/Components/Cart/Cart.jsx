import React from "react";
import CartItem from "./CartItem";
import "./css/Cart.css"
const Cart = () => {
  const cartItems = [<CartItem />, <CartItem />, <CartItem />, <CartItem />, <CartItem />, <CartItem />];

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

      {/* Main Layout - Cart Items on Left, Summary on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Cart Items Section (Takes 2 columns on larger screens) */}
        <div className="lg:col-span-2">
          <div
            className={`space-y-4 ${
              cartItems.length > 5 ? "max-h-[500px] overflow-y-auto" : ""
            } hide-scrollbar`}
          >
            {cartItems.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
        </div>

        {/* Order Summary (Takes 1 column) */}
        <div className="p-5 border rounded-lg shadow-md bg-white">
          <h3 className="text-xl font-semibold mb-3">Order Summary</h3>
          <div className="space-y-2 text-gray-700">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>$149.97</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span>$5.00</span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span>Total:</span>
              <span>$154.97</span>
            </div>
          </div>

          {/* Pay Now Button */}
          <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
