import React from "react";
import { Button } from "./UI/ui/moving-border";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Engineering in Civil Engineering",
      institution: "IIT Indore",
      duration: "2022 - 2026",
      description: "Pursuing bachelors in Civil Engineering from IIT Indore",
      achievements: ["Technical Co-Head,Concreate Club",
         "Student Coordinator,Inter-IIT Sports",
         "Marketing Associate,Aakriti",
         "Core Member Photography Club,Mystic Hues"],
      logo: "/iit.jpg", // Replace with actual logo path
      image: "/iit2.jpg" // Replace with actual image path
    },
    {
      degree: "Higher Secondary School",
      institution: "Malhar Aashram Indore",
      duration: "2021 - 2022",
      description: "Completed class 12th From Malhar-Aashram Indore",
      achievements: ["secured 92.6%"],
      logo: "/malhar.jpg", // Replace with actual logo path
      image: "/malhar2.jpg" // Replace with actual image path
    },
    {
      degree: "High School",
      institution: "Pt. Lajja Shankar Jha Model school of Excellence",
      duration: "2019 - 2020",
      description: "Completed 10th from Model School of Excellence",
      achievements: ["Secured 98.6", "State-merit with rank-9th"],
      logo: "/model.jpg", // Replace with actual logo path
      image: "/model2.jpg" // Replace with actual image path
    }
  ];

  return (
    
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-black dark:to-zinc-950 p-6 md:p-12 transition-colors duration-500">
    
      <div className="max-w-5xl mx-auto">
      
        <div className="flex justify-center mb-12">
          {/* Optional main logo */}
          <div className="flex flex-col items-center">
            
            <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-400 dark:to-indigo-500">
              Education
            </h2>
          </div>
        </div>
        
       
        <div className="space-y-10">
       
          {educationData.map((item, index) => (
           <div>
           <Button 
             className="w-full p-0 overflow-hidden shadow-xl"
             borderRadius="1.5rem"
             duration={3000}
           > 
            <div 
              key={index} 
              className="bg-white w-full dark:bg-zinc-950 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="flex flex-col md:flex-row">
                {/* Left side with degree info and logo */}
                <div className="md:w-1/3 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 flex flex-col">
                  <div className="flex items-center mb-4">
                    {item.logo && (
                      <div className="w-12 h-12 mr-4 bg-white rounded-lg shadow p-1 flex-shrink-0">
                        <img 
                          src={item.logo} 
                          alt={`${item.institution} logo`} 
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}
                    <div className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                      {item.duration}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {item.degree}
                  </h3>
                  <div className="text-indigo-600 dark:text-indigo-400 font-medium mb-4">
                    {item.institution}
                  </div>
                  
                  {/* Optional school image on mobile only */}
                  {item.image && (
                    <div className="mt-2 mb-2 md:hidden rounded-lg overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={`${item.institution} campus`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
                
                {/* Right side with description, achievements, and image */}
                <div className="md:w-2/3 p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-3/5">
                      <p className="text-gray-700 dark:text-gray-300 mb-6">
                        {item.description}
                      </p>
                      
                      {item.achievements.length > 0 && (
                        <div>
                          <h4 className="text-sm uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400 mb-3">
                            Key
                          </h4>
                          <div className="space-y-2">
                            {item.achievements.map((achievement, i) => (
                              <div key={i} className="flex items-start">
                                <span className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400 mt-1.5 mr-2"></span>
                                <span className="text-gray-700 dark:text-gray-300 text-sm">
                                  {achievement}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Image - visible only on desktop */}
                    {item.image && (
                      <div className="hidden md:block md:w-2/5">
                        <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                          <img 
                            src={item.image} 
                            alt={`${item.institution} campus`} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            </Button>
            </div>
          ))}
        
        </div>
         
        
      </div>
      
    </div>
   
  );
};

export default Education;