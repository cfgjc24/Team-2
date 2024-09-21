import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import Admin from '../src/pages/Admin'
import LandingPage from '../src/pages/Landing_Page'
import Student from '../src/pages/Student'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Student />,
  },
  // {
  //   path: "/login",
  //   element: <Login />,
  // }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
