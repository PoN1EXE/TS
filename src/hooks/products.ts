import { useEffect, useState } from 'react'
import axios, { AxiosError } from 'axios'
import { IProduct } from '../models'

export const useProducts = () => {
  const [productsItems, setProductsItems] = useState<IProduct[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function addProduct(product: IProduct) {
    setProductsItems((prev) => [...prev, product])
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
  return { productsItems, error, loading, addProduct }
}
