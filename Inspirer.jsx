/* global React */

/* ============================================
   Section "S'inspirer"
   ============================================ */

const PROFILS = [
  { label: "En famille", icon: "family_restroom", count: "32 idées", img: "assets/en-famille.jpg" },
  { label: "En couple", icon: "favorite", count: "24 idées", img: "assets/entre-amis.jpg" },
  { label: "Entre amis", icon: "groups", count: "41 idées", img: "assets/en-groupe.jpg" },
  { label: "Namurois", icon: "local_activity", count: "18 idées", img: "assets/namurois.jpg" },
];

const ITINERAIRES = [
  {
    duree: "1 jour",
    title: "L'essentiel de Namur",
    description: "Citadelle, vieille ville, confluent. Un parcours rythmé pour ne rien manquer en une journée.",
    img: "assets/citadelle.jpg",
  },
  {
    duree: "1 week-end",
    title: "Namur en deux temps",
    description: "Le patrimoine le samedi, la nature le dimanche — avec une nuit en bord de Meuse.",
    img: "assets/citadelle-waw.jpg",
  },
  {
    duree: "3 jours",
    title: "Namur & ses alentours",
    description: "Dinant, abbayes mosanes, vignobles. Le grand tour du pays namurois.",
    img: "assets/croisiere.jpg",
  },
];

const CONTEXTUELS = [
  { label: "Quand il pleut", icon: "rainy", color: "#2A8FBE" },
  { label: "Le soir", icon: "nights_stay", color: "#5E4B9C" },
  { label: "Le dimanche", icon: "wb_sunny", color: "#E78A1C" },
  { label: "Le lundi", icon: "coffee", color: "#8B5A2B" },
  { label: "En hiver", icon: "ac_unit", color: "#4A8DAB" },
  { label: "Bien-être", icon: "spa", color: "#4F8C5E" },
];

function Inspirer() {
  return (
    <section className="section vn-inspirer" id="inspirer">
      <div className="container">
        <div className="section-head">
          <div className="section-head-text">
            <div className="eyebrow">S'inspirer</div>
            <h2 className="display-md">Namur a mille visages.<br />Trouvez le vôtre.</h2>
          </div>
          <a href="#" className="link-arrow">
            Toutes les inspirations
            <span className="material-symbols-rounded">arrow_forward</span>
          </a>
        </div>

        {/* Profils */}
        <div className="vn-profils">
          {PROFILS.map((p) => (
            <a key={p.label} href="#" className="vn-profil-card zoom-hover">
              <div className="vn-profil-photo zoom-target">
                <img src={p.img} alt={p.label} />
              </div>
              <div className="vn-profil-meta">
                <div className="vn-profil-icon">
                  <span className="material-symbols-rounded">{p.icon}</span>
                </div>
                <div>
                  <div className="vn-profil-label">{p.label}</div>
                  <div className="vn-profil-count">{p.count}</div>
                </div>
                <div className="vn-profil-arrow">
                  <span className="material-symbols-rounded">arrow_outward</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Namur à votre rythme */}
        <div className="vn-itineraires">
          <div className="vn-itineraires-head">
            <h3 className="display-sm">Namur à votre rythme</h3>
            <div className="vn-itineraires-tabs">
              {ITINERAIRES.map((it, i) => (
                <button key={it.duree} className={`vn-itin-tab ${i === 0 ? 'is-active' : ''}`}>
                  {it.duree}
                </button>
              ))}
            </div>
          </div>
          <div className="vn-itin-grid">
            {ITINERAIRES.map((it) => (
              <article key={it.duree} className="vn-itin-card">
                <div className="vn-itin-thumb">
                  <img src={it.img} alt={it.title} />
                  <div className="vn-itin-badge">{it.duree}</div>
                </div>
                <div className="vn-itin-body">
                  <h4 className="vn-itin-title">{it.title}</h4>
                  <p className="vn-itin-desc">{it.description}</p>
                  <a href="#" className="link-arrow">Voir le parcours
                    <span className="material-symbols-rounded">arrow_forward</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Contextuels */}
        <div className="vn-contextuels">
          <div className="vn-contextuels-head">
            <div>
              <div className="eyebrow">Que faire&nbsp;?</div>
              <h3 className="display-sm" style={{ marginTop: 12 }}>Selon le moment, selon l'envie.</h3>
            </div>
          </div>
          <div className="vn-contextuels-grid">
            {CONTEXTUELS.map((c) => (
              <a key={c.label} href="#" className="vn-context-chip" style={{ '--ctx': c.color }}>
                <span className="material-symbols-rounded">{c.icon}</span>
                <span className="vn-context-label">{c.label}</span>
                <span className="material-symbols-rounded vn-context-arrow">arrow_outward</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

window.Inspirer = Inspirer;
