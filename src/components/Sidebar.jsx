import React from "react";
import { Separator } from "./ui/separator";
import {
  Bell,
  CalendarClockIcon,
  ChevronDown,
  CircleAlert,
  EllipsisVertical,
  MessageSquareMore,
  PanelsTopLeft,
  Search,
  Wheat,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const Sidebar = () => {
  return (
    <div className=" border-r-1 bg-[#111113] h-[100vh] sticky p-2  w-50 text-primary  ">
      <div className="flex items-center justify-between h-10 p-2">
        <div>
          <div className="font-winky text-lg  ">RMS</div>
        </div>
        <div className="flex w-13 text-muted-foreground justify-between">
          <Wheat size={17} />
          <Bell size={17} className="cursor-pointer hover:text-primary" />
        </div>
      </div>
      <div>
        <Button
          variant="outline"
          className="w-full h-7 text-xs text-primary cursor-pointer font-nunito font-light flex items-center justify-start mb-3"
        >
          <Search /> Search
        </Button>
      </div>
      <div className="mb-4">
        <h2 className="text-xs font-inter text-gray-300 mb-1">Account</h2>{" "}
        <Button
          variant="outline"
          className="h-10 p-2 w-full cursor-pointer flex justify-start items-center"
        >
          <div className="flex items-center justify-start gap-2">
            <Avatar className="size-6">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h4 className="text-xs">John Doe</h4>
          </div>
        </Button>
      </div>

      <div className="mt-3 space-y-1 font-semibold">
        <div className="flex items-center font-normal gap-3 rounded-sm p-1 text-xs hover:text-blue-300 hover:bg-[#0D2847] h-8 cursor-pointer">
          <PanelsTopLeft size={17} />
          <a href="/dashboard">Dashboard</a>
        </div>
        <div className="flex items-center gap-3 font-normal rounded-sm p-1 text-xs hover:text-blue-300 hover:bg-[#0D2847] h-8 cursor-pointer">
          <MessageSquareMore size={17} />
          <a href="/notifications">Notifications</a>
        </div>
        <div className="flex items-center gap-3 font-normal rounded-sm p-1 text-xs hover:text-blue-300 hover:bg-[#0D2847] h-8 cursor-pointer">
          <CalendarClockIcon size={17} />
          <a href="/history">History</a>
        </div>
        <div className="flex items-center gap-3 font-normal rounded-sm p-1 text-xs hover:text-blue-300 hover:bg-[#0D2847] h-8 cursor-pointer">
          <CircleAlert size={17} />
          <a href="/complaint">Complaint</a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full ">
        <div className=" ">
          <Separator />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="h-15 p-3 w-full cursor-pointer flex justify-start items-center rounded-none border-none"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center justify-start gap-3">
                    <Avatar className="size-6">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="text-start">
                      <h4 className="text-xs">John Doe</h4>
                      <p className="text-xs font-normal text-wrap text-gray-400">
                        johndoe@gmail
                      </p>
                    </div>
                  </div>
                  <div>
                    <EllipsisVertical className="text-gray-400" />
                  </div>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-50">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  Profile
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Billing
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Settings
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Keyboard shortcuts
                  <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>Email</DropdownMenuItem>
                      <DropdownMenuItem>Message</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>More...</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuItem>
                  New Team
                  <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuItem disabled>API</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-300 ">
                Log out
                <DropdownMenuShortcut className="text-red-300 ">
                  ⇧⌘Q
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
