import PageTitle from "@/components/PageTitle";
import React from "react";

import Sidebar from "@/components/Sidebar";
const Dashboard = () => {
  return (
    <>
      <PageTitle title={"Dashboard"} />

      <div>
      <Sidebar />
        <h1>Dashboard</h1>
      </div>
    </>
  );
};

export default Dashboard;
