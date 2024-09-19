import React, { useContext } from 'react';
import { ThemeProvider, ThemeContext } from './contexts/ThemeContext';
import Header from './components/Header';
import Intro from './components/Intro';
import Gallery from './components/Gallery';
import Plans from './components/Plans';
import IndividualServices from './components/IndividualServices';
import Footer from './components/Footer';

function AppContent() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={`App ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
        <Header />
        <Intro />
        <Gallery />
        <Plans />
        <IndividualServices />
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;