import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ErrorPage from './Pages/Errors/error-page.jsx';
import { ChakraProvider } from '@chakra-ui/react'
import { CartPage } from './Pages/cart/CartPage.jsx';
import ProductDetailPage from './Pages/ProductDetail/ProductDetailPage.jsx';
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Register/Register.jsx';
import ProductManagePage from './Pages/Admin/ProductManage/ProductManagePage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/product",
    element: <ProductDetailPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/admin/product-manage",
    element: <ProductManagePage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
