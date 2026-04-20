import { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    q: '¿Cuánto cuesta desarrollar mi proyecto?',
    a: 'Depende del alcance, complejidad y tecnología requerida. Ofrecemos una consulta inicial gratuita donde analizamos tu proyecto y te enviamos una propuesta con precios claros. No hay costos ocultos.',
  },
  {
    q: '¿Cuánto tiempo tarda en estar listo mi software?',
    a: 'Un MVP sencillo puede tomar 4-8 semanas. Un sistema más completo, 2-6 meses. Siempre te damos un cronograma real antes de empezar — nunca prometemos fechas que no podemos cumplir.',
  },
  {
    q: '¿Qué pasa si ya tengo software y solo necesito que lo prueben?',
    a: 'Ofrecemos asistencia de testers QA para software que ya existe. Nuestro equipo se integra a tu proyecto, analiza el sistema y ejecuta pruebas manuales o automatizadas según lo que necesites.',
  },
  {
    q: '¿El código me pertenece al terminar?',
    a: 'Sí, al 100%. Todo el código fuente es tuyo. Te entregamos el repositorio completo y no te pedimos licencias ni pagos futuros por el código que construimos para ti.',
  },
  {
    q: '¿Trabajan con contratos?',
    a: 'Sí, usamos contratos en todos nuestros proyectos. Esto nos protege a los dos: a ti como cliente y a nosotros como equipo. El contrato define el alcance, los tiempos, los pagos y los derechos del código.',
  },
  {
    q: '¿Puedo contactarlos si surge algo después de la entrega?',
    a: 'Absolutamente. Ofrecemos soporte post-entrega en todos los proyectos. Si algo falla o necesitas un ajuste, estamos disponibles para ayudarte — no desaparecemos al entregar.',
  },
  {
    q: '¿Trabajan con clientes fuera de Guatemala?',
    a: 'Sí. Trabajamos de forma remota con clientes en toda Latinoamérica y en otros países. Las reuniones las hacemos vía videollamada y la comunicación fluye sin problema a través de herramientas digitales.',
  },
  {
    q: '¿Qué pasa si mi idea cambia a mitad del proyecto?',
    a: 'Trabajamos con metodología ágil por sprints. Los cambios de alcance se evalúan al inicio de cada sprint y se ajusta el cronograma y el presupuesto de forma transparente. Nada de sorpresas.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="faq" id="faq">
      <div className="section-wrap">
        <p className="section-label">Preguntas frecuentes</p>
        <h2 className="section-title">Resolvemos tus dudas<br />antes de que contactes.</h2>

        <div className="faq__list">
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`faq__item ${open === i ? 'faq__item--open' : ''}`}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="faq__question">
                <span>{item.q}</span>
                <div className="faq__icon">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d={open === i ? 'M18 15 12 9 6 15' : 'M6 9l6 6 6-6'}/>
                  </svg>
                </div>
              </div>
              {open === i && (
                <div className="faq__answer">
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="faq__footer">
          <p>¿Tienes una pregunta que no está aquí?</p>
          <a href="#contacto" className="btn-secondary">Pregúntanos directamente</a>
        </div>
      </div>
    </section>
  );
}
