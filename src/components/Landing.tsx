import { useState } from "react";
import { MdArrowOutward, MdFileDownload, MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import "./styles/Landing.css";

const Landing = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("bhargab1234deka@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="landing-section" id="landingDiv">
      <div className="landing-container">
        <div className="hero-grid">
          {/* Left Hero Content */}
          <div className="hero-content">
            <div className="hero-status-pill">
              <span className="status-dot"></span>
              <span>Available for Software Engineer & Full Stack Roles</span>
            </div>
            
            <div className="landing-intro">
              <span className="greeting">Hi, I'm</span>
              <h1 className="landing-name premium-gradient-text">Bhargab Deka</h1>
              <h2 className="landing-tagline">Full Stack & Software Engineer</h2>
              <p className="landing-subtitle">
                B.Tech Computer Science graduate specializing in building production-grade web applications, AI-integrated platforms, and real-time distributed systems using <strong>React, Next.js, Node.js, Go, and TypeScript</strong>.
              </p>
            </div>

            <div className="hero-cta">
              <a href="#work" className="btn-primary">
                View Projects <MdArrowOutward />
              </a>
              <a href="/Bhargab_Deka_Resume-fullstack.pdf" target="_blank" rel="noreferrer" className="btn-secondary">
                <MdFileDownload /> Resume
              </a>
              <button onClick={handleCopyEmail} className="btn-ghost" title="Copy Email">
                <MdEmail /> {copied ? "Copied!" : "Copy Email"}
              </button>
            </div>

            <div className="hero-socials">
              <a href="https://github.com/bhargabdeka-deka" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/bhargab-deka-417126200" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Right Hero Showcase Card (Replaces Heavy 3D Model with Crisp Developer Card) */}
          <div className="hero-visual">
            <div className="code-card-wrapper soft-card">
              <div className="code-card-header">
                <div className="code-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <span className="code-title">bhargab-profile.ts</span>
              </div>
              <div className="code-card-body">
                <pre>
                  <code>
                    <span className="code-keyword">const</span> developer = &#123;<br />
                    {"  "}name: <span className="code-string">"Bhargab Deka"</span>,<br />
                    {"  "}degree: <span className="code-string">"B.Tech CSE '26"</span>,<br />
                    {"  "}college: <span className="code-string">"Jorhat Engineering College"</span>,<br />
                    {"  "}experience: [<br />
                    {"    "}<span className="code-string">"APDCL (SDE Intern)"</span>,<br />
                    {"    "}<span className="code-string">"IIT Guwahati (Research Intern)"</span><br />
                    {"  "}],<br />
                    {"  "}coreStack: [<br />
                    {"    "}<span className="code-string">"React"</span>, <span className="code-string">"Next.js"</span>, <span className="code-string">"TypeScript"</span>,<br />
                    {"    "}<span className="code-string">"Node.js"</span>, <span className="code-string">"Go"</span>, <span className="code-string">"PostgreSQL"</span>, <span className="code-string">"MongoDB"</span><br />
                    {"  "}],<br />
                    {"  "}status: <span className="code-string">"Open for Opportunities"</span><br />
                    &#125;;
                  </code>
                </pre>
              </div>
              <div className="code-card-footer">
                <div className="stat-badge">
                  <span className="stat-num">6+</span>
                  <span className="stat-txt">Production Projects</span>
                </div>
                <div className="stat-badge">
                  <span className="stat-num">100%</span>
                  <span className="stat-txt">Mobile & Web Speed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="mouse"></div>
        <p>Scroll to explore</p>
      </div>
    </section>
  );
};

export default Landing;


