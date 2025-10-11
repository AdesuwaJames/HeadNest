import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPlus, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../dashboard/DashboardLayout";
import Sidebar from "../../sidebar";

export default function JournalScreen() {
  const [journalEntries, setJournalEntries] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const latestEntryRef = useRef(null);
  const navigate = useNavigate();

  // Detect screen size (to control layout)
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Add new entry
  const addNewEntry = () => {
    const nextDay = (journalEntries.length + 1).toString().padStart(2, "0");
    setJournalEntries((prev) => [
      ...prev,
      { id: prev.length + 1, day: nextDay, content: "" },
    ]);

    setTimeout(() => {
      if (latestEntryRef.current) {
        latestEntryRef.current.focus();
        latestEntryRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, 0);
  };

  // Update entry content
  const handleChange = (id, value) => {
    setJournalEntries((prev) =>
      prev.map((entry) =>
        entry.id === id ? { ...entry, content: value } : entry
      )
    );
  };

  // Journal Content (without DashboardLayout)
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

      <div className="flex-1 flex flex-col">
        <main className="flex-1 min-h-screen p-6 md:p-10 bg-white overflow-y-auto">
          {/* Header */}
          <div className="flex items-center mb-6">
            <button
              type="button"
              aria-label="Go back"
              onClick={() => navigate(-1)}
              className="mr-3 md:hidden"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="text-xl text-[#2e3b4e]" />
            </button>
            <h1 className="text-2xl font-bold text-[#2e3b4e] mx-auto">
              My Journal
            </h1>
          </div>

          {/* Journal Entries */}
          <div className="flex flex-col gap-4 w-full max-w-2xl mx-auto">
            {journalEntries.map((entry, index) => (
              <div
                key={entry.id}
                className="flex flex-col bg-[#f7ebdb] p-4 rounded-xl border border-gray-200 shadow-sm"
              >
                <textarea
                  ref={index === journalEntries.length - 1 ? latestEntryRef : null}
                  className="w-full min-h-[80px] resize-y p-2 text-base border border-gray-300 rounded-md bg-[#EADFCE] outline-none"
                  placeholder="Write your thoughts..."
                  value={entry.content}
                  onChange={(e) => handleChange(entry.id, e.target.value)}
                />
                <span className="self-end text-sm font-bold text-[#666] mt-2">
                  {entry.day} <small className="text-xs">DAY</small>
                </span>
              </div>
            ))}

            {/* Add new day */}
            <button
              type="button"
              aria-label="Add new journal day"
              onClick={addNewEntry}
              className="flex items-center justify-center gap-2 self-center mt-3 bg-[#2e3b4e] text-white rounded-md px-5 py-3 text-sm font-semibold hover:bg-[#1f2a38] shadow-md transition"
            >
              <FontAwesomeIcon icon={faPlus} /> Add Day
            </button>
          </div>
        </main>
      </div>
    </div>
  );

  // Use layout only for desktop
  return isMobile ? content : <DashboardLayout>{content}</DashboardLayout>;
}