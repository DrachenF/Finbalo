import { useState, useEffect } from 'react';
import logoLight from '../assets/Logo.svg';
import logoDark from '../assets/Logo_Negativo.svg';
import './Navbar.css';

const links = [
  { label: 'A quién ayudamos', href: '#para-quien' },
  { label: 'Problemas', href: '#problemas' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Por qué Finbalo', href: '#por-que' },
  { label: 'Demos', href: '#demos' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Tecnologías', href: '#tecnologias' },
  { label: 'FAQ', href: '#faq' },
];

const sectionIds = links.map(link => link.href.slice(1));

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      if (window.scrollY < 40 && window.location.hash === '') {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const setFromHash = () => {
      const id = window.location.hash.replace('#', '');
      if (sectionIds.includes(id)) {
        setActiveSection(id);
      } else {
        setActiveSection('');
      }
    };

    setFromHash();

    const observer = new IntersectionObserver(
      entries => {
        const visibleEntries = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: '-20% 0px -58% 0px',
        threshold: [0.2, 0.4, 0.6],
      }
    );

    sectionIds.forEach(id => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    window.addEventListener('hashchange', setFromHash);

    return () => {
      observer.disconnect();
      window.removeEventListener('hashchange', setFromHash);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner section-wrap">
        <a
          href="#"
          className="navbar__logo"
          onClick={() => {
            setActiveSection('');
            setMenuOpen(false);
          }}
        >
          <img
            src={theme === 'dark' ? logoDark : logoLight}
            alt="Finbalo"
            height="32"
          />
        </a>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {links.map(l => {
            const id = l.href.slice(1);
            const isActive = activeSection === id;

            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={isActive ? 'navbar__link--active' : ''}
                  aria-current={isActive ? 'location' : undefined}
                  onClick={() => {
                    setMenuOpen(false);
                    setActiveSection(id);
                  }}
                >
                  {l.label}
                </a>
              </li>
            );
          })}
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
            role="switch"
            aria-checked={theme === 'dark'}
            aria-label="Activar o desactivar modo oscuro"
            title={theme === 'dark' ? 'Modo oscuro ON' : 'Modo oscuro OFF'}
          >
            <span
              className={`theme-switch__state ${theme === 'dark' ? 'theme-switch__state--on' : 'theme-switch__state--off'}`}
              aria-hidden="true"
            >
              {theme === 'dark' ? 'ON' : 'OFF'}
            </span>
            <span className="theme-switch__thumb" aria-hidden="true" />
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
