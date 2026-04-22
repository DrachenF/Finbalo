import './WhyUs.css';

const items = [
  {
    label: 'Enfoque improvisado',
    finbalo: false,
    text: 'Entrega rápida al inicio, pero sin base técnica ni proceso para sostener el crecimiento.',
  },
  {
    label: 'Proveedor sin estructura',
    finbalo: false,
    text: 'Falta claridad en alcance, tiempos y calidad. Eso termina elevando costo y riesgo.',
  },
  {
    label: 'Finbalo',
    finbalo: true,
    text: 'Proceso ordenado, comunicación directa y foco en resultados concretos para el negocio.',
  },
];

const perks = [
  'Diagnóstico inicial orientado a negocio',
  'Alcance y estimaciones con criterios claros',
  'QA integrado durante la ejecución',
  'Código fuente 100% tuyo al finalizar',
  'Soporte post-entrega para estabilizar y crecer',
  'Contrato claro para reducir riesgos',
];

export default function WhyUs() {
  return (
    <section className="whyus">
      <div className="section-wrap whyus__inner">
        <div className="whyus__left">
          <p className="section-label">¿Por qué trabajar con nosotros?</p>
          <h2 className="section-title">Tecnología bien ejecutada,<br />con impacto comercial.</h2>
          <p className="section-subtitle">
            Combinamos rigor técnico con enfoque de negocio para que cada entrega
            tenga una utilidad real en tu operación.
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
            <h3>Lo que sí garantizamos</h3>
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
