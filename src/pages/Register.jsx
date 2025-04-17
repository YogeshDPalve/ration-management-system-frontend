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
import { Link } from "react-router-dom";
import PageTitle from "@/components/PageTitle";
const Register = () => {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <PageTitle title={"Register"} />
      <div className="w-full max-w-xl">
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Register</CardTitle>
              <CardDescription>
                Enter your details below for registration.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="">
                <div className=" grid md:grid-cols-2 grid-cols-1 gap-6">
                  <div className="grid gap-2">
                    <Label>Ration Id</Label>
                    <Input
                      id="rationId"
                      type="text"
                      placeholder="653214565"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label>Adharcard Number</Label>
                    <Input
                      id="adharcardNumber"
                      type="text"
                      placeholder="653652147985"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="text">First Name</Label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="text">Middle Name</Label>
                    <Input
                      id="middleName"
                      type="text"
                      placeholder="Denver"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="text">Last Name</Label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Doe"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="text">Mobile Number</Label>
                    <Input
                      id="mobileNo"
                      type="text"
                      placeholder="9999999999"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="text">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@doe.com"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="text">Address</Label>
                    <Input
                      id="address"
                      type="text"
                      placeholder="House 3, Ring road"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="text">Your Fair Price Shop Number</Label>
                    <Input
                      id="fairPriceShopNumber"
                      type="number"
                      min="1"
                      placeholder="42"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      required
                      placeholder="****"
                    />
                  </div>
                  <Button type="submit" className="w-full md:col-span-2">
                    Register
                  </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                  Already have an account?{" "}
                  <Link to="/login">
                    <a href="#" className="underline underline-offset-4">
                      Sign in
                    </a>
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

export default Register;
