import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProductsProvider from './context/products_context';
import FilterProvider from './context/filter_context';
import CartProvider from './context/cart_context';
import { Auth0Provider } from '@auth0/auth0-react';
import UserProvider from './context/user_context';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  // <React.StrictMode>
  <Auth0Provider
    // domain = {process.env.REACT_APP_AUTH0_DOMAIN}
    // clientId = {process.env.REACT_APP_AUTH0_CLIENT_ID}
    domain='ngcuongzth.us.auth0.com'
    clientId='a6hGLXDr0QKd8HjX7fg9N6TkLqKM3eU9'
    redirectUri={window.location.origin}
    cacheLocation = 'localstorage'
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
      </UserProvider>
  </Auth0Provider>
  // </React.StrictMode>
);
