import React, { useState } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";

const CartItem = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (type) => {
    if (type === "increase") {
      setQuantity(quantity + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="p-5 shadow-md border rounded-lg bg-white flex flex-col lg:flex-row items-center gap-5">
      {/* Product Image */}
      <div className="w-24 h-24 lg:w-32 lg:h-32 flex-shrink-0">
        <img
          className="w-full h-full object-cover rounded-md"
          src="https://images.unsplash.com/photo-1742732370413-063ed597e8f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
          alt="Product"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 space-y-2">
        <p className="text-lg font-semibold text-gray-800">
          Men Slim Mid Rise Black Jeans
        </p>
        <p className="text-sm text-gray-500">Size: L, Color: White</p>
        <p className="text-sm text-gray-500">Seller: Cristalyo 2 Fashion</p>
        <p className="text-lg font-semibold text-gray-900">$49.99</p>
      </div>

      {/* Bottom Section: Quantity & Remove */}
      <div className="flex flex-col items-center gap-3">
        {/* Quantity Selector */}
        <div className="flex items-center border rounded-md overflow-hidden shadow-sm">
          <button
            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 transition"
            onClick={() => handleQuantityChange("decrease")}
          >
            -
          </button>
          <span className="px-5 py-1 bg-white text-lg">{quantity}</span>
          <button
            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 transition"
            onClick={() => handleQuantityChange("increase")}
          >
            +
          </button>
        </div>

        {/* Remove Button */}
        <button className="text-red-600 hover:text-red-800 flex items-center gap-1 transition">
          <TrashIcon className="w-5 h-5" />
          <span className="text-sm">Remove</span>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
