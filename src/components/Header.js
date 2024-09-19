import React, { useState, useContext, useEffect } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white dark:bg-gray-900 shadow-md' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 py-4 sm:py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <img 
                src={isDarkMode ? "./assets/logo-dark.png" : "./assets/logo-light.png"}
                alt="Organik Visuals Logo"
                className="h-10 sm:h-12 w-auto object-contain"
              />
              <span className="text-2xl sm:text-3xl font-signika font-bold text-black dark:text-white">Organik Visuals</span>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <NavItem href="#intro" text="About" />
            <NavItem href="#gallery" text="Gallery" />
            <NavItem href="#plans" text="Plans" />
            <button 
              onClick={toggleDarkMode} 
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-200 hover:bg-gray-300 dark:hover:bg-gray-600"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? '🌞' : '🌙'}
            </button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black dark:text-white p-2">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              <NavItem href="#intro" text="About" mobile />
              <NavItem href="#gallery" text="Gallery" mobile />
              <NavItem href="#plans" text="Plans" mobile />
              <button 
                onClick={toggleDarkMode} 
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-200 hover:bg-gray-300 dark:hover:bg-gray-600 self-start"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? '🌞' : '🌙'}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function NavItem({ href, text, mobile }) {
  return (
    <a 
      href={href} 
      className={`font-signika text-lg sm:text-xl text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200
        ${mobile ? 'block' : 'relative group'}`}
    >
      {text}
      {!mobile && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black dark:bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
      )}
    </a>
  );
}

export default Header;