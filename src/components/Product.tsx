import React, { useState } from 'react'
import { ProductsItems } from './../data/ProductsItems'
import { IProduct } from '../models'

interface ProductProps {
  ProductsItems: IProduct
}

const Product = ({ ProductsItems }: ProductProps) => {
  const [details, setDetails] = useState(false)

  return (
    <div className='product'>
      <h2 className='font-bold'>{ProductsItems.title}</h2>
      <img src={ProductsItems.image} alt={ProductsItems.title} width={200} className='mx-auto' />
      <p className='font-bold'>Price: ${ProductsItems.price}</p>
      <button className='py-2 px-4 border bg-red-400' onClick={() => setDetails((prev) => !prev)}>
        {details ? 'Hide details' : 'Show details'}
      </button>

      {details && (
        <div>
          <p>{ProductsItems.description}</p>
          <p className='font-semibold'>Category: {ProductsItems.category}</p>
          <p className='font-semibold'>
            Rating: {ProductsItems.rating.rate} ({ProductsItems.rating.count} reviews)
          </p>
        </div>
      )}
    </div>
  )
}

export { Product }
