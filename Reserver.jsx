/* global React */

/* ============================================
   Section "Réserver"
   ============================================ */

const BILLETTERIE = [
  { name: "Citadelle de Namur", from: "12 €", icon: "castle", img: "assets/citadelle.jpg", desc: "Souterrains, Terra Nova et jardins" },
  { name: "Téléphérique", from: "8 €", icon: "tram", img: "assets/telepherique.jpg", desc: "Aller-retour panoramique vers la Citadelle" },
  { name: "Croisière Meuse", from: "15 €", icon: "directions_boat", img: "assets/croisiere.jpg", desc: "1h30 commentée, départ Place Saint-Hilaire" },
  { name: "Musée Félicien Rops", from: "6 €", icon: "palette", img: "assets/citadelle-waw.jpg", desc: "Collection permanente + expositions temporaires" },
];

const VISITES = [
  { title: "Namur secret · ruelles oubliées", duration: "2h", price: "12 €", places: "8 places restantes" },
  { title: "Sur les pas de Félicien Rops", duration: "1h30", price: "10 €", places: "Complet · liste d'attente" },
  { title: "Citadelle by night · lanterne en main", duration: "2h30", price: "18 €", places: "5 places restantes" },
];

function Reserver() {
  return (
    <section className="section vn-reserver" id="reserver">
      <div className="container">
        <div className="section-head">
          <div className="section-head-text">
            <div className="eyebrow">Réserver</div>
            <h2 className="display-md">Passez à l'action,<br />en quelques clics.</h2>
          </div>
        </div>

        {/* Billetterie */}
        <div className="vn-reserver-block">
          <div className="vn-reserver-block-head">
            <h3 className="display-sm">Billetterie partenaires</h3>
          </div>
          <div className="vn-billet-grid">
            {BILLETTERIE.map((b) => (
              <article key={b.name} className="vn-billet-card">
                <div className="vn-billet-thumb">
                  <img src={b.img} alt={b.name} />
                  <div className="vn-billet-icon">
                    <span className="material-symbols-rounded">{b.icon}</span>
                  </div>
                </div>
                <div className="vn-billet-body">
                  <div className="vn-billet-meta">
                    <h4 className="vn-billet-name">{b.name}</h4>
                    <div className="vn-billet-from">
                      <span>Dès</span>
                      <strong>{b.from}</strong>
                    </div>
                  </div>
                  <p className="vn-billet-desc">{b.desc}</p>
                  <button className="btn btn-primary vn-billet-cta">
                    Acheter mon ticket
                    <span className="material-symbols-rounded">arrow_forward</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Visites guidées + Groupes */}
        <div className="vn-reserver-bottom">
          <div className="vn-reserver-visites">
            <div className="vn-reserver-block-head">
              <h3 className="display-sm">Visites guidées thématiques</h3>
            </div>
            <ul className="vn-visites-list">
              {VISITES.map((v) => (
                <li key={v.title} className="vn-visite-item">
                  <div className="vn-visite-info">
                    <h4 className="vn-visite-title">{v.title}</h4>
                    <div className="vn-visite-meta">
                      <span><span className="material-symbols-rounded">schedule</span>{v.duration}</span>
                      <span><span className="material-symbols-rounded">euro</span>{v.price}</span>
                      <span><span className="material-symbols-rounded">event_seat</span>{v.places}</span>
                    </div>
                  </div>
                  <button className="btn btn-ghost">Réserver</button>
                </li>
              ))}
            </ul>
          </div>

          <aside className="vn-reserver-groupes">
            <div className="vn-groupes-tag">
              <span className="material-symbols-rounded">groups</span>
              Service Groupes
            </div>
            <h3 className="vn-groupes-title">Organiser une visite<br />en groupe&nbsp;?</h3>
            <p className="vn-groupes-desc">
              De 10 à 200 personnes — séjours sur mesure, programmes culturels, dégustations,
              accueils privatifs. Une équipe dédiée vous répond en 24 heures.
            </p>
            <div className="vn-groupes-contact">
              <a href="mailto:groupes@visitnamur.eu" className="vn-groupes-mail">
                <span className="material-symbols-rounded">mail</span>
                groupes@visitnamur.eu
              </a>
              <a href="tel:+3281000000" className="vn-groupes-mail">
                <span className="material-symbols-rounded">call</span>
                +32 81 24 64 49
              </a>
            </div>
            <a href="#" className="btn btn-on-photo vn-groupes-cta">
              Faire une demande
              <span className="material-symbols-rounded">arrow_forward</span>
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}

window.Reserver = Reserver;
