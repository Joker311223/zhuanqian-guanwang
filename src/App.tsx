import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Advantages from './components/Advantages';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <TechStack />
      <Advantages />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
