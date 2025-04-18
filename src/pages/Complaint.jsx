import PageTitle from "@/components/PageTitle";
import { CircleAlert } from "lucide-react";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

const ratring = [
  { id: 1, emoji: "😤", emotion: "Worse" },
  { id: 2, emoji: "🙁", emotion: "Bad" },
  { id: 3, emoji: "🙂", emotion: "Ok" },
  { id: 4, emoji: "☺️", emotion: "Good" },
  { id: 5, emoji: "😍", emotion: "Excellent" },
];

const Complaint = () => {
  const [emojis, setEmojis] = useState(null);
  const handleRatingClicked = (emoji) => {
    setEmojis(emoji);
  };
  return (
    <>
      <PageTitle title={"Complaint"} />

      <div className="md:m-10 my-10 mx-2">
        <div className="flex gap-4 text-primary items-center">
          <CircleAlert size={30} />
          <h1 className=" md:text-3xl text-2xl font-semibold font-winky ">
            Complaint / Feedback
          </h1>
        </div>
      </div>
      <div className="m-1">
        <Tabs defaultValue="complaint" className="md:w-[75%] mx-1  md:mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="complaint">complaint</TabsTrigger>
            <TabsTrigger value="feedback">feedback</TabsTrigger>
          </TabsList>
          <TabsContent value="complaint" className="w-full mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl  ">Complaint</CardTitle>
                <CardDescription>
                  Make changes to your complaint here. Click save when you're
                  done.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4  w-full  mx-auto">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="text">Ration Id</Label>
                  <Input id="rationid" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="name">Fair Price Shop Number</Label>
                  <Input id="name" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="name">Name of Shop Owner</Label>
                  <Input id="name" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="name">Address of shop</Label>
                  <Input id="name" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="file">Add Images</Label>
                  <Input id="name" type="file" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="file">Complaint about</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Complaint about" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Missing Items</SelectItem>
                      <SelectItem value="dark">Courrption</SelectItem>
                      <SelectItem value="system">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="name">Message</Label>
                  <Textarea placeholder="Provide detailed information about your complaint" />
                </div>
                <Button>Submit</Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="feedback" className="md:w-[100%] w-90 mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Feedback</CardTitle>
                <CardDescription>Provide your feedback here.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center-center justify-between overflow-auto h-18 md:h-20">
                  {ratring.map((emoji) => (
                    <div className=" " key={emoji.id}>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger className="">
                            <Button
                              onClick={() => handleRatingClicked(emoji.id)}
                              className={`flex items-center justify-center rounded-full opacity-50 md:text-4xl sm:mx-1 text-4xl h-15 w-15 sm:h-14 sm:w-14 bg-transparent hover:opacity-100 hover:bg-transparent hover:scale-140 ${
                                emojis === emoji.id ? "opacity-100 scale-150" : ""
                              } `}
                            >
                              {emoji.emoji}
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent className="font-semibold">
                            {emoji.emotion}
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  ))}
                </div>
                <div className="space-y-1">
                  <Input
                    id="current"
                    type="number"
                    placeholder="Fair Price Shop Number"
                  />
                </div>
                <div className="space-y-1">
                  <Textarea type="text" placeholder="Message" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Submit</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Complaint;
