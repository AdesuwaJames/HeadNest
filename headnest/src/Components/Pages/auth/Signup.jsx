import React, { useState } from "react";
import { FaGoogle, FaApple } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

   const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Basic validation
    if (!email.includes("@")) {
      setError("Email must contain '@'");
      return;
    }

    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 8 characters, with letters, numbers, and special characters."
      );
      return;
    }

    try {
      setLoading(true);
      setError("");

      // ✅ Call backend API
      const response = await axios.post(
        "https://headnest-api.onrender.com/api/user/auth/register",
        { email, password }
      );

      console.log("✅ Registration success:", response.data);

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }

      // ✅ Redirect to welcome/dashboard
      navigate("/welcome");
    } catch (err) {
      console.error("❌ Registration error:", err);
      setError(
        err.response?.data?.message ||
        err.response?.data?.error ||
        "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-10 px-4">
      {/* Card */}
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl text-center mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-[#38485C]">
              Welcome!
            </h1>
            <p className="text-gray-700 text-sm md:text-base">
              Please fill in your details below
            </p>
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-10">
          {/* Form */}
          <form className="flex flex-col space-y-10" onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="johndoe@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="flex flex-col space-y-2">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="enter a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className="flex items-center space-x-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                  className="cursor-pointer"
                />
                <span>Show password</span>
              </label>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <Button
              type="submit"
              className="w-full bg-[#38485C] text-white hover:bg-gray-700"
              disabled={loading}
            >
              {loading ? "Signing up..." : "SIGN UP"}
            </Button>
          </form>

          {/* Social Sign Up */}
          <div className="flex justify-center items-center  gap-3">
            <div className="w-28 h-[1px] bg-black"></div>
            <p className="text-gray-600 text-sm ">Or sign up with</p>
            <div className="w-28 h-[1px] bg-black"></div>
          </div>
          <Button className="w-full bg-[#F9F9F9] border border-[#38485C] text-white hover:bg-[#38485C]">
            {" "}
            <FaGoogle className="cursor-pointer text-[#38485C]  hover:text-[#F9F9F9] transition" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
