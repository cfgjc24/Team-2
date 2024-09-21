import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "../src/pages/Admin";
import Home from "../src/pages/Home";
import LandingPage from "../src/pages/Landing_Page";
import Login from "./pages/Login";
import Student from "./pages/Student";
import "./App.css";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/landing" element={<LandingPage />} />
                <Route path="/student" element={<Student />} />
            </Routes>
        </Router>
    );
}
