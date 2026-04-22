import { Fragment, useEffect, useMemo, useRef, useState } from 'react';
import './NeedsCatalog.css';

const options = [
  {
    id: 'web-corporativa',
    name: 'Página web corporativa',
    short: 'Para presentar tu empresa con claridad, confianza y enfoque comercial.',
    detail: {
      forWho: 'Empresas que necesitan una presencia digital seria para vender mejor y transmitir credibilidad.',
      solves: 'Aclara tu propuesta de valor y mejora la conversión de visitantes en oportunidades reales.',
      includes: 'Estructura de contenidos, diseño web profesional, secciones clave de servicio, formulario y SEO base.',
      when: 'Conviene cuando tu web actual no representa bien tu negocio o no está generando contactos de calidad.',
    },
  },
  {
    id: 'landing-page',
    name: 'Landing page',
    short: 'Para campañas, lanzamientos o captar leads con un objetivo puntual.',
    detail: {
      forWho: 'Negocios que están promocionando un servicio, oferta o campaña específica.',
      solves: 'Evita páginas genéricas y mejora la claridad del mensaje en acciones comerciales concretas.',
      includes: 'Mensaje principal, prueba de valor del servicio, CTA directo y formulario de contacto optimizado.',
      when: 'Conviene cuando necesitas resultados rápidos en captación sin rehacer todo tu sitio web.',
    },
  },
  {
    id: 'sistema-interno',
    name: 'Sistema interno',
    short: 'Para ordenar operaciones y centralizar procesos del equipo.',
    detail: {
      forWho: 'Empresas que trabajan con procesos manuales, hojas de cálculo dispersas o seguimiento por chat.',
      solves: 'Reduce retrabajos, errores y falta de control en la operación diaria.',
      includes: 'Módulos según tu proceso, roles por usuario, trazabilidad, reportes y automatizaciones clave.',
      when: 'Conviene cuando el crecimiento del negocio empieza a superar el control operativo actual.',
    },
  },
  {
    id: 'dashboard',
    name: 'Dashboard',
    short: 'Para visualizar indicadores en tiempo real y decidir con datos.',
    detail: {
      forWho: 'Equipos de gestión que necesitan visibilidad clara sobre ventas, operaciones o productividad.',
      solves: 'Evita decisiones a ciegas y consolida información que hoy está fragmentada.',
      includes: 'Panel de métricas, filtros, vistas por área y conexión con fuentes de datos existentes.',
      when: 'Conviene cuando ya tienes datos, pero no un tablero claro para interpretarlos y actuar.',
    },
  },
  {
    id: 'automatizacion',
    name: 'Automatización de procesos',
    short: 'Para reducir tareas repetitivas y acelerar tiempos de respuesta.',
    detail: {
      forWho: 'Negocios con flujos manuales en reservas, seguimiento comercial, soporte o administración.',
      solves: 'Disminuye carga operativa y mejora consistencia en tareas críticas del negocio.',
      includes: 'Flujos automáticos, validaciones, disparadores, alertas y trazabilidad de cada etapa.',
      when: 'Conviene cuando el equipo invierte demasiado tiempo en tareas que deberían correr solas.',
    },
  },
  {
    id: 'portal-clientes',
    name: 'Portal de clientes',
    short: 'Para dar acceso ordenado a información, solicitudes y seguimiento.',
    detail: {
      forWho: 'Empresas que necesitan mejorar atención y autoservicio para clientes o cuentas recurrentes.',
      solves: 'Reduce fricción en comunicación y mejora la experiencia postventa.',
      includes: 'Acceso por usuario, historial, estado de solicitudes, documentos y panel personalizado.',
      when: 'Conviene cuando la atención al cliente depende de canales dispersos y poco trazables.',
    },
  },
  {
    id: 'app-movil',
    name: 'App móvil',
    short: 'Para llevar tu servicio al celular con una experiencia directa y práctica.',
    detail: {
      forWho: 'Negocios que quieren acercarse más a su cliente o mejorar operación de campo mediante móvil.',
      solves: 'Facilita acceso, notificaciones y uso frecuente desde cualquier lugar.',
      includes: 'Flujos principales de la app, autenticación, notificaciones y conexión con backend.',
      when: 'Conviene cuando la interacción móvil es clave en la experiencia del usuario final.',
    },
  },
  {
    id: 'herramienta-operativa',
    name: 'Herramienta operativa personalizada',
    short: 'Para resolver una necesidad específica que no cubre un software estándar.',
    detail: {
      forWho: 'Empresas con procesos particulares donde un sistema genérico no encaja bien.',
      solves: 'Elimina parches y adapta la tecnología al flujo real de tu negocio.',
      includes: 'Diseño funcional a medida, reglas propias del proceso y evolución por etapas.',
      when: 'Conviene cuando necesitas precisión operativa y control sin depender de herramientas rígidas.',
    },
  },
];

const getColumns = () => {
  if (window.innerWidth <= 580) return 1;
  if (window.innerWidth <= 860) return 2;
  if (window.innerWidth <= 1080) return 3;
  return 4;
};

export default function NeedsCatalog() {
  const [activeId, setActiveId] = useState('');
  const [columns, setColumns] = useState(() => getColumns());
  const detailRef = useRef(null);

  const activeIndex = useMemo(() => options.findIndex(option => option.id === activeId), [activeId]);

  useEffect(() => {
    const handleResize = () => setColumns(getColumns());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!activeId || !detailRef.current) return;

    const timer = window.setTimeout(() => {
      const top = detailRef.current.getBoundingClientRect().top + window.scrollY - 84;
      window.scrollTo({ top, behavior: 'smooth' });
    }, 70);

    return () => window.clearTimeout(timer);
  }, [activeId, columns]);

  const handleToggle = id => {
    setActiveId(current => (current === id ? '' : id));
  };

  return (
    <section className="needs" id="que-necesitas">
      <div className="section-wrap">
        <p className="section-label">Qué necesitas</p>
        <h2 className="section-title">¿No sabes qué necesitas?</h2>
        <p className="section-subtitle">
          Te ayudamos a identificar la solución más adecuada según tu negocio,
          tu etapa y lo que quieres lograr.
        </p>

        <div className="needs__grid">
          {options.map((option, index) => {
            const isActive = option.id === activeId;
            const isRowEnd = (index + 1) % columns === 0 || index === options.length - 1;
            const isActiveRow = activeIndex !== -1 && Math.floor(activeIndex / columns) === Math.floor(index / columns);
            const showDetailHere = isActiveRow && isRowEnd;

            return (
              <Fragment key={option.id}>
                <article key={option.id} className={`needs__card ${isActive ? 'needs__card--active' : ''}`}>
                  <h3>{option.name}</h3>
                  <p>{option.short}</p>
                  <button
                    type="button"
                    className="needs__action"
                    onClick={() => handleToggle(option.id)}
                    aria-expanded={isActive}
                    aria-controls={isActive ? 'needs-detail' : undefined}
                  >
                    {isActive ? 'Ocultar solución' : 'Ver solución'}
                  </button>
                </article>

                {showDetailHere && activeId && (
                  <article className="needs__detail" id="needs-detail" aria-live="polite" ref={detailRef}>
                    <h3>{options[activeIndex].name}</h3>
                    <div className="needs__detail-grid">
                      <div>
                        <strong>Para quién aplica</strong>
                        <p>{options[activeIndex].detail.forWho}</p>
                      </div>
                      <div>
                        <strong>Qué necesidad resuelve</strong>
                        <p>{options[activeIndex].detail.solves}</p>
                      </div>
                      <div>
                        <strong>Qué puede incluir</strong>
                        <p>{options[activeIndex].detail.includes}</p>
                      </div>
                      <div>
                        <strong>Cuándo conviene</strong>
                        <p>{options[activeIndex].detail.when}</p>
                      </div>
                    </div>
                    <a href="#formulario-contacto" className="btn-primary">Hablemos de esto</a>
                  </article>
                )}
              </Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
