import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ForWho from './components/ForWho';
import Problems from './components/Problems';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Solutions from './components/Solutions';
import TechStack from './components/TechStack';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

export default function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('finbalo-theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('finbalo-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero theme={theme} />
        <ForWho />
        <Problems />
        <Services />
        <WhyUs />
        <Solutions />
        <Process />
        <TechStack />
        <FAQ />
        <Contact />
      </main>
      <Footer theme={theme} />
      <WhatsAppButton />
    </>
  );
}
