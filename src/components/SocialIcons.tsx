import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaFilePdf,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { MdEmail } from "react-icons/md";

const SocialIcons = () => {
  const socials = [
    { icon: <FaFilePdf />, href: "/Bhargab_Deka_Resume-fullstack.pdf", title: "Resume" },
    { icon: <FaGithub />, href: "https://github.com/bhargabdeka-deka", title: "GitHub" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/bhargab-deka-417126200", title: "LinkedIn" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/bhargabdeka_?igsh=MWt5ZXoxbDY1YjJpbw==", title: "Instagram" },
    { icon: <MdEmail />, href: "mailto:bhargab1234deka@gmail.com", title: "Email" },
  ];

  return (
    <div className="social-sidebar">
      <div className="social-links-wrapper">
        {socials.map((social) => (
          <a
            key={social.title}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            title={social.title}
            className="social-link"
          >
            {social.icon}
          </a>
        ))}
      </div>
      <div className="social-line"></div>
    </div>
  );
};

export default SocialIcons;
