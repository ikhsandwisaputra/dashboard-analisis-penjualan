import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import Dashboard from './layouts/DashboardLayout.tsx'
import NotFoundPage from './pages/NotFoundPage.tsx'
import MainContent from './components/MainContent.tsx'
import Penjualan from './pages/Penjualan.tsx'
import { ThemeProvider } from './context/ThemeContext.tsx'
import Pendapatan from './pages/Pendapatan.tsx'

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard/>,
    children: [
       { index: true, element: <MainContent /> },
        { path: '*', element: <NotFoundPage /> },
        {path: '/dashboard/penjualan', element: <Penjualan />},
        {path: '/dashboard/pendapatan', element: <Pendapatan />},
    ]
  },

])

createRoot(document.getElementById('root')!).render(
    <ThemeProvider>
  <StrictMode>
  {/* <Provider> */}
 <RouterProvider router={router} />
  {/* </Provider> */}
  </StrictMode>
  </ThemeProvider>
)
