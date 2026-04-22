import './Problems.css';

const problems = [
  {
    title: 'Procesos manuales que frenan al equipo',
    desc: 'Tu operación depende de tareas repetitivas y seguimiento manual. Se pierde tiempo y se reducen márgenes.',
  },
  {
    title: 'Información dispersa y poca visibilidad',
    desc: 'Cada área trabaja con sus propias herramientas y datos. Eso complica decisiones y genera retrabajo.',
  },
  {
    title: 'Software que ya no acompaña el crecimiento',
    desc: 'El sistema actual quedó corto: cuesta mantenerlo, no escala y limita mejoras que tu negocio ya necesita.',
  },
  {
    title: 'Inversión digital sin una ruta clara',
    desc: 'Sabes que debes digitalizar, pero no quieres invertir a ciegas. Necesitas una propuesta concreta y priorizada.',
  },
];

export default function Problems() {
  return (
    <section className="problems" id="problemas">
      <div className="section-wrap">
        <p className="section-label">Problemas que resolvemos</p>
        <h2 className="section-title">Menos fricción operativa,<br />más control del negocio.</h2>
        <p className="section-subtitle">
          Trabajamos sobre cuellos de botella reales para que tu equipo avance más rápido,
          con procesos claros y tecnología que sí aporte resultados.
        </p>

        <div className="problems__grid">
          {problems.map(item => (
            <article key={item.title} className="problems__card">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
