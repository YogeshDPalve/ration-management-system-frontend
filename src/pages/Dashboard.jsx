import Navbar from "@/components/Navbar";
import PageTitle from "@/components/PageTitle";
import React from "react";

const Dashboard = () => {
  return (
    <>
      <PageTitle title={"Dashboard"} />
      <Navbar />
      <div className="text-4xl font-bold flex items-center justify-center h-[100vh]">
        Dashboard
      </div>
      ;
    </>
  );
};

export default Dashboard;
