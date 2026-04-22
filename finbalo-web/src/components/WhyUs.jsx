import './WhyUs.css';

const items = [
  {
    label: 'Soluciones improvisadas',
    finbalo: false,
    text: 'Se construyen rápido, pero sin método claro ni visión de mantenimiento.',
  },
  {
    label: 'Proveedores sin proceso',
    finbalo: false,
    text: 'Hay buena intención, pero poca estructura para controlar alcance, calidad y tiempos.',
  },
  {
    label: 'Finbalo',
    finbalo: true,
    text: 'Equipo técnico cercano, proceso definido y foco real en resultados de negocio.',
  },
];

const perks = [
  'Comunicación directa con el equipo técnico',
  'Estimaciones honestas y alcance transparente',
  'Revisión de calidad y QA en cada etapa',
  'Código fuente 100% tuyo al finalizar',
  'Soporte post-entrega y mejoras evolutivas',
  'Contrato claro que protege a ambas partes',
];

export default function WhyUs() {
  return (
    <section className="whyus">
      <div className="section-wrap whyus__inner">
        <div className="whyus__left">
          <p className="section-label">¿Por qué trabajar con nosotros?</p>
          <h2 className="section-title">Forma profesional,<br />sin burocracia innecesaria.</h2>
          <p className="section-subtitle">
            Tomamos lo valioso de un equipo técnico sólido: calidad, transparencia y cumplimiento,
            sin convertir el proceso en algo lento o confuso para tu empresa.
          </p>

          <div className="whyus__compare">
            {items.map(item => (
              <div key={item.label} className={`whyus__compare-row ${item.finbalo ? 'whyus__compare-row--active' : ''}`}>
                <div className="whyus__compare-icon">
                  {item.finbalo ? (
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  ) : (
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path d="M18 6 6 18M6 6l12 12" />
                    </svg>
                  )}
                </div>
                <div>
                  <strong>{item.label}</strong>
                  <span>{item.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="whyus__right">
          <div className="whyus__perks-card">
            <h3>Lo que incluye cada proyecto</h3>
            <ul>
              {perks.map(perk => (
                <li key={perk}>
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {perk}
                </li>
              ))}
            </ul>
            <a href="#contacto" className="btn-primary">
              Solicitar propuesta
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
