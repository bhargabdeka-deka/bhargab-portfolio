import type { IconType } from "react-icons";
import {
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiPython,
  SiHtml5,
  SiVercel,
  SiTailwindcss,
  SiFirebase,
  SiSupabase,
  SiGithub,
  SiGo,
  SiDocker,
} from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa6";
import {
  TbBrandVscode,
  TbBrandReactNative,
} from "react-icons/tb";
import { LuBrainCircuit, LuSparkles } from "react-icons/lu";
import "./styles/TechStack.css";

type SkillItem = { name: string; Icon: IconType };

type SkillCategory = { title: string; items: SkillItem[] };

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    items: [
      { name: "TypeScript", Icon: SiTypescript },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "Go (Golang)", Icon: SiGo },
      { name: "Python", Icon: SiPython },
      { name: "C / C++", Icon: SiCplusplus },
      { name: "Java", Icon: FaJava },
    ],
  },
  {
    title: "Frontend Architecture",
    items: [
      { name: "React.js", Icon: SiReact },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "React Native", Icon: TbBrandReactNative },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "HTML5 / CSS3", Icon: SiHtml5 },
    ],
  },
  {
    title: "Backend & Systems",
    items: [
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Express.js", Icon: SiExpress },
      { name: "Docker", Icon: SiDocker },
    ],
  },
  {
    title: "Databases & Storage",
    items: [
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "MongoDB", Icon: SiMongodb },
      { name: "MySQL", Icon: SiMysql },
      { name: "Supabase", Icon: SiSupabase },
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      { name: "AWS S3", Icon: FaAws },
      { name: "Firebase", Icon: SiFirebase },
      { name: "Vercel", Icon: SiVercel },
    ],
  },
  {
    title: "Developer Tools",
    items: [
      { name: "Git", Icon: SiGit },
      { name: "GitHub", Icon: SiGithub },
      { name: "VS Code", Icon: TbBrandVscode },
    ],
  },
  {
    title: "AI Engineering",
    items: [
      { name: "LLM Orchestration", Icon: LuSparkles },
      { name: "Prompt Engineering", Icon: LuBrainCircuit },
    ],
  },
];

const TechStack = () => {
  return (
    <section className="skills-section section-padding" id="skills">
      <div className="skills-container">
        <div className="section-header">
          <span className="section-subtitle-small">TECH DOMAINS</span>
          <h2 className="section-title">
            Skills <span className="premium-gradient-text">& Stack</span>
          </h2>
          <p className="section-subtitle">
            Languages, frameworks, and tools I use to build and ship.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="skills-category soft-card">
              <h3 className="category-title">{cat.title}</h3>
              <div className="skills-list">
                {cat.items.map(({ name, Icon }) => (
                  <div key={name} className="skill-item">
                    <Icon className="skill-icon" />
                    <span className="skill-name">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;

