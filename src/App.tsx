import './index.css'
import { Route, Routes } from 'react-router-dom'
import { AboutPage } from './pages/AboutPage'
import { ProductsPage } from './pages/ProductsPage'
import { Navigation } from './components/Navigation'

export const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<ProductsPage />} />
        <Route path='/aboute' element={<AboutPage />} />
      </Routes>
    </>
  )
}
