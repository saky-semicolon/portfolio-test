import React, { useState } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hello! How can I help you today?",
      sender: "bot",
      options: ["Contact Info", "Services", "Location", "Other"],
    },
  ]);
  const [userInput, setUserInput] = useState("");

  // Question-answer data
  const chatFlow = {
    "Contact Info": {
      text: "📧 You can contact us at: saky.aiu22@gmail.com",
      options: ["Go Back"],
    },
    Services: {
      text: "🔹 We offer Web Development, Machine Learning, and Consulting.",
      options: ["More Details", "Go Back"],
    },
    Location: {
      text: "📍 We are based in AIU, Kedah, Malaysia.",
      options: ["Go Back"],
    },
    "More Details": {
      text: "🌐 Visit our website for more info!",
      options: ["Go Back"],
    },
    Other: {
      text: "❓ Could you specify what you need help with?",
      options: ["Go Back"],
    },
    "Go Back": {
      text: "Hello! How can I help you today?",
      options: ["Contact Info", "Services", "Location", "Other"],
    },
  };

  // Handle user selection
  const handleOptionClick = (option) => {
    if (chatFlow[option]) {
      const botResponse = chatFlow[option];
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: option, sender: "user" }, // User message
        { text: botResponse.text, sender: "bot", options: botResponse.options }, // Bot response
      ]);
    }
  };

  // Handle text input submission
  const handleSendMessage = () => {
    if (userInput.trim() === "") return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: userInput, sender: "user" },
      {
        text: "🤖 Sorry, I don't understand that yet. Try selecting an option.",
        sender: "bot",
        options: ["Go Back"],
      },
    ]);
    setUserInput(""); // Clear input field
  };

  return (
    <div>
      {/* Chatbot Toggle Button */}
      <button className="chat-icon" onClick={() => setIsOpen(!isOpen)}>
        <span></span> 💬
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <span>Chatbot</span>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              ✖
            </button>
          </div>
          <div className="chatbot-body">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={
                  msg.sender === "bot" ? "bot-message" : "user-message"
                }
              >
                {msg.text}
                {msg.options?.length > 0 && (
                  <div className="chat-options">
                    {msg.options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleOptionClick(option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* Input Field for Custom Messages */}
          <div className="chat-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
