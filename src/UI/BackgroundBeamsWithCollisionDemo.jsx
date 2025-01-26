import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

export function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="relative z-10 text-center flex flex-col items-center justify-center space-y-8 px-6 py-16">
        {/* Profile Image */}
        <div className="w-52 h-52 mb-6 overflow-hidden rounded-full border-8 border-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
          <img
            src="./adi.jpg"
            alt="Your Photo"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Introduction */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white">
          Hey, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">Adi Jain</span>
        </h2>
        <p className="text-xl md:text-2xl text-black dark:text-white max-w-3xl mx-auto">
          Here, you can check out what I'm working on. I try my best to create things with ❤️.
        </p>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
