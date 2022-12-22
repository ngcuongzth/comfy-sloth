import {
  HomePage, CartPage, CheckoutPage, ErrorPage,
  PrivatePage, ProductsPage, SingleProductPage,
  AboutPage
} from './pages'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { SharedLayout } from './components'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<SingleProductPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App