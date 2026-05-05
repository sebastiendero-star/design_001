/* global React */
const { useState: useStateCit } = React;

/* ============================================
   Carte interactive & accès
   ============================================ */
const CARTE_POIS = [
  { icon: "local_parking",  label: "Parking principal",        type: "Stationnement",  x: 28, y: 52 },
  { icon: "local_parking",  label: "Parking belvédère",        type: "Stationnement",  x: 70, y: 28 },
  { icon: "tram",           label: "Téléphérique — Arrivée",   type: "Accès",          x: 60, y: 46 },
  { icon: "photo_camera",   label: "Point de vue confluent",   type: "Panorama",       x: 75, y: 60 },
  { icon: "photo_camera",   label: "Tortue de Jan Fabre",      type: "Panorama",       x: 50, y: 38 },
  { icon: "restaurant",     label: "La Buvette",               type: "Restauration",   x: 45, y: 68 },
  { icon: "tour",           label: "Centre Terra Nova",        type: "Visite",         x: 40, y: 45 },
  { icon: "stairs",         label: "Souterrains",              type: "Visite",         x: 55, y: 55 },
];

function CitadelleCarte() {
  const [active, setActive] = useStateCit(0);

  return (
    <section className="section vn-cit-carte" id="acces">
      <div className="container">
        <div className="section-head">
          <div className="section-head-text">
            <div className="eyebrow">Carte &amp; accès</div>
            <h2 className="display-md">S'orienter<br />sur le site</h2>
          </div>
          <a href="#" className="btn btn-outline">
            Itinéraire Google Maps
            <span className="material-symbols-rounded">map</span>
          </a>
        </div>

        <div className="vn-cit-carte-wrap">
          {/* Map (stylised SVG) */}
          <div className="vn-cit-carte-map">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="vn-cit-carte-svg">
              {/* River */}
              <path d="M 0 78 Q 25 70, 45 78 T 100 76 L 100 100 L 0 100 Z" fill="var(--vn-turquoise-soft)" />
              <path d="M 0 78 Q 25 70, 45 78 T 100 76" fill="none" stroke="var(--vn-turquoise)" strokeWidth="0.4" opacity="0.5" />
              {/* Citadelle plateau */}
              <path d="M 18 28 Q 30 18, 55 22 T 88 30 Q 92 50, 78 64 Q 60 72, 35 68 Q 18 60, 14 44 Z"
                    fill="var(--vn-sage-soft)" stroke="var(--vn-green)" strokeWidth="0.3" strokeDasharray="0.8 0.6" />
              {/* Path lines */}
              <path d="M 28 52 L 40 45 L 50 38 L 60 46 L 70 28" fill="none" stroke="var(--vn-green)" strokeWidth="0.25" strokeDasharray="0.8 0.8" opacity="0.6" />
              <path d="M 45 68 L 55 55 L 75 60" fill="none" stroke="var(--vn-green)" strokeWidth="0.25" strokeDasharray="0.8 0.8" opacity="0.6" />
              {/* Forest dots */}
              {Array.from({ length: 24 }).map((_, i) => {
                const x = 15 + (i * 7) % 75;
                const y = 22 + ((i * 13) % 45);
                return <circle key={i} cx={x} cy={y} r="0.6" fill="var(--vn-green)" opacity="0.25" />;
              })}
            </svg>

            {/* POI markers */}
            {CARTE_POIS.map((p, i) => (
              <button
                key={p.label}
                className={`vn-cit-carte-pin ${active === i ? 'is-active' : ''}`}
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
                onClick={() => setActive(i)}
                aria-label={p.label}
              >
                <span className="vn-cit-carte-pin-dot">
                  <span className="material-symbols-rounded">{p.icon}</span>
                </span>
                {active === i && <span className="vn-cit-carte-pin-label">{p.label}</span>}
              </button>
            ))}

            {/* Compass */}
            <div className="vn-cit-carte-compass">
              <span className="vn-cit-carte-n">N</span>
              <svg viewBox="0 0 24 24" width="36" height="36"><path d="M12 2 L15 12 L12 10 L9 12 Z" fill="var(--vn-red)" /><path d="M12 22 L9 12 L12 14 L15 12 Z" fill="var(--vn-ink)" opacity="0.4" /></svg>
            </div>

            {/* Scale */}
            <div className="vn-cit-carte-scale">
              <span className="vn-cit-carte-scale-bar" />
              <span>200 m</span>
            </div>
          </div>

          {/* Legend / list */}
          <aside className="vn-cit-carte-legend">
            <div className="vn-cit-carte-legend-head">
              <h3>Points d'intérêt</h3>
              <span>{CARTE_POIS.length} sur la carte</span>
            </div>
            <ul>
              {CARTE_POIS.map((p, i) => (
                <li key={p.label}>
                  <button
                    className={`vn-cit-carte-listitem ${active === i ? 'is-active' : ''}`}
                    onClick={() => setActive(i)}
                  >
                    <span className="vn-cit-carte-listitem-icon">
                      <span className="material-symbols-rounded">{p.icon}</span>
                    </span>
                    <span className="vn-cit-carte-listitem-text">
                      <span className="vn-cit-carte-listitem-label">{p.label}</span>
                      <span className="vn-cit-carte-listitem-type">{p.type}</span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* ============================================
   Infos pratiques — accordéon
   ============================================ */
const INFOS = [
  {
    titre: "Horaires & tarifs",
    icon: "schedule",
    body: (
      <div className="vn-cit-infos-cols">
        <div>
          <h5>Horaires d'ouverture</h5>
          <ul className="vn-cit-infos-list">
            <li><strong>Avril → octobre</strong><span>10h00 — 18h30</span></li>
            <li><strong>Novembre → mars</strong><span>11h00 — 17h00</span></li>
            <li><strong>Fermetures</strong><span>1ᵉʳ janvier &amp; 25 décembre</span></li>
          </ul>
        </div>
        <div>
          <h5>Tarifs (adulte)</h5>
          <ul className="vn-cit-infos-list">
            <li><strong>Pass Citadelle</strong><span>14 €</span></li>
            <li><strong>+ Téléphérique</strong><span>22 €</span></li>
            <li><strong>Famille (2A + 2E)</strong><span>42 €</span></li>
            <li><strong>– 12 ans</strong><span>Gratuit</span></li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    titre: "Accessibilité PMR",
    icon: "accessible",
    body: (
      <div className="vn-cit-infos-pmr">
        <p>
          La Citadelle s'efforce d'accueillir tous les publics. Les espaces extérieurs
          principaux et le Centre Terra Nova sont accessibles aux fauteuils roulants ;
          certaines zones (souterrains, remparts) restent contraignantes en raison du
          relief naturel du site.
        </p>
        <ul className="vn-cit-infos-bullets">
          <li><span className="material-symbols-rounded">check</span> Parking PMR à proximité directe de Terra Nova</li>
          <li><span className="material-symbols-rounded">check</span> Téléphérique entièrement accessible</li>
          <li><span className="material-symbols-rounded">check</span> Toilettes adaptées (3 emplacements)</li>
          <li><span className="material-symbols-rounded">close</span> Souterrains : non accessibles en fauteuil</li>
        </ul>
        <p className="vn-cit-infos-help">
          Besoin d'une assistance dédiée ? <a href="#">Contactez le service Accueil</a> au moins 48 h avant votre venue.
        </p>
      </div>
    ),
  },
  {
    titre: "Où manger à proximité ?",
    icon: "restaurant",
    body: (
      <div className="vn-cit-infos-eat">
        <ul className="vn-cit-infos-eat-list">
          <li>
            <strong>La Buvette de la Citadelle</strong>
            <span>Snacks, salades, terrasse panoramique · Sur le site</span>
          </li>
          <li>
            <strong>Le Bistrot Belvédère</strong>
            <span>Cuisine bistronomique wallonne · 5 min à pied</span>
          </li>
          <li>
            <strong>Brasserie François</strong>
            <span>Place Saint-Aubain · Centre-ville (téléphérique + 4 min)</span>
          </li>
          <li>
            <strong>Marché des Producteurs</strong>
            <span>Place du Marché aux Légumes · Dimanches</span>
          </li>
        </ul>
        <a href="#" className="vn-cit-infos-eat-cta">
          Voir tous les restaurants à proximité
          <span className="material-symbols-rounded">arrow_forward</span>
        </a>
      </div>
    ),
  },
  {
    titre: "Nous contacter",
    icon: "contact_support",
    body: (
      <div className="vn-cit-infos-contact">
        <div className="vn-cit-infos-contact-grid">
          <a href="tel:+3281246449" className="vn-cit-infos-contact-card">
            <span className="vn-cit-infos-contact-icon"><span className="material-symbols-rounded">call</span></span>
            <span className="vn-cit-infos-contact-label">Téléphone</span>
            <span className="vn-cit-infos-contact-value">+32 81 24 64 49</span>
            <span className="vn-cit-infos-contact-detail">Lun → Ven · 9h — 17h</span>
          </a>
          <a href="mailto:citadelle@visitnamur.eu" className="vn-cit-infos-contact-card">
            <span className="vn-cit-infos-contact-icon"><span className="material-symbols-rounded">mail</span></span>
            <span className="vn-cit-infos-contact-label">E-mail</span>
            <span className="vn-cit-infos-contact-value">citadelle@visitnamur.eu</span>
            <span className="vn-cit-infos-contact-detail">Réponse sous 48 h ouvrées</span>
          </a>
          <a href="#" className="vn-cit-infos-contact-card">
            <span className="vn-cit-infos-contact-icon"><span className="material-symbols-rounded">storefront</span></span>
            <span className="vn-cit-infos-contact-label">Accueil sur place</span>
            <span className="vn-cit-infos-contact-value">Centre Terra Nova</span>
            <span className="vn-cit-infos-contact-detail">Route Merveilleuse, 64 — 5000 Namur</span>
          </a>
          <a href="#" className="vn-cit-infos-contact-card">
            <span className="vn-cit-infos-contact-icon"><span className="material-symbols-rounded">groups</span></span>
            <span className="vn-cit-infos-contact-label">Service Groupes</span>
            <span className="vn-cit-infos-contact-value">groupes@visitnamur.eu</span>
            <span className="vn-cit-infos-contact-detail">Réservations &amp; visites privées</span>
          </a>
        </div>
        <p className="vn-cit-infos-help">
          Service Presse, demande de tournage, partenariats : <a href="#">visitnamur.eu/pro</a>
        </p>
      </div>
    ),
  },
  {
    titre: "Plan d'accès & itinéraire",
    icon: "map",
    body: (
      <div className="vn-cit-infos-map">
        <div className="vn-cit-infos-map-frame">
          <iframe
            title="Plan d'accès — Citadelle de Namur"
            src="https://www.google.com/maps?q=Citadelle+de+Namur,+Route+Merveilleuse+64,+5000+Namur,+Belgique&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <div className="vn-cit-infos-map-side">
          <div className="vn-cit-infos-map-addr">
            <span className="material-symbols-rounded">location_on</span>
            <div>
              <strong>Citadelle de Namur</strong>
              <span>Route Merveilleuse 64<br />5000 Namur · Belgique</span>
            </div>
          </div>
          <ul className="vn-cit-infos-map-modes">
            <li>
              <span className="vn-cit-infos-map-mode-icon"><span className="material-symbols-rounded">directions_car</span></span>
              <div>
                <strong>En voiture</strong>
                <span>Sortie 14 (E411) · Parking sur place — 6 €/jour</span>
              </div>
            </li>
            <li>
              <span className="vn-cit-infos-map-mode-icon"><span className="material-symbols-rounded">tram</span></span>
              <div>
                <strong>Téléphérique</strong>
                <span>Départ Place Maurice Servais · Toutes les 5 min</span>
              </div>
            </li>
            <li>
              <span className="vn-cit-infos-map-mode-icon"><span className="material-symbols-rounded">train</span></span>
              <div>
                <strong>Train</strong>
                <span>Gare de Namur · 15 min à pied via le téléphérique</span>
              </div>
            </li>
            <li>
              <span className="vn-cit-infos-map-mode-icon"><span className="material-symbols-rounded">directions_walk</span></span>
              <div>
                <strong>À pied</strong>
                <span>20 min depuis le centre-ville par la Route Merveilleuse</span>
              </div>
            </li>
          </ul>
          <a href="https://www.google.com/maps/dir/?api=1&destination=Citadelle+de+Namur" target="_blank" rel="noopener noreferrer" className="vn-cit-infos-eat-cta">
            Lancer l'itinéraire Google Maps
            <span className="material-symbols-rounded">arrow_forward</span>
          </a>
        </div>
      </div>
    ),
  },
];

function CitadelleInfos() {
  const [open, setOpen] = useStateCit(0);

  return (
    <section className="section section--wash vn-cit-infos" id="infos">
      <div className="container vn-cit-infos-container">
        <div className="vn-cit-infos-head">
          <div className="eyebrow">Informations pratiques</div>
          <h2 className="display-md">Tout ce qu'il faut savoir,<br />sans détours.</h2>
        </div>

        <div className="vn-cit-infos-accordion">
          {INFOS.map((it, i) => (
            <div key={it.titre} className={`vn-cit-infos-item ${open === i ? 'is-open' : ''}`}>
              <button className="vn-cit-infos-trigger" onClick={() => setOpen(open === i ? -1 : i)}>
                <span className="vn-cit-infos-trigger-icon">
                  <span className="material-symbols-rounded">{it.icon}</span>
                </span>
                <span className="vn-cit-infos-trigger-title">{it.titre}</span>
                <span className="material-symbols-rounded vn-cit-infos-chevron">expand_more</span>
              </button>
              <div className="vn-cit-infos-body">
                <div className="vn-cit-infos-body-inner">{it.body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================
   Conclusion CTA
   ============================================ */
function CitadelleCTA() {
  return (
    <section className="section vn-cit-cta-band">
      <div className="container">
        <div className="vn-cit-cta-card">
          <div className="vn-cit-cta-text">
            <div className="eyebrow eyebrow--light">Prêt·e à monter ?</div>
            <h2 className="display-md">Réservez votre Pass Citadelle.<br />Téléphérique inclus.</h2>
            <p>Billetterie 100% en ligne · annulation gratuite jusqu'à 24 h avant la visite.</p>
          </div>
          <div className="vn-cit-cta-actions">
            <a href="#" className="btn btn-bg btn-lg">
              Acheter mon ticket
              <span className="material-symbols-rounded">confirmation_number</span>
            </a>
            <a href="#" className="btn btn-ghost-light btn-lg">
              Visites guidées
              <span className="material-symbols-rounded">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

window.CitadelleCarte = CitadelleCarte;
window.CitadelleInfos = CitadelleInfos;
window.CitadelleCTA = CitadelleCTA;
