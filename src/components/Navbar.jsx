import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell } from "lucide-react";
const Navbar = () => {
  return (
    <div className="flex md:ml-10  items-center justify-between px-10 h-16 border-b-2">
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold ">
          Ration Management System
        </h2>
      </div>
      <div className="flex  items-center justify-between w-30">
        <div className="relative flex items-center justify-center  size-11.5">
          <div className=" absolute size-5.5 p-0.5 bg-red-500 top-0 right-0 rounded-full flex items-center justify-center  ">
            <p className="text-[.7rem] ">{"12"}</p>
          </div>
          <Bell size={24} />
        </div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
