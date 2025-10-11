import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTag,
  faUser,
  faArrowRight,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../../sidebar";
import DashboardLayout from "../dashboard/DashboardLayout";

const Settings = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close sidebar with ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSidebarOpen(false);
    };
    if (sidebarOpen) {
      window.addEventListener("keydown", handleEsc);
    }
    return () => window.removeEventListener("keydown", handleEsc);
  }, [sidebarOpen]);

  // Go back automatically on mount (remove icon, but still go back)
  useEffect(() => {
    if (isMobile) {
      navigate(-1);
    }
  }, [isMobile, navigate]);

  const handleLogout = () => {
    console.log("Logout function triggered.");
  };

  const vector = (
    <FontAwesomeIcon icon={faArrowRight} className="text-sm text-gray-400" />
  );

  const content = (
    <div className="flex min-h-screen bg-gray-50 overflow-y-hidden"
      style={{
        fontFamily: "Inter",
        fontWeight: "500",
        fontStyle: "Semi Bold",
        fontSize: "29px",
        lineHeight: "32px",
        letterSpacing: "0%",
      }}>
      {/* Sidebar: only show on mobile here, desktop handled by DashboardLayout */}
      {isMobile && (
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      )}

      {/* Hamburger menu for mobile (fixed at top left) */}
      {isMobile && (
        <button
          className="md:hidden fixed top-4 left-4 z-50 bg-[#38485C] text-white p-2 rounded-md"
          onClick={() => setSidebarOpen((open) => !open)}
          aria-label="Open sidebar"
        >
          <FontAwesomeIcon icon={sidebarOpen ? faTimes : faBars} />
        </button>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-1 py-6 ">
        {/* Content Card */}
        <div
          className="
            bg-white shadow-lg rounded-2xl
            p-6 md:p-12 
            overflow-y-auto
            w-full max-w-lg min-h-[50vh] max-h-screen 
            lg:min-w-[1000px] 
            lg:max-w-[1000px]
            lg:min-h-[500px]
            lg:max-h-[95vh]
          "
        >

          <h2 className="text-2xl md:text-3xl font-extrabold text-[#2c3e50] mb-8 text-center">
            Settings
          </h2>

          {/* Account Section */}
          <div className="mb-10">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2 flex items-center" 
            style={{
              fontFamily: "Inter",
              fontWeight: "600",
              fontStyle: "Bold",
              fontSize: "20px",
              lineHeight: "32px",
              letterSpacing: "0%",
            }}>
              <FontAwesomeIcon
                icon={faUser}
                className="mr-2 text-base w-4 h-4" 
                style={{
                  fontFamily: "Inter",
                  fontWeight: "600",
                  fontStyle: "Semi Bold",
                  fontSize: "32px",
                  lineHeight: "32px",
                  letterSpacing: "0%",
                }}
              />
              Account
            </h3>
            <Link
              to="/edit-profile"
              className="flex justify-between items-center py-3 border-b border-gray-200 text-gray-800 hover:bg-gray-50 transition"
            >
              <span className="text-base font-medium" style={{
                fontFamily: "Inter",
                fontWeight: "500",
                fontStyle: "Semi Bold",
                fontSize: "13px",
                lineHeight: "32px",
                letterSpacing: "0%",
              }}>Edit Profile</span>
              {vector}
            </Link>
            <Link
              to="/edit-profile#username"
              className="flex justify-between items-center py-3 border-b border-gray-200 text-gray-800 hover:bg-gray-50 transition"
            >
              <span className="text-base font-medium" style={{
                fontFamily: "Inter",
                fontWeight: "500",
                fontStyle: "Semi Bold",
                fontSize: "13px",
                lineHeight: "32px",
                letterSpacing: "0%",
              }}>Change Username</span>
              {vector}
            </Link>
            <Link
              to="/edit-profile#password"
              className="flex justify-between items-center py-3 border-b border-gray-200 text-gray-800 hover:bg-gray-50 transition"
            >
              <span className="text-base font-medium" style={{
                fontFamily: "Inter",
                fontWeight: "500",
                fontStyle: "Semi Bold",
                fontSize: "13px",
                lineHeight: "32px",
                letterSpacing: "0%",
              }}>Change Password</span>
              {vector}
            </Link>
          </div>

          {/* More Section */}
          <div className="mb-10">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2 flex items-center" style={{
              fontFamily: "Inter",
              fontWeight: "600",
              fontStyle: "Bold",
              fontSize: "20px",
              lineHeight: "32px",
              letterSpacing: "0%",
            }}>
              <FontAwesomeIcon
                icon={faTag}
                className="mr-2 text-base w-4 h-4" style={{
                  fontFamily: "Inter",
                  fontWeight: "600",
                  fontStyle: "Semi Bold",
                  fontSize: "30px",
                  lineHeight: "32px",
                  letterSpacing: "0%",
                }}
              />
              More
            </h3>
            <Link
              to="/privacy-policy"
              className="flex justify-between items-center py-3 border-b border-gray-200 text-gray-800 hover:bg-gray-50 transition"
            >
              <span className="text-base font-medium" style={{
                fontFamily: "Inter",
                fontWeight: "500",
                fontStyle: "Semi Bold",
                fontSize: "13px",
                lineHeight: "32px",
                letterSpacing: "0%",
              }}>Privacy Policy</span>
              {vector}
            </Link>
            <Link
              to="/change-country"
              className="flex justify-between items-center py-3 border-b border-gray-200 text-gray-800 hover:bg-gray-50 transition"
            >
              <span className="text-base font-medium" style={{
                fontFamily: "Inter",
                fontWeight: "500",
                fontStyle: "Semi Bold",
                fontSize: "13px",
                lineHeight: "32px",
                letterSpacing: "0%",
              }}>Country</span>
              {vector}
            </Link>
            <Link
              to="/contact-us"
              className="flex justify-between items-center py-3 border-b border-gray-200 text-gray-800 hover:bg-gray-50 transition"
            >
              <span className="text-base font-medium" style={{
                fontFamily: "Inter",
                fontWeight: "500",
                fontStyle: "Semi Bold",
                fontSize: "13px",
                lineHeight: "32px",
                letterSpacing: "0%",
              }}>Contact Us</span>
              {vector}
            </Link>
          </div>

          {/* Logout */}
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={handleLogout}
              className="w-full sm:w-72 p-3 rounded-full bg-[#38485C] text-white font-semibold shadow-md hover:bg-[#2c3647] transition"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return isMobile ? content : <DashboardLayout>{content}</DashboardLayout>;
};

export default Settings;
