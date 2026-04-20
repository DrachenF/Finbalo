import './ForWho.css';

const IconBuilding = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <path d="M3 9h18M9 3v18M15 9v12"/>
    <path d="M6 6h.01M6 12h.01M6 16h.01M12 12h.01M18 12h.01M18 16h.01"/>
  </svg>
);

const IconRocket = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10"/>
    <path d="M16 2s2 2 2 6l-6 6"/>
    <path d="M9 15 5 19"/>
    <path d="m15 9-6 6"/>
    <circle cx="19" cy="5" r="2"/>
  </svg>
);

const IconShield = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="m9 12 2 2 4-4"/>
  </svg>
);

const IconGlobe = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    <path d="M12 2v20"/>
  </svg>
);

const IconMonitor = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/>
    <path d="M8 21h8M12 17v4"/>
    <path d="M7 8h4M7 11h6"/>
  </svg>
);

const IconPhone = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="7" y="2" width="10" height="20" rx="3"/>
    <path d="M11 18h2"/>
    <path d="M10 6h4"/>
    <path d="M10 9h4M10 12h2"/>
  </svg>
);

const profiles = [
  {
    Icon: IconBuilding,
    title: 'Pymes que quieren digitalizarse',
    desc: 'Tienes un negocio que funciona manualmente y necesitas un sistema que lo automatice, organice y te dé control.',
  },
  {
    Icon: IconRocket,
    title: 'Startups con una idea clara',
    desc: 'Tienes el concepto, el mercado y quieres construir tu MVP lo antes posible sin comprometer la calidad técnica.',
  },
  {
    Icon: IconShield,
    title: 'Equipos con software sin probar',
    desc: 'Ya tienen su aplicación pero no tienen un equipo de QA. Necesitan testers que se integren y aseguren la calidad.',
  },
  {
    Icon: IconGlobe,
    title: 'Empresas que necesitan presencia web',
    desc: 'Necesitas una página profesional, rápida y optimizada que genere confianza y convierta visitantes en clientes.',
  },
  {
    Icon: IconMonitor,
    title: 'Negocios que necesitan software de escritorio',
    desc: 'Necesitas una aplicación que funcione en tu computadora o red local, sin depender de internet para lo esencial.',
  },
  {
    Icon: IconPhone,
    title: 'Marcas que quieren su propia app',
    desc: 'Quieres estar en el celular de tus clientes con una app propia — iOS, Android o ambas — sin complicaciones técnicas.',
  },
];

export default function ForWho() {
  return (
    <section className="forwho" id="para-quien">
      <div className="section-wrap">
        <p className="section-label">¿Es Finbalo para mí?</p>
        <h2 className="section-title">Trabajamos con empresas<br />como la tuya.</h2>
        <p className="section-subtitle" style={{ marginBottom: '52px' }}>
          Si alguno de estos perfiles te suena familiar, podemos ayudarte.
        </p>

        <div className="forwho__grid">
          {profiles.map(({ Icon, title, desc }) => (
            <div key={title} className="forwho__card">
              <div className="forwho__icon">
                <Icon />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>

        <div className="forwho__cta">
          <p>¿No estás seguro si tu caso encaja? Cuéntanoslo — la consulta inicial es gratuita.</p>
          <a href="#contacto" className="btn-primary">
            Consulta gratuita
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
