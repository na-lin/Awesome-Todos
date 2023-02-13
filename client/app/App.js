import React from "react";

// React Toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Router
import { Routes, Route } from "react-router-dom";
// screen
import { LandingScreen, LoginScreen } from "./screens";
import { SharedLayout, TaskScreen, JournalScreen } from "./screens/dashboard";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="task" element={<TaskScreen />} />
          <Route path="journal" element={<JournalScreen />} />
        </Route>
        <Route path="/landing" element={<LandingScreen />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
      <ToastContainer position="top-center" />
    </div>
  );
}
