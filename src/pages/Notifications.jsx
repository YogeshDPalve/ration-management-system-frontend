import PageTitle from "@/components/PageTitle";
import { MessageSquareMore } from "lucide-react";
import React from "react";

const Notifications = () => {
  return (
    <>
      <PageTitle title={"Notifications"} />

      <div className="m-10">
        <div className="flex gap-4 text-primary items-center">
          <MessageSquareMore size={30} />
          <h1 className=" text-3xl font-semibold font-winky ">Notifications</h1>
        </div>
      </div>
    </>
  );
};

export default Notifications;
