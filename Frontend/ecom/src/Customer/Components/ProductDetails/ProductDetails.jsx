'use client'

import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { Radio, RadioGroup } from '@headlessui/react'
import { Grid2,Typography,Box,LinearProgress } from '@mui/material'
import ProductReview from './ProductReview'

const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service.',
}
const reviews = [
  { name: "Raam", date: "April 5, 2023", rating: 4.5, text: "Great product! Works really well.", progress: 80 },
  { name: "Aditi", date: "March 22, 2023", rating: 3.5, text: "Good, but has some minor issues.", progress: 70 },
  { name: "Karan", date: "February 15, 2023", rating: 5, text: "Absolutely amazing! Highly recommend.", progress: 95 },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ratingBreakdown = {
  Excellent: 50,
  Good: 30,
  Average: 15,
  Poor: 5,
}

export default function Example() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])

  return (
    <div className="bg-white mb-5">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-7xl items-center space-x-2 px-4 sm:px-6 lg:px-8">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg fill="currentColor" width={16} height={20} viewBox="0 0 16 20" aria-hidden="true" className="h-5 w-4 text-gray-300">
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        {/* Product Section with Image and Details in One Row */}
        <div className="mx-auto mt-6 max-w-7xl sm:px-6 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          {/* Image */}
          <div className="flex justify-center">
            <img alt={product.images[0].alt} src={product.images[0].src} className="w-full max-w-md rounded-lg object-cover" />
          </div>

          {/* Product Info */}
          <div className="lg:pl-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
            <p className="mt-2 text-3xl tracking-tight text-gray-900">{product.price}</p>

            {/* Reviews */}
            <div className="mt-4 flex items-center">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon key={rating} aria-hidden="true" className={classNames(reviews.average > rating ? 'text-gray-900' : 'text-gray-200', 'size-5 shrink-0')} />
                ))}
              </div>
              <p className="sr-only">{reviews.average} out of 5 stars</p>
              <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                {reviews.totalCount} reviews
              </a>
            </div>

            <form className="mt-6">
              {/* Colors */}
              <div>
                <h3 className="text-sm font-medium text-gray-900">Color</h3>
                <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-2 flex gap-3">
                  {product.colors.map((color) => (
                    <Radio key={color.name} value={color} className={classNames(color.selectedClass, 'relative flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-2 ring-offset-1')}>
                      <span aria-hidden="true" className={classNames(color.class, 'size-8 rounded-full border border-black/10')} />
                    </Radio>
                  ))}
                </RadioGroup>
              </div>

              {/* Sizes */}
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">Size</h3>
                <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-2 grid grid-cols-4 gap-4">
                  {product.sizes.map((size) => (
                    <Radio key={size.name} value={size} disabled={!size.inStock} className={classNames(size.inStock ? 'cursor-pointer bg-white text-gray-900' : 'cursor-not-allowed bg-gray-50 text-gray-200', 'group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase')}>
                      <span>{size.name}</span>
                    </Radio>
                  ))}
                </RadioGroup>
              </div>

              <button type="submit" className="mt-6 w-full rounded-md bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700">
                Add to bag
              </button>
            </form>

            <div className="mt-8">
              <h3 className="text-sm font-medium text-gray-900">Description</h3>
              <p className="mt-2 text-sm text-gray-600">{product.description}</p>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
              <ul className="mt-2 list-disc space-y-2 pl-4 text-sm text-gray-600">
                {product.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

{/*  */}
<section className="p-6">
  <Typography variant="h5" className="font-semibold pb-4">
    Recent Reviews & Ratings
  </Typography>

  <Box className="border p-5 rounded-lg shadow-md">
    <Grid2 container spacing={4} className="flex justify-between">
      
      {/* Left: User Reviews */}
      <Grid2 item xs={12} md={5}>
        <Box className="space-y-5">
          {reviews.map((review, index) => (
            <ProductReview key={index} {...review} />
          ))}
        </Box>
      </Grid2>

      {/* Right: Overall Rating Breakdown */}
      {/* <Grid2 item xs={12} md={5} alignSelf="flex-start">
        <Box className=" p-4 rounded-lg">
          <Typography variant="h6" fontWeight="bold">Product Rating Breakdown</Typography>
          {Object.entries(ratingBreakdown).map(([label, value]) => (
            <Box key={label} display="flex" alignItems="center" mt={2}>
              <Typography variant="body2" sx={{ width: "80px" }}>{label}</Typography>
              <LinearProgress
                variant="determinate"
                value={value}
                sx={{ flex: 1, mx: 2, borderRadius: 2, height: 10 }}
                color={value >= 40 ? 'success' : value >= 20 ? 'warning' : 'error'}
              />
              <Typography variant="body2">{value}%</Typography>
            </Box>
          ))}
        </Box>
      </Grid2> */}

    </Grid2>
  </Box>
</section>


      </div>
    </div>
  )
}
