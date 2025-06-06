import { useState } from 'react'
import { IProduct } from '../models'

interface ProductProps {
  productsItems: IProduct
}

export const Product = ({ productsItems }: ProductProps) => {
  const [details, setDetails] = useState(false)

  return (
    <div className='product'>
      <h2 className='font-bold'>{productsItems.title}</h2>
      <img src={productsItems.image} alt={productsItems.title} width={200} className='mx-auto' />
      <p className='font-bold'>Price: ${productsItems.price}</p>
      <button className='py-2 px-4 border bg-red-400' onClick={() => setDetails((prev) => !prev)}>
        {details ? 'Hide details' : 'Show details'}
      </button>

      {details && (
        <div>
          <p>{productsItems.description}</p>
          <p className='font-semibold'>Category: {productsItems.category}</p>
          <p className='font-semibold'>
            Rating: {productsItems?.rating?.rate} ({productsItems?.rating?.count} reviews)
          </p>
        </div>
      )}
    </div>
  )
}
