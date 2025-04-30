import React from "react";
import { Separator } from "./ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Bell,
  CalendarClockIcon,
  CircleAlert,
  EllipsisVertical,
  Loader2,
  Menu,
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
import { Link, NavLink } from "react-router-dom";
import "../index.css";
import { useLazyLogoutQuery } from "@/features/api/authApi";
import { toast } from "sonner";
import { useSelector } from "react-redux";
const Sidebar = () => {
  // import user logout api
  const [trigger, { isLoading, error }] = useLazyLogoutQuery();
  // logout user function
  const handleLogout = () => {
    try {
      trigger();
      if (error) {
        toast.error("Something went wrong! Logout unsuccessful");
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const role = useSelector((store) => store.user.role);
  console.log("ROLE: ", role);
  return (
    <>
      <div className="hidden md:block border-r-1 bg-[#111113] p-2  w-60 text-primary fixed top-0 left-0 h-screen z-50 ">
        <div className="flex items-center justify-between h-10 p-2">
          <div>
            <div className="font-winky text-xl font-semibold tracking-wider  ">
              RMS
            </div>
          </div>
          <div className="flex w-13 text-muted-foreground justify-between">
            <Wheat size={17} />
            <Bell size={17} className="cursor-pointer hover:text-primary" />
          </div>
        </div>
        <div>
          <Button
            variant="outline"
            className="w-full h-9 text-sm text-muted-foreground cursor-pointer font-nunito  flex items-center justify-start mb-3"
          >
            <Search /> Search
          </Button>
        </div>
        <div className="mb-4">
          <h2 className="text-xs font-inter text-muted-foreground mb-1">
            Account
          </h2>{" "}
          <Button
            variant="outline"
            className="h-12 p-2 w-full cursor-pointer flex justify-start items-center"
          >
            <div className="flex items-center justify-start p-2 gap-2">
              <Avatar className="size-7">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h4 className="text-sm">John Doe</h4>
            </div>
          </Button>
        </div>
        <Separator />
        <div className="mt-3 space-y-1 font-semibold">
          <NavLink
            to="/dashboard"
            className={`${({ isActive }) =>
              isActive
                ? "active"
                : ""} flex items-center gap-3 font-normal rounded-sm p-1 text-sm hover:text-white hover:bg-[#18191B] h-9 cursor-pointer pl-3`}
          >
            <PanelsTopLeft size={17} />
            Dashboard
          </NavLink>
          <NavLink
            to="/notifications"
            className={`${({ isActive }) =>
              isActive
                ? "active"
                : ""} flex items-center gap-3 font-normal rounded-sm p-1 text-sm hover:text-white hover:bg-[#18191B] h-9 cursor-pointer pl-3`}
          >
            <MessageSquareMore size={17} />
            Notifications
          </NavLink>
          <NavLink
            to="/history"
            className={`${({ isActive }) =>
              isActive
                ? "active"
                : ""} flex items-center gap-3 font-normal rounded-sm p-1 text-sm hover:text-white hover:bg-[#18191B] h-9 cursor-pointer pl-3`}
          >
            <CalendarClockIcon size={17} />
            History
          </NavLink>
          <NavLink
            to="/complaint"
            className={`${({ isActive }) =>
              isActive
                ? "active"
                : ""} flex items-center gap-3 font-normal rounded-sm p-1 text-sm hover:text-white hover:bg-[#18191B] h-9 cursor-pointer pl-3`}
          >
            <CircleAlert size={17} />
            Complaint
          </NavLink>
        </div>

        <div className="absolute bottom-0 left-0 w-full ">
          <div className=" ">
            <Separator />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="h-17 p-3 w-full cursor-pointer flex justify-start items-center rounded-none border-none"
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center justify-start gap-3">
                      <Avatar className="size-8">
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div className="text-start font-nunito">
                        <h4 className="text-sm">John Doe</h4>
                        <p className="text-sm font-normal break-words text-muted-foreground">
                          johndoe@gmail
                        </p>
                      </div>
                    </div>
                    <div>
                      <EllipsisVertical className="text-muted-foreground" />
                    </div>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <Link to="/profile">
                    <DropdownMenuItem>
                      Profile
                      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </Link>
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
                    <DropdownMenuSubTrigger>
                      Invite users
                    </DropdownMenuSubTrigger>
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

                <DropdownMenuItem
                  onClick={handleLogout}
                  className="text-red-300 "
                >
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
      <div className="md:hidden absolute sm:right-15 sm:top-10 top-10  right-4">
        <Sheet>
          <SheetTrigger>
            <Button variant="outline">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <div className="flex items-center justify-between h-10 mr-4 p-2">
                  <div>
                    <div className="font-winky text-xl font-semibold tracking-wider  ">
                      RMS
                    </div>
                  </div>
                  <div className="flex w-13 text-muted-foreground justify-between">
                    <Wheat size={17} />
                    <Bell
                      size={17}
                      className="cursor-pointer hover:text-primary"
                    />
                  </div>
                </div>
              </SheetTitle>
              <SheetDescription>
                <div className="border-r-1 bg-[#111113] p-2   text-primary   ">
                  <div>
                    <Button
                      variant="outline"
                      className="w-full h-9 text-sm text-muted-foreground cursor-pointer font-nunito  flex items-center justify-start mb-3"
                    >
                      <Search /> Search
                    </Button>
                  </div>
                  <div className="mb-4">
                    <h2 className="text-xs font-inter text-muted-foreground mb-1">
                      Account
                    </h2>{" "}
                    <Button
                      variant="outline"
                      className="h-12 p-2 w-full cursor-pointer flex justify-start items-center"
                    >
                      <div className="flex items-center justify-start p-2 gap-2">
                        <Avatar className="size-7">
                          <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <h4 className="text-sm">John Doe</h4>
                      </div>
                    </Button>
                  </div>
                  <Separator />
                  <div className="mt-3 space-y-1 font-semibold">
                    <NavLink
                      to="/dashboard"
                      className={`${({ isActive }) =>
                        isActive
                          ? "active"
                          : ""} flex items-center gap-3 font-normal rounded-sm p-1 text-sm hover:text-white hover:bg-[#18191B] h-9 cursor-pointer pl-3`}
                    >
                      <PanelsTopLeft size={17} />
                      Dashboard
                    </NavLink>
                    <NavLink
                      to="/notifications"
                      className={`${({ isActive }) =>
                        isActive
                          ? "active"
                          : ""} flex items-center gap-3 font-normal rounded-sm p-1 text-sm hover:text-white hover:bg-[#18191B] h-9 cursor-pointer pl-3`}
                    >
                      <MessageSquareMore size={17} />
                      Notifications
                    </NavLink>
                    <NavLink
                      to="/history"
                      className={`${({ isActive }) =>
                        isActive
                          ? "active"
                          : ""} flex items-center gap-3 font-normal rounded-sm p-1 text-sm hover:text-white hover:bg-[#18191B] h-9 cursor-pointer pl-3`}
                    >
                      <CalendarClockIcon size={17} />
                      History
                    </NavLink>
                    <NavLink
                      to="/complaint"
                      className={`${({ isActive }) =>
                        isActive
                          ? "active"
                          : ""} flex items-center gap-3 font-normal rounded-sm p-1 text-sm hover:text-white hover:bg-[#18191B] h-9 cursor-pointer pl-3`}
                    >
                      <CircleAlert size={17} />
                      Complaint
                    </NavLink>
                  </div>

                  <div className="absolute bottom-0 left-0 w-full ">
                    <div className=" ">
                      <Separator />
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="outline"
                            className="h-17 p-3 w-full cursor-pointer flex justify-start items-center rounded-none border-none"
                          >
                            <div className="flex items-center justify-between w-full">
                              <div className="flex items-center justify-start gap-3">
                                <Avatar className="size-8">
                                  <AvatarImage
                                    src="https://github.com/shadcn.png"
                                    alt="@shadcn"
                                  />
                                  <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <div className="text-start font-nunito">
                                  <h4 className="text-sm">John Doe</h4>
                                  <p className="text-sm font-normal break-words text-muted-foreground">
                                    johndoe@gmail
                                  </p>
                                </div>
                              </div>
                              <div>
                                <EllipsisVertical className="text-muted-foreground" />
                              </div>
                            </div>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-75">
                          <DropdownMenuLabel>My Account</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuGroup>
                            <Link to="/profile">
                              <DropdownMenuItem>
                                Profile
                                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                              </DropdownMenuItem>
                            </Link>
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
                              <DropdownMenuSubTrigger>
                                Invite users
                              </DropdownMenuSubTrigger>
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
                          <Link to="/">
                            <DropdownMenuItem className="text-red-300 ">
                              {isLoading ? (
                                <>
                                  Logging Out
                                  <Loader2 className="animate-spin" />
                                </>
                              ) : (
                                "LogOut"
                              )}
                              <DropdownMenuShortcut className="text-red-300 ">
                                ⇧⌘Q
                              </DropdownMenuShortcut>
                            </DropdownMenuItem>
                          </Link>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default Sidebar;
