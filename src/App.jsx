import { useState } from 'react';
import eisencheckImage from './assets/eisencheck.png';
import afwijkingenImage from './assets/afwijkingen.png';
import turtleImage from './assets/turtle.png';
import './App.css';

const labs = [
  {
    name: 'Eisencheck Lab',
    description: 'Controleer eisen en publiceer direct via GitHub Pages.',
    siteUrl: 'https://userdevtec.github.io/eisencheck-lab',
    image: eisencheckImage,
    accent: '#c1e62e',
  },
  {
    name: 'Afwijkingen Lab',
    description: 'Registreer afwijkingen en check de deployment status direct.',
    siteUrl: 'https://userdevtec.github.io/afwijkingen-lab',
    image: afwijkingenImage,
    accent: '#630d80',
  },
  {
    name: 'Turtle Lab',
    description: 'Turtle tooling met dezelfde UI-stijl als dit dashboard.',
    siteUrl: 'https://userdevtec.github.io/turtle-lab',
    image: turtleImage,
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
  const [showHelp, setShowHelp] = useState(false);

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
          <a
            className="ghost"
            href="https://github.com/UserDevtec"
            target="_blank"
            rel="noreferrer"
          >
            GitHub profiel
          </a>
          <button className="primary" type="button" onClick={() => setShowHelp(true)}>
            Contact
          </button>
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
      <div className={`help-fab-wrap ${showHelp ? 'open' : ''}`}>
        <button
          className="help-fab"
          type="button"
          onClick={() => setShowHelp((prev) => !prev)}
        >
          ?
        </button>
        <span className="help-fab-label">Hulp nodig? Jonathan van der Gouwe</span>
      </div>
      {showHelp ? (
        <div className="help-overlay" onClick={() => setShowHelp(false)}>
          <div
            className="help-card"
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            <p className="stat-label">Help</p>
            <h3>Hulp nodig?</h3>
            <div className="help-contact">
              <a className="help-contact-item" href="mailto:jonathan.vandergouwe@croonwolterendros.nl">
                <span className="help-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="18" height="18">
                    <path
                      d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm0 0 8 6 8-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="help-contact-text">
                  jonathan.vandergouwe@croonwolterendros.nl
                </span>
              </a>
              <a className="help-contact-item" href="tel:+31633025446">
                <span className="help-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="18" height="18">
                    <path
                      d="M5.5 4.5h3l1.2 3-1.5 1.4a12 12 0 0 0 6.4 6.4l1.4-1.5 3 1.2v3a2 2 0 0 1-2 2A15.5 15.5 0 0 1 4 6.5a2 2 0 0 1 1.5-2Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="help-contact-text">+31 6 33025446</span>
              </a>
              <a
                className="help-contact-item"
                href="https://www.linkedin.com/in/jonathan-van-der-gouwe"
                target="_blank"
                rel="noreferrer"
              >
                <span className="help-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="18" height="18">
                    <path
                      d="M5.2 9.2h3.6v10.3H5.2V9.2Zm1.8-4a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2Zm6.2 4h3.4v1.4c.5-.9 1.8-1.7 3.6-1.7 3.2 0 3.9 2.1 3.9 5.4v5.2h-3.6v-4.6c0-1.9 0-3.1-1.7-3.1-1.3 0-2 1-2 2.4v5.3h-3.6V9.2Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="help-contact-text">LinkedIn profiel</span>
              </a>
            </div>
            <button className="ghost" type="button" onClick={() => setShowHelp(false)}>
              Sluiten
            </button>
          </div>
        </div>
      ) : null}
    </main>
  );
}

export default App;
