import React from 'react';
import Grid from '@mui/material/Grid';

const OrderCard = () => {
  return (
    <div className="bg-white rounded-md shadow-md p-4 mb-4 w-full">
      {/* Outer Grid Container */}
      <Grid container spacing={3}>
        
        {/* Product Image & Details */}
        <Grid item xs={12} md={6}>
          <div className="flex items-center">
            <img
              className="w-20 h-20 object-cover object-top rounded"
              src="https://images.unsplash.com/photo-1741850826386-9cb8e5543c73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
              alt="Product"
            />
            <div className="ml-4 space-y-1">
              <p className="font-semibold text-gray-800">Men Slim Mid Rise Black Jeans</p>
              <p className="text-sm text-gray-600">Size: M</p>
              <p className="text-sm text-gray-600">Color: "red"</p>
            </div>
          </div>
        </Grid>

        {/* Quantity */}
        <Grid item xs={6} md={3} className="flex items-center">
          <p className="font-semibold text-gray-800">Qty: 1</p>
        </Grid>

        {/* Price */}
        <Grid item xs={6} md={3} className="flex items-center justify-end space-x-3">
          <p className="font-bold text-gray-900">$49.99</p>
          <p className="font-semibold text-gray-800">Qty: 1</p>
        </Grid>

        {/* Expected Delivery */}
        <Grid item xs={12} md={12} className="flex items-center justify-end">
          <p className="font-semibold text-gray-700">
            Expected Delivery on <span className="font-bold text-gray-900">13 March</span>
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
