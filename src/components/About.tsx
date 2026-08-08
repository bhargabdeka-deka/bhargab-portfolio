import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { FaGraduationCap, FaLaptopCode, FaBriefcase } from "react-icons/fa6";
import "./styles/About.css";

const About = () => {
  const [activeTab, setActiveTab] = useState<"overview" | "skills" | "journey">("overview");

  return (
    <section className="about-section section-padding" id="about">
      <div className="about-container">
        <div className="about-content">
          <div className="section-header">
            <span className="section-subtitle-small">BACKGROUND & EXPERIENCE</span>
            <h2 className="section-title">
              About <span className="premium-gradient-text">Me</span>
            </h2>
            <p className="section-subtitle">
              Computer Science graduate dedicated to building production-grade software and scalable full-stack applications.
            </p>
          </div>

          <div className="tab-switcher-wrapper">
            <div className="tab-switcher">
              <button
                className={`tab-btn ${activeTab === "overview" ? "active" : ""}`}
                onClick={() => setActiveTab("overview")}
              >
                Overview
              </button>
              <button
                className={`tab-btn ${activeTab === "skills" ? "active" : ""}`}
                onClick={() => setActiveTab("skills")}
              >
                Key Highlights
              </button>
              <button
                className={`tab-btn ${activeTab === "journey" ? "active" : ""}`}
                onClick={() => setActiveTab("journey")}
              >
                Journey
              </button>
            </div>
          </div>

          <div className="about-card soft-card">
            {activeTab === "overview" && (
              <div className="tab-content fade-in">
                <div className="about-profile-header">
                  <div className="profile-badge">
                    <FaGraduationCap /> B.Tech CSE (2022 – 2026)
                  </div>
                  <h3 className="about-heading">Full Stack Engineer & Systems Developer</h3>
                  <p className="about-institution">Jorhat Engineering College · Assam, India</p>
                </div>

                <p className="about-text">
                  I specialize in engineering high-performance web applications, AI-integrated platforms, and real-time distributed software systems. My work focuses on scalable backend architecture with <strong>Node.js, Express, Go, PostgreSQL, and MongoDB</strong>, paired with dynamic frontends built using <strong>React, Next.js, and TypeScript</strong>.
                </p>

                <div className="about-highlights-grid">
                  <div className="highlight-item">
                    <div className="highlight-icon"><FaBriefcase /></div>
                    <div>
                      <h4>SDE Intern @ APDCL</h4>
                      <p>Built 4-portal Smart Electricity Management System with JWT, RBAC & REST APIs.</p>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-icon"><FaLaptopCode /></div>
                    <div>
                      <h4>Research @ IIT Guwahati</h4>
                      <p>Engineered Base-Delta-Immediate (BDI) Cache Compression algorithms in C under Prof. Kapoor.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "skills" && (
              <div className="tab-content fade-in">
                <h3 className="about-heading">Core Engineering Strengths</h3>
                <div className="skills-overview-grid">
                  <div className="skill-box">
                    <span className="skill-box-title">Frontend Architecture</span>
                    <p>React 18, Next.js (App Router), TypeScript, Tailwind CSS, State Management, Responsive Design.</p>
                  </div>
                  <div className="skill-box">
                    <span className="skill-box-title">Backend Systems & APIs</span>
                    <p>Node.js, Express.js, Go (Fiber/Gin), RESTful APIs, JWT Auth, Role-Based Access Control (RBAC).</p>
                  </div>
                  <div className="skill-box">
                    <span className="skill-box-title">Databases & Storage</span>
                    <p>PostgreSQL, MongoDB, Supabase, MySQL, AWS S3 Pre-signed URLs, Cache Optimization.</p>
                  </div>
                  <div className="skill-box">
                    <span className="skill-box-title">AI & Real-Time</span>
                    <p>LLM Prompt Engineering, AI Agents, WebRTC Video Chat, Docker Sandboxing, Electron Apps.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "journey" && (
              <div className="tab-content fade-in">
                <h3 className="about-heading">Engineering Milestone Summary</h3>
                <div className="journey-list">
                  <div className="journey-item">
                    <span className="journey-year">2025</span>
                    <div className="journey-info">
                      <h4>Software Developer Intern — APDCL</h4>
                      <p>Full stack role-based management suite, automated connection workflow engine & billing portal.</p>
                    </div>
                  </div>
                  <div className="journey-item">
                    <span className="journey-year">2025</span>
                    <div className="journey-info">
                      <h4>Agentic AI Certification — IBM SkillsBuild</h4>
                      <p>Completed hands-on LLM engineering, agentic workflow orchestration, and prompt engineering.</p>
                    </div>
                  </div>
                  <div className="journey-item">
                    <span className="journey-year">2024</span>
                    <div className="journey-info">
                      <h4>Research Intern — IIT Guwahati</h4>
                      <p>Evaluated memory compression ratios and C-level CPU cache efficiency under academic guidance.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="about-card-footer">
              <a href="#experience" className="link-with-arrow">
                View Detailed Timeline <MdArrowOutward />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


