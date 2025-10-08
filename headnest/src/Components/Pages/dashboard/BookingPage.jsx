// src/pages/BookingPage.jsx
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import DashboardLayout from "./DashboardLayout";

// example therapist availability
const therapistData = {
  1: { name: "Dr. John Doe", times: ["12:30 pm", "1:30 pm", "2:30 pm"] },
  2: { name: "Dr. Jane Doe", times: ["9:00 am", "10:00 am", "11:00 am"] },
};

export default function BookingPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const therapist = therapistData[id];
  const [selectedTime, setSelectedTime] = useState("");
  const [note, setNote] = useState("");

  const handleBook = () => {
    if (!selectedTime) {
      alert("Please select a time");
      return;
    }

    // push details to PaymentPage
    navigate("/payment", {
      state: {
        therapistName: therapist.name,
        sessionTime: selectedTime,
        note,
      },
    });
  };

  if (!therapist) {
    return (
      <DashboardLayout>
        <div className="max-w-xl mx-auto py-10">
          <h1 className="text-xl font-bold text-center">Therapist not found</h1>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="max-w-xl mx-auto py-10 space-y-6">
        <h1 className="text-3xl font-bold">Book Session</h1>

        <Card className="bg-beige-100">
          <CardContent className="p-6 text-center text-gray-700 font-medium">
            Therapist Availability Centre
          </CardContent>
        </Card>

        <p className="text-gray-600">Pick a convenient time for your session</p>
        <div className="flex flex-wrap gap-3">
          {therapist.times.map((time) => (
            <Button
              key={time}
              variant={selectedTime === time ? "default" : "outline"}
              className={`${
                selectedTime === time
                  ? "bg-gray-800 text-white"
                  : "bg-beige-200 text-gray-700"
              }`}
              onClick={() => setSelectedTime(time)}>
              {time}
            </Button>
          ))}
        </div>

        <Textarea
          placeholder="Add note/Info"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="mt-4"
        />

        <Button
          className="w-full rounded-full bg-gray-800 hover:bg-gray-700 py-6 text-base"
          onClick={handleBook}>
          Make payment
        </Button>
      </div>
    </DashboardLayout>
  );
}
