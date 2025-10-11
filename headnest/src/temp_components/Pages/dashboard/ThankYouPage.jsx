// src/pages/ThankYouPage.jsx
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/temp_components/ui/button";
import DashboardLayout from "./DashboardLayout";
import { useState, useEffect } from "react";
import Sidebar from "../../sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const ThankYouPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  // 🔸 Responsive sidebar states
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

        {/* Thank You Page Content */}
        <div className="flex-1 flex items-center justify-center px-4 py-10">
          <div className="w-full max-w-2xl rounded-2xl shadow-md text-center p-10 bg-white">
            <h1 className="text-3xl font-semibold mb-6">
              Thanks for booking a session with us
            </h1>

            <p className="text-lg mb-12">Your session details</p>

            {/* session info */}
            <div className="grid grid-cols-2 gap-y-12 text-left mb-12">
              <div className="font-medium text-gray-700">Name of therapist</div>
              <div className="text-gray-900">{state?.therapistName}</div>

              <div className="font-medium text-gray-700">Time of session</div>
              <div className="text-gray-900">{state?.sessionTime}</div>
            </div>

            <p className="text-gray-500 mb-10">Check your email for reminders</p>

            <Button
              onClick={() => navigate("/dashboard")}
              className="bg-[#38485C] text-white hover:bg-gray-700 rounded-full px-10 py-4 text-lg"
            >
              Back to homepage
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  return isMobile ? content : <DashboardLayout>{content}</DashboardLayout>;
};

export default ThankYouPage;
