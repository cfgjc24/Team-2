import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import Student from '../src/pages/Student'
import StudentForm from './components/Pre_student_forms';
// import Admin from '../src/pages/Admin'

const router = createBrowserRouter([
  {
    path: "/",
    element: <StudentForm />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
