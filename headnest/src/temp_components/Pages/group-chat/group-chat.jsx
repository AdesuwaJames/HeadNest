
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function Chat() {
  const { communityName } = useParams();
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (input.trim()) {
      setMessages((prev) => [...prev, { sender: "@You", content: input }]);
      setInput("");
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "SupportBot", content: "Thanks for sharing 💙" },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="flex justify-center bg-[#f2f4f6] min-h-screen font-sans">
      <div className="w-full max-w-[640px] flex flex-col bg-white border border-gray-300 rounded-md shadow-md h-screen">
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200">
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="text-xl cursor-pointer text-[#2e3b4e]"
            onClick={() => navigate("/community")}
          />
          <h2 className="text-lg font-semibold text-[#2e3b4e] capitalize">
            {communityName?.replace(/-/g, " ") || "Coping Circle"}
          </h2>
          <button
            className="bg-[#2e3b4e] text-white px-3 py-1 rounded-full text-xs"
            onClick={() => navigate("/community")}
          >
            Exit
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
          {messages.length === 0 && (
            <p className="text-center text-gray-500">No messages yet — say hello 👋</p>
          )}
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`max-w-[75%] p-3 rounded-2xl text-sm shadow ${
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
    </div>
  );
}
