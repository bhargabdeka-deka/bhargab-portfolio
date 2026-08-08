import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { smoother } from "./smoother";

export function initialFX() {
  const main = document.getElementsByTagName("main")[0];
  if (main) {
    main.classList.add("main-active");
  }
  
  document.body.style.overflowY = "auto";
  
  if (smoother) {
    smoother.paused(false);
  }

  // Use a small delay to ensure elements are in the DOM and ready
  setTimeout(() => {
    const intro = document.querySelector(".greeting");
    if (intro) {
      var landingGreeting = new SplitText(".greeting", {
        type: "chars,lines",
        linesClass: "split-line",
      });
      gsap.fromTo(
        landingGreeting.chars,
        { opacity: 0, y: 80, filter: "blur(5px)" },
        {
          opacity: 1,
          duration: 1.2,
          filter: "blur(0px)",
          ease: "power3.inOut",
          y: 0,
          stagger: 0.025,
          delay: 0.05,
        }
      );
    }

    gsap.fromTo(
      ".landing-name",
      { opacity: 0, y: 48, filter: "blur(8px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.1,
        ease: "power3.out",
        delay: 0.18,
      }
    );

    gsap.fromTo(
      ".landing-subtitle",
      { opacity: 0, y: 22 },
      {
        opacity: 1,
        y: 0,
        duration: 0.95,
        ease: "power2.out",
        delay: 0.25,
      }
    );


    gsap.fromTo(
      [".header"],
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.2,
        ease: "power1.inOut",
        delay: 0.1,
      }
    );
  }, 100);
}
