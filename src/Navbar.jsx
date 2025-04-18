import React, { useContext, useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { FloatingDock } from "./UI/ui/floating-dock";
import { Sun, Moon } from "lucide-react";

const NavLink = ({ href, label, isMobile, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className={`${
      isMobile ? "py-2" : "mr-5"
    } hover:text-red-700 dark:hover:text-white transition-colors duration-200 font-bold`}
  >
    {label}
  </a>
);

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#works", label: "Work" },
    { href: "#tech-skills", label: "Tech-skills" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact Me" },
  ];

  // Floating items array passed directly to FloatingDock
  const floatingItems = [
    { title: "Home", href: "#home" },
    { title: "Experience", href: "#experience" },
    { title: "Projects", href: "#projects" },
    { title: "Work", href: "#works" },
    { title: "Tech-skills", href: "#tech-skills" },
    { title: "Education", href: "#education" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 text-gray-800 dark:text-gray-300 bg-white dark:bg-black  body-font border-b border-gray-200 dark:border-gray-800 shadow-lg">
        <div className="container mx-auto flex flex-wrap justify-between p-5 flex-col md:flex-row items-center">
          <div className="flex justify-between w-full md:w-auto items-center">
            <a className="flex title-font font-medium items-center text-gray-950 dark:text-white mb-0">
              <span className="text-3xl font-extrabold"> <a href="#adi">Adi Jain</a></span>
            </a>
            <div className="flex items-center md:hidden">
              {/* Theme toggle button for mobile */}
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="mr-3 p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 flex items-center justify-center"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>
              {/* Mobile menu toggle button */}
              <button
                className="rounded-lg focus:outline-none focus:shadow-outline"
                onClick={toggleMobileMenu}
              >
                <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                  {mobileMenuOpen ? (
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                  )}
                </svg>
              </button>
            </div>
          </div>
          
          {/* FloatingDock for desktop only */}
          <div className="hidden md:block">
            <FloatingDock items={floatingItems} />
          </div>
          
          {/* Theme toggle button for desktop */}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="hidden md:flex ml-5 px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 items-center justify-center"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-700">
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <NavLink
                  key={index}
                  href={item.href}
                  label={item.label}
                  isMobile={true}
                  onClick={closeMobileMenu}
                />
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;