import { Fragment, useEffect, useMemo, useRef, useState } from 'react';
import './NeedsCatalog.css';

const options = [
  {
    id: 'web-corporativa',
    name: 'Quiero una web para mi negocio',
    tech: 'Sitio corporativo',
    short: 'Para presentar tu empresa con claridad, generar confianza y facilitar contactos comerciales.',
    detail: {
      forWho: 'Negocios que necesitan una presencia digital profesional para vender mejor y verse confiables.',
      solves: 'Aterriza tu propuesta de valor y ayuda a convertir visitas en oportunidades reales.',
      includes: 'Estructura de contenidos, diseño web profesional, secciones de servicio, formulario y SEO base.',
      when: 'Conviene cuando tu web actual no representa bien tu negocio o no te está generando contactos.',
    },
  },
  {
    id: 'landing-page',
    name: 'Quiero captar más clientes',
    tech: 'Landing page',
    short: 'Para campañas o promociones concretas con un mensaje directo y un solo objetivo.',
    detail: {
      forWho: 'Empresas que están lanzando un servicio, una campaña o una oferta puntual.',
      solves: 'Evita páginas confusas y mejora la conversión en acciones comerciales específicas.',
      includes: 'Mensaje principal, propuesta de valor, CTA claro y formulario optimizado.',
      when: 'Conviene cuando necesitas resultados rápidos sin rehacer toda tu web.',
    },
  },
  {
    id: 'sistema-interno',
    name: 'Quiero ordenar mi operación',
    tech: 'Sistema interno',
    short: 'Para centralizar procesos del equipo y dejar atrás el desorden operativo.',
    detail: {
      forWho: 'Negocios que trabajan con tareas manuales, hojas de cálculo y seguimiento disperso.',
      solves: 'Reduce retrabajos, errores y falta de control en la operación diaria.',
      includes: 'Módulos por proceso, roles de usuario, trazabilidad, reportes y automatizaciones clave.',
      when: 'Conviene cuando el crecimiento empieza a superar tu forma actual de operar.',
    },
  },
  {
    id: 'dashboard',
    name: 'Quiero ver ventas y métricas claras',
    tech: 'Panel de control',
    short: 'Para tomar decisiones con datos visibles, no por intuición.',
    detail: {
      forWho: 'Dueños y equipos que necesitan visibilidad real sobre ventas, operaciones o productividad.',
      solves: 'Evita decisiones a ciegas y reúne información que hoy está fragmentada.',
      includes: 'Tablero de indicadores, filtros, vistas por área e integración con tus datos.',
      when: 'Conviene cuando ya tienes datos pero no una vista clara para actuar rápido.',
    },
  },
  {
    id: 'automatizacion',
    name: 'Quiero automatizar tareas repetitivas',
    tech: 'Automatización de procesos',
    short: 'Para ahorrar tiempo operativo y responder más rápido sin aumentar carga manual.',
    detail: {
      forWho: 'Empresas con procesos repetitivos en reservas, seguimiento comercial, soporte o administración.',
      solves: 'Disminuye carga operativa y mejora consistencia en tareas clave del negocio.',
      includes: 'Flujos automáticos, validaciones, alertas y control de cada etapa.',
      when: 'Conviene cuando tu equipo pierde demasiado tiempo en tareas que pueden automatizarse.',
    },
  },
  {
    id: 'portal-clientes',
    name: 'Quiero un área para mis clientes',
    tech: 'Portal de clientes',
    short: 'Para dar acceso ordenado a información, solicitudes y seguimiento en un solo lugar.',
    detail: {
      forWho: 'Negocios que quieren mejorar atención y autoservicio para clientes frecuentes.',
      solves: 'Reduce fricción en comunicación y mejora la experiencia postventa.',
      includes: 'Acceso por usuario, historial, estado de solicitudes, documentos y panel personalizado.',
      when: 'Conviene cuando la atención depende de canales dispersos y poco trazables.',
    },
  },
  {
    id: 'app-movil',
    name: 'Quiero una app para mi servicio',
    tech: 'Aplicación móvil',
    short: 'Para estar en el celular de tus usuarios y facilitarles el uso de tu servicio.',
    detail: {
      forWho: 'Empresas que necesitan una experiencia móvil para clientes o equipos en campo.',
      solves: 'Mejora acceso, continuidad y uso frecuente desde cualquier lugar.',
      includes: 'Flujos principales de la app, autenticación, notificaciones e integración con backend.',
      when: 'Conviene cuando el canal móvil es clave en tu experiencia de servicio.',
    },
  },
  {
    id: 'herramienta-operativa',
    name: 'Quiero una solución hecha para mi negocio',
    tech: 'Herramienta operativa a medida',
    short: 'Para resolver una necesidad específica que un software genérico no cubre bien.',
    detail: {
      forWho: 'Negocios con procesos particulares donde una herramienta estándar se queda corta.',
      solves: 'Elimina parches y adapta la tecnología al flujo real de tu operación.',
      includes: 'Diseño funcional a medida, reglas de negocio propias y evolución por etapas.',
      when: 'Conviene cuando necesitas precisión operativa y control sin depender de soluciones rígidas.',
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
                <article className={`needs__card ${isActive ? 'needs__card--active' : ''}`}>
                  <h3>{option.name}</h3>
                  <p>{option.short}</p>
                  <span className="needs__tech">{option.tech}</span>
                  <button
                    type="button"
                    className="needs__action"
                    onClick={() => handleToggle(option.id)}
                    aria-expanded={isActive}
                    aria-controls={isActive ? 'needs-detail' : undefined}
                  >
                    {isActive ? 'Estás viendo esta opción' : 'Ver solución'}
                  </button>
                </article>

                {showDetailHere && activeId && (
                  <article className="needs__detail" id="needs-detail" aria-live="polite" ref={detailRef}>
                    <div className="needs__detail-head">
                      <h3>{options[activeIndex].name}</h3>
                      <p>
                        Esta opción está pensada para ayudarte a resolver esta necesidad
                        sin complejidad innecesaria.
                      </p>
                    </div>

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
