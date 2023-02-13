import React from "react";

// Router
import { Outlet } from "react-router-dom";

export default function SharedLayout() {
  return (
    <div>
      <h1>sidebar</h1>
      <Outlet />
    </div>
  );
}
