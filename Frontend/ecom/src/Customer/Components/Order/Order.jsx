import React from 'react'
import { Grid } from '@mui/material'
import OrderCard from './OrderCard'

const Order = () => {
  const orderStatus = [
    { label: 'On the Way', value: 'on_the_way' },
    { label: 'Delivered', value: 'delivered' },
    { label: 'Cancelled', value: 'cancelled' },
    { label: 'Returned', value: 'returned' },
  ]

  return (
    <div className="p-4 lg:p-8">
      <Grid container spacing={4}>
        {/* Filter Sidebar */}
        <Grid item xs={12} md={3}>
          <div className="bg-white shadow-lg p-5 sticky top-5">
            <h1 className="font-bold text-lg">Filter</h1>
            <div className="space-y-4 mt-10">
              <h1 className="font-semibold">Order Status</h1>
              {orderStatus.map((option) => (
                <div key={option.value} className="flex items-center">
                  <input
                    defaultValue={option.value}
                    type="checkbox"
                    id={option.value}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    className="ml-3 text-sm text-gray-600"
                    htmlFor={option.value}
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </Grid>

        {/* Main Content / Orders List */}
        <Grid item xs={12} md={9}>
          <OrderCard />
          <OrderCard />
          <OrderCard />   
          
         <OrderCard />

        </Grid>
      </Grid>
    </div>
  )
}

export default Order
