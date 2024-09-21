import React from "react";
import { useState } from "react";
import "./App.css";
import { ReactDOM } from "react";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "../src/pages/Admin";
//import Login from '../src/pages/Login'
import Home from "../src/pages/Home";
import LandingPage from "../src/pages/Landing_Page";
import Login from "./pages/Login";
import Student from "./pages/Student";
import Tutor from "./pages/Tutor";
import Tutor_Survey from "./pages/Tutor_Survey";
import StudentFeedback from "./components/StudentFeedback";

export default function App() {
  return (
    <Router>
      {/* Wrap your Route components inside the Routes component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/student" element={<Student />} />
        <Route path="/tutor" element={<Tutor />} />
        <Route path="/tutor_survey" element={<Tutor_Survey />} />
        <Route path="/studentfeedback" element={<StudentFeedback />} />
      </Routes>
    </Router>
  );
}
