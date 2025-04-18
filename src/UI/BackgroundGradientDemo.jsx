"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";

export function BackgroundGradientDemo() {
  return (
    <div className="flex justify-center bg-white dark:bg-black py-4 px-2">
      <BackgroundGradient className="rounded-[22px] w-full p-4 bg-white dark:bg-zinc-900 shadow-xl">
        <h2 className="text-2xl font-bold text-black mb-4 dark:text-neutral-100 text-center">
          My Technical Skills
        </h2>
        
        <div className="space-y-4">
          <div className="border-b border-gray-200 dark:border-zinc-700 pb-3">
            <h3 className="text-lg font-semibold text-black dark:text-neutral-200 mb-2 flex items-center">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 p-1 rounded-lg mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
              Programming
            </h3>
            <div className="flex flex-wrap gap-1 mt-1">
              <span className="px-2 py-0.5 bg-gray-100 dark:bg-zinc-300 rounded-full text-xs">C++</span>
              <span className="px-2 py-0.5 bg-gray-100 dark:bg-zinc-300 rounded-full text-xs">Python</span>
              <span className="px-2 py-0.5 bg-gray-100 dark:bg-zinc-300 rounded-full text-xs">Data Structures & Algorithms</span>
              <span className="px-2 py-0.5 bg-gray-100 dark:bg-zinc-300 rounded-full text-xs">JavaScript (core)</span>
            </div>
          </div>
          
          <div className="border-b border-gray-200 dark:border-zinc-700 pb-3">
            <h3 className="text-lg font-semibold text-black dark:text-neutral-200 mb-2 flex items-center">
              <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 p-1 rounded-lg mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </span>
              Web Development
            </h3>
            <div className="flex flex-wrap gap-1 mt-1">
              <span className="px-2 py-0.5 bg-gray-100 dark:bg-zinc-300 rounded-full text-xs">HTML</span>
              <span className="px-2 py-0.5 bg-gray-100 dark:bg-zinc-300 rounded-full text-xs">CSS</span>
              <span className="px-2 py-0.5 bg-gray-100 dark:bg-zinc-300 rounded-full text-xs">JavaScript</span>
              <span className="px-2 py-0.5 bg-gray-100 dark:bg-zinc-300 rounded-full text-xs">ReactJS</span>
              <span className="px-2 py-0.5 bg-gray-100 dark:bg-zinc-300 rounded-full text-xs">NextJS*</span>
              <span className="px-2 py-0.5 bg-gray-100 dark:bg-zinc-300 rounded-full text-xs">TailwindCSS</span>
              <span className="px-2 py-0.5 bg-gray-100 dark:bg-zinc-300 rounded-full text-xs">Bootstrap</span>
              <span className="px-2 py-0.5 bg-gray-100 dark:bg-zinc-300 rounded-full text-xs">Flask</span>
              <span className="px-2 py-0.5 bg-gray-100 dark:bg-zinc-300 rounded-full text-xs">ExpressJS</span>
              <span className="px-2 py-0.5 bg-gray-100 dark:bg-zinc-300 rounded-full text-xs">NodeJS</span>
            </div>
          </div>
          
          <div className="border-b border-gray-200 dark:border-zinc-700 pb-3">
            <h3 className="text-lg font-semibold text-black dark:text-neutral-200 mb-2 flex items-center">
              <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 p-1 rounded-lg mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                </svg>
              </span>
              ML & Data Analysis
            </h3>
            <div className="flex flex-wrap gap-1 mt-1">
              <span className="px-2 py-0.5 bg-gray-100 dark:bg-zinc-300 rounded-full text-xs">ML Algorithms</span>
              <span className="px-2 py-0.5 bg-gray-100 dark:bg-zinc-300 rounded-full text-xs">*Neural Networks</span>
              <span className="px-2 py-0.5 bg-gray-100 dark:bg-zinc-300 rounded-full text-xs">*Deep Learning</span>
              <span className="px-2 py-0.5 bg-gray-100 dark:bg-zinc-300 rounded-full text-xs">NumPy</span>
              <span className="px-2 py-0.5 bg-gray-100 dark:bg-zinc-300 rounded-full text-xs">Pandas</span>
              <span className="px-2 py-0.5 bg-gray-100 dark:bg-zinc-300 rounded-full text-xs">Matplotlib</span>
              <span className="px-2 py-0.5 bg-gray-100 dark:bg-zinc-300 rounded-full text-xs">MediaPipe*</span>
            </div>
          </div>
          
          <div className="border-b border-gray-200 dark:border-zinc-700 pb-3">
            <h3 className="text-lg font-semibold text-black dark:text-neutral-200 mb-2 flex items-center">
              <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 p-1 rounded-lg mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                  <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                  <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                </svg>
              </span>
              Databases
            </h3>
            <div className="flex flex-wrap gap-1 mt-1">
              <span className="px-2 py-0.5 bg-gray-100 dark:bg-zinc-300 rounded-full text-xs">MySQL</span>
              <span className="px-2 py-0.5 bg-gray-100 dark:bg-zinc-300 rounded-full text-xs">MongoDB</span>
              <span className="px-2 py-0.5 bg-gray-100 dark:bg-zinc-300 rounded-full text-xs">SQLAlchemy</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-black dark:text-neutral-200 mb-2 flex items-center">
              <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 p-1 rounded-lg mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </span>
              DevOps & Tools
            </h3>
            <div className="flex flex-wrap gap-1 mt-1">
              <span className="px-2 py-0.5 bg-gray-100 dark:bg-zinc-300 rounded-full text-xs">Git</span>
              <span className="px-2 py-0.5 bg-gray-100 dark:bg-zinc-300 rounded-full text-xs">GitHub</span>
              <span className="px-2 py-0.5 bg-gray-100 dark:bg-zinc-300 rounded-full text-xs">*Docker</span>
              <span className="px-2 py-0.5 bg-gray-100 dark:bg-zinc-300 rounded-full text-xs">CI/CD</span>
              <span className="px-2 py-0.5 bg-gray-100 dark:bg-zinc-300 rounded-full text-xs">*Linux</span>
              <span className="px-2 py-0.5 bg-gray-100 dark:bg-zinc-300 rounded-full text-xs">*Bash</span>
              <span className="px-2 py-0.5 bg-gray-100 dark:bg-zinc-300 rounded-full text-xs">AWS</span>
              <span className="px-2 py-0.5 bg-gray-100 dark:bg-zinc-300 rounded-full text-xs">Microsoft Azure</span>
            </div>
          </div>
        </div>
        
        <div className="mt-3 text-center">
          <p className="text-xs italic text-neutral-500 dark:text-neutral-400 border-t border-gray-200 dark:border-zinc-700 pt-2">
            * Elementary proficiency
          </p>
        </div>
      </BackgroundGradient>
    </div>
  );
}