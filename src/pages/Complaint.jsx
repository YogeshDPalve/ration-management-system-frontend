import PageTitle from "@/components/PageTitle";
import { CircleAlert } from "lucide-react";
import React from "react";

const Complaint = () => {
  return (
    <>
      <PageTitle title={"Complaint"} />

      <div className="m-10">
        <div className="flex gap-4 text-primary items-center">
          <CircleAlert size={30} />
          <h1 className=" text-3xl font-semibold font-winky ">
            Complaint / Feedback
          </h1>
        </div>
      </div>
    </>
  );
};

export default Complaint;
