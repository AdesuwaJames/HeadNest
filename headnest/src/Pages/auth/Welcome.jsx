import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Smile, Angry, Meh, SmileIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
const MentalWellnessOnboarding = () => {
  const [stateOfMind, setStateOfMind] = React.useState("");
  const [experience, setExperience] = React.useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    navigate("/name");
    console.log({ stateOfMind, experience });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center space-y-6 bg-white rounded-2xl p-10 ">
        <div className="w-[80%] text-center">
          {" "}
          <h1 className="text-4xl font-bold">Welcome!</h1>
          <p>
            Let’s get to know you better so we can personalise your mental
            wellness journey.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-xl">
          {/* State of Mind */}
          <div className="bg-[#95c2d9] py-10 px-6 space-y-4">
            <h2 className="text-xl mb-10 font-semibold  text-center">
              What is your current state of mind?
            </h2>
            <ToggleGroup
              type="single"
              value={stateOfMind}
              onValueChange={(val) => setStateOfMind(val)}
              className="flex flex-col items-start space-y-6">
              <ToggleGroupItem
                value="calm"
                className="justify-start bg-white hover:bg-sky-50 text-sky-900 rounded-md px-4 py-5 flex items-center space-x-2">
                <SmileIcon className="h-4 w-4" />
                <span>Calm</span>
              </ToggleGroupItem>
              <ToggleGroupItem
                value="angry"
                className="justify-start bg-white hover:bg-sky-50 text-sky-900 rounded-md px-6 py-5 flex items-center space-x-2">
                <Angry className="h-4 w-4" />
                <span>Angry</span>
              </ToggleGroupItem>
              <ToggleGroupItem
                value="overwhelmed"
                className="justify-start bg-white hover:bg-sky-50 text-sky-900 rounded-md px-4 py-5 flex items-center space-x-2">
                <Meh className="h-4 w-4" />
                <span>Overwhelmed</span>
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          {/* Experience */}
          <div className="bg-[#95c2d9] px-6 py-10 space-y-4">
            <h2 className="text-lg text-center mb-10 font-bold text-sky-900">
              How much experience do you have with mental wellness?
            </h2>
            <RadioGroup
              value={experience}
              onValueChange={(val) => setExperience(val)}
              className="space-y-3">
              <div className="flex items-center p-3 space-x-2 bg-white rounded">
                <RadioGroupItem value="new" id="new" />
                <Label htmlFor="new">New to this</Label>
              </div>
              <div className="flex items-center space-x-2 p-3 bg-white rounded">
                <RadioGroupItem value="some" id="some" />
                <Label htmlFor="some">Some experience</Label>
              </div>
              <div className="flex items-center p-3 space-x-2 bg-white rounded">
                <RadioGroupItem value="quite" id="quite" />
                <Label htmlFor="quite">Quite experienced</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
        <Button
          type="submit"
          className="bg-[#38485C] hover:bg-slate-900 text-[#EADFCE] px-8 py-3 rounded-full">
          Let&apos;s Go
        </Button>
      </form>
    </div>
  );
};

export default MentalWellnessOnboarding;
