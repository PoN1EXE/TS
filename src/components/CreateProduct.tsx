import React, { useState } from 'react'
import { IProduct } from '../models'
import axios from 'axios'
import { ErrorMessage } from './ErrorMessage'
import { ProductsItems } from './../data/ProductsItems'

const productData: IProduct = {
  id: 0,
  title: 'string',
  price: 0.1,
  description: 'string',
  category: 'string',
  image: 'http://example.com',
  rating: {
    rate: 42,
    count: 10,
  },
}

interface CreateProductProps {
  onCreate: (ProductsItems: IProduct) => void
}

const CreateProduct = ({ onCreate }: CreateProductProps) => {
  const [error, setError] = useState('')
  const [value, setValue] = useState('')

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault()
    setError('')

    if (value.trim().length === 0) {
      setError('Please enter valid title')
      return
    }

    productData.title = value

    const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)
    onCreate(response.data)
  }

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type='text'
        className='border py-2 px-4 mb-2 w-full'
        placeholder='Enter product title...'
        value={value}
        onChange={changeHandler}
      />

      {error && <ErrorMessage error={error} />}

      <button type='submit' className='border py-2 px-4 mb-2 bg-yellow-400 hover:text-red-600'>
        Create
      </button>
    </form>
  )
}

export { CreateProduct }
