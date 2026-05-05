/* global React */
const { useState: useStateQA } = React;

/* ============================================
   Quick Access (floating bar, minimisable) + Footer + BackToTop
   ============================================ */

function QuickAccess() {
  const [open, setOpen] = useStateQA(true);

  if (!open) {
    return (
      <button className="vn-quick-toggle" onClick={() => setOpen(true)} aria-label="Ouvrir l'accès rapide">
        <span className="material-symbols-rounded">bolt</span>
      </button>
    );
  }

  return (
    <div className="vn-quick" role="toolbar" aria-label="Accès rapide">
      <button className="vn-quick-btn">
        <span className="material-symbols-rounded">my_location</span>
        <span className="vn-quick-label">Où suis-je&nbsp;?</span>
      </button>
      <span className="vn-quick-sep" />
      <button className="vn-quick-btn">
        <span className="material-symbols-rounded">schedule</span>
        <span className="vn-quick-label">Ouvert maintenant</span>
        <span className="vn-quick-badge">36</span>
      </button>
      <span className="vn-quick-sep" />
      <button className="vn-quick-btn">
        <span className="material-symbols-rounded">wb_sunny</span>
        <span className="vn-quick-label">Météo &amp; Trafic</span>
      </button>
      <span className="vn-quick-sep" />
      <button className="vn-quick-btn">
        <span className="material-symbols-rounded">groups</span>
        <span className="vn-quick-label">Groupes</span>
      </button>
      <span className="vn-quick-sep" />
      <button className="vn-quick-close" onClick={() => setOpen(false)} aria-label="Réduire">
        <span className="material-symbols-rounded">close</span>
      </button>
    </div>
  );
}

function BackToTop({ visible }) {
  return (
    <button
      className={`vn-totop ${visible ? 'is-visible' : ''}`}
      aria-label="Retour en haut de page"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <span className="material-symbols-rounded">arrow_upward</span>
    </button>
  );
}

const FOOTER_NAV = {
  "Découvrir": ["Attractions", "Croisières", "Au bord de l'eau", "En groupe", "Shopping", "Nos applications"],
  "Explorer": ["En balade", "Visites guidées", "À vélo", "Musées", "Culture", "Patrimoine"],
  "Boire & Manger": ["Bars", "Restaurants", "Producteurs locaux"],
  "Séjourner": ["Se loger", "Se divertir", "Accessibilité", "Se déplacer", "Nous contacter"],
};

const SOCIAL = [
  { name: "Instagram", icon: "M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm10.5 1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" },
  { name: "Facebook", icon: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" },
  { name: "YouTube", icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
];

function Footer() {
  return (
    <footer className="vn-footer">
      <div className="container">
        {/* Main footer grid */}
        <div className="vn-footer-grid">
          <div className="vn-footer-brand">
            <div className="vn-footer-logo">
              <img src="assets/logo-visit-namur.jpg" alt="Visit Namur" />
            </div>
            <p className="vn-footer-addr">
              Office du Tourisme de Namur<br />
              Place de la Station, 5000 Namur, Belgique<br />
              <a href="tel:+3281246449">+32 81 24 64 49</a> · <a href="mailto:info@visitnamur.eu">info@visitnamur.eu</a>
            </p>
            <div className="vn-footer-social">
              {SOCIAL.map((s) => (
                <a key={s.name} href="#" aria-label={s.name} className="vn-footer-social-btn">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d={s.icon} /></svg>
                </a>
              ))}
            </div>
          </div>

          {Object.entries(FOOTER_NAV).map(([title, items]) => (
            <div key={title} className="vn-footer-col">
              <h4 className="vn-footer-col-title">{title}</h4>
              <ul>
                {items.map((it) => (
                  <li key={it}><a href="#">{it}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="vn-footer-bottom">
          <div>© 2026 Office du Tourisme de Namur · Tous droits réservés</div>
          <div className="vn-footer-legal">
            <a href="#">Mentions légales</a>
            <a href="#">Politique de confidentialité</a>
            <a href="#">Cookies</a>
            <a href="#">Accessibilité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

window.QuickAccess = QuickAccess;
window.BackToTop = BackToTop;
window.Footer = Footer;
