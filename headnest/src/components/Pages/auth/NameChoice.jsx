import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { validateAnonymousName, setAnonymousName } from "../../../api/index";

const NameChoice = () => {
  const [newName, setNewName] = useState("");
  const [confirmName, setConfirmName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!newName || !confirmName) {
    alert("Please fill in both fields");
    return;
  }

  if (newName !== confirmName) {
    alert("Names do not match");
    return;
  }

  try {
    // Step 1: Validate name with backend
    await validateAnonymousName(newName);

    // Step 2: Save name to backend
    await setAnonymousName(newName);

    // Optional: Save locally for immediate UI use
    localStorage.setItem("anonymousName", newName);

    // Step 3: Navigate to dashboard
    navigate("/dashboard");
  } catch (error) {
    console.error("Anonymous name error:", error);
    alert(error.message || "Failed to set anonymous name");
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-3xl rounded-2xl shadow-md">
        <CardContent className="p-10">
          {/* Inner container narrower than card */}
          <div className="max-w-lg mx-auto space-y-10">
            {/* Heading */}
            <div className="text-start space-y-3">
              <h1 className="text-3xl font-bold text-gray-900">
                Choose a name
              </h1>
              <p className="text-base text-gray-600 leading-relaxed">
                You can choose any name you'd love to go by here <br />
              </p>
              <p className="mt-5 font-semibold">—just keep it anonymous!</p>
            </div>

            {/* Inputs */}
            <form onSubmit={handleSubmit} className="space-y-10">
              <Input
                type="text"
                placeholder="New name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="rounded-full py-3 text-base border border-gray-900"
              />
              <Input
                type="text"
                placeholder="Confirm new name"
                value={confirmName}
                onChange={(e) => setConfirmName(e.target.value)}
                className="rounded-full py-3 text-base border border-gray-900"
              />
              {/* Greeting */}
              <div className="text-start">
                <p className="text-base text-gray-700 mt-5 font-semibold">
                  Nice to meet you,{" "}
                  <span className="font-semibold">
                    {newName || ""}
                  </span>
                </p>
              </div>
              {/* Submit button */}
              <div className="flex justify-center">
                <Button
                  type="submit"
                  className="w-full rounded-full bg-gray-800 hover:bg-gray-700 py-6 text-base">
                  SUBMIT
                </Button>
              </div>{" "}
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NameChoice;
