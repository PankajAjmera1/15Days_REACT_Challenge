import React, { useState, useEffect } from 'react';
import './index.css'; // Ensure Tailwind is imported
import Stopwatch from './Components/Stopwatch';
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    // Apply or remove the dark mode class at the body level
    if (isDarkMode) {
      document.body.classList.add('bg-dark');
    } else {
      document.body.classList.remove('bg-dark');
      document.body.classList.add('bg-light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('darkMode', !isDarkMode);
  };

  return (
    <>
    <div className='flex justify-end overflow-hidden mr-[25px] '>
    <button onClick={toggleDarkMode} className="mt-4 ">
            {isDarkMode ?  <MdOutlineDarkMode /> : <MdDarkMode />}
          </button>
          </div>
    <div className={`flex justify-center items-center min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      
      <div>
        <header>
          <Stopwatch />
          
        </header>
      </div>
    </div>
    </>
  );
};

export default App;