import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png"; // adjust path

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && !e.target.closest(".sidebar") && !e.target.closest(".toggle-btn")) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  // Helper to check active route
  const isActive = (path) => location.pathname === path;
  

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`sidebar fixed md:static top-0 left-0 h-full w-[70%] md:w-[60%] lg:w-[23%] bg-[#EADFCE]
           p-6 border-r border-gray-200 transform transition-transform duration-300 ease-in-out z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Logo */}
        <div className="flex flex-col items-center mb-10">
          <img
            src={logo}
            alt="Headnest Logo"
            className="w-[200px] h-[100px] sm:w-[300px] sm:h-[140px] md:w-[380px] md:h-[180px] object-contain rounded-full shadow-lg bg-[#f7ebdb]"
          />

        </div>

        {/* Navigation */}
        <nav className="
          flex flex-col 
          w-full h-auto gap-7   /* default (mobile-first) */
          md:w-[297px] md:h-[379px] md:gap-[36px] md:opacity-100 md:rotate-0  /* desktop */
        ">
          <Link
            to="/"
            className={`font-[Inter] font-medium text-[22px] leading-[100%] 
              tracking-[0%] align-middle w-[230px] h-[39px] md:w-[33%] rounded-r-[20px] ${
              isActive("/")
                ? " bg-gray-400 text-[#2d3a4a]"
                : "text-[#38485C] hover:text-[#4e7bbf]"
            }`}
          >
            Home
          </Link>
          <Link
            to="/journal"
            className={`font-[Inter] font-medium text-[22px] leading-[100%] 
              tracking-[0%] align-middle w-[230px] md:w-[43%] h-[39px] rounded-r-[20px] ${
              isActive("/journal")
                ? " bg-gray-400 text-[#2d3a4a]"
                : "text-[#38485C] hover:text-[#4e7bbf]"
            }`}
          >
            Journal
          </Link>
          <Link
            to="/community"
            className={`font-[Inter] font-medium text-[22px] leading-[100%] 
              tracking-[0%] align-middle w-[230px] md:w-[53%] h-[39px] rounded-r-[20px] ${
              isActive("/community")
                ? " bg-gray-400 text-[#2d3a4a]"
                : "text-[#38485C] hover:text-[#4e7bbf]"
            }`}
          >
            Community
          </Link>
          <Link
            to="/therapist"
            className={`font-[Inter] font-medium text-[22px] leading-[100%] 
              tracking-[0%] align-middle w-[230px] md:w-[50%] h-[39px] rounded-r-[20px] ${
              isActive("/therapist")
                ? " bg-gray-400 text-[#2d3a4a]"
                : "text-[#38485C] hover:text-[#4e7bbf]"
            }`}
          >
            Therapist
          </Link>
          <Link
            to="/settings"
            className={`font-[Inter] font-medium text-[22px] leading-[100%] 
              tracking-[0%] align-middle w-[230px] md:w-[50%] h-[39px] rounded-r-[20px] ${
              isActive("/settings")
                ? "bg-gray-400 text-[#2d3a4a]"
                : "text-[#38485C] hover:text-[#4e7bbf]"
            }`}

          >
            Settings
          </Link>
          <Link
            to="/tracker"
            className={`font-[Inter] font-medium text-[22px] leading-[100%] 
              tracking-[0%] align-middle w-[230px] md:w-[50%] h-[39px] rounded-r-[20px] ${
              isActive("/tracker")
                ? "bg-gray-400 text-[#2d3a4a]"
                : "text-[#38485C] hover:text-[#4e7bbf]"
            }`}

          >
            Mood Tracker
          </Link>
        </nav>
      </aside>

      {/* Overlay (mobile only) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={onClose}
        />
      )}
    </>
  );
};

export default Sidebar;
