import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ForWho from './components/ForWho';
import Problems from './components/Problems';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import DemoProjects from './components/DemoProjects';
import Process from './components/Process';
import TechStack from './components/TechStack';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

export default function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero theme={theme} />
        <ForWho />
        <Problems />
        <Services />
        <WhyUs />
        <DemoProjects />
        <Process />
        <TechStack />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
