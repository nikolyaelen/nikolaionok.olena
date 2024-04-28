import React from 'react'

import Home from './pages/home.jsx'
import './index.css'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, useLoaderData} from "react-router-dom";
import { BrowserRouter, Link } from 'react-router-dom'; 
import About from './pages/about.jsx'
import Contact from './pages/contact.jsx'

const router = createBrowserRouter([
 
    {
    path: "/",
    element: <Home />,
   
    },
    {
      path: "/about",
      element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
        },
    ]);
  


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
