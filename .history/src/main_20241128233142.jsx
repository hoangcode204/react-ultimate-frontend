import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  } from "react-router-dom";
  import LoginPage from './pages/login.jsx';
  import RegisterPage from './pages/register.jsx';
  import UserPage from './pages/user.jsx';
  import BookPage from './pages/product.jsx';
  import './styles'
  const router = createBrowserRouter([
    {
    path: "/",
    element: <App/>,
    },
    {
      path:"/login",
      element:<div>login page</div>
    },
    {
      path:"/register",
      element:<div>register page</div>
    },
    {
      path:"/users",
      element:<div>users page</div>
    },
    {
      path:"/ products",
      element:<div>products page</div>
    },
    ]);
    
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
