import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPlus, faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../../sidebar";

export default function Journal() {
  const [journalEntries, setJournalEntries] = useState([]);
  const latestEntryRef = useRef(null);

  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Add new entry
  const addNewEntry = () => {
    const nextDay = (journalEntries.length + 1).toString().padStart(2, "0");
    setJournalEntries((prev) => [
      ...prev,
      { id: prev.length + 1, day: nextDay, content: "" },
    ]);

    // Wait for DOM update then focus & scroll
    setTimeout(() => {
      if (latestEntryRef.current) {
        latestEntryRef.current.focus();
        latestEntryRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
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

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Mobile Toggle Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-[#38485C] text-white p-2 rounded-md"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <FontAwesomeIcon icon={sidebarOpen ? faTimes : faBars} />
      </button>

      {/* Main Content */}
      <main className="flex-1 min-h-screen p-6 md:p-10 bg-white overflow-y-auto">
        {/* Mobile header */}
        <div className="flex items-center mb-6">
          <div className="md:hidden mr-3 cursor-pointer">
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="text-xl text-[#2e3b4e]"
              onClick={() => navigate(-1)}
            />
          </div>
          <h1 className="text-2xl font-bold text-[#2e3b4e] mx-auto">My Journal</h1>
        </div>

        {/* Journal Entries */}
        <div className="flex flex-col gap-4 w-full max-w-2xl mx-auto">
          {journalEntries.map((entry, index) => (
            <div
              key={entry.id}
              className="flex flex-col bg-[#f7ebdb] p-4 rounded-xl border border-gray-200 shadow-sm"
            >
              <textarea
                aria-label={`Journal entry for day ${entry.day}`}
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
            aria-label="Add new journal day"
            className="flex items-center justify-center gap-2 self-center mt-3 bg-[#2e3b4e] text-white rounded-md px-5 py-3 text-sm font-semibold hover:bg-[#1f2a38] shadow-md transition"
            onClick={addNewEntry}
          >
            <FontAwesomeIcon icon={faPlus} /> Add Day
          </button>
        </div>
      </main>
    </div>
  );
}
