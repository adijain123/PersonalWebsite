import React from "react";
import { BackgroundBeamsWithCollisionDemo } from "./UI/BackgroundBeamsWithCollisionDemo";
import { HeroParallaxDemo } from "./UI/HeroParallaxDemo";
import Navbar from "./Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <div id="home">
        <BackgroundBeamsWithCollisionDemo />
      </div>
      <div id="projects">
        <HeroParallaxDemo />
      </div>
    </div>
  );
}
