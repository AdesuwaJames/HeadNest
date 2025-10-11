// src/pages/community/Community.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../../sidebar";
import DashboardLayout from "../dashboard/DashboardLayout";

const communities = [
  {
    name: "Anxiety Coping Circle",
    description: "A safe space to talk to others and share struggles.",
    path: "/community/anxiety-coping-circle",
  },
  {
    name: "Relief Coping Circle",
    description: "Connect with people managing anxiety and stress.",
    path: "/community/relief-coping-circle",
  },
  {
    name: "Mindful Coping Circle",
    description: "For mindfulness, meditation, and calm reflection.",
    path: "/community/mindful-coping-circle",
  },
];

export default function Community() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  // Detect mobile screen
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Page content (used both in mobile and desktop)
  const PageContent = (
    <div className="flex min-h-screen bg-[#f7f7f7] text-[#2d3a4a] font-sans">
      {/* Sidebar (toggleable on mobile) */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Mobile Sidebar Toggle Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-[#38485C] text-white p-2 rounded-md"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <FontAwesomeIcon icon={sidebarOpen ? faTimes : faBars} />
      </button>

      {/* Main Section */}
      <main className="flex-1 flex flex-col items-center pt-12 pb-12 px-4 md:px-8 md:ml-[220px] w-full">
        <h2 className="text-3xl font-bold mb-10 text-[#3b4b5a] text-center">
          Join a Support Community
        </h2>

        <div className="flex flex-col space-y-6 w-full max-w-2xl">
          {communities.map((c) => (
            <div
              key={c.name}
              className="flex flex-col sm:flex-row items-center bg-white rounded-2xl p-6 gap-6 shadow-xl border border-gray-100 hover:scale-[1.01] hover:shadow-2xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-24 h-24 bg-[#3b4b5a] rounded-full flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-10 h-10 text-white" strokeWidth={1.5} />
              </div>

              {/* Info */}
              <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left">
                <h3 className="text-xl font-bold text-[#3b4b5a] mb-1">{c.name}</h3>
                <p className="text-gray-600 text-base mb-4">{c.description}</p>
                <button
                  className="w-full sm:w-60 py-3 bg-[#4e7bbf] text-white rounded-full text-lg font-semibold hover:bg-[#3d65a0] transition-all duration-200 shadow-lg"
                  onClick={() => navigate(c.path)}
                >
                  Join Community
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );

  // Render differently for mobile vs desktop
  return isMobile ? (
    <div className="flex flex-col min-h-screen bg-gray-50">{PageContent}</div>
  ) : (
    <DashboardLayout>{PageContent}</DashboardLayout>
  );
}
