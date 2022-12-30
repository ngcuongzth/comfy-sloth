import {
  HomePage, CartPage, CheckoutPage, ErrorPage,
  ProductsPage, SingleProductPage, PrivateRoute,
  AboutPage, AuthWrapper
} from './pages'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { SharedLayout } from './components'

const App = () => {
  return (
    <AuthWrapper>
      <Router>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<SingleProductPage />} />
             <Route path="/checkout" 
                element={<PrivateRoute>
                            <CheckoutPage/>
                        </PrivateRoute>}>
            </Route>

          </Route>
        </Routes>
      </Router>
    </AuthWrapper>
  )
}

export default App