import React, { useState, useRef, useEffect } from "react";
import { PacmanLoader } from "react-spinners";
import Footer from "../../Components/Footer/Footer";
import "./styles.css";

// Use the provided 3D AI image URL
const aiImage =
  "https://media.licdn.com/dms/image/D4D12AQFwvqrajd2edQ/article-cover_image-shrink_720_1280/0/1688369553748?e=2147483647&v=beta&t=BEVzfBTuU6czg9QQzkumzw_tRpiPEPDCt8zX5P3QeNg";

const API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyBKwmxvZ6CNV6LubLjo0AaKJyDG4YFZ20A";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loadingAI, setLoadingAI] = useState(false);
  const [selectedReaction, setSelectedReaction] = useState(null);
  const [darkMode, setDarkMode] = useState(false); // State for dark mode
  const messageEndRef = useRef(null);

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = {
      sender: "user",
      text: input,
      timestamp: new Date().toLocaleString(),
    };
    setMessages([...messages, userMessage]);
    setInput("");
    setLoadingAI(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: input,
                },
              ],
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch the API");
      }

      const data = await response.json();
      const aiText = data.candidates[0].content.parts[0].text;

      const aiSegments = aiText
        .split("```")
        .filter((segment) => segment.trim() !== "");

      const aiMessageObjects = aiSegments.map((segment, index) => ({
        sender: "ai",
        text: segment.trim(),
        timestamp: new Date().toLocaleString(),
      }));

      setMessages((prevMessages) => [...prevMessages, ...aiMessageObjects]);
    } catch (error) {
      console.error("Error:", error);
      const errorMessage = {
        sender: "ai",
        text: "Sorry, there was an error processing your request.",
        timestamp: new Date().toLocaleString(),
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setLoadingAI(false);
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleCopyMessage = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Copied to clipboard:", text);
      })
      .catch((error) => {
        console.error("Error copying to clipboard:", error);
      });
  };

  const handleReactionClick = (reaction) => {
    setSelectedReaction(reaction);
  };

  const parseMarkdown = (text) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>");
  };

  return (
    <div className={`app-container ${darkMode ? "dark-mode" : ""}`}>
      <div className="chat-container">
        {!messages.length && (
          <div className="ai-image-container">
            <img src={aiImage} alt="AI" className="ai-image" />
          </div>
        )}

        <div className="messages-container">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              <div
                dangerouslySetInnerHTML={{ __html: parseMarkdown(msg.text) }}
              ></div>
              <span className="timestamp">{msg.timestamp}</span>
              <span
                className="copy-button"
                onClick={() => handleCopyMessage(msg.text)}
              >
                Copy
              </span>
              {msg.sender === "ai" && (
                <div className="reaction-buttons">
                  <button onClick={() => handleReactionClick("like")}>
                    👍
                  </button>
                  <button onClick={() => handleReactionClick("love")}>
                    ❤️
                  </button>
                  <button onClick={() => handleReactionClick("laugh")}>
                    😂
                  </button>
                  {selectedReaction && (
                    <span className="reaction-text">
                      Reacted: {selectedReaction}
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}
          {loadingAI && (
            <div className="message ai">
              <PacmanLoader color="#36D7B7" size={25} />
              <div className="loading-text">Loading AI response...</div>
            </div>
          )}
          <div ref={messageEndRef}></div>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="input"
            value={input}
            onChange={handleInputChange}
            placeholder="Type your message..."
          />
          <button type="submit" className="button">
            Send
          </button>
        </form>

        <div className="theme-toggle">
          <label className="switch">
            <input type="checkbox" checked={darkMode} onChange={toggleTheme} />
            <span className="slider round"></span>
          </label>
          <span className="theme-text">
            {darkMode ? "Dark Mode" : "Light Mode"}
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Chat;
