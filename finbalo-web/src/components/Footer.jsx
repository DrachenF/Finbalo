import logoLight from '../assets/Logo_Principal.svg';
import logoDark from '../assets/Logo_Invertido.svg';
import './Footer.css';

const year = new Date().getFullYear();

const nav = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Qué necesitas', href: '#que-necesitas' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Tecnologías', href: '#tecnologias' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Footer({ theme }) {
  return (
    <footer className="footer">
      <div className="section-wrap footer__inner">
        <div className="footer__brand">
          <a href="#inicio" className="footer__logo">
            <img
              src={theme === 'dark' ? logoDark : logoLight}
              alt="Finbalo"
              height="28"
            />
          </a>
          <p>
            Estudio de desarrollo de software con base en Guatemala.
            Construimos soluciones claras para problemas reales de negocio.
          </p>
          <a href="mailto:contacto@finbalo.com" className="footer__email">
            contacto@finbalo.com
          </a>
        </div>

        <div className="footer__nav">
          <span className="footer__nav-title">Navegación</span>
          <ul>
            {nav.map(link => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__services">
          <span className="footer__nav-title">Servicios</span>
          <ul>
            {['Desarrollo de Software', 'Testing & QA', 'Páginas Web', 'Apps de Escritorio', 'Apps Móviles', 'Consultoría'].map(service => (
              <li key={service}>
                <a href="#servicios">{service}</a>
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
