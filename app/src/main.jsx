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
import StudentForm from './components/Pre_student_forms';

const router = createBrowserRouter([
  {
    path: "/",
    element: <StudentForm />,
  },
  {
    path: "/student",
    element: <Student />,
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
