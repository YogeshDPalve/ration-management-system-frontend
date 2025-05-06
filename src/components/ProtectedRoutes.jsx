import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const ProtectedRoutes = ({ children }) => {
  const { user, isAuthenticated } = useSelector((store) => store.auth); 
  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }
  if (user?.role === "admin") {
    return <Navigate to={"/admin/login"} />;
  }
  return children;
};

export const AuthenticatedUser = ({ children }) => {
  const { isAuthenticated } = useSelector((store) => store.auth);
  if (isAuthenticated) {
    return <Navigate to={"/dashboard"} />;
  }
  return children;
};
export const AuthenticatedAdmin = ({ children }) => {
  const { user, isAuthenticated } = useSelector((store) => store.auth);
  if (isAuthenticated && user?.role === "admin") {
    return <Navigate to={"/admin/dashboard"} />;
  }
  if (isAuthenticated && user?.role !== "admin") {
    return <Navigate to={"/login"} />;
  }
  return children;
};

export const AdminRoute = ({ children }) => {
  const { user, isAuthenticated } = useSelector((store) => store.auth);

  if (!isAuthenticated) {
    return <Navigate to={"/admin/login"} />;
  }
  if (user?.role !== "admin") {
    return <Navigate to={"/login"} />;
  }
  return children;
};
