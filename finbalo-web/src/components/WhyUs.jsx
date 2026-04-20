import './WhyUs.css';

const items = [
  { label: 'Agencias tradicionales', finbalo: false, text: 'Intermediarios, proceso lento y presupuesto inflado.' },
  { label: 'Freelancers sin estructura', finbalo: false, text: 'Riesgo alto, sin garantías y difícil de escalar.' },
  { label: 'Finbalo', finbalo: true, text: 'Equipo dedicado, proceso claro, código limpio y soporte real.' },
];

const perks = [
  'Comunicación directa con el equipo técnico',
  'Estimaciones honestas desde el día uno',
  'Código fuente 100% tuyo al terminar',
  'Reuniones de avance cada semana',
  'Soporte post-lanzamiento incluido',
  'Contrato claro que protege a ambas partes',
];

export default function WhyUs() {
  return (
    <section className="whyus">
      <div className="section-wrap whyus__inner">
        <div className="whyus__left">
          <p className="section-label">¿Por qué Finbalo?</p>
          <h2 className="section-title">La diferencia está<br />en los detalles.</h2>

          <div className="whyus__compare">
            {items.map(it => (
              <div key={it.label} className={`whyus__compare-row ${it.finbalo ? 'whyus__compare-row--active' : ''}`}>
                <div className="whyus__compare-icon">
                  {it.finbalo ? (
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  ) : (
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path d="M18 6 6 18M6 6l12 12"/>
                    </svg>
                  )}
                </div>
                <div>
                  <strong>{it.label}</strong>
                  <span>{it.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="whyus__right">
          <div className="whyus__perks-card">
            <h3>Lo que incluye cada proyecto</h3>
            <ul>
              {perks.map(p => (
                <li key={p}>
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6 9 17l-5-5"/>
                  </svg>
                  {p}
                </li>
              ))}
            </ul>
            <a href="#contacto" className="btn-primary">
              Solicitar cotización
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
