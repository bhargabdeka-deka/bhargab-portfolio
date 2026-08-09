import { useEffect } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import TechStack from "./TechStack";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import { initialFX } from "./utils/initialFX";
import setSplitText from "./utils/splitText";

const MainContainer = () => {
  useEffect(() => {
    // Slight delay to ensure DOM is fully ready and children effects have run
    const timer = setTimeout(() => {
      initialFX();
    }, 200);
    
    let lastWidth = window.innerWidth;
    const resizeHandler = () => {
      const currentWidth = window.innerWidth;
      if (currentWidth !== lastWidth) {
        lastWidth = currentWidth;
        setSplitText();
      }
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing />
            <About />
            <WhatIDo />
            <Career />
            <Work />
            <TechStack />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;

