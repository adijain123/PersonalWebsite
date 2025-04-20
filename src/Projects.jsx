"use client";
import React from "react";
import { BackgroundGradient } from "./UI/ui/background-gradient";

export function ProjectsSection() {
  // Function to highlight technical terms in text
  const highlightTechTerms = (text) => {
    // List of technical terms to highlight
    const techTerms = [
      "React", "Vite", "Tailwind CSS", "Acceternity UI", "Flask", "SQLAlchemy",
      "Yahoo Finance", "Finnhub API", "Backtesting.py", "Plotly", 
      "SMA", "Bollinger Bands", "MediaPipe Pose", "Framer Motion", "Chart.js",
      "frontend", "backend", "authentication", "machine learning", "responsive",
      "modular", "real-time", "API", "visualization", "backtesting",
      "simulation", "algorithms", "data handling", "pose detection", "angle-based logic"
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

  // Projects data in JSON format for easy maintenance
  const projects = [
    {
      id: 1,
      title: "Algorithmic Trading Platform",
      category: "Web + Quantitative Analysis",
      period: "May 2024 - July 2024",
      association: "IITISOC",
      frontendLink: "https://github.com/adijain123/Algo-Trading",
      backendLink: "https://github.com/adijain123/Quant-Flask-Backend",
      websiteLink: "https://algo-trading-sigma.vercel.app/",
      imageSrc: "/algo.png", // Add your image path here
      imageAlt: "Algorithmic Trading Platform Dashboard",
      description: [
        "Developed an algorithmic trading platform for customizable strategy backtesting. Built a responsive and modular frontend using React + Vite, styled with Tailwind CSS and Acceternity UI for a clean user experience.",
        "Implemented a Flask backend with SQLAlchemy for secure data handling, integrated real-time and historical stock data from Yahoo Finance and Finnhub API, and used Backtesting.py for strategy simulation.",
        "Visualized performance using Plotly to display stock price charts, equity curves over the backtesting period, and strategy outcomes. Included company overviews, summary metrics, and strategies like SMA, Bollinger Bands.",
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
            d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V7zm-3 2a1 1 0 10-2 0v4a1 1 0 102 0V9zm-3 3a1 1 0 10-2 0v1a1 1 0 102 0v-1z"
            clipRule="evenodd"
          />
        </svg>
      ),
      iconBg: "bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200",
    },
    {
      id: 2,
      title: "Workout Monitoring System",
      category: "Machine Learning",
      period: "June 2024 – July 2024",
      association: "IITISOC",
      frontendLink: "https://github.com/adijain123/Workout_Montioring_System",
      backendLink: "https://github.com/adijain123/Backend_Workout_Monitoring",
      websiteLink: "https://workout-montioring-system.vercel.app/",
      imageSrc: "/workout.png", // Add your image path here
      imageAlt: "Workout Monitoring System Interface",
      description: [
        "Developed a real-time workout monitoring system using MediaPipe Pose for pose detection and angle-based logic to track exercise type, body position, and repetition count.",
        "Built a fast, responsive frontend with React + Vite, utilizing Tailwind CSS, Framer Motion, and Chart.js for animations, styling, and progress visualization.",
        "Integrated a Flask backend for user authentication, exercise data storage, and real-time feedback generation, enabling personalized performance tracking and logging metrics like reps and posture accuracy."
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
            d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z"
            clipRule="evenodd"
          />
        </svg>
      ),
      iconBg: "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200",
    },
  ];

  return (
    <section className="py-12 px-4 bg-white dark:bg-black">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-neutral-100 text-center mb-12">
          My Projects
        </h2>

        <div className="grid gap-8">
          {projects.map((project) => (
            <BackgroundGradient
              key={project.id}
              className="rounded-[22px] p-6 md:p-8 bg-white dark:bg-zinc-900 shadow-xl"
            >
              <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                <h3 className="text-xl md:text-2xl font-semibold text-black dark:text-neutral-200 flex items-center">
                  <span className={`${project.iconBg} p-2 rounded-lg mr-3`}>
                    {project.icon}
                  </span>
                  {project.title}
                </h3>
                <div className="mt-2 md:mt-1 text-base md:text-lg text-gray-600 dark:text-gray-400 font-medium">
                  {project.period}
                </div>
              </div>

              <div className="ml-10 md:ml-12">
                <div className="text-base md:text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                  {project.category}
                  {project.association && (
                    <span className="text-gray-500 dark:text-gray-400">
                      {" "}
                      | {project.association}
                    </span>
                  )}

                  <div className="flex flex-wrap gap-4 mt-2">
                    {project.frontendLink && (
                      <a
                        href={project.frontendLink}
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
                        Frontend
                      </a>
                    )}
                    {project.backendLink && (
                      <a
                        href={project.backendLink}
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
                        Backend
                      </a>
                    )}
                    {project.websiteLink && (
                      <a
                        href={project.websiteLink}
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

                {/* Project Image Section */}
                {project.imageSrc && (
                  <div className="mt-4 mb-6 overflow-hidden rounded-lg shadow-md">
                    <div className="relative h-64 w-full">
                      <img
                        src={project.imageSrc}
                        alt={project.imageAlt || project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}

                <ul className="mt-3 space-y-3 text-base md:text-lg text-gray-600 dark:text-gray-300">
                  {project.description.map((item, index) => (
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