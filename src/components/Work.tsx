import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import "./styles/Work.css";

type ProjectCategory = "all" | "fullstack" | "realtime" | "web";

const projects = [
  {
    title: "CyberShield",
    category: "realtime",
    stack: "Web + AI",
    tags: ["Next.js", "AI/ML", "MongoDB", "JWT", "Cloudinary"],
    highlights: [
      "AI-assisted complaint analysis platform with community-driven scam reporting for phone numbers, URLs, and UPI IDs.",
      "Implemented dynamic risk scoring with an explainable trust engine that computes reputation scores based on report volume and severity.",
      "Built responsive dashboards with JWT authentication, Cloudinary media uploads, and MongoDB-backed analytics."
    ],
    accent: "var(--accent-cyan)",
    link: "https://cybershield-green-two.vercel.app",
    github: "https://github.com/bhargabdeka-deka/cyber-crime-portal",
    image: "/images/cybershield.webp",
    featured: true
  },
  {
    title: "InterviewOS",
    category: "realtime",
    stack: "REAL-TIME PLATFORM",
    tags: ["Next.js", "Go", "PostgreSQL", "WebRTC", "Docker", "Electron"],
    highlights: [
      "Developed a production-ready remote interview platform integrating real-time WebRTC video conferencing, collaborative Monaco code editing, and live chat.",
      "Built secure JWT-based authentication, recruiter and candidate dashboards, and sandboxed multi-language code execution using Docker and Piston.",
      "Designed a scalable architecture using Go (Fiber), PostgreSQL, Redis, WebSockets, Next.js, and Electron for unified web and desktop access."
    ],
    accent: "var(--accent-purple)",
    link: null,
    github: "https://github.com/bhargabdeka-deka/interview_help",
    image: "/images/interviewos.webp",
    featured: true
  },
  {
    title: "ORION Hostel Portal",
    category: "fullstack",
    stack: "Next.js / Supabase",
    tags: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
    highlights: [
      "Production-deployed hostel management portal built with Next.js and TypeScript, backed by Supabase and PostgreSQL.",
      "Implemented role-based access control, CMS-driven content management, and an admin dashboard for notices, gallery, and resident data.",
      "Optimized for fast rendering and deployed at a custom domain serving active hostel residents and administrators."
    ],
    accent: "var(--accent-gold)",
    link: "https://www.orionjech7.site",
    github: "https://github.com/bhargabdeka-deka/hostel-portal",
    image: "/images/orion.webp",
    featured: false
  },
  {
    title: "Smart Electricity Management System",
    category: "fullstack",
    stack: "MERN Stack",
    tags: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    highlights: [
      "Full stack MERN application with four user roles — Customer, Admin, Field Engineer, and Super Admin — each with dedicated portal interfaces.",
      "Engineered a dynamic lifecycle engine for connection workflows, integrated KYC verification, and automated billing and complaint management.",
      "Secured all endpoints with JWT authentication and granular role-based access control."
    ],
    accent: "var(--accent-blue)",
    link: null,
    github: "https://github.com/bhargabdeka-deka/smart-electricity-management-system",
    image: "/images/smart-electricity.webp",
    featured: false
  },
  {
    title: "Barampur Jatiya Vidyalaya",
    category: "web",
    stack: "React / TypeScript",
    tags: ["React", "TypeScript", "EmailJS", "reCAPTCHA"],
    highlights: [
      "Responsive institutional website built with React and TypeScript, deployed on Vercel with optimized SEO and cross-device compatibility.",
      "Integrated EmailJS for contact form submissions and Google reCAPTCHA for spam prevention.",
      "Designed for fast page loads with lazy-loaded routes and efficient static asset caching."
    ],
    accent: "var(--accent-emerald)",
    link: "https://barampur-jatiya-vidyalaya.vercel.app",
    github: "https://github.com/bhargabdeka-deka/School-website-",
    image: "/images/school-website.webp",
    featured: false
  },
  {
    title: "Photo Vault Platform",
    category: "fullstack",
    stack: "React / Node.js / AWS",
    tags: ["React", "Node.js", "AWS S3", "Security"],
    highlights: [
      "Secure cloud-based media storage platform with role-based access control for private and shared photo collections.",
      "Integrated AWS S3 for scalable file storage with pre-signed URL generation for secure, time-limited image retrieval.",
      "Built a Node.js backend with authentication middleware and RESTful APIs for upload, retrieval, and access management."
    ],
    accent: "var(--accent-rose)",
    link: null,
    github: "https://github.com/bhargabdeka-deka",
    featured: false
  }
];

const Work = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "all") return true;
    return project.category === activeCategory;
  });

  return (
    <section className="work-section section-padding" id="work">
      <div className="work-container">
        <div className="section-header">
          <span className="section-subtitle-small">PORTFOLIO SHOWCASE</span>
          <h2 className="section-title">
            Featured <span className="premium-gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Production full-stack applications, real-time engines, and AI-integrated systems.
          </p>
        </div>

        <div className="tab-switcher-wrapper">
          <div className="tab-switcher">
            <button
              className={`tab-btn ${activeCategory === "all" ? "active" : ""}`}
              onClick={() => setActiveCategory("all")}
            >
              All ({projects.length})
            </button>
            <button
              className={`tab-btn ${activeCategory === "fullstack" ? "active" : ""}`}
              onClick={() => setActiveCategory("fullstack")}
            >
              Full Stack
            </button>
            <button
              className={`tab-btn ${activeCategory === "realtime" ? "active" : ""}`}
              onClick={() => setActiveCategory("realtime")}
            >
              AI & Real-Time
            </button>
            <button
              className={`tab-btn ${activeCategory === "web" ? "active" : ""}`}
              onClick={() => setActiveCategory("web")}
            >
              Web Apps
            </button>
          </div>
        </div>

        <div className="project-grid">
          {filteredProjects.map((project, index) => {
            return (
              <article
                key={project.title}
                className={`project-card soft-card ${project.featured ? "featured-project" : ""}`}
                style={{ "--project-accent": project.accent } as React.CSSProperties}
              >
                <div className="project-card-header">
                  <span className="project-index">0{index + 1}</span>
                  <span className="project-stack">{project.stack}</span>
                </div>
                
                <div className="project-card-body">
                  <h3 className="project-title">
                    {project.title}
                  </h3>
                  
                  {project.image && (
                    <div className="project-image-wrapper">
                      <img src={project.image} alt={project.title} className="project-preview" />
                    </div>
                  )}

                  <div className="project-tags">
                    {project.tags?.map((tag) => (
                      <span key={tag} className="tech-badge">{tag}</span>
                    ))}
                  </div>

                  <ul className="project-highlights">
                    {project.highlights.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-card-footer">
                  <div className="project-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary small-btn"
                      >
                        <FaGithub /> GitHub
                      </a>
                    )}
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary small-btn"
                      >
                        Live Demo <MdArrowOutward />
                      </a>
                    ) : (
                      <span className="case-study">Research / Enterprise</span>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Work;


