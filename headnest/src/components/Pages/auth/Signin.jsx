import React, { useState } from "react";
import { FaGoogle, FaApple } from "react-icons/fa";
import Logo2 from "../../../assets/NewLogo.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../api/index";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false); // 👈 added

  const validate = () => {
    let valid = true;
    let newErrors = { email: "", password: "" };

    if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter a valid email address.";
      valid = false;
    }

    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true); // 👈 start loading

    try {
      // 👇 Use the loginUser function from index.js
      const data = await loginUser({
        email: email.toLowerCase().trim(),
        password,
      });

      // 👇 Log backend response for debugging
      console.log("Backend response:", data);
      console.log("Login successful!");

      // 👇 Store token
      localStorage.setItem("token", data.token);

      // Optional: backend can include a `returningUser` flag
      if (data.returningUser) {
        console.log("✅ Returning user detected");
      } else {
        console.log("🆕 First-time login");
      }

      // 👇 Navigate to dashboard
      navigate("/dashboard");
    } catch (err) {
      // 👇 Detailed error logging
      console.error("Login error:", err);
      console.error("Error message:", err.message);
      alert(err.message);
    } finally {
      setLoading(false); // 👈 stop loading
    }
  };
  return (
    <div className="flex min-h-screen bg-gray-50 md:flex-row flex-col justify-center gap-10 md:gap-0">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-between max-h-screen p-6 md:items-start items-center">
        <img src={Logo2} alt="Headnest Logo" className="w-28 md:w-40" />
        <p className="text-gray-600 text-sm md:text-base mt-2">
          Breathe in... exhale slowly...
        </p>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 w-full flex items-center justify-center p-6">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl font-bold text-[#38485C] text-center">
              Welcome Back!
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
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

                <div className="mt-2 flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="showPassword"
                    checked={showPassword}
                    onChange={() => setShowPassword(!showPassword)}
                  />
                  <label
                    htmlFor="showPassword"
                    className="text-sm text-gray-600"
                  >
                    Show Password
                  </label>
                </div>
              </div>

              <Button
                type="submit"
                disabled={loading} // 👈 disabled while loading
                className={`w-full bg-[#38485C] text-white rounded-full cursor-pointer hover:bg-gray-700 ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Signing in..." : "SIGN IN"} {/* 👈 dynamic text */}
              </Button>
            </form>

            <div className="flex justify-center items-center gap-3 mt-4">
              <div className="w-24 h-[1px] bg-gray-400"></div>
              <p className="text-gray-600 text-sm">Or sign in with</p>
              <div className="w-24 h-[1px] bg-gray-400"></div>
            </div>

            <Button
              type="button"
              className="w-full bg-[#F9F9F9] border border-[#38485C] rounded-full text-[#38485C] mt-2 hover:bg-gray-100 flex items-center justify-center gap-2"
            >
              <FaGoogle />
              Continue with Google
            </Button>

            {/* Sign Up */}
            <div className="text-center pt-4">
              <p className="text-gray-600 text-sm mb-2">
                Don't have an account?
              </p>
              <Button
                onClick={() => navigate("/signup")}
                className="w-full bg-[#38485C] text-white hover:bg-gray-700 rounded-full"
              >
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
