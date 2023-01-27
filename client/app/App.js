import React from "react";

// Router
import { Routes, Route } from "react-router-dom";
// screen
import LandingScreen from "./screens/LandingScreen";
import LoginScreen from "./screens/LoginScreen";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/dashboard" element={<h1>dashboard </h1>} />
      </Routes>
    </div>
  );
}
