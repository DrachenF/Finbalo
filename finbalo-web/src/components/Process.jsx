import './Process.css';

const steps = [
  {
    num: '1',
    title: 'Consulta inicial',
    desc: 'Nos cuentas tu idea o problema. Hacemos las preguntas correctas para entender el contexto real, no solo los requerimientos en papel.',
  },
  {
    num: '2',
    title: 'Propuesta & Estimación',
    desc: 'Te presentamos una propuesta técnica con alcance definido, stack tecnológico y precio transparente. Sin letra pequeña.',
  },
  {
    num: '3',
    title: 'Diseño & Arquitectura',
    desc: 'Definimos la arquitectura del sistema, el diseño de interfaz y el plan de sprints antes de escribir una sola línea de código.',
  },
  {
    num: '4',
    title: 'Desarrollo iterativo',
    desc: 'Construimos por sprints de 2 semanas. Cada entrega es funcional, probada y lista para tu revisión.',
  },
  {
    num: '5',
    title: 'QA & Testing',
    desc: 'Pruebas exhaustivas antes de cada entrega. Nos aseguramos de que todo funcione en los escenarios reales de tu negocio.',
  },
  {
    num: '6',
    title: 'Entrega & Soporte',
    desc: 'Desplegamos el producto final y te acompañamos en el periodo post-lanzamiento. El código es tuyo.',
  },
];

export default function Process() {
  return (
    <section className="process" id="proceso">
      <div className="section-wrap">
        <p className="section-label">Cómo trabajamos</p>
        <h2 className="section-title">De la idea al producto<br />en pasos claros.</h2>

        <div className="process__steps">
          {steps.map((s, i) => (
            <div key={s.num} className="process__step">
              <div className="process__step-num">{s.num}</div>
              {i < steps.length - 1 && <div className="process__step-line" />}
              <div className="process__step-content">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
