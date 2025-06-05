import { useEffect, useState } from 'react'
import axios, { AxiosError } from 'axios'
import { IProduct } from '../models'
import { ProductsItems } from './../data/ProductsItems'

const useProducts = () => {
  const [ProductsItems, setProductsItems] = useState<IProduct[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function addProduct(ProductsItems: IProduct) {
    setProductsItems((prev) => [...prev, ProductsItems])
  }

  async function fetchProducts() {
    try {
      setError('')
      setLoading(true)
      const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
      setProductsItems(response.data)
      setLoading(false)
    } catch (e: unknown) {
      const error = e as AxiosError
      setLoading(false)
      setError(error.message)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])
  return { ProductsItems, error, loading, addProduct }
}

export { useProducts }
