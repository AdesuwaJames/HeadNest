import React from "react";
import { FaGoogle, FaApple } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-10 px-4">
     
      {/* Card */}
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl text-center mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-[#38485C]">Welcome!</h1>
        <p className="text-gray-700 text-sm md:text-base">
          Please fill in your details below
        </p>
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-10">
          {/* Form */}
          <form className="flex flex-col space-y-10">
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />

            <Button
              type="submit"
              className="w-full bg-[#38485C] text-white hover:bg-gray-700"
            >
             <Link to='/welcome'>SIGN UP</Link> 
            </Button>
          </form>

          {/* Social Sign Up */}
          <div className="flex justify-center items-center  gap-3">
            <div className="w-28 h-[1px] bg-black"></div>
            <p className="text-gray-600 text-sm ">Or sign up with</p>
            <div className="w-28 h-[1px] bg-black"></div>
          </div>
          <Button               className="w-full bg-[#F9F9F9] border border-[#38485C] text-white hover:bg-[#38485C]"
> <FaGoogle className="cursor-pointer text-[#38485C]  hover:text-[#F9F9F9] transition" /></Button>
          
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
