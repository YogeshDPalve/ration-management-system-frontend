import PageTitle from "@/components/PageTitle";
import { PanelsTopLeft } from "lucide-react";
import React from "react";

const Dashboard = () => {
  return (
    <>
      <PageTitle title={"Dashboard"} />

      <div className="md:m-10 my-10 mx-3">
        <div className="flex gap-4 text-primary items-center">
          <PanelsTopLeft size={30} />
          <h1 className="md:text-3xl t`ext-2xl font-semibold font-winky ">
            Dashboard
          </h1>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
