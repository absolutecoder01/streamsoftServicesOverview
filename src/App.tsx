// import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import './index.css'

// RGB Light above cursor
// import SplashCursor from './components/SplashCursor'
{/* <SplashCursor /> */}

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentNav, setCurrentNav] = useState('Panel');

  const handleNavChange = (name: React.SetStateAction<string>) => {
    setCurrentNav(name); // Ustaw aktualną nawigację
    localStorage.setItem('currentNav', name);
  };
  useEffect(() => {
    // Sprawdź, czy w localStorage jest zapisany aktualny element nawigacji
    const savedNav = localStorage.getItem('currentNav');
    if (savedNav) {
        setCurrentNav(savedNav); // Ustaw aktualną nawigację na wartość z localStorage
    }
      const timer = setTimeout(() => {
          setIsLoaded(true);
      }, 1000); // Czas trwania animacji załadowania (1 sekunda)

      return () => clearTimeout(timer);
  }, []);
  return (
    <>
    <div className={` ${isLoaded ? 'slide-in' : 'opacity-0'}`}>
    <Router>
      <Navbar currentNav={currentNav} onNavChange={handleNavChange} />
      <Sidebar />
    </Router>

    </div>
    </>
  )
}

export default App
