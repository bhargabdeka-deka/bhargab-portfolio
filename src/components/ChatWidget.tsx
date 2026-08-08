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
Do not invent information. If you don't know something, say you don't know but suggest they contact Bhargab via email at bhargab1234deka@gmail.com.

Here is Bhargab's complete Resume. Use this data to answer ANY questions about his education, experience, projects, or skills:
---
Security 
●    IBM  SkillsBuild  &  CSRBOX —   Agentic  AI:  AI  Agent  Architect,  2025    |    Infosys  Springboard —  SQL,  Cyber 
CERTIFICATIONS
HSLC (Class X) —  Board of Secondary Education, Assam                                         2020  |  First Division, 540/600 
Higher Secondary (Science) —  Assam Higher Secondary Education Council           2022  |  First Division, 408/500 
B.Tech, Computer Science & Engineering —  Jorhat Engineering College                2022 – 2026     | CGPA: 6.75/10 
EDUCATION
agent-based solutions using prompt engineering. 
●    Completed  a  4-week  project-based  training  program, "Agentic  AI:  From  Learner  to  Builder,"  building  simple  AI 
AI Program (Agentic AI) —  IBM SkillsBuild, in collaboration with CSRBOX                                   Jul – Aug 2025 
applying BDI-style compression to cache data. 
●    Performed memory trace analysis to evaluate compression ratios and the potential performance improvement from 
2012) used to improve on-chip cache capacity and memory system performance. 
●    Studied  and  analyzed  the  Base-Delta-Immediate  (BDI)  cache  compression  technique  (Pekhimenko  et  al.,  PACT 
Research Intern — Indian Institute of Technology (IIT) Guwahati                                                      Jul – Aug 2024 
charts and PDF bill export. 
●    Implemented secure JWT authentication with role-based access control, plus an energy usage tracker with interactive 
(Aadhaar/PAN), and a helpdesk ticketing system with admin replies and feedback ratings. 
●    Designed  a  14-stage  status  tracking  pipeline  with  a  real-time  customer  dashboard,  KYC  document  verification 
(Customer, Field Engineer, Admin, Super Admin), from application to meter installation. 
●    Built  a  full-stack  (MERN)  platform  managing  the  complete  electricity  connection  lifecycle  across  4  user  roles 
Software Development Intern —  Assam Power Distribution Company Ltd. (APDCL)                      Jul – Aug 2025 
EXPERIENCE
and collaborative code editor. 
shared code editor; personally built the Next.js frontend and Electron desktop app, including the video call screen 
●    Worked in a 4 -member team to build a platform for conducting technical interviews online with live video and a 
GitHub 
InterviewOS —  Real-Time  Remote  Interview  Platform (Major  Project)   —  Next.js, Node.js/Go,  WebRTC,  PostgreSQL   
by a Supabase (PostgreSQL) database. 
●    Built an admin dashboard for managing notices, gallery, and alumni approvals with secure role-based login, backed 
residents and an 800+ member alumni network. 
●    Independently  designed,  built,  and  deployed  a  website  for  hostel  administration,  currently  live  and  used  by  75+ 
ORION Hostel Portal —  Institutional Management Platform  — Next.js, TypeScript, Supabase (PostgreSQL)   Live Site 
point system restricting accounts that file false reports; integrated the Gemini AI API for real-time safety tips. 
●    Designed a risk-scoring system (0–100) based on report volume, reporter trust, and admin verification, with a trust-
known scam. 
●    Built a platform where users can report cyber crimes and check if a phone number, UPI ID, or website is linked to a 
CyberShield — Cyber Crime Intelligence Platform  — React, Node.js/Express, MongoDB, JWT, Gemini AI   Live Demo 
PROJECTS
●    Tools: Git, GitHub, Docker, Vercel, JWT Authentication 
●    Databases: MongoDB, PostgreSQL, Supabase 
●    Backend: Node.js, Express.js, REST APIs 
●    Frontend: React.js, Next.js, Tailwind CSS 
●    Languages: C, C++, Java, JavaScript, TypeScript, Python, SQL 
TECHNICAL SKILLS
Node.js backends, and SQL/NoSQL databases. 
portal) and co ntributed to a  team-built real-time interview platform. Comfortable  working across  React/Next.js frontends, 
Have independently built two live, production-used platforms (a cybersecurity reporting tool and an institutional management 
B.Tech  Computer  Science graduate  (2026)  with  hands-on  experience  building and  deploying full  stack  web  applications. 
PROFILE
Assam, India  |  +91 9101349627  |  bhargab1234deka@gmail.com  |   LinkedIn  |  GitHub 
BHARGAB DEKA
---

Keep your answers short (under 3 sentences) unless they ask for a lot of detail. Be polite and helpful. If they ask a generic question like 'Hi', just say hello and ask how you can help them learn about Bhargab.`;

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
