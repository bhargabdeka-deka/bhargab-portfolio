import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { FaMoon, FaSun } from "react-icons/fa";
import { setSmoother } from "./utils/smoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

type Theme = "dark" | "light";

const getInitialTheme = (): Theme => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
};

const Navbar = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    ScrollTrigger.normalizeScroll({ allowNestedScroll: true });
    const scrollSmoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 2.15,
      speed: 1.25,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
      normalizeScroll: true,
      smoothTouch: 0.1,
    });
    setSmoother(scrollSmoother);

    scrollSmoother.scrollTop(0);

    const links = document.querySelectorAll(".header ul a, .navbar-title");
    links.forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth >= 900) {
          e.preventDefault();
          const elem = e.currentTarget as HTMLAnchorElement;
          const section = elem.getAttribute("data-href") || elem.getAttribute("href");
          if (section) {
            scrollSmoother.scrollTo(section, true, "top top");
          }
        }
      });
    });
    let lastWidth = window.innerWidth;
    window.addEventListener("resize", () => {
      if (window.innerWidth !== lastWidth) {
        lastWidth = window.innerWidth;
        ScrollSmoother.refresh(true);
      }
    });
  }, []);
  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return (
    <nav className="header glass-effect">
      <a href="#landingDiv" className="navbar-title" data-href="#landingDiv" data-cursor="disable" aria-label="Back to top">
        BD
      </a>

      <ul>
        <li>
          <a data-href="#about" href="#about">
            <HoverLinks text="ABOUT" />
          </a>
        </li>
        <li>
          <a data-href="#experience" href="#experience">
            <HoverLinks text="EXPERIENCE" />
          </a>
        </li>
        <li>
          <a data-href="#work" href="#work">
            <HoverLinks text="WORK" />
          </a>
        </li>
        <li>
          <a data-href="#skills" href="#skills">
            <HoverLinks text="SKILLS" />
          </a>
        </li>
        <li>
          <a data-href="#contact" href="#contact">
            <HoverLinks text="CONTACT" />
          </a>
        </li>
      </ul>

      <button
        type="button"
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      >
        {theme === "dark" ? <FaSun aria-hidden="true" /> : <FaMoon aria-hidden="true" />}
      </button>
    </nav>
  );
};

export default Navbar;
