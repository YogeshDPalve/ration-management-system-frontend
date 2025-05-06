import PageTitle from "@/components/PageTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetUserQuery } from "@/features/api/authApi";
import { LucideCalendarArrowDown, PanelsTopLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { rationId } = useSelector((store) => store.auth.user);
  const { data, isLoading, isError } = useGetUserQuery(rationId);
  // console.log("dashboard get user data:", data);
  const userInfo = data?.userInfo;
  const RationAllotment = userInfo?.RationAllotment;
  // console.log("ration data:", RationAllotment);
  // mapping ration data in array to show
  const rationData = RationAllotment
    ? [
        {
          grain: "wheat",
          quota: RationAllotment.wheatQuota,
          used: RationAllotment.wheatUsed,
        },
        {
          grain: "rice",
          quota: RationAllotment.riceQuota,
          used: RationAllotment.riceUsed,
        },
        {
          grain: "daal",
          quota: RationAllotment.daalQuota,
          used: RationAllotment.daalUsed,
        },
        {
          grain: "oil",
          quota: RationAllotment.oilQuota,
          used: RationAllotment.oilUsed,
        },
        {
          grain: "sugar",
          quota: RationAllotment.sugarQuota,
          used: RationAllotment.sugarUsed,
        },
      ]
    : [];

  if (isError)
    return <h1 className="text-2xl text-center mt-20">Error to fetch data</h1>;
  return (
    <>
      <PageTitle title={"Dashboard"} />
      {isLoading ? (
        <DashboardSkeleton />
      ) : (
        <div className="md:m-10 my-10 mx-3">
          <div className="flex gap-4 text-primary items-center">
            <PanelsTopLeft size={30} />
            <h1 className="md:text-3xl text-2xl font-semibold font-winky ">
              Dashboard
            </h1>
          </div>
          <Separator className="my-3" />
          <div className="flex items-center text-primary font-semibold font-inter md:gap-3 gap-2 my-4  ">
            <LucideCalendarArrowDown size={20} />{" "}
            <h2 className="md:text-2xl text-xl"> May Allotment</h2>
          </div>
          <div className="grid lg:grid-cols-5 md:grid-cols-3  mt-5 grid-cols-2 gap-3">
            {rationData.map((grain) => (
              <Card key={grain.grain} className="gap-1 p-3  text-gray-200">
                <CardHeader className="p-1">
                  <CardTitle className="md:text-xl text-lg capitalize text-primary">
                    {grain.grain}
                  </CardTitle>
                </CardHeader>
                <CardContent className=" text-4xl text-end p-1 flex  gap-1 justify-end">
                  {grain.used}
                  <span className="text-gray-400 font-extralight text-4xl ">
                    /
                  </span>
                  {grain.quota}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
const DashboardSkeleton = () => {
  return (
    <div className="md:m-10 my-10 mx-3">
      <div className="flex gap-4 text-primary items-center">
        <PanelsTopLeft size={30} />
        <h1 className="md:text-3xl text-2xl font-semibold font-winky ">
          Dashboard
        </h1>
      </div>
      <Separator className="my-3" />
      <div className="flex items-center text-primary font-semibold font-inter md:gap-3 gap-2 my-4">
        <LucideCalendarArrowDown size={20} />
        <h2 className="md:text-2xl text-xl"> May Allotment</h2>
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-3 mt-5">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="p-3 gap-1 text-gray-200 border rounded-lg space-y-5 "
          >
            <Skeleton className="h-5 w-20 rounded" />
            <div className="flex justify-end gap-1 items-center ">
              <Skeleton className="h-8 w-10 rounded" />
              <span className="text-gray-400 font-extralight text-4xl">/</span>
              <Skeleton className="h-8 w-10 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
