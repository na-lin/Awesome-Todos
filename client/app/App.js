import React from "react";

// Router
import { Routes, Route } from "react-router-dom";
// screen
import { LandingScreen, LoginScreen } from "./screens";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/landing" element={<LandingScreen />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </div>
  );
}
