import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="">
              <img src='/images/logos/vistream.png' alt="Ryde App Interface"/>
            </div>
            <div className="text-content">
              <h2>
                VI STREAM - A video streaming platform like youtube.
              </h2>
              < p className="text-white-50 md:text-xl">
                An app built with React & TailwindCSS for a fast,
                user-friendly experience.
                
            
              </p>
              <p><a href="https://steady-tapioca-a0e3d1.netlify.app/">Demo</a></p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img src='/images/logos/movie.png'
                  alt="Library Management Platform"
                />
              </div>
              <h2>BookMyMovie </h2>
              <p><a href="https://harmonious-zabaione-9a3600.netlify.app/">Demo</a></p>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src='/images/logos/chef.png' alt="YC Directory App" />
              </div>
              <h2>AI CHEF - Ai based recipe generator</h2>
              <p> <a href="https://dashing-froyo-e2006a.netlify.app/">Demo</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
