import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  const [isGreek, setIsGreek] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleLanguage = () => {
    setIsGreek(!isGreek);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <Router>
      <div className={`min-h-screen ${isDark ? 'dark' : ''}`}>
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
          <Navbar 
            toggleLanguage={toggleLanguage} 
            toggleTheme={toggleTheme}
            isGreek={isGreek}
            isDark={isDark}
          />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Home isGreek={isGreek} />} />
              <Route path="/about" element={<About isGreek={isGreek} />} />
              <Route path="/services" element={<Services isGreek={isGreek} />} />
              <Route path="/portfolio" element={<Portfolio isGreek={isGreek} />} />
              <Route path="/contact" element={<Contact isGreek={isGreek} />} />
            </Routes>
          </main>
          <Footer isGreek={isGreek} />
        </div>
      </div>
    </Router>
  );
}

export default App;