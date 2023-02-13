import React from "react";

// Router
import { Navigate } from "react-router-dom";

// Redux
import { useSelector } from "react-redux";

export default function ProtectedRoute({ children }) {
  const { userToken } = useSelector((state) => state.user);
  if (!userToken) {
    return <Navigate to="landing" />;
  }
  return children;
}
