import './Solutions.css';

const solutions = [
  {
    title: 'Sitios corporativos y landing pages',
    desc: 'Webs profesionales enfocadas en comunicar valor, generar confianza y convertir visitas en oportunidades.',
  },
  {
    title: 'Sistemas internos y paneles de control',
    desc: 'Plataformas para centralizar operaciones, visualizar métricas y mejorar la toma de decisiones.',
  },
  {
    title: 'Automatización de procesos clave',
    desc: 'Flujos para formularios, reservas, seguimientos o aprobaciones que reducen tareas manuales y errores.',
  },
  {
    title: 'Portales para clientes y equipos',
    desc: 'Accesos personalizados para gestionar información, solicitudes y comunicación en un solo lugar.',
  },
  {
    title: 'Aplicaciones web, móviles o escritorio',
    desc: 'Herramientas operativas adaptadas a tu caso de uso, con arquitectura pensada para crecer contigo.',
  },
  {
    title: 'Integraciones y capas de API',
    desc: 'Conexión entre sistemas existentes para evitar duplicidad de trabajo y mantener datos consistentes.',
  },
];

export default function Solutions() {
  return (
    <section className="solutions" id="soluciones">
      <div className="section-wrap">
        <p className="section-label">Soluciones</p>
        <h2 className="section-title">Tipos de soluciones<br />que podemos construir.</h2>
        <p className="section-subtitle">
          Estas son capacidades de implementación de Finbalo. Se adaptan al tamaño,
          industria y etapa de tu negocio.
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
