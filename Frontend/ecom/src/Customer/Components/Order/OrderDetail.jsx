import React from 'react'
import Grid from '@mui/material/Grid'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'

const OrderDetail = () => {
  return (
    <div className="px-5 lg:px-10">
      {/* Delivery Address */}
      <div>
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        <AddressCard />
      </div>

      {/* Order Tracker */}
      <div className='mb-10'>
        <OrderTracker activeStep={0} />
      </div>

      {/* Order Card */}
      <Grid container spacing={2} className="mt-5 mb-5">
        <Grid
          item
          xs={12}
          className="shadow-xl rounded-md p-5 border border-gray-200 bg-white mt-5"
        >
          <div className="flex items-center gap-4">
            <img
              className="w-20 h-20 object-cover object-top rounded"
              src="https://images.unsplash.com/photo-1742240439165-60790db1ee93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
              alt="Product"
            />
            <div>
              <p className="font-semibold text-gray-800">
                Men Slim Mid Rise Black Jeans
              </p>
              <p className="space-x-5 text-sm text-gray-600">
                <span>Color: "pink"</span>
                <span>Size: "M"</span>
              </p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default OrderDetail
