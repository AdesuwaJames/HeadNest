import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faPlus,
  faBars,
  faTimes,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../dashboard/DashboardLayout";
import Sidebar from "../../sidebar";
import API from "../../../api/config";

export default function JournalScreen() {
  const [journalEntries, setJournalEntries] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const latestEntryRef = useRef(null);
  const navigate = useNavigate();

  // ✅ Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Fetch all journals (Read)
  useEffect(() => {
    const fetchJournals = async () => {
      setLoading(true);
      try {
        const response = await API.get("/journals");
        console.log("✅ Journals fetched:", response.data);
        setJournalEntries(response.data?.journals || []);
      } catch (error) {
        console.error("❌ Error fetching journals:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJournals();
  }, []);

  // ✅ Add new journal (Create)
  const addNewEntry = async () => {
    try {
      const newJournal = {
        title: `Day ${journalEntries.length + 1}`,
        content: "",
      };

      const response = await API.post("/journals", newJournal);
      console.log("✅ Journal added:", response.data);

      setJournalEntries((prev) => [...prev, response.data]);

      // Focus & scroll to latest entry
      setTimeout(() => {
        if (latestEntryRef.current) {
          latestEntryRef.current.focus();
          latestEntryRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    } catch (error) {
      console.error(
        "❌ Error adding journal:",
        error.response?.data || error.message
      );
    }
  };

  // ✅ Update journal (Edit)
  const handleChange = async (id, value) => {
    setJournalEntries((prev) =>
      prev.map((entry) => (entry._id === id ? { ...entry, content: value } : entry))
    );

    try {
      await API.patch(`/journals/${id}`, { content: value });
      console.log(`✅ Journal ${id} updated`);
    } catch (error) {
      console.error("❌ Error updating journal:", error);
    }
  };

  // ✅ Delete journal (Delete)
  const deleteEntry = async (id) => {
    try {
      await API.delete(`/journals/${id}`);
      setJournalEntries((prev) => prev.filter((entry) => entry._id !== id));
      console.log(`🗑️ Journal ${id} deleted`);
    } catch (error) {
      console.error("❌ Error deleting journal:", error);
    }
  };

  const content = (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar (toggleable on mobile) */}
      {isMobile && (
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      )}

      {/* Hamburger menu for mobile */}
      {isMobile && (
        <button
          className="md:hidden fixed top-4 left-4 z-50 bg-[#38485C] text-white p-2 rounded-md"
          onClick={() => setSidebarOpen((open) => !open)}
          aria-label="Toggle sidebar"
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
              onClick={() => navigate(-1)}
              className="mr-3 md:hidden"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="text-xl text-[#2e3b4e]" />
            </button>
            <h1 className="text-2xl font-bold text-[#2e3b4e] mx-auto">
              My Journal
            </h1>
          </div>

          {/* Loading */}
          {loading && (
            <p className="text-center text-gray-500">Loading journals...</p>
          )}

          {/* Journal Entries */}
          <div className="flex flex-col gap-4 w-full max-w-2xl mx-auto">
            {journalEntries.map((entry, index) => (
              <div
                key={entry._id || index}
                className="flex flex-col bg-[#f7ebdb] p-4 rounded-xl border border-gray-200 shadow-sm"
              >
                <textarea
                  ref={index === journalEntries.length - 1 ? latestEntryRef : null}
                  className="w-full min-h-[80px] resize-y p-2 text-base border border-gray-300 rounded-md bg-[#EADFCE] outline-none"
                  placeholder="Write your thoughts..."
                  value={entry.content || ""}
                  onChange={(e) => handleChange(entry._id, e.target.value)}
                />
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm font-bold text-[#666]">
                    {entry.title || `Day ${index + 1}`}
                  </span>
                  <button
                    onClick={() => deleteEntry(entry._id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </div>
            ))}

            {/* Add new day */}
            <button
              type="button"
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

  return isMobile ? content : <DashboardLayout>{content}</DashboardLayout>;
}
