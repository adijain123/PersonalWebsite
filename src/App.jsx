import React from "react";
import { BackgroundBeamsWithCollisionDemo } from "./UI/BackgroundBeamsWithCollisionDemo";
import { HeroParallaxDemo } from "./UI/HeroParallaxDemo";
import Navbar from "./Navbar";
import { BackgroundGradientDemo } from "./UI/BackgroundGradientDemo";
import Education from "./Education";
import { TextHoverEffect } from "./UI/ui/text-hover-effect";
import { ExperienceSection } from "./Experience";
import { Footer } from "./Footer";

export default function App() {
  return (
    <div className="dark:bg-black">
      <Navbar />
      <div className="pt-32" id="home">
        <BackgroundBeamsWithCollisionDemo />
      </div>
      <div className="pt-32" id="works">
        <HeroParallaxDemo />
      </div>
        <div className="pt-32" id="tech-skills">
          <BackgroundGradientDemo />
        </div>
        <div className="pt-32" id="education">
          <Education />
        </div>
        <div className="pt-32" id="experience">
        <ExperienceSection/>
        </div>
        <div className="h-[40rem] flex items-center justify-center">
      <TextHoverEffect text="ADI" />
    </div>
    <Footer/>
      </div>
  );
}