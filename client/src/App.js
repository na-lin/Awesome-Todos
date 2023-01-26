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
      </Routes>
    </div>
  );
}
