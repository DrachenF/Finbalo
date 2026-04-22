import { useState, useEffect } from 'react';
import logoLight from '../assets/Logo_Principal.svg';
import logoDark from '../assets/Logo_Invertido.svg';
import './Navbar.css';

const links = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Problemas', href: '#problemas' },
  { label: 'Soluciones', href: '#soluciones' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Tecnologías', href: '#tecnologias' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('#servicios');

  useEffect(() => {
    const sectionIds = links.map(link => link.href.replace('#', ''));

    const updateActiveSection = () => {
      setScrolled(window.scrollY > 24);

      const checkpoint = window.innerHeight * 0.35;
      let current = '#servicios';

      sectionIds.forEach(id => {
        const section = document.getElementById(id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= checkpoint && rect.bottom >= checkpoint) {
          current = `#${id}`;
        }
      });

      if (window.scrollY < 120) current = '#servicios';

      setActiveHref(prev => (prev === current ? prev : current));
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner section-wrap">
        <a href="#inicio" className="navbar__logo" onClick={closeMenu}>
          <img
            src={theme === 'dark' ? logoDark : logoLight}
            alt="Finbalo"
            height="32"
          />
        </a>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {links.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={activeHref === link.href ? 'is-active' : ''}
                aria-current={activeHref === link.href ? 'page' : undefined}
                onClick={() => {
                  setActiveHref(link.href);
                  closeMenu();
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#formulario-contacto" className="navbar__cta" onClick={closeMenu}>
              Hablemos
            </a>
          </li>
        </ul>

        <div className="navbar__right">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Cambiar tema"
          >
            {theme === 'dark' ? (
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            {menuOpen ? (
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
