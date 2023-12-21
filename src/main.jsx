import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import Mainrout from './Routers/Mainrout.jsx'
import AuthiProvider from './Providers/Authproviders.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthiProvider> <RouterProvider router={Mainrout} /></AuthiProvider>
  </React.StrictMode>,
)
