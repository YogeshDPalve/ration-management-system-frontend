import PageTitle from "@/components/PageTitle";
import { CircleAlert, Loader2 } from "lucide-react";
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
import {
  useSendComplaintMutation,
  useSendFeedbackMutation,
} from "@/features/api/userApi";
import { toast } from "sonner";
import { useSelector } from "react-redux";

const ratring = [
  { id: "WORSE", emoji: "😤" },
  { id: "BAD", emoji: "🙁" },
  { id: "OK", emoji: "🙂" },
  { id: "GOOD", emoji: "☺️" },
  { id: "EXCELLENT", emoji: "😍" },
];

const Complaint = () => {
  const { rationId } = useSelector((store) => store.auth.user);
  // select emojies for feedback
  const [emojis, setEmojis] = useState(null);
  const [feedbackData, setFeedbackData] = useState({
    shopNumber: "",
    message: "",
  });
  const handleRatingClicked = (emoji, e) => {
    e.preventDefault();
    e.stopPropagation();
    setEmojis(emoji);
  };

  // formData state to submit complaint data
  const [sendComplaint, { isLoading: isComplaintLoading }] =
    useSendComplaintMutation();
  const [sendFeedback, { isLoading }] = useSendFeedbackMutation();
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
    setFeedbackData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // handle sumbit complaint
  const handleComplaint = async (e) => {
    try {
      e.preventDefault();

      const form = new FormData();
      form.append("userName", formData.userName);
      form.append("rationId", formData.rationId);
      form.append("shopNumber", formData.shopNumber);
      form.append("shopOwnerName", formData.shopOwnerName);
      form.append("shopAddress", formData.shopAddress);
      form.append("issueType", formData.issueType);
      form.append("description", formData.description);

      // Append all selected proof files
      formData.proof.forEach((file) => {
        form.append("proof", file);
      });

      // console.log(complaintData);
      const complaintData = await sendComplaint(form).unwrap();
      toast.success(complaintData?.message || "Complaint send successfully");
      setFormData({
        userName: "",
        rationId: "",
        shopNumber: "",
        shopOwnerName: "",
        shopAddress: "",
        proof: [],
        issueType: "",
        description: "",
      });
    } catch (error) {
      console.log(error);
      toast.error(
        error?.data?.message ||
          error?.data?.errors[0]?.msg ||
          "Unable to send complaint"
      );
    }
  };
  {
    // const handleFeedbackChange = (e) => {
    //   const { name, value } = e.target;
    //   setFeedbackData((prevState) => ({
    //     ...prevState,
    //     [name]: value,
    //   }));
    // };
  }
  // submitting feedback form
  const handleFeedback = async (e) => {
    try {
      e.preventDefault();
      const feedbackFormData = {
        rationId: rationId,
        rating: emojis,
        shopNumber:
          feedbackData.shopNumber?.trim() === ""
            ? null
            : Number(feedbackData.shopNumber),
        message: feedbackData.message,
      };
      // console.log(feedbackFormData);
      const feedback = await sendFeedback(feedbackFormData).unwrap();
      toast.success(feedback?.message || "Feedback send successfully");
      // reset form after submission
      setFeedbackData({
        shopNumber: "",
        message: "",
      });
      setEmojis(null);
    } catch (error) {
      console.log(error);
      toast.error(
        error?.data?.message ||
          error?.data?.errors[0]?.msg ||
          "Cannot send feedback"
      );
    }
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
                      value={formData.rationId}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="text">Fair Price Shop Number</Label>
                    <Input
                      name="shopNumber"
                      type="number"
                      min={0}
                      required
                      value={formData.shopNumber}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="text">Name of Shop Owner</Label>
                    <Input
                      name="shopOwnerName"
                      value={formData.shopOwnerName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="name">Address of shop</Label>
                    <Input
                      name="shopAddress"
                      value={formData.shopAddress}
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
                    {formData?.proof?.map((file) => (
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
                    <Select
                      onValueChange={handleSelectChange}
                      value={formData.issueType}
                      required
                    >
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
                      value={formData.description}
                      onChange={handleChange}
                      name="description"
                      placeholder="Provide detailed information about your complaint"
                    />
                  </div>
                  <Button type="submit" disabled={isComplaintLoading}>
                    {isComplaintLoading ? (
                      <>
                        <Loader2 className="animate-spin" /> Please wait
                      </>
                    ) : (
                      "Submit"
                    )}
                  </Button>
                </CardContent>
              </form>
            </Card>
          </TabsContent>
          <TabsContent value="feedback" className="md:w-[100%] w-90 mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Feedback</CardTitle>
                <CardDescription>Provide your feedback here.</CardDescription>
              </CardHeader>

              <form onSubmit={handleFeedback}>
                <CardContent className="space-y-4">
                  <div className="flex items-center-center justify-between overflow-auto h-18 md:h-20">
                    {ratring.map((emoji) => (
                      <div key={emoji.id}>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger className="">
                              <Button
                                type="button"
                                onClick={(e) =>
                                  handleRatingClicked(emoji.id, e)
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
                              {emoji.id}
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
                    value={feedbackData.shopNumber}
                    onChange={handleChange}
                  />

                  <Textarea
                    type="text"
                    name="message"
                    placeholder="Message"
                    value={feedbackData.message}
                    onChange={handleChange}
                  />
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="animate-spin  " /> Please wait
                      </>
                    ) : (
                      "Submit"
                    )}
                  </Button>
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
