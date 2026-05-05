/* global React */
const { useState, useRef, useEffect } = React;

/* ============================================
   Header — secondary bar + main nav + lang + search
   ============================================ */
const SECONDARY_LINKS = [
  { label: "Partenaires", icon: "handshake" },
  { label: "Presse", icon: "newspaper" },
  { label: "Service Groupes", icon: "groups" },
  { label: "Qui sommes-nous ?", icon: "info" },
];

const MAIN_NAV = [
  {
    label: "Découvrir",
    items: [
      { label: "Attractions", icon: "attractions" },
      { label: "Croisières", icon: "directions_boat" },
      { label: "Au bord de l'eau", icon: "water" },
      { label: "En groupe", icon: "groups" },
      { label: "Shopping", icon: "shopping_bag" },
      { label: "Nos applications", icon: "smartphone" },
    ],
  },
  {
    label: "Explorer",
    items: [
      { label: "En balade", icon: "hiking" },
      { label: "Visites guidées", icon: "tour" },
      { label: "À vélo", icon: "directions_bike" },
      { label: "Musées", icon: "museum" },
      { label: "Culture", icon: "theater_comedy" },
      { label: "Patrimoine", icon: "castle" },
    ],
  },
  {
    label: "Boire & Manger",
    items: [
      { label: "Bars · Coups de cœur", icon: "local_bar" },
      { label: "Restaurants · Coups de cœur", icon: "restaurant" },
    ],
  },
  {
    label: "Séjourner",
    items: [
      { label: "Se loger", icon: "hotel", sub: ["Hôtels", "Meublés de tourisme", "Sur l'eau", "Maison d'hôtes", "Camping", "Motor-home", "Auberge de jeunesse"] },
      { label: "Se divertir", icon: "celebration" },
      { label: "Nos publications", icon: "menu_book" },
      { label: "Accessibilité", icon: "accessible" },
      { label: "Se déplacer", icon: "directions_transit" },
      { label: "Nous contacter", icon: "mail" },
    ],
  },
];

const LANGS = [
  { code: "FR", flag: "🇫🇷" },
  { code: "NL", flag: "🇳🇱" },
  { code: "UK", flag: "🇬🇧" },
  { code: "DE", flag: "🇩🇪" },
  { code: "ES", flag: "🇪🇸" },
  { code: "IT", flag: "🇮🇹" },
];

function Header({ scrolled }) {
  const [openMenu, setOpenMenu] = useState(null);
  const [langOpen, setLangOpen] = useState(false);
  const [lang, setLang] = useState("FR");
  const [searchFocused, setSearchFocused] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <header className={`vn-header ${scrolled ? 'vn-header--scrolled' : ''}`}>
      {/* Secondary bar */}
      <div className="vn-header-secondary">
        <div className="container vn-header-secondary-inner">
          <div className="vn-secondary-links">
            {SECONDARY_LINKS.map((l) => (
              <a key={l.label} href="#" className="vn-secondary-link">
                <span className="material-symbols-rounded">{l.icon}</span>
                {l.label}
              </a>
            ))}
          </div>
          <div className="vn-secondary-meta">
            <span className="vn-secondary-meta-item">
              <span className="material-symbols-rounded">wb_sunny</span>
              Namur · 14°C
            </span>
            <span className="vn-secondary-meta-item">
              <span className="material-symbols-rounded">schedule</span>
              Office ouvert · 09:00 → 18:00
            </span>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="vn-header-main">
        <div className="container vn-header-main-inner">
          <a href="#" className="vn-logo" aria-label="Visit Namur">
            <img src="assets/logo-visit-namur.jpg" alt="Visit Namur" className="vn-logo-img" />
          </a>

          <nav className="vn-nav" onMouseLeave={() => setOpenMenu(null)}>
            {MAIN_NAV.map((m) => (
              <div
                key={m.label}
                className={`vn-nav-item ${openMenu === m.label ? 'vn-nav-item--open' : ''}`}
                onMouseEnter={() => setOpenMenu(m.label)}
              >
                <button className="vn-nav-trigger">
                  {m.label}
                  <span className="material-symbols-rounded">expand_more</span>
                </button>
                {openMenu === m.label && (
                  <div className="vn-megamenu">
                    <div className="vn-megamenu-grid">
                      {m.items.map((it) => (
                        <div key={it.label} className="vn-megamenu-cell">
                          <a href="#" className="vn-megamenu-link">
                            <span className="material-symbols-rounded">{it.icon}</span>
                            <span>
                              <span className="vn-megamenu-link-label">{it.label}</span>
                              {it.sub && (
                                <span className="vn-megamenu-sub">
                                  {it.sub.join(' · ')}
                                </span>
                              )}
                            </span>
                          </a>
                        </div>
                      ))}
                    </div>
                    <div className="vn-megamenu-feature">
                      <div className="placeholder placeholder--turquoise" style={{ aspectRatio: '4/3' }}>
                        <span className="placeholder-label">Mise en avant · {m.label}</span>
                      </div>
                      <div className="vn-megamenu-feature-text">
                        <div className="eyebrow">À ne pas manquer</div>
                        <h4 className="display-sm" style={{ margin: '12px 0 8px' }}>
                          Le confluent comme vous ne l'avez jamais vu
                        </h4>
                        <a href="#" className="link-arrow">
                          Lire l'histoire
                          <span className="material-symbols-rounded">arrow_forward</span>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="vn-header-actions">
            <div className={`vn-search ${searchFocused ? 'vn-search--focused' : ''}`}>
              <span className="material-symbols-rounded">search</span>
              <input
                type="text"
                placeholder="Rechercher un lieu, un événement…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
              />
              {searchFocused && (
                <div className="vn-search-suggest">
                  <div className="vn-search-suggest-section">Suggestions</div>
                  {["Citadelle de Namur", "Téléphérique", "Musée Félicien Rops", "Croisière sur la Meuse", "Que faire ce week-end ?"].map((s) => (
                    <a key={s} href="#" className="vn-search-suggest-item">
                      <span className="material-symbols-rounded">north_east</span>
                      {s}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div className="vn-lang">
              <button className="vn-lang-trigger" onClick={() => setLangOpen(!langOpen)}>
                <span className="vn-lang-flag">{LANGS.find(l => l.code === lang).flag}</span>
                <span className="vn-lang-code">{lang}</span>
                <span className="material-symbols-rounded">expand_more</span>
              </button>
              {langOpen && (
                <div className="vn-lang-menu" onMouseLeave={() => setLangOpen(false)}>
                  {LANGS.map((l) => (
                    <button
                      key={l.code}
                      className={`vn-lang-option ${l.code === lang ? 'is-active' : ''}`}
                      onClick={() => { setLang(l.code); setLangOpen(false); }}
                    >
                      <span className="vn-lang-flag">{l.flag}</span>
                      <span className="vn-lang-code">{l.code}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

window.Header = Header;
