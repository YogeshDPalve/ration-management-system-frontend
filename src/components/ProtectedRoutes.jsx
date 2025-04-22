import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const ProtectedRoutes = ({ children }) => {
  const { isAuthenticated } = useSelector((store) => store.auth);
  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }
  return children;
};

export const AuthenticatedUser = ({ children }) => {
  const { isAuthenticated } = useSelector((store) => store.auth);
  if (isAuthenticated) {
    return <Navigate to={"/dashboard"} />;
  }
};
