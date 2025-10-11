import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import PrivacyPolicy from "@/components/Pages/privacyPolicy/privacyPolicy"; // 👈 import existing page

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreePolicy, setAgreePolicy] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPolicyModal, setShowPolicyModal] = useState(false); // modal state

  const navigate = useNavigate();

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

    if (!validateEmail(email)) return setError("Please enter a valid email.");
    if (!validatePassword(password))
      return setError(
        "Password must be at least 8 characters and include letters, numbers, and special characters."
      );
    if (password !== confirmPassword) return setError("Passwords do not match.");
    if (!agreePolicy) return setError("You must agree to the Privacy Policy.");

    try {
      setLoading(true);

      // 🚀 Temporarily skip backend and just navigate
      localStorage.setItem("token", "dummy-token");
      navigate("/welcome");

    } finally {
      setLoading(false);
    }
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
            <Input
              type="email"
              placeholder="johndoe@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <div>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Password must be at least 8 characters long and include letters, numbers,
                and special characters.
              </p>
            </div>

            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
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

            {/* ✅ Modal trigger */}
            <label className="flex items-center space-x-2 text-sm text-gray-700">
              <input
                type="checkbox"
                checked={agreePolicy}
                onChange={() => setAgreePolicy(!agreePolicy)}
                className="cursor-pointer"
              />
              <span>
                I agree to the{" "}
                <button
                  type="button"
                  onClick={() => setShowPolicyModal(true)}
                  className="text-blue-600 underline"
                >
                  Privacy Policy
                </button>
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

          {/* Social Sign Up (temporarily disabled) */}
          <div className="flex justify-center items-center gap-3 mt-4">
            <div className="w-24 h-[1px] bg-gray-400"></div>
            <p className="text-gray-600 text-sm">Or sign up with</p>
            <div className="w-24 h-[1px] bg-gray-400"></div>
          </div>

          <Button
            type="button"
            disabled
            className="w-full bg-[#F9F9F9] border border-[#38485C] text-[#38485C] mt-2 opacity-50 cursor-not-allowed"
          >
            <FaGoogle />
          </Button>
        </CardContent>
      </Card>

      {/* 📝 Privacy Policy Modal */}
      {showPolicyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white max-w-3xl w-full rounded-lg shadow-lg p-6 relative">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Privacy Policy</h2>
              <button
                onClick={() => setShowPolicyModal(false)}
                className="text-gray-500 hover:text-gray-800"
              >
                ✕
              </button>
            </div>
            <div className="max-h-[70vh] overflow-y-auto text-sm text-gray-700 space-y-2">
              <PrivacyPolicy />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
