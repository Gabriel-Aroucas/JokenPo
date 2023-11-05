import React from 'react';
import { Suspense,lazy } from 'react'
import ReactDOM from 'react-dom/client'
import Error_Page from './pages/Error_Page/Error_Page.tsx';
import Loader from './pages/Loader/Loader.tsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css"

const Lazy_index = lazy(()=>import('./pages/Index.tsx'))
const Lazy_App = lazy(()=>import('./App.tsx'))

const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<Error_Page/>,
    children:[
      {
        path:"/",
        element:
        <Suspense fallback={<Loader/>} >
          <Lazy_index/>
        </Suspense>,
      },
      {
        path:"single_mode",
        element:
        <Suspense fallback={<Loader/>} >
          <Lazy_App/>
        </Suspense>,
        
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
