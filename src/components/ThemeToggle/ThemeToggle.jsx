import React, { useEffect, useState } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs'; // For light and dark icons

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const element = document.documentElement;
    if (theme === 'dark') {
      element.classList.add("dark");
      element.classList.remove("light");
    } else {
      element.classList.add("light");
      element.classList.remove("dark");
    }

    // Save the current theme to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className='relative'>
      <button
        onClick={toggleTheme}
        className='w-12 h-12 flex justify-center items-center bg-gray-300 dark:bg-gray-800 rounded-full shadow-xl transition-all duration-200'
      >
        {theme === 'dark' ? (
          <BsSun className='text-yellow-500 w-6 h-6' />
        ) : (
          <BsMoon className='text-blue-500 w-6 h-6' />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
