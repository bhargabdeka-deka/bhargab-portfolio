import { useState } from "react";
import { MdArrowOutward, MdCopyright, MdEmail, MdContentCopy, MdCheck } from "react-icons/md";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa6";
import "./styles/Contact.css";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("bhargab1234deka@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="contact-section section-padding" id="contact">
      <div className="contact-container">
        <div className="section-header">
          <span className="section-subtitle-small">LET'S CONNECT</span>
          <h2 className="section-title">
            Get in <span className="premium-gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Open for Software Engineer, Full Stack Engineer, and Backend opportunities. Feel free to send a message or connect directly.
          </p>
        </div>

        <div className="contact-card-grid">
          {/* Left Info Column */}
          <div className="contact-info-card soft-card">
            <h3 className="contact-card-title">Contact & Socials</h3>
            
            <div className="email-copy-box">
              <div className="email-details">
                <span className="email-label"><MdEmail /> Direct Email</span>
                <span className="email-value">bhargab1234deka@gmail.com</span>
              </div>
              <button onClick={handleCopyEmail} className="copy-btn" title="Copy Email Address">
                {copied ? <MdCheck className="green-icon" /> : <MdContentCopy />}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>

            <div className="education-box">
              <h4>Education & Location</h4>
              <p>B.Tech in Computer Science and Engineering</p>
              <p className="college-name">Jorhat Engineering College (2022 – 2026)</p>
              <p className="location-name">Assam, India · Open to Relocation</p>
            </div>

            <div className="contact-social-pills">
              <a href="/Bhargab_Deka_Resume-fullstack.pdf" target="_blank" rel="noreferrer" className="social-pill">
                <FaFilePdf /> Resume PDF <MdArrowOutward />
              </a>
              <a href="https://github.com/bhargabdeka-deka" target="_blank" rel="noreferrer" className="social-pill">
                <FaGithub /> GitHub <MdArrowOutward />
              </a>
              <a href="https://www.linkedin.com/in/bhargab-deka-417126200" target="_blank" rel="noreferrer" className="social-pill">
                <FaLinkedin /> LinkedIn <MdArrowOutward />
              </a>
            </div>
          </div>


        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <MdCopyright /> {new Date().getFullYear()} Bhargab Deka. All rights reserved.
          </div>
          <div className="footer-tagline">
            Built with React, Next.js & TypeScript · Ultra-Fast Performance
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;

