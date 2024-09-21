import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import Student from '../src/pages/Student'
// import Admin from '../src/pages/Admin'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Student />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
