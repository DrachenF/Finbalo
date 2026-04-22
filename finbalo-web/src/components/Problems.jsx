import './Problems.css';

const problems = [
  {
    title: 'Procesos manuales que consumen tiempo',
    desc: 'Tu equipo repite tareas operativas, pierde horas en Excel y no tiene una fuente confiable de datos para decidir.',
  },
  {
    title: 'Sistemas desconectados entre áreas',
    desc: 'Ventas, operaciones y administración trabajan en herramientas separadas. Eso genera errores, retrabajo y poca visibilidad.',
  },
  {
    title: 'Software que no crece con el negocio',
    desc: 'La solución actual quedó corta: es lenta, difícil de mantener o no se adapta a tus nuevos procesos.',
  },
  {
    title: 'Falta de claridad para priorizar',
    desc: 'Sabes que necesitas digitalizar, pero no tienes una ruta concreta para empezar sin desperdiciar presupuesto.',
  },
];

export default function Problems() {
  return (
    <section className="problems" id="problemas">
      <div className="section-wrap">
        <p className="section-label">Problemas que resolvemos</p>
        <h2 className="section-title">Cuando el negocio crece,<br />el desorden también.</h2>
        <p className="section-subtitle">
          Diseñamos soluciones para eliminar fricción operativa, darte control del proceso
          y convertir la tecnología en una ventaja real para tu empresa.
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
