import './Values.css';

const values = [
  {
    num: '01',
    title: 'Calidad',
    desc: 'Nos negamos a entregar software mediocre. Cada línea de código pasa por revisión, pruebas y criterios de aceptación claros.',
  },
  {
    num: '02',
    title: 'Transparencia',
    desc: 'Comunicamos avances, obstáculos y decisiones técnicas en tiempo real. Sin sorpresas al final del sprint.',
  },
  {
    num: '03',
    title: 'Innovación',
    desc: 'Evaluamos constantemente nuevas tecnologías y metodologías para ofrecerte siempre la solución más eficiente.',
  },
  {
    num: '04',
    title: 'Compromiso',
    desc: 'Tu éxito es nuestro éxito. Nos involucramos en tus objetivos de negocio, no solo en los requerimientos técnicos.',
  },
  {
    num: '05',
    title: 'Confiabilidad',
    desc: 'Cumplimos lo que prometemos. Plazos reales, estimaciones honestas y soporte post-entrega incluido.',
  },
  {
    num: '06',
    title: 'Simplicidad',
    desc: 'La mejor solución es la más simple que funciona. Evitamos la complejidad innecesaria que dificulta el mantenimiento.',
  },
];

export default function Values() {
  return (
    <section className="values" id="valores">
      <div className="section-wrap">
        <p className="section-label">Nuestros valores</p>
        <h2 className="section-title">Los principios que<br />guían nuestro trabajo.</h2>

        <div className="values__grid">
          {values.map(v => (
            <div key={v.num} className="value-item">
              <span className="value-item__num">{v.num}</span>
              <div className="value-item__body">
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
