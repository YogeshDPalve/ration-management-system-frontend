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
  { id: 1, emoji: "😤", emotion: "WORSE" },
  { id: 2, emoji: "🙁", emotion: "BAD" },
  { id: 3, emoji: "🙂", emotion: "OK" },
  { id: 4, emoji: "☺️", emotion: "GOOD" },
  { id: 5, emoji: "😍", emotion: "EXCELLENT" },
];

const Complaint = () => {
  // select emojies for feedback
  const [emojis, setEmojis] = useState(null);
  const handleRatingClicked = (emoji) => {
    setEmojis(emoji);
  };

  // formData state to submit complaint data
  const [formData, setFormData] = useState({
    userName: "",
    rationId: "",
    shopNumber: "",
    shopOwnerName: "",
    shopAddress: "",
    proof: [],
    issueType: "",
    description: "",
  });
  // handle change in files
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files); // Convert FileList to array

    setFormData((prev) => ({
      ...prev,
      proof: files,
    }));
  };

  // handle change in select
  const handleSelectChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      issueType: value,
    }));
  };

  // handle change in state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // handle sumbit complaint
  const handleComplaint = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const handleFeedback = (e) => {
    e.preventDefault();
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
              <form onSubmit={handleComplaint}>
                <CardContent className="space-y-4  w-full  mx-auto">
                  <div className="space-y-1">
                    <Label htmlFor="name">Name</Label>
                    <Input name="userName" onChange={handleChange} required />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="text">Ration Id</Label>
                    <Input
                      name="rationId"
                      type="number"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="text">Fair Price Shop Number</Label>
                    <Input
                      name="shopNumber"
                      type="number"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="text">Name of Shop Owner</Label>
                    <Input
                      name="shopOwnerName"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="name">Address of shop</Label>
                    <Input
                      name="shopAddress"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="file">
                      Add Proof
                      <span className="font-normal text-secondary-foreground">
                        (Images/Document)
                      </span>
                    </Label>
                    <Input
                      name="proof"
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                  </div>
                  <div className="flex gap-3">
                    {formData.proof.map((file) => (
                      <img
                        key={file.name}
                        src={URL.createObjectURL(file)}
                        alt="preview"
                        className="w-20 h-20 object-cover rounded"
                      />
                    ))}
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="file">Complaint about</Label>
                    <Select onValueChange={handleSelectChange} required>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Issue Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="missing-ration">
                          Missing Ration
                        </SelectItem>
                        <SelectItem value="over-charging">
                          Over Charging
                        </SelectItem>
                        <SelectItem value="corruption">Courrption</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="name">Description</Label>
                    <Textarea
                      onChange={handleChange}
                      name="description"
                      placeholder="Provide detailed information about your complaint"
                    />
                  </div>
                  <Button type="submit">Submit</Button>
                </CardContent>
              </form>
            </Card>
          </TabsContent>
          <TabsContent value="feedback" className="md:w-[100%] w-90 mx-auto">
            <Card>
              <form onSubmit={handleFeedback}>
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
                                onClick={() =>
                                  handleRatingClicked(emoji.emotion)
                                }
                                className={`flex items-center lg:mx-4 justify-center rounded-full opacity-50 md:text-4xl sm:mx-1 text-4xl h-15 w-15 sm:h-14 sm:w-14 bg-transparent hover:opacity-100 hover:bg-transparent hover:scale-140 ${
                                  emojis === emoji.id
                                    ? "opacity-100 scale-150"
                                    : ""
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

                  <Input
                    name="shopNumber"
                    type="number"
                    placeholder="Fair Price Shop Number"
                  />

                  <Textarea type="text" name="message" placeholder="Message" />
                  <Button type="submit">Submit</Button>
                </CardContent>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Complaint;
