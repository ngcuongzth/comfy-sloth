import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProductsProvider from './context/products_context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <ProductsProvider>
    <App />
  </ProductsProvider>
  // </React.StrictMode>
);
