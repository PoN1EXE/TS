import './index.css'
import { Product } from './components/Product'
import { useProducts } from './hooks/products'
import { Loader } from './components/Loader'
import { ErrorMessage } from './components/ErrorMessage'
import { Modal } from './components/Modal'
import { CreateProduct } from './components/CreateProduct'
import { useState } from 'react'
import { IProduct } from './models'

const App = () => {
  const { loading, ProductsItems, error, addProduct } = useProducts()
  const [modal, setModal] = useState(true)

  const createHandler = (ProductsItems: IProduct) => {
    setModal(false)
    addProduct(ProductsItems)
  }

  return (
    <div className='container mx-auto max-w-2xl pt-5 py-2 px-4 mb-2'>
      <button
        className='border-2 border-black text-black font-bold w-full max-w-xs py-2 px-4 mb-4 rounded hover:bg-gray-100 transition'
        onClick={() => setModal(true)}>
        Create product
      </button>

      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}

      {ProductsItems.map((product, index) => (
        <Product key={`${product.id}-${index}`} ProductsItems={product} />
      ))}

      {modal && (
        <Modal title='Create new product' onClose={() => setModal(false)}>
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}
    </div>
  )
}
export { App }
