import './App.css';

const labs = [
  {
    name: 'Eisencheck Lab',
    description: 'Controleer eisen en publiceer direct via GitHub Pages.',
    siteUrl: 'https://userdevtec.github.io/eisencheck-lab',
    image: '/src/assets/eisencheck.png',
    accent: '#c1e62e',
  },
  {
    name: 'Afwijkingen Lab',
    description: 'Registreer afwijkingen en check de deployment status direct.',
    siteUrl: 'https://userdevtec.github.io/afwijkingen-lab',
    image: '/src/assets/afwijkingen.png',
    accent: '#630d80',
  },
  {
    name: 'Turtle Lab',
    description: 'Turtle tooling met dezelfde UI-stijl als dit dashboard.',
    siteUrl: 'https://userdevtec.github.io/turtle-lab',
    image: '/src/assets/turtle.png',
    accent: '#c1e62e',
  },
];

const stats = [
  {
    label: 'Actieve labs',
    value: labs.length,
    note: 'Live op GitHub Pages',
  },
  {
    label: 'Deploy badge',
    value: labs.length,
    note: 'Realtime workflow status',
  },
  {
    label: 'Publieke links',
    value: labs.length,
    note: 'Direct openen vanaf hier',
  },
];

function App() {
  return (
    <main className="app">
      <section className="hero">
        <div>
          <p className="eyebrow">Dashboard labs</p>
          <h1>Lab dashboard overzicht</h1>
          <p className="subtitle">
            Snelle status-checks, badges en live links naar je GitHub Pages labs.
          </p>
        </div>
        <div className="actions">
          <a className="primary" href="#labs">
            Bekijk labs
          </a>
          <a
            className="ghost"
            href="https://github.com/UserDevtec"
            target="_blank"
            rel="noreferrer"
          >
            GitHub profiel
          </a>
        </div>
      </section>

      <section id="labs" className="panel">
        <div className="panel-header">
          <h2>CW&D Lab Apps</h2>
        </div>

        <div className="lab-grid">
          {labs.map((lab) => (
            <article className="lab-card" style={{ '--accent': lab.accent }} key={lab.name}>
              <div className="lab-media">
                <img className="lab-image" src={lab.image} alt={lab.name} loading="lazy" />
              </div>
              <div className="lab-body">
                <header className="lab-header">
                  <h3>{lab.name}</h3>
                  <span className="status-pill">
                    <span className="status-live-dot" aria-hidden="true"></span>
                    Live
                  </span>
                </header>
                <p className="lab-desc">{lab.description}</p>
                <div className="lab-actions">
                  <a className="primary small" href={lab.siteUrl} target="_blank" rel="noreferrer">
                    Open Weblab
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
