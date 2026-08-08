import { useEffect, Suspense, lazy } from "react";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";

const About = lazy(() => import("./About"));
const Career = lazy(() => import("./Career"));
const Contact = lazy(() => import("./Contact"));
const TechStack = lazy(() => import("./TechStack"));
const WhatIDo = lazy(() => import("./WhatIDo"));
const Work = lazy(() => import("./Work"));
import { initialFX } from "./utils/initialFX";
import setSplitText from "./utils/splitText";

const MainContainer = () => {
  useEffect(() => {
    // Slight delay to ensure DOM is fully ready and children effects have run
    const timer = setTimeout(() => {
      initialFX();
    }, 200);
    
    const resizeHandler = () => {
      setSplitText();
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
            <Suspense fallback={null}>
              <About />
              <WhatIDo />
              <Career />
              <Work />
              <TechStack />
              <Contact />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;

