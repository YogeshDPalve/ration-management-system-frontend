import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import PageTitle from "@/components/PageTitle";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useVerifyOtpMutation } from "@/features/api/authApi";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const OtpLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // getting mobile no through useLocation hook
  const mobileNo = location?.state?.mobileNo;

  const [value, setValue] = useState("");

  const [verifyOtp, { isLoading }] = useVerifyOtpMutation();

  const handleSubmitOtp = async (e) => {
    try {
      e.preventDefault();
      if (!value.trim()) {
        toast.error("Input fields cannot be empty.");
        return;
      }
      const data = await verifyOtp({ mobileNo, otp: value }).unwrap();
      toast.success(data.message || "OTP verified Successfully");
      navigate("/dashboard");
    } catch (err) {
      toast.error(
        err?.data?.message ||
          err?.data?.errors?.[0]?.msg ||
          "Something went wrong"
      );
      console.error(err);
    }
  };

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <PageTitle title={"Login via OTP"} />
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">OTP Verification</CardTitle>
              <CardDescription>
                Enter the OPT which is sent to your registered mobile number.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmitOtp}>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="text">Enter OTP</Label>
                    <InputOTP
                      maxLength={6}
                      value={value}
                      onChange={(value) => setValue(value)}
                    >
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                      </InputOTPGroup>
                      <InputOTPSeparator />
                      <InputOTPGroup>
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </div>

                  <Button disabled={isLoading} type="submit" className="w-full">
                    {isLoading ? (
                      <>
                        <Loader2 className="animate-spin w-5 h-5 mr-2" /> Please
                        wait
                      </>
                    ) : (
                      "Verify OTP"
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OtpLogin;
