import { useState, useEffect } from 'react';
import logoLight from '../assets/Logo.svg';
import logoDark from '../assets/Logo_Negativo.svg';
import './Navbar.css';

const links = [
  { label: 'A quién ayudamos', href: '#para-quien' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Por qué Finbalo', href: '#por-que' },
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
    const getTrackedSections = () =>
      sectionIds
        .map(id => document.getElementById(id))
        .filter(Boolean);

    const setFromHash = () => {
      const id = window.location.hash.replace('#', '');
      if (sectionIds.includes(id)) {
        setActiveSection(id);
      } else {
        updateActiveByScroll();
      }
    };

    const updateActiveByScroll = () => {
      const sections = getTrackedSections();
      const marker = window.scrollY + 160;
      let current = '';

      for (const section of sections) {
        if (section.offsetTop <= marker) {
          current = section.id;
        } else {
          break;
        }
      }
      if (window.scrollY < 40 && window.location.hash === '') {
        current = '';
      }
      setActiveSection(prev => (prev === current ? prev : current));
    };

    setFromHash();
    updateActiveByScroll();
    window.addEventListener('scroll', updateActiveByScroll, { passive: true });
    window.addEventListener('resize', updateActiveByScroll);
    window.addEventListener('hashchange', setFromHash);

    return () => {
      window.removeEventListener('scroll', updateActiveByScroll);
      window.removeEventListener('resize', updateActiveByScroll);
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
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Cambiar tema"
            title={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
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
