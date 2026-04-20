import './Problems.css';

const problems = [
  {
    title: 'Procesos manuales y lentos',
    desc: 'Tu operación depende de hojas de cálculo, mensajes y tareas repetitivas que consumen tiempo y generan errores.',
  },
  {
    title: 'Software que no escala contigo',
    desc: 'Tu sistema actual se queda corto, se vuelve inestable o ya no responde a las nuevas necesidades del negocio.',
  },
  {
    title: 'Falta de visibilidad y control',
    desc: 'No tienes métricas claras ni trazabilidad para tomar decisiones rápidas con datos reales.',
  },
  {
    title: 'Dependencia de soluciones parchadas',
    desc: 'Herramientas desconectadas entre sí, integraciones frágiles y costos ocultos por mantener “arreglos temporales”.',
  },
];

export default function Problems() {
  return (
    <section className="problems" id="problemas">
      <div className="section-wrap">
        <p className="section-label">Problemas que resolvemos</p>
        <h2 className="section-title">Convertimos fricción operativa<br />en sistemas confiables.</h2>
        <p className="section-subtitle" style={{ marginBottom: '52px' }}>
          Diseñamos soluciones para los cuellos de botella más comunes en pymes y empresas en crecimiento.
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
