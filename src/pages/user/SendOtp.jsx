import React, { useEffect, useState } from "react";
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
import { useGenerateResetOtpMutation } from "@/features/api/authApi";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

const SendOtp = () => {
  const navigate = useNavigate();
  const [rationId, setRationId] = useState("");
  const [generateOtp, { data, error, isSuccess, isLoading }] =
    useGenerateResetOtpMutation();

  useEffect(() => {
    if (isSuccess && data) {
      toast.success(data.message || "Login Successfully");
      navigate("/reset-password", { state: { rationId } });
    }
    if (error) {
      toast.error(
        error.data.message || error.data.errors[0].msg || "Something went wrong"
      );
    }
  }, [isLoading, error, isSuccess]);
  const handleSentOtp = async (e) => {
    try {
      e.preventDefault();
      await generateOtp({ rationId });
    } catch (error) {
      console.log(error);
    }
  };
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
              <form onSubmit={handleSentOtp}>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="number">Enter Ration Id</Label>
                    </div>
                    <Input
                      name="rationId"
                      type="text"
                      placeholder="123456"
                      required
                      onChange={(e) => setRationId(e.target.value)}
                    />
                  </div>

                  <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading ? (
                      <>
                        <Loader2 className="animate-spin" /> Please Wait
                      </>
                    ) : (
                      "Send OTP"
                    )}
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
