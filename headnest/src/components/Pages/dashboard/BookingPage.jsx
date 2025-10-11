// src/pages/BookingPage.jsx
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import DashboardLayout from "./DashboardLayout";
import Sidebar from "../../sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const therapistData = {
  1: { name: "Dr. John Doe" },
  2: { name: "Dr. Jane Doe" },
};

export default function BookingPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const therapist = therapistData[id];

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [note, setNote] = useState("");

  // Responsive sidebar states
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleBook = () => {
    if (!selectedDate || !selectedTime) {
      alert("Please select both a day and time for your session");
      return;
    }

    const fullDateTime = `${selectedDate} at ${selectedTime}`;
    navigate("/payment", {
      state: {
        therapistName: therapist.name,
        sessionTime: fullDateTime,
        note,
      },
    });
  };

  // Generate time options between 8:00 AM and 6:00 PM
  const generateTimeOptions = () => {
    const times = [];
    for (let hour = 8; hour <= 18; hour++) {
      const period = hour >= 12 ? "PM" : "AM";
      const displayHour = hour > 12 ? hour - 12 : hour;
      times.push(`${displayHour}:00 ${period}`);
      times.push(`${displayHour}:30 ${period}`);
    }
    return times;
  };

  const timeOptions = generateTimeOptions();

  if (!therapist) {
    return (
      <DashboardLayout>
        <div className="max-w-xl mx-auto py-10">
          <h1 className="text-xl font-bold text-center">Therapist not found</h1>
        </div>
      </DashboardLayout>
    );
  }

  const content = (
    <div className="w-full min-h-screen overflow-x-auto bg-gray-50">
      <div className="min-w-[400px] sm:min-w-[500px] md:min-w-[640px] lg:min-w-0 flex">
        {/* Sidebar for mobile */}
        {isMobile && (
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        )}

        {/* Hamburger menu */}
        {isMobile && (
          <button
            className="lg:hidden fixed top-4 left-4 z-50 bg-[#38485C] text-white p-2 rounded-md shadow"
            onClick={() => setSidebarOpen((open) => !open)}
            aria-label="Open sidebar"
          >
            <FontAwesomeIcon icon={sidebarOpen ? faTimes : faBars} />
          </button>
        )}

        {/* Booking Content */}
        <div className="flex-1 flex flex-col items-center justify-start px-4 md:px-6 lg:px-10 py-10 space-y-6 max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-center">Book Session</h1>

          <Card className="bg-beige-100 w-full">
            <CardContent className="p-6 text-center text-gray-700 font-medium">
              Therapist Availability Centre
            </CardContent>
          </Card>

          <div className="w-full space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Select Day
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Select Time
              </label>
              <select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
              >
                <option value="">-- Choose a time --</option>
                {timeOptions.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <Textarea
            placeholder="Add note/Info"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="mt-4 w-full"
          />

          <Button
            className="w-full rounded-full bg-gray-800 hover:bg-gray-700 py-6 text-base"
            onClick={handleBook}
          >
            Make payment
          </Button>
        </div>
      </div>
    </div>
  );

  return isMobile ? content : <DashboardLayout>{content}</DashboardLayout>;
}
