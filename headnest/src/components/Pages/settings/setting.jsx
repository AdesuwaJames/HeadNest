import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../../sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTag,
  faUser,
  faArrowRight,
  faArrowLeft,
  faTimes,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const Settings = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    console.log("Logout function triggered.");
    // TODO: Add real logout/auth logic
  };

  // ✅ Close sidebar with ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSidebarOpen(false);
    };
    if (sidebarOpen) {
      window.addEventListener("keydown", handleEsc);
    }
    return () => window.removeEventListener("keydown", handleEsc);
  }, [sidebarOpen]);

  const vector = (
    <FontAwesomeIcon icon={faArrowRight} className="text-sm text-gray-400" />
  );

  return (
    <div className="flex h-screen bg-gray-100 ">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Mobile Toggle Button */}
      <button
        type="button"
        aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
        className="md:hidden fixed top-4 left-4 z-50 bg-[#38485C] text-white p-2 rounded-md"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <FontAwesomeIcon icon={sidebarOpen ? faTimes : faBars} />
      </button>

      {/* Overlay (mobile only) */}
      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close sidebar overlay"
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 w-full h-full overflow-y-hidden mx-10 my-6 md:mx-[200px] md:my-[50px]">
        <div className="w-full p-6 md:p-10 bg-white h-full">
          {/* Mobile Back Button */}
          <button
            type="button"
            aria-label="Go back"
            onClick={() => navigate("/")}
            className="block md:hidden text-2xl text-gray-700 mb-6 hover:text-gray-900 transition"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>

          <h2 className="text-3xl font-extrabold text-[#2c3e50] mb-8">
            Settings
          </h2>

          {/* Account Section */}
          <div className="mb-10">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2 flex items-center">
              <FontAwesomeIcon icon={faUser} className="mr-2 text-base w-4 h-4" />
              Account
            </h3>
            <Link
              to="/edit-profile"
              className="flex justify-between items-center py-4 border-b border-gray-200 text-gray-800 hover:bg-gray-50 transition"
            >
              <span className="text-base font-medium">Edit Profile</span>
              {vector}
            </Link>
            <Link
              to="/edit-profile#username"
              className="flex justify-between items-center py-4 border-b border-gray-200 text-gray-800 hover:bg-gray-50 transition"
            >
              <span className="text-base font-medium">Change Username</span>
              {vector}
            </Link>
            <Link
              to="/edit-profile#password"
              className="flex justify-between items-center py-4 border-b border-gray-200 text-gray-800 hover:bg-gray-50 transition"
            >
              <span className="text-base font-medium">Change Password</span>
              {vector}
            </Link>
          </div>

          {/* More Section */}
          <div className="mb-10">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2 flex items-center">
              <FontAwesomeIcon icon={faTag} className="mr-2 text-base w-4 h-4" />
              More
            </h3>
            <Link
              to="/privacy-policy"
              className="flex justify-between items-center py-4 border-b border-gray-200 text-gray-800 hover:bg-gray-50 transition"
            >
              <span className="text-base font-medium">Privacy Policy</span>
              {vector}
            </Link>
            <Link
              to="/change-country"
              className="flex justify-between items-center py-4 border-b border-gray-200 text-gray-800 hover:bg-gray-50 transition"
            >
              <span className="text-base font-medium">Country</span>
              {vector}
            </Link>
            <Link
              to="/contact-us"
              className="flex justify-between items-center py-4 border-b border-gray-200 text-gray-800 hover:bg-gray-50 transition"
            >
              <span className="text-base font-medium">Contact Us</span>
              {vector}
            </Link>
          </div>

          {/* Logout */}
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={handleLogout}
              className="w-full sm:w-80 p-3 rounded-lg sm:rounded-full bg-[#38485C] text-white font-semibold shadow-lg hover:bg-[#2c3647] transition duration-200"
            >
              Logout
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
