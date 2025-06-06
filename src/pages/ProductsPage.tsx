import { Product } from '../components/Product'
import { useProducts } from '../hooks/products'
import { Loader } from '../components/Loader'
import { ErrorMessage } from '../components/ErrorMessage'
import { Modal } from '../components/Modal'
import { CreateProduct } from '../components/CreateProduct'
import { useContext } from 'react'
import { IProduct } from '../models'
import { ModalContext } from '../context/ModalContext'

export const ProductsPage = () => {
  const { loading, productsItems, error, addProduct } = useProducts()
  const { modal, open, close } = useContext(ModalContext)

  const createHandler = (productsItems: IProduct) => {
    close()
    addProduct(productsItems)
  }

  return (
    <div className='container mx-auto max-w-2xl pt-5 py-2 px-4 mb-2'>
      <button
        className='border-2 border-black text-black font-bold w-full max-w-xs py-2 px-4 mb-4 rounded hover:bg-gray-100 transition'
        onClick={() => open()}>
        Create product
      </button>

      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}

      {productsItems.map((product, index) => (
        <Product key={`${product.id}-${index}`} productsItems={product} />
      ))}

      {modal && (
        <Modal title='Create new product' onClose={() => close()}>
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}
    </div>
  )
}
