import Sidebar from "@/components/Sidebar";
import React from "react";
import { Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
  const location = useLocation();

  // List of paths where Sidebar should NOT be shown
  const hideSidebarPaths = [
    "/login",
    "/register",
    "/send-otp",
    "/reset-password",
    "/login/otp-verification",
  ];

  return (
    <div className="flex min-h-screen">
      {/* Show Sidebar only if the current path is NOT in the hideSidebarPaths list */}
      {!hideSidebarPaths.includes(location.pathname) && <Sidebar />}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
