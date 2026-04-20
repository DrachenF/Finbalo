import './DemoProjects.css';

const demos = [
  {
    title: 'Demo CRM Comercial',
    type: 'Sistema web interno',
    desc: 'Gestión de leads, pipeline de ventas, seguimiento de tareas y reportes ejecutivos en tiempo real.',
    tags: ['Dashboard', 'Automatizaciones', 'Roles & Permisos'],
  },
  {
    title: 'Demo App de Operaciones',
    type: 'App móvil + panel admin',
    desc: 'Control de rutas, checklists en campo, evidencias con fotos y sincronización de estado con oficina.',
    tags: ['React Native', 'Geo', 'Offline-first'],
  },
  {
    title: 'Demo Portal de Clientes',
    type: 'Plataforma self-service',
    desc: 'Consulta de órdenes, facturas, historial de servicio y solicitudes de soporte en un solo lugar.',
    tags: ['Portal B2B', 'Integraciones API', 'UX clara'],
  },
];

export default function DemoProjects() {
  return (
    <section className="demo-projects" id="demos">
      <div className="section-wrap">
        <p className="section-label">Proyectos demo</p>
        <h2 className="section-title">Ejemplos reales del tipo<br />de solución que construimos.</h2>
        <p className="section-subtitle" style={{ marginBottom: '52px' }}>
          No usamos prueba social inventada. Te mostramos demos claros para que visualices alcance y resultados.
        </p>

        <div className="demo-projects__grid">
          {demos.map(demo => (
            <article key={demo.title} className="demo-projects__card">
              <p className="demo-projects__type">{demo.type}</p>
              <h3>{demo.title}</h3>
              <p>{demo.desc}</p>
              <div className="demo-projects__tags">
                {demo.tags.map(tag => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
