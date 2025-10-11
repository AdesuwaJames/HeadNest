import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import Sidebar from "../../sidebar";
import DashboardLayout from "./DashboardLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function MoodTracker() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMood, setSelectedMood] = useState("Update");

  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const moods = ["Happy", "Sad", "Angry", "Calm", "Overwhelmed"];

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
    setIsOpen(false);
  };

  // ✅ Handle responsiveness for sidebar
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const content = (
    <div className="w-full min-h-screen overflow-x-auto bg-gray-50">
      <div className="min-w-[400px] sm:min-w-[500px] md:min-w-[640px] lg:min-w-0 flex">
        {/* ✅ Sidebar for mobile */}
        {isMobile && (
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        )}

        {/* ✅ Hamburger button for mobile */}
        {isMobile && (
          <button
            className="lg:hidden fixed top-4 left-4 z-50 bg-[#38485C] text-white p-2 rounded-md shadow"
            onClick={() => setSidebarOpen((open) => !open)}
            aria-label="Open sidebar"
          >
            <FontAwesomeIcon icon={sidebarOpen ? faTimes : faBars} />
          </button>
        )}

        {/* ✅ Page Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-10 w-full">
          <div className="w-full max-w-5xl">
            {/* Header */}
            <h1 className="text-4xl font-bold text-slate-700 text-center mb-16">
              Your wellness today
            </h1>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Mood Tracker Card */}
              <div className="bg-white rounded-3xl shadow-sm p-10">
                <h2 className="text-2xl font-bold text-slate-800 mb-8">
                  Mood Tracker
                </h2>

                {/* Custom Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full max-w-xs bg-gray-100 rounded-lg px-5 py-3 flex items-center justify-between transition-colors hover:bg-gray-200"
                  >
                    <span className="text-slate-800 font-bold">
                      {selectedMood}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-700 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  {isOpen && (
                    <div className="absolute top-full left-0 w-full max-w-xs mt-2 bg-white rounded-lg shadow-lg overflow-hidden z-10">
                      {moods.map((mood, index) => (
                        <button
                          key={index}
                          onClick={() => handleMoodSelect(mood)}
                          className="w-full px-5 py-4 text-left text-slate-800 font-bold hover:bg-gray-50 transition-colors border-b border-gray-200 last:border-b-0"
                        >
                          {mood}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Suggested Activity Card */}
              <div className="bg-white rounded-3xl shadow-sm p-10">
                <h2 className="text-2xl font-bold text-slate-800 mb-8">
                  Suggested activity
                </h2>

                <div className="space-y-4">
                  <p className="text-slate-700 text-lg">
                    Take 3 mins brisk walks daily
                  </p>
                  <p className="text-slate-700 text-lg">
                    Drink 2 litres of water daily
                  </p>
                </div>
              </div>
            </div>

            {/* Back Button */}
            <div className="flex justify-center">
              <button
                onClick={() => navigate("/dashboard")}
                className="bg-slate-700 hover:bg-slate-800 text-white font-semibold px-12 py-4 rounded-full transition-colors shadow-md"
              >
                Back to homepage
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return isMobile ? content : <DashboardLayout>{content}</DashboardLayout>;
}
