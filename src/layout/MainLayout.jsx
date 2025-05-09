import AdminSidebar from "@/components/AdminSidebar";
import Sidebar from "@/components/Sidebar";
import React, { useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
  const location = useLocation();

  // List of paths where Sidebar should NOT be shown
  const hideSidebarPaths = [
    "/",
    "/*",
    "/admin/*",
    "/login",
    "/register",
    "/send-otp",
    "/reset-password",
    "/forgot-password/send-otp",
    "/login/otp-verification",
    "/admin/login",
  ];

  const shouldHideSidebar = useMemo(
    () => hideSidebarPaths.includes(location.pathname),
    [location.pathname]
  );
  return (
    <div className="flex min-h-screen">
      {!shouldHideSidebar && <Sidebar  />}
      <div
        className={`flex-1 ${!shouldHideSidebar ? "md:pl-60" : ""}`} // match sidebar width
      >
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
