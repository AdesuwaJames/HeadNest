import React, { useState } from "react";
import { FaGoogle, FaApple } from "react-icons/fa";
import Logo2 from "../../../assets/NewLogo.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
   const [errors, setErrors] = useState({ email: "", password: "" });

  const validate = () => {
    let valid = true;
    let newErrors = { email: "", password: "" };

    // Email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter a valid email address.";
      valid = false;
    }

    // Password validation
    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSignin = (e) => {
    e.preventDefault();

    if (validate()) {
      // ✅ If valid, navigate to dashboard
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 md:flex-row flex-col justify-center gap-10 md:gap-0">
      {/* Left Section (Logo + tagline) */}
      <div className="w-full md:w-1/2 flex flex-col justify-between max-h-screen p-6 md:items-start items-center">
        {/* Logo + tagline */}

        <img src={Logo2} alt="Headnest Logo" className="w-28 md:w-40" />
        <p className="text-gray-600 text-sm md:text-base mt-2">
          Breathe in... exhale slowly...
        </p>
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
            <form onSubmit={handleSignin} className="flex flex-col space-y-4">
              <div>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

               <div>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={errors.password ? "border-red-500" : ""}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}

                {/* Show password checkbox */}
                <div className="mt-2 flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="showPassword"
                    checked={showPassword}
                    onChange={() => setShowPassword(!showPassword)}
                  />
                  <label htmlFor="showPassword" className="text-sm text-gray-600">
                    Show Password
                  </label>
                </div>
              </div>

              <Button
                type="submit"
                className="cursor-pointer w-full bg-[#38485C] text-white hover:bg-gray-700"
              >
                SIGN IN
              </Button>
            </form>

            {/* Buttons + Social Login */}
            <div className="flex flex-col items-center space-y-3">
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
              <Button onClick={() => navigate("/signup")} className="cursor-pointer w-full bg-[#38485C] text-white hover:bg-gray-700">
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
