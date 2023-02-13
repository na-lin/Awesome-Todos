import React from "react";

// Components
import { Sidebar } from "../../components";

// Router
import { Outlet } from "react-router-dom";

export default function SharedLayout() {
  return (
    <div className="d-flex vh-100 vw-100">
      <div>
        <Sidebar />
      </div>
      <div className="bg-warning w-100">
        <Outlet />
      </div>
    </div>
  );
}
