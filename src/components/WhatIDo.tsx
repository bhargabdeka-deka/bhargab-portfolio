import "./styles/WhatIDo.css";

const WhatIDo = () => {
  const services = [
    {
      title: "FULL-STACK SYSTEMS",
      subtitle: "Scalable Web Applications & APIs",
      description: "Engineering production-ready full stack web platforms with role-based access control (RBAC), secure JWT authentication, cloud storage integrations, and optimized database architectures.",
      skills: ["React.js", "Next.js", "TypeScript", "Node.js", "Express.js", "Go", "PostgreSQL", "MongoDB", "REST APIs"]
    },
    {
      title: "REAL-TIME PLATFORMS",
      subtitle: "WebRTC, WebSockets & Sandboxing",
      description: "Developing high-concurrency real-time collaboration tools including WebRTC video streaming, WebSocket chat systems, collaborative code editors, and Docker container sandboxing.",
      skills: ["WebRTC", "WebSockets", "Docker", "Go (Fiber)", "Monaco Editor", "Electron", "Redis", "AWS S3"]
    },
    {
      title: "AI ENGINEERING",
      subtitle: "LLM Agents & Intelligent Workflows",
      description: "Architecting intelligent AI workflows using Large Language Models, custom prompt engineering, agentic orchestration, and automated risk scoring engines.",
      skills: ["LLM Orchestration", "Prompt Engineering", "AI Agents", "Python", "Automation", "Risk Scoring Engines"]
    }
  ];

  return (
    <section className="what-section section-padding" id="services">
      <div className="what-container">
        <div className="section-header">
          <span className="section-subtitle-small">CAPABILITIES</span>
          <h2 className="section-title">
            Engineering <span className="premium-gradient-text">Capabilities</span>
          </h2>
          <p className="section-subtitle">
            Combining system design, modern frontend frameworks, scalable backends, and AI engineering to solve real-world problems.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card soft-card">
              <div className="service-header">
                <span className="service-index">0{index + 1}</span>
                <h3 className="service-title">{service.title}</h3>
              </div>
              <h4 className="service-subtitle">{service.subtitle}</h4>
              <p className="service-description">{service.description}</p>
              
              <div className="service-skills">
                <h5 className="skills-label">Technologies & Tools</h5>
                <div className="skills-flex">
                  {service.skills.map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
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

export default WhatIDo;


