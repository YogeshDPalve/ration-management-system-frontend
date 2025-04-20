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
import { Link } from "react-router-dom";
import PageTitle from "@/components/PageTitle";
import { useRegisterUserMutation } from "@/features/api/authApi";
import { Loader2 } from "lucide-react";
const Register = () => {
  const [formData, setFormData] = useState({
    rationId: "",
    adharcardNumber: "",
    firstName: "",
    middleName: "",
    lastName: "",
    mobileNo: "",
    email: "",
    address: "",
    fairPriceShopNumber: 0,
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === "fairPriceShopNumber" ? Number(value) : value,
    }));
  };

  const [registerUser, { data, isError, isLoading, isSuccess }] =
    useRegisterUserMutation();

  const handleRegistration = async (e) => {
    e.preventDefault();
    await registerUser(formData);
  };

  useEffect(() => {}, [isLoading, data, isError, isSuccess]);
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
                      name="rationId"
                      type="number"
                      placeholder="653214565"
                      required
                      // minLength={6}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label>Adharcard Number</Label>
                    <Input
                      name="adharcardNumber"
                      type="number"
                      // minLength={12}
                      // maxLength={12}
                      placeholder="653652147985"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="text">First Name</Label>
                    <Input
                      name="firstName"
                      type="text"
                      placeholder="John"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="text">Middle Name</Label>
                    <Input
                      name="middleName"
                      type="text"
                      placeholder="Denver"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="text">Last Name</Label>
                    <Input
                      name="lastName"
                      type="text"
                      placeholder="Doe"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="text">Mobile Number</Label>
                    <Input
                      name="mobileNo"
                      type="number"
                      placeholder="9999999999"
                      required
                      minLength={10}
                      maxLength={10}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="text">Email</Label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="john@doe.com"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="text">Address</Label>
                    <Input
                      name="address"
                      type="text"
                      placeholder="House 3, Ring road"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="text">Your Fair Price Shop Number</Label>
                    <Input
                      name="fairPriceShopNumber"
                      type="number"
                      min="1"
                      placeholder="42"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                    </div>
                    <Input
                      name="password"
                      type="password"
                      required
                      placeholder="****"
                      onChange={handleChange}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full md:col-span-2"
                    disabled={isLoading}
                    onClick={handleRegistration}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="animate-spin w-4 h-4 " /> Please
                        Wait
                      </>
                    ) : (
                      "Register"
                    )}
                  </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                  Already have an account?{" "}
                  <Link to="/login" className="font-semibold">
                    Sign in
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
