import { useState, useEffect } from 'react';
import logoLight from '../assets/Logo_Principal.svg';
import logoDark from '../assets/Logo_Invertido.svg';
import './Navbar.css';

const links = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Tecnologías', href: '#tecnologias' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner section-wrap">
        <a href="#" className="navbar__logo">
          <img
            src={theme === 'dark' ? logoDark : logoLight}
            alt="Finbalo"
            height="32"
          />
        </a>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
            </li>
          ))}
          <li>
            <a href="#contacto" className="navbar__cta" onClick={() => setMenuOpen(false)}>
              Hablemos
            </a>
          </li>
        </ul>

        <div className="navbar__right">
          <button
            className={`theme-switch ${theme === 'light' ? 'theme-switch--light' : ''}`}
            onClick={toggleTheme}
            aria-label="Cambiar entre modo oscuro y claro"
            title={theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}
          >
            <span className="theme-switch__thumb" />
          </button>

          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            {menuOpen ? (
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M18 6 6 18M6 6l12 12"/>
              </svg>
            ) : (
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
