import './App.css';

const labs = [
  {
    name: 'Eisencheck Lab',
    description: 'Controleer eisen en publiceer direct via GitHub Pages.',
    siteUrl: 'https://userdevtec.github.io/eisencheck-lab',
    repoUrl: 'https://github.com/UserDevtec/eisencheck-lab',
    badgeUrl:
      'https://github.com/UserDevtec/eisencheck-lab/actions/workflows/deploy.yml/badge.svg',
    workflowUrl:
      'https://github.com/UserDevtec/eisencheck-lab/actions/workflows/deploy.yml',
    accent: '#caa46c',
  },
  {
    name: 'Afwijkingen Lab',
    description: 'Registreer afwijkingen en check de deployment status direct.',
    siteUrl: 'https://userdevtec.github.io/afwijkingen-lab',
    repoUrl: 'https://github.com/UserDevtec/afwijkingen-lab',
    badgeUrl:
      'https://github.com/UserDevtec/afwijkingen-lab/actions/workflows/deploy.yml/badge.svg',
    workflowUrl:
      'https://github.com/UserDevtec/afwijkingen-lab/actions/workflows/deploy.yml',
    accent: '#6da6b5',
  },
  {
    name: 'Turtle Lab',
    description: 'Turtle tooling met dezelfde UI-stijl als dit dashboard.',
    siteUrl: 'https://userdevtec.github.io/turtle-lab',
    repoUrl: 'https://github.com/UserDevtec/turtle-lab',
    badgeUrl:
      'https://github.com/UserDevtec/turtle-lab/actions/workflows/deploy.yml/badge.svg',
    workflowUrl:
      'https://github.com/UserDevtec/turtle-lab/actions/workflows/deploy.yml',
    accent: '#9a7bc1',
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
          <p className="eyebrow">GitHub Labs</p>
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

      <section className="panel stats">
        <div>
          <h2>Status in een oogopslag</h2>
          <p className="meta">
            {labs.length} labs gekoppeld · GitHub Pages deployments
          </p>
        </div>
        <div className="stats-grid">
          {stats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <p className="stat-label">{stat.label}</p>
              <p className="stat-value">{stat.value}</p>
              <p className="stat-note">{stat.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="labs" className="panel">
        <div className="panel-header">
          <h2>Lab websites</h2>
          <div className="legend">
            <span className="legend-dot"></span>
            <span>GitHub Pages</span>
          </div>
        </div>

        <div className="lab-grid">
          {labs.map((lab) => (
            <article className="lab-card" style={{ '--accent': lab.accent }} key={lab.name}>
              <div className="lab-media">
                <div className="lab-media-placeholder">
                  <span>Afbeelding hier</span>
                </div>
              </div>
              <div className="lab-body">
                <header className="lab-header">
                  <h3>{lab.name}</h3>
                  <span className="status-pill">Live</span>
                </header>
                <p className="lab-desc">{lab.description}</p>
                <div className="lab-status">
                  <span className="status-dot"></span>
                  <span>Deploy status</span>
                  <a
                    className="badge"
                    href={lab.workflowUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={lab.badgeUrl}
                      alt={`Deploy status ${lab.name}`}
                      loading="lazy"
                    />
                  </a>
                </div>
                <div className="lab-actions">
                  <a className="primary small" href={lab.siteUrl} target="_blank" rel="noreferrer">
                    Open lab
                  </a>
                  <a className="ghost small" href={lab.repoUrl} target="_blank" rel="noreferrer">
                    Repo
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
