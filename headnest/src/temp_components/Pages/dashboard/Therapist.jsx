// src/pages/TherapistList.jsx
import { Card, CardContent } from "@/temp_components/ui/card";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import DashboardLayout from "./DashboardLayout";
import Sidebar from "../../sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const therapists = [
  {
    id: 1,
    name: "Dr. John Doe",
    specialization: "Therapy A",
    image: "/images/therapist1.jpg",
  },
  {
    id: 2,
    name: "Dr. Jane Doe",
    specialization: "Therapy B",
    image: "/images/therapist2.jpg",
  },
  // ...
];

export default function TherapistList() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const content = (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar (toggleable on mobile) */}
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

      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="max-w-6xl w-full mx-auto py-10">
          <h1 className="text-3xl font-bold text-center mb-2">
            Book a therapist,
          </h1>
          <h2 className="text-2xl text-center mb-10">
            Start your healing journey
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {therapists.map((t) => (
              <Card
                key={t.id}
                className="cursor-pointer hover:shadow-lg"
                 onClick={() => navigate(`/therapist/${t.id}`)}>
                <CardContent className="p-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-48 object-cover rounded"
                  />
                  <div className="mt-3">
                    <p className="font-medium text-gray-800">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.specialization}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return isMobile ? content : <DashboardLayout>{content}</DashboardLayout>;
}
