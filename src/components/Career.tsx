import "./styles/Career.css";

const Career = () => {
  const experiences = [
    {
      role: "Software Developer Intern",
      company: "APDCL",
      year: "2025",
      points: [
        "Built a Smart Electricity Management System using the MERN stack with four role-based portals — Customer, Admin, Field Engineer, and Super Admin.",
        "Implemented JWT authentication, role-based access control, KYC verification, complaint management, and a dynamic lifecycle engine for connection workflows.",
        "Developed RESTful APIs for billing, engineer task assignment, and application status tracking with MongoDB as the primary data store."
      ],
      tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "RBAC", "REST APIs"]
    },
    {
      role: "Research Intern",
      company: "IIT Guwahati",
      year: "2024",
      points: [
        "Implemented Base-Delta-Immediate (BDI) cache compression in C, focusing on base selection and delta encoding strategies to reduce cache line sizes.",
        "Evaluated compression ratios across diverse workloads to analyze cache efficiency and memory optimization under guidance of Prof. Hemangee K. Kapoor."
      ],
      tech: ["C", "Cache Compression", "Computer Architecture", "Performance Analysis"]
    },
    {
      role: "Agentic AI Program",
      company: "IBM SkillsBuild",
      year: "2025",
      points: [
        "Completed IBM SkillsBuild's Agentic AI program covering Large Language Models, prompt engineering, and AI agent design patterns.",
        "Applied project-based learning to build AI workflows integrating LLM capabilities with structured agent pipelines."
      ],
      tech: ["LLMs", "Prompt Engineering", "AI Agents", "AI Workflows"]
    }
  ];

  return (
    <section className="career-section section-padding" id="experience">
      <div className="career-container">
        <div className="section-header">
          <span className="section-subtitle-small">CAREER & IMPACT</span>
          <h2 className="section-title">
            Professional <span className="premium-gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            Internships, research, and technical programs that shaped my engineering skills.
          </p>
        </div>

        <div className="career-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="career-item">
              <div className="career-dot-wrapper">
                <div className="career-dot"></div>
                <div className="career-line"></div>
              </div>
              
              <div className="career-content soft-card">
                <div className="career-header">
                  <div className="role-group">
                    <h4 className="career-role">{exp.role}</h4>
                    <h5 className="career-company">{exp.company}</h5>
                  </div>
                  <span className="career-year">{exp.year}</span>
                </div>
                <ul className="career-description">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <div className="career-tech-stack">
                  {exp.tech.map((t, i) => (
                    <span key={i} className="tech-badge">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;