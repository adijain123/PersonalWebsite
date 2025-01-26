import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <header className="sticky top-0 z-50 text-gray-800 dark:text-gray-300 bg-white dark:bg-black shadow-md body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-950 dark:text-white mb-4 md:mb-0">
          <span className="ml-3 text-3xl font-extrabold">Adi Jain</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-xl font-bold justify-center">
          <a
            href="#home"
            className="mr-5 hover:text-red-700 dark:hover:text-white"
          >
            Home
          </a>
          <a
            href="#projects"
            className="mr-5 hover:text-red-700 dark:hover:text-white"
          >
            Projects
          </a>
        </nav>
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 flex items-center justify-center"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <svg width="30" height="30" id="light-icon">
              <circle cx="15" cy="15" r="6" fill="currentColor" />
              <line
                id="ray"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                x1="15"
                y1="1"
                x2="15"
                y2="4"
              />
              <use href="#ray" transform="rotate(45 15 15)" />
              <use href="#ray" transform="rotate(90 15 15)" />
              <use href="#ray" transform="rotate(135 15 15)" />
              <use href="#ray" transform="rotate(180 15 15)" />
              <use href="#ray" transform="rotate(225 15 15)" />
              <use href="#ray" transform="rotate(270 15 15)" />
              <use href="#ray" transform="rotate(315 15 15)" />
            </svg>
          ) : (
            <svg width="30" height="30" id="dark-icon">
              <path
                fill="currentColor"
                d="
                  M 23, 5
                  A 12 12 0 1 0 23, 25
                  A 12 12 0 0 1 23, 5
                "
              />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
