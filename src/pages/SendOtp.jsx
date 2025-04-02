import React from "react";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PageTitle from "@/components/PageTitle";
import { Link, useNavigate } from "react-router-dom";

const SendOtp = () => {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <PageTitle title={"Reset Password"} />
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Forget Password</CardTitle>
              <CardDescription>
                Enter the ration id below to send otp on your registered mobile
                number
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password">Enter Ration Id</Label>
                    </div>
                    <Input
                      id="rationId"
                      type="text"
                      placeholder="123456"
                      required
                    />
                  </div>

                  <Button
                    onSubmit={() => navigate("/reset-password")}
                    type="submit"
                    className="w-full"
                  >
                    Send OTP
                  </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                  <Link to="/login">
                    <Button variant="link">Back to login</Button>
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SendOtp;
