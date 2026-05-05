/* global React */

/* ============================================
   Citadelle — Hero
   ============================================ */
function CitadelleHero() {
  return (
    <section className="vn-cit-hero">
      <div className="vn-cit-hero-img">
        <img src="assets/citadelle.jpg" alt="La Citadelle de Namur dominant le confluent" />
        <div className="vn-cit-hero-overlay" />
      </div>

      <div className="container vn-cit-hero-inner">
        {/* Breadcrumb */}
        <nav className="vn-breadcrumb" aria-label="Fil d'Ariane">
          <a href="Visit Namur 2026 — Homepage.html">Accueil</a>
          <span className="material-symbols-rounded">chevron_right</span>
          <a href="#">Découvrir</a>
          <span className="material-symbols-rounded">chevron_right</span>
          <a href="#">Attractions</a>
          <span className="material-symbols-rounded">chevron_right</span>
          <span className="vn-breadcrumb-current">Citadelle de Namur</span>
        </nav>

        <div className="vn-cit-hero-content">
          <div className="vn-cit-hero-eyebrow">
            <span className="vn-cit-tag">Incontournable</span>
            <span className="vn-cit-meta">Citadelle de Namur · Wallonie</span>
          </div>

          <h1 className="vn-cit-hero-title">
            La Citadelle :<br />
            <span className="vn-cit-hero-title-accent">2&nbsp;000 ans d'histoire</span><br />
            à vos pieds.
          </h1>

          <p className="vn-cit-hero-lede">
            Forteresse, terrasse panoramique, jardins suspendus et souterrains millénaires —
            le cœur historique de Namur, dressé au confluent de la Sambre et de la Meuse.
          </p>

          <div className="vn-cit-hero-ctas">
            <a href="#billetterie" className="btn btn-dark btn-lg">
              Acheter mon ticket
              <span className="material-symbols-rounded">confirmation_number</span>
            </a>
            <a href="#telepherique" className="btn btn-ghost-light btn-lg">
              Réserver le Téléphérique
              <span className="material-symbols-rounded">tram</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="vn-cit-hero-scroll">
        <span>Découvrir le lieu</span>
        <span className="material-symbols-rounded">south</span>
      </div>
    </section>
  );
}

/* ============================================
   Aperçu — En un coup d'œil
   ============================================ */
const APERCU = [
  { icon: "schedule",     label: "Durée",   value: "3 heures",                              detail: "Visite recommandée" },
  { icon: "directions",   label: "Accès",   value: "À pied · Voiture · Téléphérique",       detail: "3 façons d'y arriver" },
  { icon: "groups",       label: "Public",  value: "Familles · Couples · Passionnés",       detail: "Pour tous les profils" },
  { icon: "star",         label: "Le +",    value: "Vue panoramique sur le confluent",      detail: "Sambre & Meuse" },
];

function CitadelleApercu() {
  return (
    <section className="section vn-cit-apercu">
      <div className="container">
        <div className="vn-cit-apercu-head">
          <div className="eyebrow">En un coup d'œil</div>
          <h2 className="display-md">L'essentiel,<br />avant de partir</h2>
        </div>

        <div className="vn-cit-apercu-grid">
          {APERCU.map((a) => (
            <div key={a.label} className="vn-cit-apercu-card">
              <div className="vn-cit-apercu-icon">
                <span className="material-symbols-rounded">{a.icon}</span>
              </div>
              <div className="vn-cit-apercu-label">{a.label}</div>
              <div className="vn-cit-apercu-value">{a.value}</div>
              <div className="vn-cit-apercu-detail">{a.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================
   Parcours Expérience — storytelling
   ============================================ */
const PARCOURS = [
  {
    n: "01",
    titre: "Les souterrains",
    accroche: "Mystère, fraîcheur et ambiance historique.",
    texte: "Plus de 500 mètres de galeries creusées dans la roche, témoins d'une stratégie défensive vieille de plusieurs siècles. La température y reste constante, autour de 13°C — frissons assurés, été comme hiver.",
    img: "assets/citadelle-waw.jpg",
    facts: ["500 m de galeries", "13°C toute l'année", "Visite guidée incluse"],
    align: "left",
  },
  {
    n: "02",
    titre: "Le Centre Terra Nova",
    accroche: "Immersion dans 2 000 ans d'histoire.",
    texte: "Centre d'interprétation moderne et interactif : reconstitutions, projections immersives et collections rares déroulent vingt siècles de la vie sur l'éperon rocheux. Un point d'ancrage pour comprendre Namur.",
    img: "assets/telepherique.jpg",
    facts: ["1 200 m² d'expo", "Multilingue", "Audioguide gratuit"],
    align: "right",
  },
  {
    n: "03",
    titre: "Les jardins & la Tortue de Jan Fabre",
    accroche: "Art contemporain et nature en plein air.",
    texte: "Plus de 80 hectares de parc et de remparts, ponctués d'œuvres et de points de vue. La Tortue géante de Jan Fabre — clin d'œil monumental — veille sur le confluent depuis 2009.",
    img: "assets/croisiere.jpg",
    facts: ["80 ha de promenade", "Œuvre de Jan Fabre", "Accès libre"],
    align: "left",
  },
];

function CitadelleParcours() {
  return (
    <section className="section section--wash vn-cit-parcours" id="parcours">
      <div className="container">
        <div className="section-head">
          <div className="section-head-text">
            <div className="eyebrow">Parcours expérience</div>
            <h2 className="display-md">Trois manières<br />de vivre le lieu</h2>
          </div>
          <p className="section-head-lede">
            Un récit en trois temps pour traverser la Citadelle — de ses entrailles minérales
            à ses jardins panoramiques. Choisissez votre angle, ou faites les trois.
          </p>
        </div>

        <div className="vn-cit-parcours-list">
          {PARCOURS.map((p) => (
            <article key={p.n} className={`vn-cit-parcours-row vn-cit-parcours-row--${p.align}`}>
              <div className="vn-cit-parcours-img">
                <img src={p.img} alt={p.titre} />
                <div className="vn-cit-parcours-num">{p.n}</div>
              </div>
              <div className="vn-cit-parcours-text">
                <h3 className="vn-cit-parcours-title">{p.titre}</h3>
                <p className="vn-cit-parcours-accroche">{p.accroche}</p>
                <p className="vn-cit-parcours-body">{p.texte}</p>
                <ul className="vn-cit-parcours-facts">
                  {p.facts.map((f) => (
                    <li key={f}><span className="material-symbols-rounded">check</span>{f}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

window.CitadelleHero = CitadelleHero;
window.CitadelleApercu = CitadelleApercu;
window.CitadelleParcours = CitadelleParcours;
