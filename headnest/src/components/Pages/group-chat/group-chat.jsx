import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faPaperPlane, faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../../sidebar";

const Chat = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { communityName } = useParams(); // ✅ dynamic chat name from route
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (input.trim()) {
      setMessages((prev) => [...prev, { sender: "@You", content: input }]);
      setInput("");

      // Mock reply for demo
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "SupportBot", content: "Thanks for sharing 💙" },
        ]);
      }, 1000);
    }
  };

  const exitChat = () => {
    if (window.confirm("Are you sure you want to exit the chat?")) {
      setMessages([]);
      navigate("/community"); // ✅ go back to community instead of home
    }
  };

  return (
    <div className="flex min-h-screen bg-[#f2f4f6] md:flex-row flex-col">
      {/* LEFT: Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            {/* Mobile Toggle Button */}
             <button
                className="md:hidden fixed top-4 left-4 z-50 bg-[#38485C] text-white p-2 rounded-md"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
              <FontAwesomeIcon icon={sidebarOpen ? faTimes : faBars} />
            </button>


      {/* RIGHT: Chat Content */}
      <main className="flex-1 flex justify-center bg-white md:bg-transparent">
        <div className="w-full max-w-[640px] md:border md:border-gray-300 md:rounded-md bg-white flex flex-col font-sans md:shadow-[0_1px_4px_rgba(0,0,0,0.04)] h-screen">
          {/* Back Icon */}
          <div className="p-3">
            <FontAwesomeIcon
              icon={faAngleLeft}
              className="text-xl cursor-pointer text-[#2e3b4e]"
              onClick={() => navigate("/community")}
            />
          </div>

          {/* Header */}
          <div className="flex justify-between items-center px-4 py-2 border-b border-gray-300">
            <h2 className="text-lg font-semibold text-[#2e3b4e]">
              {communityName || "Coping Circle"}
            </h2>
            <button
              className="bg-[#2e3b4e] text-white px-4 py-2 rounded-full text-xs hover:opacity-90"
              onClick={exitChat}
            >
              EXIT CHAT
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 flex flex-col gap-3 overflow-y-auto">
            {messages.length === 0 && (
              <div className="text-gray-500 text-sm text-center mt-2">
                No messages yet — say hello 👋
              </div>
            )}
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`max-w-[75%] p-3 rounded-[20px] text-sm break-words shadow ${
                  msg.sender === "@You"
                    ? "bg-[#2e3b4e] text-white self-end"
                    : "bg-[#b7dff5] text-[#0b2540] self-start"
                }`}
              >
                <strong
                  className={`block text-xs mb-1 ${
                    msg.sender === "@You" ? "text-gray-200" : "text-[#1f2937]"
                  }`}
                >
                  {msg.sender}
                </strong>
                {msg.content}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex items-center p-3 border-t border-gray-200 bg-[#fafafa]">
            <button
              className="text-lg text-[#2e3b4e]"
              aria-label="Attach file"
              onClick={() => alert("Attachment feature coming soon")}
            >
              📎
            </button>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1 p-2 px-3 border border-gray-300 rounded-full outline-none text-sm mx-2"
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
      </main>
    </div>
  );
};

export default Chat;
