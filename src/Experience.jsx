"use client";
import React from "react";
import { BackgroundGradient } from "./UI/ui/background-gradient";

export function ExperienceSection() {
  // Function to highlight technical terms in text
  const highlightTechTerms = (text) => {
    // List of technical terms to highlight
    const techTerms = [
      "Node.js", "MongoDB", "EJS", "Microsoft Azure", "GoDaddy", 
      "REST APIs", "CRUD", "UI", "React", "Vite", "Tailwind CSS", 
      "React Router", "Acceternity UI", "components", "responsive", 
      "accessibility", "frontend"
    ];
    
    // Sort terms by length (descending) to ensure longer terms are matched first
    const sortedTerms = [...techTerms].sort((a, b) => b.length - a.length);
    
    // Create a regular expression to match all terms
    const regex = new RegExp(`\\b(${sortedTerms.join('|')})\\b`, 'gi');
    
    // Split the text by matches and create an array of parts
    const parts = text.split(regex);
    
    // Return the highlighted text as JSX
    return parts.map((part, index) => {
      if (sortedTerms.some(term => part.toLowerCase() === term.toLowerCase())) {
        return <span key={index} className="text-teal-600 dark:text-teal-400 font-medium">{part}</span>;
      }
      return part;
    });
  };

  // Experience data in JSON format for easy maintenance
  const experiences = [
    {
      id: 1,
      title: "Sustainable Construction Lab Website",
      role: "Web Developer",
      period: "March 2025 – April 2025",
      githubLink: "https://github.com/siddhesh434/Prof-Sandeep-Chaudhary-v2",
      websiteLink: "https://sustainableconstructionlab.com/",
      description: [
        "Built a dynamic official website under Prof. Sandeep Chaudhary using Node.js, MongoDB, and EJS templating, hosted on Microsoft Azure with domain setup via GoDaddy.",
        "Implemented an admin panel with full CRUD operations using REST APIs for managing dynamic content, with an option to store and organize files. Made it easy for the lab to post updates, publications, and research work.",
        "Showcased the lab's research, publications, and project updates through a clean, responsive UI designed for accessibility and ease of navigation.",
      ],
      
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
      ),
      iconBg: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
    },
    {
      id: 2,
      title: "IYGEC 2025 Website",
      role: "Web Developer",
      period: "April 2024 – June 2024",
      websiteLink: "https://10iygec2025.iiti.ac.in/",
      description: [
        "Developed and deployed the official website for the 10th Indian Young Geotechnical Engineers Conference (IYGEC 2025), scheduled for March 13–14, 2025, under the guidance of Prof. Ramu Baadiga, Civil Engineering Department, IIT Indore.",
        "Deployed the website on the official IIT Indore server under the institute's domain.",
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
        </svg>
      ),
      iconBg:
        "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
    },
    {
      id: 3,
      title: "Concreate Club Website",
      role: "Web Developer",
      period: "June 2024 – July 2024",
      githubLink: "https://github.com/adijain123/ConcreateWebsite",
      websiteLink: "https://concreate-website.vercel.app/",
      description: [
        "Developed the official website for Concreate Club, IIT Indore using React, Vite, and Tailwind CSS for a fast and responsive frontend.",
        "Implemented seamless multi-page navigation using React Router and built reusable components to showcase events, team, and achievements.",
        "Designed a clean UI with Acceternity UI, optimized for performance and accessibility across all devices.",
      ],
      
      
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
        </svg>
      ),
      iconBg:
        "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
    },
    {
      id: 4,
      title: "Fact App",
      role: "Growth Intern",
      period: "June 2023 - July 2023",
      websiteLink: "https://factapp.in/",
      location: "mode - remote | Fact App",
      description: [
        "Managed partnerships and mentor onboarding for Fact App, a JEE counseling platform.",
        "Contributed to the development process, streamlined workflows, and collaborated with cross-functional teams.",
        "Earned a certificate and stipend for excellent performance.",
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
        </svg>
      ),
      iconBg:
        "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
    },
  ];

  return (
    <section className="py-12 px-4 bg-white dark:bg-black">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-neutral-100 text-center mb-12">
          My Experience
        </h2>

        <div className="grid gap-8">
          {experiences.map((experience) => (
            <BackgroundGradient
              key={experience.id}
              className="rounded-[22px] p-6 md:p-8 bg-white dark:bg-zinc-900 shadow-xl"
            >
              <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                <h3 className="text-xl md:text-2xl font-semibold text-black dark:text-neutral-200 flex items-center">
                  <span className={`${experience.iconBg} p-2 rounded-lg mr-3`}>
                    {experience.icon}
                  </span>
                  {experience.title}
                </h3>
                <div className="mt-2 md:mt-1 text-base md:text-lg text-gray-600 dark:text-gray-400 font-medium">
                  {experience.period}
                </div>
              </div>

              <div className="ml-10 md:ml-12">
                <div className="text-base md:text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                  {experience.role}
                  {experience.location && (
                    <span className="text-gray-500 dark:text-gray-400">
                      {" "}
                      | {experience.location}
                    </span>
                  )}

                  <div className="flex gap-4 mt-2">
                    {experience.githubLink && (
                      <a
                        href={experience.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub
                      </a>
                    )}
                    {experience.websiteLink && (
                      <a
                        href={experience.websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Website
                      </a>
                    )}
                  </div>
                </div>

                <ul className="mt-3 space-y-3 text-base md:text-lg text-gray-600 dark:text-gray-300">
                  {experience.description.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 mt-1 text-gray-500 dark:text-gray-400">
                        •
                      </span>
                      <span>{highlightTechTerms(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </BackgroundGradient>
          ))}
        </div>
      </div>
    </section>
  );
}