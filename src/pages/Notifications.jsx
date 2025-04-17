import PageTitle from "@/components/PageTitle";
import { MailCheck, MessageSquareMore, Trash2 } from "lucide-react";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
const notifications = [
  {
    id: "notif-1",
    userId: "MH1234567890",
    date: "2025-03-30",
    message: "Your ration for March is ready for pickup.",
    type: "Pickup",
    isRead: false,
  },
  {
    id: "notif-2",
    userId: "MH1234567890",
    date: "2025-03-30",
    message: "New government guideline update available.",
    type: "Update",
    isRead: true,
  },
  {
    id: "notif-3",
    userId: "MH1234567890",
    date: "2025-03-25",
    message: "Wheat and sugar stock has been updated.",
    type: "Stock Update",
    isRead: false,
  },
  {
    id: "notif-4",
    userId: "MH1234567890",
    date: "2025-03-15",
    message: "Your previous ration purchase has been recorded.",
    type: "Confirmation",
    isRead: true,
  },
  {
    id: "notif-5",
    userId: "MH1234567890",
    date: "2025-03-01",
    message: "Monthly allotment for March has been assigned.",
    type: "Allotment",
    isRead: false,
  },
  {
    id: "notif-6",
    userId: "MH1234567890",
    date: "2025-02-28",
    message: "Ration for February has been picked up.",
    type: "Pickup Confirmation",
    isRead: true,
  },
  {
    id: "notif-7",
    userId: "MH1234567890",
    date: "2025-02-15",
    message: "Oil and daal stock is now available.",
    type: "Stock Alert",
    isRead: true,
  },
  {
    id: "notif-8",
    userId: "MH1234567890",
    date: "2025-02-01",
    message: "February ration quota has been generated.",
    type: "Allotment",
    isRead: false,
  },
];

const Notifications = () => {
  return (
    <>
      <PageTitle title={"Notifications"} />

      <div className="md:m-10 my-10 mx-3 flex gap-4 justify-between flex-col md:flex-row">
        <div className="flex gap-4 text-primary items-center">
          <MessageSquareMore size={30} />
          <h1 className=" md:text-3xl text-2xl font-semibold font-winky ">
            Notifications
          </h1>
        </div>
        <div className="flex gap-4 ">
          <Button variant="outline" className="cursor-pointer text-xs">
            Mark All Read
          </Button>
          <Button variant="destructive" className="cursor-pointer text-xs">
            Delete All
          </Button>
        </div>
      </div>
      <div className="m-2 md:px-10 text-primary lg:grid grid-cols-2">
        {notifications.map((notification) => (
          <Card key={notification.id} className="m-2 p-3 px-0 gap-3">
            <CardHeader className="flex items-center justify-between">
              <CardTitle className="text-lg">{notification.type}</CardTitle>
              <CardDescription className="text-sm">
                {notification.date}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                {notification.message}
              </p>
              <div className="flex gap-3">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Button
                        className="p-2 h-8  text-xs font-normal cursor-pointer"
                        variant="outline"
                      >
                        <MailCheck />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Mark as read</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Button
                        className="p-2 h-8 text-xs font-normal cursor-pointer"
                        variant="destructive"
                      >
                        <Trash2 />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Delete message</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Notifications;
