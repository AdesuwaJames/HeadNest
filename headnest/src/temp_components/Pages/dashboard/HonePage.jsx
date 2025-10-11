import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/temp_components/ui/card";
import { Button } from "@/temp_components/ui/button";
import { Input } from "@/temp_components/ui/input";
import { Badge } from "@/temp_components/ui/badge";
import Sidebar from "../../sidebar";
import DashboardLayout from "./DashboardLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const MentalWellnessDashboard = () => {
  const navigate = useNavigate();
  const [activeFeeling, setActiveFeeling] = useState(null);
  const [journalEntry, setJournalEntry] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const feelings = [
    { id: "happy", label: "Happy", emoji: "😊", color: "bg-yellow-100" },
    { id: "angry", label: "Angry", emoji: "😠", color: "bg-red-100" },
    { id: "sad", label: "Sad", emoji: "😢", color: "bg-blue-100" },
    { id: "calm", label: "Calm", emoji: "😌", color: "bg-green-100" },
    { id: "confused", label: "Confused", emoji: "😕", color: "bg-purple-100" },
  ];

  const communities = [
    { id: 1, name: "Anxiety Relief", members: "12.4k", color: "bg-pink-500" },
    { id: 2, name: "Coping Circle", members: "8.7k", color: "bg-indigo-500" },
    { id: 3, name: "Mindful Haven", members: "15.2k", color: "bg-teal-500" },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleFeelingClick = (feeling) => {
    setActiveFeeling(feeling.id);
  };

  const handleJournalSubmit = (e) => {
    e.preventDefault();
    console.log("Journal entry:", journalEntry);
    setJournalEntry("");
  };

  const content = (
    <div className="w-full min-h-screen overflow-x-auto bg-gray-50">
      {/* Min width wrapper so very small screens scroll horizontally */}
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

        {/* Dashboard Content */}
        <div className="flex-1 flex flex-col items-center justify-start px-4 md:px-6 lg:px-10 py-10 space-y-6 max-w-4xl mx-auto">
          {/* Greeting */}
          <Card className="w-full bg-white border-0 shadow-md">
            <CardContent className="p-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                Good Morning, A <span className="text-indigo-600">👋</span>
              </h2>
              <p className="text-gray-600 mb-6">How are you feeling today?</p>

              <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                {feelings.map((feeling) => (
                  <div
                    key={feeling.id}
                    onClick={() => handleFeelingClick(feeling)}
                    className={`flex flex-col items-center justify-center px-4 py-5 min-w-[80px] cursor-pointer rounded-lg transition 
                      ${activeFeeling === feeling.id ? feeling.color : "bg-gray-100 hover:bg-gray-200"}`}
                  >
                    <span className="text-4xl sm:text-5xl mb-2">{feeling.emoji}</span>
                    <span className="text-xs sm:text-sm font-medium">{feeling.label}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Journal Section */}
          <Card className="w-full bg-[#eadfce] border-0 shadow-md">
            <CardContent className="p-6">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">
                Share your thoughts...
              </h3>
              <form onSubmit={handleJournalSubmit}>
                <Input
                  type="text"
                  disabled
                  placeholder="Write about your day..."
                  value={journalEntry}
                  onChange={(e) => setJournalEntry(e.target.value)}
                  className="mb-4"
                />
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <Badge
                    variant="outline"
                    className="bg-indigo-100 text-indigo-800 select-none">
                    01 DAY
                  </Badge>
                  
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Communities */}
         <Card className="w-full bg-white border-0 shadow-md">
      <CardHeader>
        <CardTitle className="text-base sm:text-lg">
          Join a support community
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {communities.map((community) => (
          <div
            key={community.id}
            className="flex items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 cursor-pointer"
            onClick={() => navigate(`/community/${community.id}`)} // 👈 Navigate on click
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${community.color} text-white mr-3`}>
              {community.name.charAt(0)}
            </div>
            <div>
              <h4 className="font-medium text-gray-800 text-sm sm:text-base">
                {community.name}
              </h4>
              <p className="text-xs text-gray-500">
                {community.members} members
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>

          {/* Therapist CTA */}
          <Card className="w-full bg-white border-0 shadow-md">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                Chat with a therapist today
              </h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                Professional help is just a click away
              </p>
              <Button
                className="cursor-pointer bg-[#38485C] text-white hover:bg-gray-700 w-full sm:w-auto"
                onClick={() => (window.location.href = "/therapist")}>
                Connect Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  return isMobile ? content : <DashboardLayout>{content}</DashboardLayout>;
};

export default MentalWellnessDashboard;
