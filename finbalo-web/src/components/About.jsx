import './About.css';

export default function About() {
  return (
    <section className="about" id="nosotros">
      <div className="section-wrap about__inner">
        <div className="about__text">
          <p className="section-label">Quiénes somos</p>
          <h2 className="section-title">Un equipo que entiende<br />tu negocio.</h2>
          <p className="about__desc">
            Finbalo es un estudio de desarrollo de software nacido en Guatemala con visión latinoamericana.
            Somos un equipo joven, apasionado y comprometido con entregar soluciones tecnológicas que
            realmente funcionen — no solo que "parezcan" funcionar.
          </p>
          <p className="about__desc">
            Trabajamos directamente con los fundadores y equipos de nuestros clientes, sin intermediarios
            innecesarios. Creemos en la comunicación clara, los plazos reales y el código limpio que
            escala contigo.
          </p>
          <div className="about__pills">
            <span>Startup-friendly</span>
            <span>Comunicación directa</span>
            <span>Código limpio</span>
            <span>Entregas reales</span>
          </div>
        </div>

        <div className="about__cards">
          <div className="about__card about__card--dark">
            <div className="about__card-icon">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <h3>Equipo dedicado</h3>
            <p>Trabajamos como extensión de tu equipo, no como un proveedor externo.</p>
          </div>

          <div className="about__card about__card--light">
            <div className="about__card-icon">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <h3>Calidad garantizada</h3>
            <p>Testing riguroso en cada proyecto. Entregamos lo que prometemos.</p>
          </div>

          <div className="about__card about__card--accent">
            <div className="about__card-icon">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
                <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3>Tecnología actual</h3>
            <p>Usamos el stack moderno que tu proyecto merece, sin dependencias obsoletas.</p>
          </div>

          <div className="about__card about__card--outline">
            <div className="about__card-icon">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            </div>
            <h3>Entrega puntual</h3>
            <p>Sprints claros, fechas reales. Cumplimos los plazos acordados.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
