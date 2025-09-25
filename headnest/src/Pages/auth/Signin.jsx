import React from "react";
import { FaGoogle, FaApple } from "react-icons/fa";
import Logo2 from "../../assets/NewLogo.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
    const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-gray-50 md:flex-row flex-col justify-center gap-10 md:gap-0">
      {/* Left Section (Logo + tagline) */}
     <div className="w-full md:w-1/2 flex flex-col justify-between max-h-screen p-6 md:items-start items-center">
      {/* Logo + tagline */}
      
        <img src={Logo2} alt="Headnest Logo" className="w-28 md:w-40" />
        <p className="text-gray-600 text-sm md:text-base mt-2">
          Breathe in... exhale slowly...
        </p>

      {/* Back button
      <Button
        onClick={() => navigate(-1)} // Go back
        className="bg-[#F9F9F9] border border-[#38485C] text-[#38485C] hover:text-white hover:bg-[#38485C] h-8 w-8 p-0 rounded-full"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>*/}
    </div>

      {/* Right Section (Card Centered) */}
      <div className="md:w-1/2 w-full flex items-center justify-center p-6">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl font-bold text-[#38485C] text-center">
              Welcome Back!
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Form */}
            <form className="flex flex-col space-y-4">
              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="Password" />
            </form>

            {/* Buttons + Social Login */}
            <div className="flex flex-col items-center space-y-3">
              <Button className="w-full bg-[#38485C] text-white hover:bg-gray-700">
                SIGN IN
              </Button>

              <p className="text-gray-500 text-sm">or sign in with</p>

              <div className="flex gap-6 text-2xl text-gray-700">
                <FaApple className="cursor-pointer hover:text-black transition" />
                <FaGoogle className="cursor-pointer hover:text-red-500 transition" />
              </div>
            </div>

            {/* Sign Up */}
            <div className="text-center pt-4">
              <p className="text-gray-600 text-sm mb-2">
                Don't have an account?
              </p>
              <Button className="w-full bg-[#38485C] text-white hover:bg-gray-700">
                SIGN UP
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Signin;
