import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "./exit-confirm.css"; // (create this file for styling)

export default function Chat() {
  const { communityName } = useParams();
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [participants, setParticipants] = useState(["@A", "@B", "@C", "@D"]);
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const chatEndRef = useRef(null);

  // Scroll to bottom on new message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Simulate user joining notification
  useEffect(() => {
    const user = "@You";
    setMessages((prev) => [
      ...prev,
      { sender: "System", content: `${user} joined the chat.` },
    ]);
    // Cleanup: user leaving
    return () => {
      setMessages((prev) => [
        ...prev,
        { sender: "System", content: `${user} left the chat.` },
      ]);
    };
  },
  
  []);
  

  // Anti-screenshot blur protection
  useEffect(() => {
    const blurChat = () => {
      const chat = document.getElementById("chatContainer");
      if (chat) {
        chat.style.filter = "blur(15px)";
        setTimeout(() => (chat.style.filter = "none"), 2000);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "PrintScreen") {
        blurChat();
        alert("⚠️ Screenshots are disabled for privacy protection.");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const sendMessage = () => {
    if (input.trim()) {
      setMessages((prev) => [...prev, { sender: "@You", content: input }]);
      setInput("");

      // Simulate response from another user
      setTimeout(() => {
        const others = participants.filter((p) => p !== "@You");
        const randomSender = others[Math.floor(Math.random() * others.length)];
        setMessages((prev) => [
          ...prev,
          { sender: randomSender, content: "That's interesting!" },
        ]);
      }, 1200);
    }
  };

  const handleExit = () => {
    setShowExitConfirm(true);
  };

  const confirmExit = () => {
    setMessages([]);
    navigate("/community");
  };

  return (
    
    <div className="flex justify-center bg-[#f2f4f6] min-h-screen font-sans select-none relative">
       
      {/* Exit confirmation modal */}
      {showExitConfirm && (
        <div className="exit-modal-overlay">
          <div className="exit-modal">
            <p className="mb-4 font-semibold text-lg text-[#2e3b4e]">
              Are you sure you want to exit the chat?
            </p>
            <div className="flex gap-4 justify-center">
              <button
                className="bg-[#2e3b4e] text-white px-4 py-2 rounded-full"
                onClick={confirmExit}
              >
                Yes, Exit
              </button>
              <button
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-full"
                onClick={() => setShowExitConfirm(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col w-full max-w-3xl bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-[#fafafa]">
          <h2 className="text-xl font-semibold text-[#2e3b4e]">
            {communityName?.replace(/-/g, " ") || "Coping Circle"}
          </h2>
          <button
            onClick={handleExit}
            className="bg-[#2e3b4e] text-white px-3 py-1 rounded-full text-sm hover:bg-[#1f2937] transition hover:shadow-md h-[36px] w-[90px]"
            style={{
              fontFamily: "Inter",
              fontWeight: "600",
              fontSize: "16px",
            }}
          >
            Exit Chat
          </button>
        </div>

        {/* Participants */}
        <div className="flex gap-2 px-4 py-2 border-b border-gray-100 bg-[#f9fafb] text-sm text-gray-600">
          Participants:{" "}
          {participants.map((p, i) => (
            <span key={i} className="font-medium text-[#2e3b4e]">
              {p}
              {i < participants.length - 1 ? "," : ""}
            </span>
          ))}
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
          {messages.length === 0 && (
            <p className="text-center text-gray-500">
              No messages yet — say hello 👋
            </p>
          )}
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`max-w-[75%] p-3 rounded-2xl text-sm shadow ${
                msg.sender === "@You"
                  ? "bg-[#2e3b4e] text-white self-end"
                  : msg.sender === "System"
                  ? "bg-gray-200 text-gray-700 text-center self-center italic"
                  : "bg-[#b7dff5] text-[#0b2540] self-start"
              }`}
            >
              {msg.sender !== "System" && (
                <strong
                  className={`block text-xs mb-1 ${
                    msg.sender === "@You" ? "text-gray-200" : "text-[#1f2937]"
                  }`}
                >
                  {msg.sender}
                </strong>
              )}
              {msg.content}
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        {/* Input */}
        <div className="flex items-center p-3 border-t border-gray-200 bg-[#fafafa]">
          <input
            type="text"
            className="flex-1 p-2 px-3 border border-gray-300 rounded-full outline-none text-sm mx-2"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="text-lg text-[#2e3b4e]"
            aria-label="Send"
          >
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>
      </div>

      {/* Hide content on print */}
      <style>{`
        @media print {
          body {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
