import PageTitle from "@/components/PageTitle";
import { Separator } from "@/components/ui/separator";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { CardContent } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "January", Price: 186 },
  { month: "February", Price: 305 },
  { month: "March", Price: 237 },
  { month: "April", Price: 173 },
  { month: "May", Price: 209 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#c6d6f4",
  },
};
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  CircleUserRound,
  LibraryBig,
  ReceiptIndianRupee,
  Users,
} from "lucide-react";
import React from "react";
import { useGetUserQuery } from "@/features/api/authApi";
import { Skeleton } from "@/components/ui/skeleton";
const user = {
  rationId: "123456",
  adharcardNumber: "123456789012",
  firstName: "John",
  middleName: "Micheal",
  lastName: "Doe",
  mobileNo: "9766593964",
  email: "john@doe.com",
  address: "California",
  password: "123456",
  fairPriceShopNumber: 42,
};
const family = [
  {
    fullName: "Rajesh Rathod",
    age: "75",
    gender: "MALE",
    adharCard: "12345678900",
    relation: "Self",
  },
  {
    fullName: "Sunita Rathod",
    age: "70",
    gender: "FEMALE",
    adharCard: "12345678901",
    relation: "Wife",
  },
  {
    fullName: "Sandeep Rathod",
    age: "45",
    gender: "MALE",
    adharCard: "12345678902",
    relation: "Son",
  },
  {
    fullName: "Anjali Rathod",
    age: "42",
    gender: "FEMALE",
    adharCard: "12345678903",
    relation: "Daughter-in-law",
  },
  {
    fullName: "Amit Rathod",
    age: "20",
    gender: "MALE",
    adharCard: "12345678904",
    relation: "Grandson",
  },
  {
    fullName: "Neha Rathod",
    age: "18",
    gender: "FEMALE",
    adharCard: "12345678905",
    relation: "Granddaughter",
  },
  {
    fullName: "Rahul Rathod",
    age: "40",
    gender: "MALE",
    adharCard: "12345678906",
    relation: "Son",
  },
  {
    fullName: "Priya Rathod",
    age: "38",
    gender: "FEMALE",
    adharCard: "12345678907",
    relation: "Daughter-in-law",
  },
  {
    fullName: "Karan Rathod",
    age: "15",
    gender: "MALE",
    adharCard: "12345678908",
    relation: "Grandson",
  },
  {
    fullName: "Pooja Rathod",
    age: "13",
    gender: "FEMALE",
    adharCard: "12345678909",
    relation: "Granddaughter",
  },
  {
    fullName: "Meera Rathod",
    age: "37",
    gender: "FEMALE",
    adharCard: "12345678910",
    relation: "Daughter",
  },
  {
    fullName: "Vikram Sharma",
    age: "40",
    gender: "MALE",
    adharCard: "12345678911",
    relation: "Son-in-law",
  },
  {
    fullName: "Aarav Sharma",
    age: "12",
    gender: "MALE",
    adharCard: "12345678912",
    relation: "Grandson",
  },
  {
    fullName: "Riya Sharma",
    age: "10",
    gender: "FEMALE",
    adharCard: "12345678913",
    relation: "Granddaughter",
  },
];

const Profile = () => {
  const { data, isLoading } = useGetUserQuery();
  // const isLoading = true;

  const userData = data?.userInfo;
  // console.log(userData);
  return (
    <>
      <PageTitle title={"Profile"} />

      <div className="md:m-10 my-10 mx-3 md:mx-5 text-primary">
        {/* page Title */}
        <div className="flex gap-4 text-primary items-center">
          <CircleUserRound size={30} />
          <h1 className=" text-3xl font-semibold font-winky ">Profile</h1>
        </div>
        {/* Basic information  */}
        <div className="grid lg:grid-cols-2 gap-5 grid-cols-1 ">
          {isLoading ? (
            <>
              <AccountInfoSkeleton />
            </>
          ) : (
            <>
              <div className="border mt-5 sm:p-5 p-3 bg-[#111113] tracking-tight rounded-sm sm:w-auto ">
                <div className="flex items-center gap-5 ">
                  <LibraryBig className="text-muted-foreground" size={20} />
                  <h2 className="font-bold text-2xl">Account Information</h2>
                </div>
                <p className="text-muted-foreground text-md">
                  Basic information about your account
                </p>
                <Separator className="mt-5 mb-2 " />
                <div className="font-inter">
                  <div className="p-2">
                    <div className=" flex items-center justify-between">
                      <h4 className="text-md font-semibold">Name</h4>
                      <p className="text-sm">
                        {userData.firstName} {userData.lastName}
                      </p>
                    </div>
                  </div>
                  <Separator className="my-2 " />
                  <div className="p-2">
                    <div className=" flex items-center justify-between">
                      <h4 className="text-md font-semibold">
                        Adhar Card Number
                      </h4>
                      <p className="text-sm">{userData.adharcardNumber} </p>
                    </div>
                  </div>
                  <Separator className="my-2 " />
                  <div className="p-2">
                    <div className=" flex items-center justify-between">
                      <h4 className="text-md font-semibold">Ration Id</h4>
                      <p className="text-sm">{userData.rationId} </p>
                    </div>
                  </div>
                  <Separator className="my-2 " />
                  <div className="p-2">
                    <div className=" flex items-center justify-between">
                      <h4 className="text-md font-semibold">Mobile Number</h4>
                      <p className="text-sm">{userData.mobileNo} </p>
                    </div>
                  </div>
                  <Separator className="my-2 " />
                  <div className="p-2">
                    <div className=" flex items-center justify-between">
                      <h4 className="text-md font-semibold">Email</h4>
                      <p className="text-sm">{userData.email} </p>
                    </div>
                  </div>
                  <Separator className="my-2" />
                  <div className="p-2">
                    <div className=" flex items-center justify-between">
                      <h4 className="text-md font-semibold">
                        Fair Price Shop Nubmer
                      </h4>
                      <p className="text-sm">{userData.fairPriceShopNumber} </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          {/* Billing */}
          <div className="border mt-5 sm:p-5 p-3 bg-[#111113] tracking-tight rounded-sm">
            <div className="flex items-center gap-5 ">
              <ReceiptIndianRupee className="text-muted-foreground" size={20} />
              <h2 className="font-bold text-2xl">Billing</h2>
            </div>
            <p className="text-muted-foreground  text-md">
              Billing history about your account
            </p>
            <Separator className="mt-5 mb-2 " />
            <CardContent className="mt-10 px-0">
              <ChartContainer config={chartConfig}>
                <AreaChart
                  accessibilityLayer
                  data={chartData}
                  margin={{
                    left: 12,
                    right: 12,
                  }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dot" />}
                  />

                  <Area
                    dataKey="Price"
                    type="natural"
                    fill="var(--color-desktop)"
                    fillOpacity={0.4}
                    stroke="var(--color-desktop)"
                    stackId="a"
                  />
                </AreaChart>
              </ChartContainer>
            </CardContent>
            <Separator className="my-2 " />
          </div>
        </div>
        {/* Family Members */}
        <div className="border mt-5 p-5 bg-[#111113] tracking-tight rounded-sm">
          <div className="flex items-center gap-5 ">
            <Users className="text-muted-foreground " size={20} />
            <h2 className="font-bold text-2xl">Family Members</h2>
          </div>
          <p className="text-muted-foreground text-md">
            List of all members in your family
          </p>
          <Separator className="mt-5 mb-2 " />
          <div className="max-w-4xl">
            <Table>
              <TableHeader>
                <TableRow className="font-winky text-white text-base font-bold tracking-wide ">
                  <TableHead>Name</TableHead>
                  <TableHead>Age</TableHead>
                  <TableHead className="text-center">Gender</TableHead>
                  <TableHead className="text-center hidden md:block">
                    AdharCard Number
                  </TableHead>
                  <TableHead>Relation</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {family.map((member) => (
                  <TableRow className="text-sm font-winky font-light tracking-wide">
                    <TableCell>{member.fullName}</TableCell>
                    <TableCell>{member.age}</TableCell>
                    <TableCell className="text-center">
                      {member.gender}
                    </TableCell>
                    <TableCell className="text-center  hidden md:block">
                      {member.adharCard}
                    </TableCell>
                    <TableCell>{member.relation}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

export const AccountInfoSkeleton = () => {
  return (
    <>
      <div className="border mt-5 sm:p-5 p-3 bg-[#111113] tracking-tight rounded-sm sm:w-auto">
        <div className="flex items-center gap-5">
          <LibraryBig className="text-muted-foreground" size={20} />
          <h2 className="font-bold text-2xl">Account Information</h2>
        </div>
        <p className="text-muted-foreground text-md">
          Basic information about your account
        </p>
        <Separator className="mt-5 mb-2" />

        <div className="font-inter space-y-4">
          {[...Array(6)].map((_, index) => (
            <div key={index}>
              <div className="p-2">
                <div className="flex items-center justify-between">
                  <Skeleton className="h-4 w-36" />
                  <Skeleton className="h-4 w-40" />
                </div>
              </div>
              {index !== 5 && <Separator className="my-2" />}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
