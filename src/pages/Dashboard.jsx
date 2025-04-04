import PageTitle from "@/components/PageTitle";
import { PanelsTopLeft } from "lucide-react";
import React from "react";

const Dashboard = () => {
  return (
    <>
      <PageTitle title={"Dashboard"} />

      <div className="m-10">
        <div className="flex gap-4 text-primary items-center">
          <PanelsTopLeft size={30} />
          <h1 className=" text-3xl font-semibold font-winky ">Dashboard</h1>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
