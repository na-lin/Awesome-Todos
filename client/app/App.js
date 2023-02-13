import React from "react";

// React Toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Router
import { Routes, Route } from "react-router-dom";
// screen
import { LandingScreen, LoginScreen } from "./screens";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>dashboard</h1>} />
        <Route path="/landing" element={<LandingScreen />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
      <ToastContainer position="top-center" />
    </div>
  );
}
