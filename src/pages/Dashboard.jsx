import Navbar from "@/components/Navbar";
import PageTitle from "@/components/PageTitle";
import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import SideBar from "@/components/Sidebar";
const Dashboard = () => {
  return (
    <>
      <PageTitle title={"Dashboard"} />
      <Navbar />
      <SidebarProvider  >
        <SideBar  />
        <main>
          <SidebarTrigger  />
        </main>
      </SidebarProvider>
    </>
  );
};

export default Dashboard;
