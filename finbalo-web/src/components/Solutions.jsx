import './Solutions.css';

const solutions = [
  {
    title: 'Sitios corporativos y landing pages',
    desc: 'Páginas claras y profesionales para comunicar valor, captar leads y mejorar conversión comercial.',
  },
  {
    title: 'Sistemas internos y dashboards',
    desc: 'Herramientas para ordenar operaciones, centralizar información y dar visibilidad en tiempo real.',
  },
  {
    title: 'Automatización de procesos críticos',
    desc: 'Flujos para formularios, reservas, seguimiento y aprobaciones que reducen carga manual y errores.',
  },
  {
    title: 'Portales para clientes y equipos',
    desc: 'Espacios privados para consultas, solicitudes y gestión de información desde un solo lugar.',
  },
  {
    title: 'Aplicaciones web, móviles y escritorio',
    desc: 'Soluciones operativas adaptadas a tu caso de uso, con base técnica sólida y mantenible.',
  },
  {
    title: 'Integraciones y APIs entre sistemas',
    desc: 'Conectamos herramientas existentes para evitar duplicidad y mantener consistencia en los datos.',
  },
];

export default function Solutions() {
  return (
    <section className="solutions" id="soluciones">
      <div className="section-wrap">
        <p className="section-label">Soluciones</p>
        <h2 className="section-title">Capacidades de implementación<br />para tu operación.</h2>
        <p className="section-subtitle">
          Definimos la solución según tu contexto de negocio, alcance y etapa de crecimiento.
          Sin complejidad innecesaria.
        </p>

        <div className="solutions__grid">
          {solutions.map(solution => (
            <article key={solution.title} className="solutions__card">
              <h3>{solution.title}</h3>
              <p>{solution.desc}</p>
            </article>
          ))}
        </div>

        <div className="solutions__cta">
          <a href="#contacto" className="btn-primary">Solicitar propuesta</a>
        </div>
      </div>
    </section>
  );
}
