import React from "react";

// Router
import { Routes, Route } from "react-router-dom";
// screen
import { LandingScreen } from "./screens";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/landing" element={<LandingScreen />} />
      </Routes>
    </div>
  );
}
