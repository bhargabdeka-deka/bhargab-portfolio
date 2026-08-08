import { useState, useRef, useEffect } from "react";
import { MdChat, MdSend, MdMinimize } from "react-icons/md";
import "./styles/ChatWidget.css";

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
}

const SYSTEM_PROMPT = `You are Bhargab Deka's personal AI Assistant. 
Your goal is to answer questions about Bhargab professionally, concisely, and enthusiastically to recruiters or visitors.
Do not invent information. If you don't know something, say you don't know but suggest they contact Bhargab via email.

Key info about Bhargab Deka:
- Final-year Computer Science student at Jorhat Engineering College (Assam, India, 2022-2026).
- Full Stack Software Engineer specializing in MERN stack, React, Node.js, Next.js, AI solutions, and system-level optimization.
- Projects: 
  1. TextileHub: Full-stack B2B textile marketplace with AI sourcing assistant.
  2. CyberShield: AI-assisted complaint analysis portal with risk scoring.
  3. InterviewOS: Real-time platform using Next.js, Go, WebRTC.
- Contact Email: bhargab1234deka@gmail.com
- GitHub: https://github.com/bhargabdeka-deka
- Relocation: Open to relocation for Software Engineer roles.

Keep your answers short (under 3 sentences) unless they ask for a lot of detail. Be polite and helpful.`;

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", sender: "bot", text: "Hi! I'm Bhargab's AI assistant. Ask me anything about his skills, projects, or experience!" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput("");
    
    // Add user message to UI
    const newMessages: Message[] = [...messages, { id: Date.now().toString(), sender: "user", text: userMsg }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      // Format chat history for Gemini API
      const contents = [
        {
          role: "user",
          parts: [{ text: SYSTEM_PROMPT }]
        },
        {
          role: "model",
          parts: [{ text: "Understood. I will act as Bhargab's AI assistant." }]
        },
        ...newMessages.map(m => ({
          role: m.sender === "user" ? "user" : "model",
          parts: [{ text: m.text }]
        }))
      ];

      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey || apiKey === "your_secret_api_key_here") {
        throw new Error("API Key missing");
      }

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: contents,
          generationConfig: { temperature: 0.5, maxOutputTokens: 200 }
        })
      });

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error.message);
      }

      const botReply = data.candidates[0].content.parts[0].text;
      
      setMessages(prev => [...prev, { id: Date.now().toString(), sender: "bot", text: botReply }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { 
        id: Date.now().toString(), 
        sender: "bot", 
        text: "Sorry, I am currently offline or missing my API key! Please email Bhargab directly." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-widget-container">
      {/* Floating Action Button */}
      <button 
        className={`chat-fab ${isOpen ? 'hidden' : ''}`} 
        onClick={() => setIsOpen(true)}
        aria-label="Open AI Assistant"
      >
        <MdChat className="fab-icon" />
      </button>

      {/* Chat Window */}
      <div className={`chat-window ${isOpen ? 'open' : ''} glass-effect`}>
        <div className="chat-header">
          <div className="chat-header-info">
            <div className="chat-avatar">AI</div>
            <div>
              <h4 className="chat-title">Bhargab's AI</h4>
              <span className="chat-status">Online</span>
            </div>
          </div>
          <button className="chat-close-btn" onClick={() => setIsOpen(false)}>
            <MdMinimize />
          </button>
        </div>

        <div className="chat-messages">
          {messages.map((msg) => (
            <div key={msg.id} className={`chat-bubble-wrapper ${msg.sender}`}>
              <div className={`chat-bubble ${msg.sender}`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="chat-bubble-wrapper bot">
              <div className="chat-bubble bot loading-dots">
                <span>.</span><span>.</span><span>.</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form className="chat-input-area" onSubmit={handleSend}>
          <input
            type="text"
            className="chat-input"
            placeholder="Ask about my skills..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
          />
          <button type="submit" className="chat-send-btn" disabled={!input.trim() || isLoading}>
            <MdSend />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatWidget;
