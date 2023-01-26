import React from "react";

// Router
import { Routes, Route } from "react-router-dom";
// screen
import LandingScreen from "./screens/LandingScreen";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
      </Routes>
    </div>
  );
}
