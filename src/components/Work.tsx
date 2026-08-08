import { useState } from "react";
import { MdArrowOutward, MdInfoOutline } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import "./styles/Work.css";

type ProjectCategory = "all" | "fullstack" | "realtime" | "web";

interface ProjectDetail {
  overview: string;
  problem: string;
  solution: string;
  features: { title: string; items: string[] }[];
  architecture: string[];
  security: string[];
  deployment: {
    frontend: string;
    backend: string;
    database: string;
    storage: string;
  };
}

interface ProjectItem {
  title: string;
  category: string;
  stack: string;
  badge?: string;
  tags: string[];
  highlights: string[];
  accent: string;
  link: string | null;
  github: string | null;
  image?: string;
  featured: boolean;
  details?: ProjectDetail;
}

const projects: ProjectItem[] = [
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
    title: "TextileHub — B2B Textile Marketplace",
    category: "fullstack",
    stack: "HACKATHON PROJECT",
    badge: "Hackathon Project · Full Stack · AI",
    tags: ["React", "Node.js", "MongoDB", "JWT", "AI"],
    highlights: [
      "Built a full-stack B2B textile marketplace connecting fabric suppliers and bulk buyers, featuring specification-based discovery, supplier workflows, procurement management, and an AI sourcing assistant.",
      "Engineered role-based Buyer/Supplier portals, persistent cart management, bulk order fulfillment, and Cloudinary-backed fabric catalog management.",
      "Integrated 'Maya AI' sourcing assistant for interactive fabric specification matching, GSM recommendations, weave guidance, and contextual procurement navigation."
    ],
    accent: "var(--accent-gold)",
    link: "https://textile-marketplace-alpha.vercel.app",
    github: "https://github.com/bhargabdeka-deka/textile-marketplace",
    image: "/images/textilehub.png",
    featured: true,
    details: {
      overview: "TextileHub is a hackathon-built B2B textile marketplace designed to connect regional textile weaving mills, fabric suppliers, and bulk buyers through a digital procurement workflow.",
      problem: "Traditional B2B fabric sourcing involves fragmented supplier discovery, manual specification matching, opaque pricing, and slow communication across regional mills.",
      solution: "A role-based marketplace that digitizes the end-to-end procurement cycle with parametric fabric specification filtering, automated catalog management, persistent bulk ordering, and an interactive AI sourcing assistant.",
      features: [
        {
          title: "Buyer Marketplace",
          items: [
            "Specification-based fabric catalog filtering (GSM, Weave, Blend)",
            "Smart parametric fabric search across multiple regional mill variants",
            "Persistent cart, bulk purchase orders, and live order tracking"
          ]
        },
        {
          title: "Supplier Portal",
          items: [
            "Supplier catalog CRUD management with Cloudinary image uploads",
            "Order fulfillment dashboard and inventory status tracking",
            "Role-based access control (RBAC) separating buyer and supplier workflows"
          ]
        },
        {
          title: "AI Sourcing Assistant ('Maya AI')",
          items: [
            "Conversational assistant for fabric spec recommendations and GSM guidance",
            "Weave & composition matching tailored to garment manufacturing needs",
            "Contextual navigation shortcuts for immediate procurement action"
          ]
        }
      ],
      architecture: [
        "Frontend: React + Vite (Tailwind CSS, Zustand, Lucide)",
        "Backend API: Node.js + Express REST API",
        "Database: MongoDB Atlas + Mongoose ORM",
        "Storage & Auth: Cloudinary Image Storage, JWT Authentication",
        "Deployment: Vercel (Frontend) + Render (Backend API)"
      ],
      security: [
        "JWT session authentication with protected route middleware",
        "Role-Based Access Control (RBAC) protecting supplier catalog APIs",
        "Password hashing with bcrypt & CORS security header policies"
      ],
      deployment: {
        frontend: "Vercel",
        backend: "Render (API: https://textile-marketplace-api.onrender.com/api)",
        database: "MongoDB Atlas",
        storage: "Cloudinary"
      }
    }
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
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "fullstack") return project.category === "fullstack";
    if (activeCategory === "realtime") return project.category === "realtime" || project.tags.includes("AI");
    if (activeCategory === "web") return project.category === "web";
    return true;
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
                      <img src={project.image} alt={project.title} className="project-preview" loading="lazy" />
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
                    {project.details && (
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="btn-ghost small-btn"
                      >
                        <MdInfoOutline /> Details
                      </button>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Detailed Project Modal */}
        {selectedProject && selectedProject.details && (
          <div className="project-modal-backdrop" onClick={() => setSelectedProject(null)}>
            <div className="project-modal-card glass-effect" onClick={(e) => e.stopPropagation()}>
              <button
                className="modal-close-btn"
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
              >
                ✕
              </button>

              <div className="modal-header">
                <span className="project-stack">{selectedProject.stack}</span>
                <h2 className="modal-title">{selectedProject.title}</h2>
                <div className="project-tags">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="tech-badge">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="modal-body">
                <div className="modal-section">
                  <h4 className="modal-section-title">Overview</h4>
                  <p>{selectedProject.details.overview}</p>
                </div>

                <div className="modal-grid-2">
                  <div className="modal-section">
                    <h4 className="modal-section-title">Problem Statement</h4>
                    <p>{selectedProject.details.problem}</p>
                  </div>
                  <div className="modal-section">
                    <h4 className="modal-section-title">Architectural Solution</h4>
                    <p>{selectedProject.details.solution}</p>
                  </div>
                </div>

                <div className="modal-section">
                  <h4 className="modal-section-title">Key Technical Modules</h4>
                  <div className="modal-features-grid">
                    {selectedProject.details.features.map((feat) => (
                      <div key={feat.title} className="modal-feature-card">
                        <h5>{feat.title}</h5>
                        <ul>
                          {feat.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="modal-grid-2">
                  <div className="modal-section">
                    <h4 className="modal-section-title">Tech Stack Architecture</h4>
                    <ul className="modal-list">
                      {selectedProject.details.architecture.map((arch) => (
                        <li key={arch}>{arch}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="modal-section">
                    <h4 className="modal-section-title">Security & Protocols</h4>
                    <ul className="modal-list">
                      {selectedProject.details.security.map((sec) => (
                        <li key={sec}>{sec}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="modal-section">
                  <h4 className="modal-section-title">Cloud Deployment Infrastructure</h4>
                  <div className="deployment-tags">
                    <span className="tech-badge">Frontend: {selectedProject.details.deployment.frontend}</span>
                    <span className="tech-badge">Backend: {selectedProject.details.deployment.backend}</span>
                    <span className="tech-badge">Database: {selectedProject.details.deployment.database}</span>
                    <span className="tech-badge">Storage: {selectedProject.details.deployment.storage}</span>
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <div className="project-links">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary small-btn"
                    >
                      <FaGithub /> GitHub Repository
                    </a>
                  )}
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary small-btn"
                    >
                      Live Demo <MdArrowOutward />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Work;



