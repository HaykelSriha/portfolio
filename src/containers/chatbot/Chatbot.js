import React, {useState, useRef, useEffect, useContext} from "react";
import StyleContext from "../../contexts/StyleContext";
import "./Chatbot.scss";

const INITIAL_MESSAGE = {
  role: "assistant",
  content:
    "Hi! I'm Haykel's AI assistant. Ask me anything about his skills, experience, projects, or education!"
};

export default function Chatbot() {
  const {isDark} = useContext(StyleContext);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({behavior: "smooth"});
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMessage = {role: "user", content: trimmed};
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({message: trimmed})
      });

      const data = await response.json();

      if (response.ok) {
        setMessages(prev => [
          ...prev,
          {role: "assistant", content: data.reply}
        ]);
      } else {
        setMessages(prev => [
          ...prev,
          {role: "assistant", content: data.error || "Something went wrong."}
        ]);
      }
    } catch (error) {
      setMessages(prev => [
        ...prev,
        {
          role: "assistant",
          content: "Could not reach the server. Please try again later."
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = e => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <>
      <button
        className={`chatbot-toggle-btn ${isDark ? "chatbot-toggle-btn-dark" : ""}`}
        onClick={toggleChat}
        title="Chat with AI Assistant"
        aria-label="Toggle chat"
      >
        <i className={isOpen ? "fas fa-times" : "fas fa-comments"} />
      </button>

      {isOpen && (
        <div
          className={`chatbot-window ${isDark ? "chatbot-window-dark" : ""}`}
        >
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <i className="fas fa-robot" />
              <span>AI Assistant</span>
            </div>
            <button
              className="chatbot-close-btn"
              onClick={toggleChat}
              aria-label="Close chat"
            >
              <i className="fas fa-times" />
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chatbot-message chatbot-message-${msg.role}`}
              >
                {msg.content}
              </div>
            ))}
            {isLoading && (
              <div className="chatbot-message chatbot-message-assistant">
                <div className="chatbot-typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-input-area">
            <input
              ref={inputRef}
              type="text"
              className={`chatbot-input ${isDark ? "chatbot-input-dark" : ""}`}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about Haykel..."
              disabled={isLoading}
            />
            <button
              className="chatbot-send-btn"
              onClick={sendMessage}
              disabled={isLoading || !input.trim()}
              aria-label="Send message"
            >
              <i className="fas fa-paper-plane" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
