import React from 'react'

const HomeSectionCard = ({product}) => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hiiden w-[12rem] mx-3   shadow-gray-400 hover:shadow-xl hover:shadow-gray-500 transition-all duration-300'>
<div className='h-[13rem] w-[10rem]'>
    <img className='object-cover object-top w-full h-full' src={product.img}/>

</div>

<div className='p-4'>
    <h3 className='text-lg font-medium text-gray-900'>{product.name}</h3>
    <p className='mt-2 text-sm text-gray-500'>{product.desc}</p>

</div>
    </div>
  )
}

export default HomeSectionCard