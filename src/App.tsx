import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar'; // zakładając, że masz komponent Navbar
import Sidebar from './components/Sidebar'; // zakładając, że masz komponent Sidebar

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentNav, setCurrentNav] = useState('Panel');

  // Funkcja do zmiany nawigacji
  const handleNavChange = (name: string) => {
    setCurrentNav(name); // Ustaw aktualną nawigację
    localStorage.setItem('currentNav', name); // Zapisz nawigację w localStorage
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
    <div className={`${isLoaded ? 'slide-in' : 'opacity-0'}`}>
      <Router>
        <Navbar currentNav={currentNav} onNavChange={handleNavChange} />
        <Sidebar />
      </Router>
    </div>
  );
}

export default App;
