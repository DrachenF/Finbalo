import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '', service: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    const subject = encodeURIComponent(`Consulta de ${form.name} - ${form.service || 'General'}`);
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nEmpresa: ${form.company || 'N/A'}\nEmail: ${form.email}\nServicio de interés: ${form.service || 'N/A'}\n\nMensaje:\n${form.message}`
    );
    window.location.href = `mailto:contacto@finbalo.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section className="contact" id="contacto">
      <div className="section-wrap contact__inner">
        <div className="contact__info">
          <p className="section-label">Contacto</p>
          <h2 className="section-title">¿Listo para<br />construir algo?</h2>
          <p className="contact__desc">
            Cuéntanos sobre tu proyecto. Respondemos en menos de 24 horas
            y la consulta inicial siempre es sin costo.
          </p>

          <div className="contact__channels">
            <a href="mailto:contacto@finbalo.com" className="contact__channel">
              <div className="contact__channel-icon">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <path d="m22 6-10 7L2 6"/>
                </svg>
              </div>
              <div>
                <strong>Email profesional</strong>
                <span>contacto@finbalo.com</span>
              </div>
            </a>

            <div className="contact__channel">
              <div className="contact__channel-icon">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <strong>Ubicación</strong>
                <span>Guatemala, Centroamérica</span>
              </div>
            </div>

            <div className="contact__channel">
              <div className="contact__channel-icon">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <div>
                <strong>Respuesta</strong>
                <span>Menos de 24 horas hábiles</span>
              </div>
            </div>

            <a
              href="https://wa.me/50259025388?text=Hola%20Finbalo%2C%20quiero%20agendar%20una%20reuni%C3%B3n."
              target="_blank"
              rel="noopener noreferrer"
              className="contact__channel"
            >
              <div className="contact__channel-icon contact__channel-icon--green">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
              </div>
              <div>
                <strong>WhatsApp</strong>
                <span>Escríbenos directo — un toque</span>
              </div>
            </a>
          </div>
        </div>

        <div className="contact__form-wrap">
          {sent ? (
            <div className="contact__success">
              <div className="contact__success-icon">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
              </div>
              <h3>¡Mensaje enviado!</h3>
              <p>Te responderemos pronto. Revisa tu bandeja de salida.</p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__form-row">
                <div className="contact__field">
                  <label htmlFor="name">Nombre *</label>
                  <input
                    id="name" name="name" type="text" required
                    placeholder="Tu nombre"
                    value={form.name} onChange={handleChange}
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="email">Email *</label>
                  <input
                    id="email" name="email" type="email" required
                    placeholder="tu@email.com"
                    value={form.email} onChange={handleChange}
                  />
                </div>
              </div>

              <div className="contact__field">
                <label htmlFor="company">Empresa</label>
                <input
                  id="company" name="company" type="text"
                  placeholder="Nombre de tu empresa (opcional)"
                  value={form.company} onChange={handleChange}
                />
              </div>

              <div className="contact__field">
                <label htmlFor="service">Servicio de interés</label>
                <select id="service" name="service" value={form.service} onChange={handleChange}>
                  <option value="">Selecciona un servicio...</option>
                  <option>Desarrollo de Software</option>
                  <option>Testing & QA</option>
                  <option>Página Web</option>
                  <option>Aplicación de Escritorio</option>
                  <option>Aplicación Móvil</option>
                  <option>Consultoría Tecnológica</option>
                  <option>Otro</option>
                </select>
              </div>

              <div className="contact__field">
                <label htmlFor="message">Cuéntanos sobre tu proyecto *</label>
                <textarea
                  id="message" name="message" required
                  rows="5"
                  placeholder="Describe brevemente qué quieres construir o en qué podemos ayudarte..."
                  value={form.message} onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn-primary contact__submit">
                Enviar mensaje
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 2 11 13M22 2 15 22 11 13 2 9l20-7z"/>
                </svg>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
