/* global React */
const { useState: useStateAgenda } = React;

/* ============================================
   Agenda — card grid (modèle Visit Brussels / Suisse Tourisme)
   ============================================ */

const FILTERS = ["Tout", "Aujourd'hui", "Ce week-end", "Cette semaine", "Ce mois"];

const EVENTS = [
  {
    title: "Fêtes de Wallonie 2026",
    venue: "Centre-ville · Namur",
    dateStart: { day: "19", month: "sept" },
    dateRange: "19.09. – 21.09.2026",
    img: "assets/citadelle.jpg",
  },
  {
    title: "FIFF · Festival International du Film Francophone",
    venue: "Cinéma Caméo · Namur",
    dateStart: { day: "26", month: "sept" },
    dateRange: "26.09. – 03.10.2026",
    img: "assets/citadelle-waw.jpg",
  },
  {
    title: "Quatuor Danel · Quatuors de Beethoven",
    venue: "Théâtre Royal · Namur",
    dateStart: { day: "14", month: "mai" },
    dateRange: "14.05.2026 · 20:30",
    img: "assets/telepherique.jpg",
  },
  {
    title: "Lumières mosanes · vernissage",
    venue: "Musée Félicien Rops · Namur",
    dateStart: { day: "14", month: "mai" },
    dateRange: "14.05. – 28.06.2026",
    img: "assets/croisiere.jpg",
  },
  {
    title: "Visite guidée nocturne de la Citadelle",
    venue: "Citadelle de Namur",
    dateStart: { day: "16", month: "mai" },
    dateRange: "Tous les samedis · 18:30",
    img: "assets/en-famille.jpg",
  },
  {
    title: "Marché des Producteurs",
    venue: "Place du Marché aux Légumes",
    dateStart: { day: "17", month: "mai" },
    dateRange: "Tous les dimanches",
    img: "assets/entre-amis.jpg",
  },
  {
    title: "Soirée jazz · Le Belvédère",
    venue: "Le Belvédère · Namur",
    dateStart: { day: "18", month: "mai" },
    dateRange: "18.05.2026 · 21:00",
    img: "assets/en-groupe.jpg",
  },
  {
    title: "Balade en kayak sur la Sambre",
    venue: "Port de plaisance · Jambes",
    dateStart: { day: "20", month: "mai" },
    dateRange: "Du 20.05. au 30.09.",
    img: "assets/namurois.jpg",
  },
];

function Agenda() {
  const [filter, setFilter] = useStateAgenda("Tout");

  return (
    <section className="section section--wash vn-agenda" id="agenda">
      <div className="container">
        <div className="section-head">
          <div className="section-head-text">
            <div className="eyebrow">Agenda &amp; événements</div>
            <h2 className="display-md">Que se passe-t-il<br />à Namur, maintenant&nbsp;?</h2>
          </div>
          <a href="#" className="btn btn-dark">
            Voir tout l'agenda
            <span className="material-symbols-rounded">calendar_month</span>
          </a>
        </div>

        {/* Filter tabs */}
        <div className="vn-agenda-filters">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`vn-agenda-filter ${filter === f ? 'is-active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
          <span className="vn-agenda-filters-sep" />
          <a href="#" className="vn-agenda-afficher">
            Afficher tout
            <span className="material-symbols-rounded">arrow_forward</span>
          </a>
        </div>

        {/* Card grid */}
        <div className="vn-event-grid">
          {EVENTS.map((e) => (
            <a key={e.title} href="#" className="vn-event-card">
              <div className="vn-event-card-thumb">
                <img src={e.img} alt={e.title} />
                <div className="vn-event-date-badge">
                  <span className="vn-event-date-prefix">Du</span>
                  <span className="vn-event-date-day">{e.dateStart.day}</span>
                  <span className="vn-event-date-month">{e.dateStart.month}</span>
                </div>
              </div>
              <div className="vn-event-card-body">
                <h4 className="vn-event-card-title">{e.title}</h4>
                <div className="vn-event-card-meta">
                  {e.venue} · <span className="vn-event-card-range">{e.dateRange}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Agenda = Agenda;
