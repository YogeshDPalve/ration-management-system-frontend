import { Bell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
const Navbar = () => {
  return (
    <>
      <div className="h-16 bg-violet-200 shadow-md flex items-center">
        <div className=" flex items-center justify-between h-full w-[90%] mx-auto ">
          <div>
            <h1 className="md:text-3xl text-2xl	font-bold">
              Ration Management Sysytem
            </h1>
          </div>
          <div className="flex items-center gap-15 ">
            <div className="relative">
              <Bell size={28} className="text-gray-700 " />
              <div className="absolute bg-red-500 aspect-square w-4 flex items-center justify-center text-xs text-white font-bold top-0  left-3 rounded-full">
                {2}
              </div>
            </div>
            <Avatar className="aspect-square w-12 h-12">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
