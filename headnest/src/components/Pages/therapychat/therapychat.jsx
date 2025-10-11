import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faPaperclip,
  faTimes, 
  faBars
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../../sidebar";

const TherapyChat = () => {
  const navigate = useNavigate();
  
  const [messages, setMessages] = useState([
    { user: "@System", text: "You joined the chat." },
  ]);
  const [input, setInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(300); // 5 mins demo session
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Handle sending message
  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { user: "@You", text: input }]);
    setInput("");

    // Simulated therapist response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          user: "@Therapist",
          text: "Thanks for sharing. Can you tell me more?",
        },
      ]);
    }, 1000);
  };

  // Handle exit
  const handleExit = () => {
    const confirmExit = window.confirm("Are you sure you want to exit the chat?");
    if (confirmExit) {
      setMessages([]);
      navigate("/"); // Back to homepage
    }
  };

  // Session countdown timer
  useEffect(() => {
    if (timeLeft <= 0) {
      alert("Session timed out. Returning to homepage...");
      navigate("/");
      return;
    }
    const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, navigate]);

  // Click outside to close sidebar
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setSidebarOpen(false);
      }
    };
    if (sidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarOpen]);

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-gray-50 relative">

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Mobile Toggle Button */}
       <button
          className="md:hidden fixed top-4 left-4 z-50 bg-[#38485C] text-white p-2 rounded-md"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
        <FontAwesomeIcon icon={sidebarOpen ? faTimes : faBars} />
      </button>


      {/* Main content */}
      <div className="flex flex-col flex-1 h-full">
        {/* Header */}
        <header className="flex items-center justify-between p-4 border-b bg-white shadow-sm">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="text-[#38485C] md:hidden"
            >
              <FontAwesomeIcon icon={faBars} className="text-xl" />
            </button>
          </div>
          <h2 className="text-sm sm:text-lg font-semibold text-[#38485C] flex-1 text-center">
            Chat with therapist in progress
          </h2>
          <span className="text-sm text-gray-600 min-w-[50px] text-right">
            {Math.floor(timeLeft / 60)}:
            {(timeLeft % 60).toString().padStart(2, "0")}
          </span>
        </header>

        {/* Chat box */}
        <main className="flex-1 flex flex-col items-center justify-between p-4">
          <div className="w-full max-w-2xl flex flex-col flex-1 bg-white rounded-lg shadow p-4">
            <div className="flex-1 overflow-y-auto space-y-3 mb-4">
              {messages.map((msg, index) => (
                <div key={index} className="text-sm">
                  <span className="font-bold mr-2">{msg.user}</span>
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="flex items-center border rounded-full px-3 py-2">
              <FontAwesomeIcon icon={faPaperclip} className="text-gray-500 mr-2" />
              <input
                type="text"
                className="flex-1 px-2 py-1 outline-none"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button
                onClick={sendMessage}
                className="ml-2 text-[#38485C] hover:text-[#2e384c]"
              >
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="flex justify-center p-4 border-t bg-white shadow-sm">
          <button
            onClick={handleExit}
            className="bg-[#38485C] text-white px-6 py-2 rounded-full hover:bg-[#2e384c] transition"
          >
            Exit Chat
          </button>
        </footer>
      </div>
    </div>
  );
};

export default TherapyChat;

