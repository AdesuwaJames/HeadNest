import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import profilePic from "../../../assets/therapist.png"; 
import Sidebar from "../../sidebar";

const TherapistProfile = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-[#38485C] text-white p-2 rounded-md"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <FontAwesomeIcon icon={sidebarOpen ? faTimes : faBars} />
      </button>

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Toggle button (mobile only) */}
      {/* <button
        className="toggle-btn md:hidden p-3 bg-gray-800 text-white fixed top-4 left-4 z-50 rounded"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? "Close" : "Menu"}
      </button> */}

      {/* Main Content */}
      <main className="flex-1 h-full overflow-y-auto p-6 sm:p-10 bg-white ml-0 md:ml-[240px] transition-all">
        <div className="max-w-xl mx-0 h-full flex flex-col">
          {/* Profile Section */}
          <div className="flex flex-col items-center text-center mb-8">
            <img
              src={profilePic}
              alt="Therapist"
              className="w-28 h-28 rounded-full mb-3 object-cover"
            />
            <h2 className="text-xl font-semibold text-[#38485C]">Dr. John Doe</h2>
            <span className="text-sm text-gray-500">Mental Health Professional</span>
          </div>

          {/* About Me */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold text-[#38485C] mb-2">About Me</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              I am a mental health professional that helps individuals cope with
              stress, anxiety, and depression. My approach is empathetic,
              evidence-based, and tailored to your needs.
            </p>
          </section>

          {/* Specialities */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold text-[#38485C] mb-2">Specialities</h3>
            <div className="flex gap-2 flex-wrap">
              <span className="bg-[#f1e1c8] text-sm px-3 py-1 rounded-full">Anxiety</span>
              <span className="bg-[#f1e1c8] text-sm px-3 py-1 rounded-full">Stress Management</span>
              <span className="bg-[#f1e1c8] text-sm px-3 py-1 rounded-full">Depression</span>
            </div>
          </section>

          {/* Qualifications */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold text-[#38485C] mb-2">Qualifications</h3>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>Bsc Psychology</li>
              <li>Master Behavioral Psychology</li>
              <li>Member Nigeria Mental Health Society</li>
            </ul>
          </section>

          {/* Pricing */}
          <section className="mb-8">
            <h3 className="text-lg font-semibold text-[#38485C] mb-2">Pricing</h3>
            <p className="text-sm text-gray-700">N1000 per person</p>
          </section>

          {/* Book Appointment */}
          <div className="flex justify-center">
            <button className="w-full sm:w-80 p-3 rounded-lg sm:rounded-full bg-[#38485C] text-white font-semibold shadow-lg hover:bg-[#2e384c] transition duration-200">
              Book Appointment
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TherapistProfile;
