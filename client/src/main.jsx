import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ProductProvider } from './Contexts/Products.jsx'
import { CartProvider } from './Contexts/CartI.jsx'
import { LoginProvider } from './Contexts/Login.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ProductProvider>
    <LoginProvider>
    <CartProvider>
    <App />
    </CartProvider>
    </LoginProvider>
    </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
