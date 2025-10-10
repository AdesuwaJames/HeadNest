import React, { useState } from "react";
import { FaGoogle, FaApple } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreePolicy, setAgreePolicy] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  // ✅ Validation helpers
  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validatePassword = (password) =>
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{8,}$/.test(password);

  const isFormValid =
    validateEmail(email) &&
    validatePassword(password) &&
    password === confirmPassword &&
    agreePolicy;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!validatePassword(password)) {
      setError(
        "Password must be at least 8 characters long and include letters, numbers, and special characters."
      );
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!agreePolicy) {
      setError("You must agree to the Privacy Policy.");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        "https://headnest-api-0yjf.onrender.com/api/user/auth/register",
        { email, password }
      );

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        // ✅ Clear inputs after success
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setAgreePolicy(false);
        navigate("/welcome");
      }
    } catch (err) {
      console.error("❌ Registration error:", err);
      console.log("📥 Server response:", err.response?.data);
      setError(
        err.response?.data?.message ||
          err.response?.data?.error ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  // ✅ Google Sign Up Redirect
  const handleGoogleSignup = () => {
    window.location.href = "https://headnest-api-0yjf.onrender.com/api/google";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-10 px-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-center mb-4">
            <h1 className="text-3xl md:text-4xl font-bold text-[#38485C]">
              Welcome!
            </h1>
            <p className="text-gray-700 text-sm md:text-base">
              Please fill in your details below
            </p>
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <Input
                id="email"
                type="email"
                placeholder="johndoe@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <p className="text-xs text-gray-500 mt-1">
    Password must be at least 8 characters long and include letters, numbers, and 
    special characters.
  </p>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
              <Input
                id="confirmPassword"
                type={showPassword ? "text" : "password"}
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <label className="flex items-center space-x-2 text-sm text-gray-700">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
                className="cursor-pointer"
              />
              <span>Show password</span>
            </label>

            <label className="flex items-center space-x-2 text-sm text-gray-700">
              <input
                type="checkbox"
                checked={agreePolicy}
                onChange={() => setAgreePolicy(!agreePolicy)}
                className="cursor-pointer"
                required
              />
              <span>
                By checking this box, I agree to the{" "}
                <Link to="/privacyPolicy" className="text-blue-600 underline">
                  Privacy Policy
                </Link>
              </span>
            </label>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <Button
              type="submit"
              className="w-full bg-[#38485C] text-white hover:bg-gray-700"
              disabled={!isFormValid || loading}
            >
              {loading ? "Signing up..." : "SIGN UP"}
            </Button>
          </form>

          {/* Social Sign Up */}
          <div className="flex justify-center items-center gap-3">
            <div className="w-24 h-[1px] bg-gray-400"></div>
            <p className="text-gray-600 text-sm">Or sign up with</p>
            <div className="w-24 h-[1px] bg-gray-400"></div>
          </div>

          <div className="flex space-x-4">
            <Button
              type="button"
              onClick={handleGoogleSignup}
              className="w-full bg-[#F9F9F9] border border-[#38485C] text-[#38485C] hover:bg-gray-200"
            >
              <FaGoogle className="curor-pointer text-[#38485C] hover:text-white transition" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
