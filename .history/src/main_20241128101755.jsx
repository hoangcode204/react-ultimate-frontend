import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  } from "react-router-dom";
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
      element:<div>login page</div>
    },
    ]);
    
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
