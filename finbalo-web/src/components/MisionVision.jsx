import './MisionVision.css';

export default function MisionVision() {
  return (
    <section className="mv" id="mision">
      <div className="section-wrap">
        <p className="section-label">Propósito</p>
        <h2 className="section-title">Lo que nos mueve<br />cada día.</h2>

        <div className="mv__grid">
          <div className="mv__card mv__card--mission">
            <div className="mv__card-header">
              <div className="mv__icon">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <span className="mv__card-label">Misión</span>
            </div>
            <h3>Crear tecnología que impulse negocios reales.</h3>
            <p>
              Nuestra misión es convertir ideas en productos digitales de alta calidad que generen
              valor tangible para nuestros clientes en América Latina y el mundo, a través de
              soluciones tecnológicas accesibles, modernas y escalables.
            </p>
          </div>

          <div className="mv__card mv__card--vision">
            <div className="mv__card-header">
              <div className="mv__icon">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <span className="mv__card-label">Visión</span>
            </div>
            <h3>Ser el estudio de software de referencia en Latinoamérica.</h3>
            <p>
              Visualizamos un Finbalo reconocido por su excelencia técnica, su impacto positivo en los
              negocios que acompañamos y por ser el primer nombre que viene a la mente cuando alguien
              necesita software bien hecho.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
