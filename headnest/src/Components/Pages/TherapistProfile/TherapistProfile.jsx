// src/pages/TherapistProfile.jsx
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../../sidebar";
import therapists from "../../../data/therapists";

const TherapistProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const therapist = therapists.find((t) => t.id === parseInt(id));

  if (!therapist) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-600 text-lg">Therapist not found.</p>
      </div>
    );
  }

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

      {/* Main Content */}
      <main className="flex-1 h-full overflow-y-auto p-6 sm:p-10 bg-white ml-0 md:ml-[240px] transition-all">
        <div className="max-w-xl mx-0 h-full flex flex-col">
          {/* Profile Section */}
          <div className="flex flex-col items-center text-center mb-8">
            <img
              src={therapist.image}
              alt={therapist.name}
              className="w-28 h-28 rounded-full mb-3 object-cover"
            />
            <h2 className="text-xl font-semibold text-[#38485C]">
              {therapist.name}
            </h2>
            <span className="text-sm text-gray-500">
              {therapist.specialization}
            </span>
          </div>

          {/* About Me */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold text-[#38485C] mb-2">
              About Me
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              {therapist.about}
            </p>
          </section>

          {/* Specialities */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold text-[#38485C] mb-2">
              Specialities
            </h3>
            <div className="flex gap-2 flex-wrap">
              {therapist.specialties.map((spec, i) => (
                <span
                  key={i}
                  className="bg-[#f1e1c8] text-sm px-3 py-1 rounded-full"
                >
                  {spec}
                </span>
              ))}
            </div>
          </section>

          {/* Qualifications */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold text-[#38485C] mb-2">
              Qualifications
            </h3>
            <ul className="list-disc list-inside text-sm text-gray-700">
              {therapist.qualifications.map((qual, i) => (
                <li key={i}>{qual}</li>
              ))}
            </ul>
          </section>

          {/* Pricing */}
          <section className="mb-8">
            <h3 className="text-lg font-semibold text-[#38485C] mb-2">
              Pricing
            </h3>
            <p className="text-sm text-gray-700">{therapist.pricing}</p>
          </section>

          {/* Book Appointment */}
          <div className="flex justify-center">
            <button
              className="w-full sm:w-80 p-3 rounded-lg sm:rounded-full bg-[#38485C] text-white font-semibold shadow-lg hover:bg-[#2e384c] transition duration-200"
              onClick={() => navigate(`/booking/${therapist.id}`)} // 👈 Leads to booking page
            >
              Book Appointment
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TherapistProfile;
