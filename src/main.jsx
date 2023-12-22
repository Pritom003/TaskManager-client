import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import Mainrout from './Routers/Mainrout.jsx'
import AuthiProvider from './Providers/Authproviders.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<div className='max-w-screen mx-auto'>
<DndProvider backend={HTML5Backend}>
       <QueryClientProvider client={queryClient}>
   <AuthiProvider> <RouterProvider router={Mainrout} /></AuthiProvider>
   </QueryClientProvider>
   </DndProvider>
</div>
  </React.StrictMode>,
)
