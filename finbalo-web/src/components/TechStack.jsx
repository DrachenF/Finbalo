import './TechStack.css';

const stacks = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Expo'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Python', 'REST APIs', 'GraphQL', 'Firebase'],
  },
  {
    category: 'Móvil',
    items: ['React Native', 'Expo', 'iOS', 'Android'],
  },
  {
    category: 'Escritorio',
    items: ['Electron', 'Tauri', 'Windows', 'macOS', 'Linux'],
  },
  {
    category: 'Testing & QA',
    items: ['Jest', 'Playwright', 'Cypress', 'QA manual', 'Postman'],
  },
  {
    category: 'Infraestructura',
    items: ['Vercel', 'Railway', 'AWS', 'Docker', 'GitHub Actions'],
  },
];

export default function TechStack() {
  return (
    <section id="tecnologias" className="techstack">
      <div className="section-wrap">
        <p className="section-label">Tecnología</p>
        <h2 className="section-title">Las herramientas<br />que dominamos.</h2>
        <p className="section-subtitle" style={{ marginBottom: '52px' }}>
          Usamos tecnologías modernas, probadas y mantenibles — sin dependencias obsoletas que te compliquen a futuro.
        </p>

        <div className="techstack__grid">
          {stacks.map(s => (
            <div key={s.category} className="techstack__card">
              <h3>{s.category}</h3>
              <div className="techstack__tags">
                {s.items.map(item => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
