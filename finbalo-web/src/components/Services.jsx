import './Services.css';

const services = [
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
        <path d="M16 18 22 12 16 6M8 6 2 12 8 18"/>
        <path d="m14 4-4 16"/>
      </svg>
    ),
    title: 'Desarrollo de Software',
    desc: 'Creamos software a medida desde cero: APIs, sistemas internos, automatizaciones y plataformas SaaS adaptadas a tu modelo de negocio.',
    tags: ['APIs REST', 'Sistemas a medida', 'Automatización', 'SaaS'],
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
        <path d="M9 12 11 14 15 10"/>
        <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/>
      </svg>
    ),
    title: 'Asistencia de Testing & QA',
    desc: '¿Ya tienes software y necesitas reforzar las pruebas? Te proveemos testers QA que se integran a tu equipo y proyecto. También probamos desde cero si nos contratas desde el inicio del ciclo.',
    tags: ['QA para software existente', 'Pruebas manuales', 'Automatización', 'Regresión'],
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="3" width="18" height="18" rx="3"/>
        <path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    title: 'Páginas Web',
    desc: 'Sitios web profesionales, rápidos y optimizados para SEO. Desde landing pages hasta e-commerce y portales corporativos.',
    tags: ['React', 'Next.js', 'E-commerce', 'SEO'],
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
        <rect x="4" y="4" width="16" height="16" rx="2"/>
        <path d="M8 2v2M16 2v2M8 20v2M16 20v2M2 8h2M2 16h2M20 8h2M20 16h2"/>
      </svg>
    ),
    title: 'Aplicaciones de Escritorio',
    desc: 'Software nativo para Windows, macOS y Linux. Aplicaciones robustas que funcionan offline y se integran con tu infraestructura existente.',
    tags: ['Windows', 'macOS', 'Linux', 'Multiplataforma'],
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
        <rect x="7" y="2" width="10" height="20" rx="3"/>
        <path d="M11 18h2"/>
      </svg>
    ),
    title: 'Aplicaciones Móviles',
    desc: 'Apps para iOS y Android desarrolladas con tecnologías modernas. Experiencias nativas fluidas con un solo código base.',
    tags: ['React Native', 'iOS', 'Android', 'Expo'],
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 12h1m8-9v1m8 8h1m-9 8v1M5.6 5.6l.7.7m12.1-.7-.7.7m0 11.4.7.7m-12.8 0-.7.7"/>
        <circle cx="12" cy="12" r="4"/>
      </svg>
    ),
    title: 'Consultoría Tecnológica',
    desc: 'Te asesoramos en la elección de arquitectura, stack tecnológico y estrategia digital para que tomes las mejores decisiones.',
    tags: ['Arquitectura', 'Stack técnico', 'Estrategia', 'MVP'],
  },
];

export default function Services() {
  return (
    <section className="services" id="servicios">
      <div className="section-wrap">
        <p className="section-label">Lo que hacemos</p>
        <h2 className="section-title">Servicios que<br />transforman ideas</h2>
        <p className="section-subtitle">
          Cubrimos todo el ciclo de vida del software — desde el concepto hasta el despliegue —
          con el mismo equipo, la misma calidad.
        </p>

        <div className="services__grid">
          {services.map((s, i) => (
            <div key={i} className="service-card">
              <div className="service-card__icon">{s.icon}</div>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.desc}</p>
              <div className="service-card__tags">
                {s.tags.map(t => (
                  <span key={t} className="service-card__tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
