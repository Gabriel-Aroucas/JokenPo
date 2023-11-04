import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Index from './pages/Index.tsx';
import Error_Page from './pages/Error_Page/Error_Page.tsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<Error_Page/>,
    children:[
      {
        path:"/",
        element:<Index/>,
      },
      {
        path:"single_mode",
        element:<App/>
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
