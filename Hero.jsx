/* global React */

/* ============================================
   Hero — two variations
   ============================================ */

function HeroV1() {
  return (
    <section className="vn-hero vn-hero--v1">
      <img className="vn-hero-img" src="assets/citadelle.jpg" alt="Citadelle de Namur depuis le confluent" />
      <div className="vn-hero-overlay" />

      <div className="container vn-hero-content">
        <div className="vn-hero-eyebrow">
          <span className="vn-hero-eyebrow-dot" />
          Office du Tourisme · Namur, Belgique
        </div>
        <h1 className="display-xl vn-hero-title">
          Là où la Sambre<br />embrasse la Meuse.
        </h1>
        <p className="vn-hero-lede">
          Citadelle millénaire, ruelles pavées, terrasses au bord de l'eau —
          Namur se vit lentement, et se raconte longtemps.
        </p>
        <div className="vn-hero-actions">
          <a href="#" className="btn btn-primary">
            Découvrir Namur
            <span className="material-symbols-rounded">arrow_forward</span>
          </a>
          <a href="#" className="btn btn-on-photo">
            <span className="material-symbols-rounded">play_circle</span>
            Voir la vidéo · 1:24
          </a>
        </div>
      </div>

      <div className="vn-hero-scroll">
        <span>Faites défiler</span>
        <span className="material-symbols-rounded">south</span>
      </div>

      <div className="vn-hero-credit">
        © Photo — Confluent vu depuis la Citadelle, automne
      </div>
    </section>
  );
}

function HeroV2() {
  return (
    <section className="vn-hero vn-hero--v2">
      <img className="vn-hero-img" src="assets/citadelle-waw.jpg" alt="Confluent de Namur au coucher du soleil" />
      <div className="vn-hero-overlay vn-hero-overlay--v2" />

      <div className="container vn-hero-content vn-hero-content--v2">
        <div className="vn-hero-content-top">
          <div className="vn-hero-eyebrow">
            <span className="vn-hero-eyebrow-dot" />
            Bienvenue à Namur
          </div>
          <h1 className="display-xl vn-hero-title">
            Capitale<br />de la Wallonie.<br />
            <span className="vn-hero-title-accent">À taille humaine.</span>
          </h1>
        </div>

        <div className="vn-hero-strip">
          <div className="vn-hero-strip-inner container">
            <div className="vn-hero-strip-cell">
              <div className="vn-hero-strip-label">
                <span className="material-symbols-rounded">wb_sunny</span>
                Aujourd'hui
              </div>
              <div className="vn-hero-strip-value">14° · Ensoleillé</div>
              <div className="vn-hero-strip-sub">Idéal pour la Citadelle</div>
            </div>
            <div className="vn-hero-strip-divider" />
            <div className="vn-hero-strip-cell">
              <div className="vn-hero-strip-label">
                <span className="material-symbols-rounded">event</span>
                Ce soir à Namur
              </div>
              <div className="vn-hero-strip-value">Concert · Théâtre Royal</div>
              <div className="vn-hero-strip-sub">20:30 · Encore 12 places</div>
            </div>
            <div className="vn-hero-strip-divider" />
            <div className="vn-hero-strip-cell">
              <div className="vn-hero-strip-label">
                <span className="material-symbols-rounded">schedule</span>
                Ouvert maintenant
              </div>
              <div className="vn-hero-strip-value">36 lieux à découvrir</div>
              <div className="vn-hero-strip-sub">Musées · Restaurants · Bars</div>
            </div>
            <a href="#" className="btn btn-primary vn-hero-strip-cta">
              Planifier ma journée
              <span className="material-symbols-rounded">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

window.HeroV1 = HeroV1;
window.HeroV2 = HeroV2;
