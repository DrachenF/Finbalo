import logoLight from '../assets/Logo_Principal.svg';
import logoDark from '../assets/Logo_Invertido.svg';
import './Hero.css';

export default function Hero({ theme }) {
  return (
    <section className="hero">
      <div className="hero__bg-grid" aria-hidden="true" />
      <div className="section-wrap hero__inner">

        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__dot" />
            Software Studio · Guatemala
          </div>

          <h1 className="hero__title">
            Construimos el software<br />
            <span className="hero__title-accent">que tu negocio necesita.</span>
          </h1>

          <p className="hero__sub">
            Creamos software a medida, probamos el que ya tienes y llevamos tus ideas
            a producción — con calidad, plazos reales y comunicación directa.
          </p>

          <div className="hero__actions">
            <a href="#contacto" className="btn-primary">
              Agendar reunión
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#proceso" className="btn-secondary">Cómo trabajamos</a>
          </div>

          <div className="hero__stats">
            {[
              { num: '100%', label: 'Código propio' },
              { num: '5+', label: 'Tecnologías dominadas' },
              { num: '∞', label: 'Soporte post-entrega' },
            ].map(s => (
              <div key={s.label} className="hero__stat">
                <span className="hero__stat-num">{s.num}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__logo-col" aria-hidden="true">
          <img
            src={theme === 'dark' ? logoDark : logoLight}
            alt=""
            className="hero__logo"
          />
        </div>

      </div>

      <div className="hero__scroll" aria-label="Scroll down">
        <span />
      </div>
    </section>
  );
}
