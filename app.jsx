/* global React, ReactDOM, useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakToggle, TweakSelect, Header, HeroV1, HeroV2, Inspirer, Agenda, Reserver, QuickAccess, BackToTop, Footer */

const { useState, useEffect } = React;

const DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroVariant": "V1 — Editorial",
  "darkMode": false,
  "agendaWash": true,
  "showQuickAccess": true,
  "accentBoost": "Boost"
}/*EDITMODE-END*/;

function App() {
  const [tweaks, setTweak] = useTweaks(DEFAULTS);
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      setShowTop(window.scrollY > 600);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = tweaks.darkMode ? 'dark' : 'light';
    document.documentElement.dataset.accent = tweaks.accentBoost === 'Boost' ? 'boost' : 'sober';
  }, [tweaks.darkMode, tweaks.accentBoost]);

  return (
    <div data-screen-label="Visit Namur 2026 — Homepage">
      <Header scrolled={scrolled} />
      {tweaks.heroVariant === 'V1 — Editorial' ? <HeroV1 /> : <HeroV2 />}
      <Inspirer />
      <Agenda />
      <Reserver />
      <Footer />
      {tweaks.showQuickAccess && <QuickAccess />}
      <BackToTop visible={showTop} />

      <TweaksPanel title="Tweaks · Visit Namur">
        <TweakSection title="Hero">
          <TweakRadio
            label="Variation"
            value={tweaks.heroVariant}
            options={["V1 — Editorial", "V2 — Strip info"]}
            onChange={(v) => setTweak('heroVariant', v)}
          />
        </TweakSection>
        <TweakSection title="Apparence">
          <TweakToggle
            label="Mode sombre"
            value={tweaks.darkMode}
            onChange={(v) => setTweak('darkMode', v)}
          />
          <TweakRadio
            label="Couleur d'accent"
            value={tweaks.accentBoost}
            options={["Sobre", "Boost"]}
            onChange={(v) => setTweak('accentBoost', v)}
          />
        </TweakSection>
        <TweakSection title="Navigation rapide">
          <TweakToggle
            label="Bandeau flottant"
            value={tweaks.showQuickAccess}
            onChange={(v) => setTweak('showQuickAccess', v)}
          />
        </TweakSection>
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
