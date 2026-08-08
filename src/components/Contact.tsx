import { useState } from "react";
import { MdArrowOutward, MdCopyright, MdEmail, MdContentCopy, MdCheck, MdSend } from "react-icons/md";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa6";
import "./styles/Contact.css";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("bhargab1234deka@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
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

          {/* Right Quick Message Form */}
          <div className="contact-form-card soft-card">
            <h3 className="contact-card-title">Send a Quick Message</h3>
            
            {submitted ? (
              <div className="form-success-state fade-in">
                <div className="success-icon"><MdCheck /></div>
                <h4>Message Received!</h4>
                <p>Thank you for reaching out, I will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Hi Bhargab, I'd like to discuss a Software Engineer role..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary form-submit-btn">
                  Send Message <MdSend />
                </button>
              </form>
            )}
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

