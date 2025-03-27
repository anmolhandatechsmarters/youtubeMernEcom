import React from 'react'
import "./Productcard.css"
const ProductCard = () => {
  return (
    <div className='productCard w-[12rem] m-3 transition-all cursor-pointer'>

      <div className='h-[10rem]'>
      <img className="h-full w-full object-cover object-top-bottom" src='https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="Not Show"/>

      </div>

    <div className='textPart bg-white p-3 '>
      <div>
        <p className='font-semibold opacity-60 '>UniversalOutfit</p>
        <p>Casual Puff Sleeves Solid Women White top</p>
      </div>
      <div className='flex gap-[10px]'>
        <p className='font-semibold'>Rs199</p>
        <p className='line-through opacity-50'>Rs1999</p>
        <p className='text-green-600 font-semibold'>70% off</p>
      </div>
    </div>


        
    </div>
  )
}

export default ProductCard