import React from "react";
import { BackgroundBeamsWithCollisionDemo } from "./UI/BackgroundBeamsWithCollisionDemo";
import { HeroParallaxDemo } from "./UI/HeroParallaxDemo";
import Navbar from "./Navbar";
import { BackgroundGradientDemo } from "./UI/BackgroundGradientDemo";
import Education from "./Education";
import { TextHoverEffect } from "./UI/ui/text-hover-effect";
import { ExperienceSection } from "./Experience";
import { Footer } from "./Footer";
import { ProjectsSection } from "./Projects";
import Contact from "./Contact";

export default function App() {
  return (
    <div className="dark:bg-black">
      <Navbar />
      <div className="md:pt-32" id="home">
        <BackgroundBeamsWithCollisionDemo />
      </div>
      <div className="md:pt-32" id="experience">
        <ExperienceSection />
      </div>
      <div className="md:pt-32" id="projects">
        <ProjectsSection />
      </div>
      <div className="md:pt-32" id="works">
        <HeroParallaxDemo />
      </div>
      <div className="md:pt-32" id="tech-skills">
        <BackgroundGradientDemo />
      </div>
      <div className="md:pt-32" id="education">
        <Education />
      </div>
      <div className="md:pt-32" id="contact">
        <Contact />
      </div>
      <div className="h-[40rem] flex items-center justify-center" id="adi">
        <TextHoverEffect text="ADI" />
      </div>
      
      <Footer />
    </div>
  );
}
