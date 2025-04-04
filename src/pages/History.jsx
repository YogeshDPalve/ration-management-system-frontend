import PageTitle from "@/components/PageTitle";
import { CalendarClockIcon } from "lucide-react";
import React from "react";

const History = () => {
  return (
    <>
      <PageTitle title={"History"} />

      <div className="m-10">
        <div className="flex gap-4 text-primary items-center">
          <CalendarClockIcon size={30} />
          <h1 className=" text-3xl font-semibold font-winky ">History</h1>
        </div>
      </div>
    </>
  );
};

export default History;
