import logoDark from '../assets/Logo_Invertido.svg';
import './Footer.css';

const year = new Date().getFullYear();

const nav = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Problemas', href: '#problemas' },
  { label: 'Demos', href: '#demos' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Tecnologías', href: '#tecnologias' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="section-wrap footer__inner">
        <div className="footer__brand">
          <a href="#" className="footer__logo">
            <img
              src={logoDark}
              alt="Finbalo"
              height="28"
            />
          </a>
          <p>
            Estudio de desarrollo de software con base en Guatemala.
            Construimos el software que tu negocio necesita.
          </p>
          <a href="mailto:contacto@finbalo.com" className="footer__email">
            contacto@finbalo.com
          </a>
        </div>

        <div className="footer__nav">
          <span className="footer__nav-title">Navegación</span>
          <ul>
            {nav.map(l => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__services">
          <span className="footer__nav-title">Servicios</span>
          <ul>
            {['Desarrollo de Software', 'Testing & QA', 'Páginas Web', 'Apps de Escritorio', 'Apps Móviles', 'Consultoría'].map(s => (
              <li key={s}>
                <a href="#servicios">{s}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="section-wrap footer__bottom-inner">
          <span>© {year} Finbalo. Todos los derechos reservados.</span>
          <span>Hecho con dedicación en Guatemala 🇬🇹</span>
        </div>
      </div>
    </footer>
  );
}
