import React from "react";

// Router
import { Routes, Route } from "react-router-dom";
// screen
import LandingScreen from "./screens/LandingScreen";
import LoginScreen from "./screens/LoginScreen";
import DashboardScreen from "./screens/Dashboard/DashboardScreen";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/landing" element={<LandingScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/" element={<DashboardScreen />} />
        <Route path="/todo" element={<h1>todo board</h1>} />
        <Route path="/journal" element={<h1>journal board</h1>} />
      </Routes>
    </div>
  );
}
