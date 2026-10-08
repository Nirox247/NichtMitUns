import { useEffect, useState } from 'react';

/* ---------- reveal on scroll ---------- */
function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 },
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ---------- data ---------- */
const MQ_ITEMS =
  'NICHT MIT UNS ✕ GEGEN HASS & HETZE ✕ FÜR DEMOKRATIE ✕ GEGEN RASSISMUS ✕ GEGEN ANTISEMITISMUS ✕ ';

const FACTS = [
  {
    no: '01',
    tag: 'Gründung',
    cls: 'red',
    title: 'Vom Song zum Verein',
    text: 'Gegründet nach dem Protestsong „Nicht mit uns!“ von Ron Williams & Friends — gemeinsam für den Erhalt der Demokratie.',
  },
  {
    no: '02',
    tag: 'Haltung',
    cls: 'blue',
    title: 'Gegen jeden Extremismus',
    text: 'Kampf gegen Rassismus, Antisemitismus und Fremdenhass — egal ob von rechts oder links.',
  },
  {
    no: '03',
    tag: 'Team',
    cls: 'ink',
    title: 'Alle Demokraten willkommen',
    text: 'Gemeinsam zeigen wir Gesicht — gemeinsam stehen wir auf — gemeinsam sind wir stark.',
  },
  {
    no: '04',
    tag: 'Sitz',
    cls: 'yellow',
    title: 'München',
    text: 'Kaiserplatz 10, 80803 München · Amtsgericht München, VR 210559 · info@nichtmituns.org',
  },
];

const SOLLTEN = [
  'miteinander sprechen — unermüdlich im Dialog miteinander sein.',
  'wieder aufmerksamer und empathischer unserem Gegenüber werden.',
  'ohne Hass, Hetze und Gewalt miteinander kommunizieren.',
  'falsche Informationen und Erzählungen erkennen und sie widerlegen.',
  'Parteien entgegentreten, die zur Spaltung der Gesellschaft beitragen.',
  'mehr auf vertrauenswürdige Quellen und Fakten achten.',
  'uns aktiv für eine friedliche und tolerante Gesellschaft einsetzen.',
];

const FUER = [
  'überparteilichen Dialog',
  'ein friedliches Miteinander',
  'interreligiösen Dialog',
  'eine vernünftige und menschliche Migrationspolitik',
  'eine Politik, die ernsthaft auf die Jugend eingeht',
];

const WETTE = [
  [
    'Die Wette',
    '„Christian, wie wäre es, wenn Du 100.000 Unterschriften sammelst? Das wäre ein starkes Zeichen. Ich wette, das schaffst nicht mal Du!“ — sagte Ron Williams. Christian Ude nahm ohne zu zögern an: „Top, die Wette gilt!“',
  ],
  [
    'Analog sammeln',
    'Keine digitale Petition: Zwei 500 Meter lange Papierrollen, über 120 kg schwer, an extra angefertigten Stahlgestellen — für den direkten Austausch mit den Bürgerinnen und Bürgern in der Münchner Innenstadt.',
  ],
  [
    'Weiter geht’s',
    'Mit rund 50.000 Aufklebern, auf denen man ebenso gut unterschreiben kann, geht die Sammlung in Geschäften und an Bahnhöfen weiter. Unterschreiben Sie mit — setzen Sie ein Zeichen gegen Extremismus!',
  ],
  [
    'Prominente Rückendeckung',
    'Katerina Jacob, Uschi Glas und Gisela Schneeberger halfen stundenlang beim Sammeln mit. Über Ehrenmitglied Sebastian Roloff kam der FC Bayern dazu: „Gegen Rassismus muss man zusammenhalten“, so Uli Hoeneß.',
  ],
];

const VORSTAND = [
  {
    name: 'Ron Williams',
    role: 'Gründungsmitglied · Vorstandsvorsitzender',
    quote: 'Wir haben die Verantwortung! Hass und Gewalt müssen wir mit Herz und Verstand entgegentreten.',
  },
  {
    name: 'Viktor Worms',
    role: 'Vorstandsvorsitzender',
    quote: 'Warum habt Ihr das zugelassen? — Die Frage auf der Zunge, mit Blick auf die deutsche Geschichte.',
  },
  {
    name: 'Tobias Irl',
    role: 'Gründungsmitglied · Vorstandsvorsitzender',
    quote: 'An welchem Ort man zur Welt kommt, kann man sich nicht aussuchen. Stolz kann man auf das sein, was man in seinem Leben erreicht.',
  },
  {
    name: 'Ali Kiliç',
    role: 'Vorstandsvorsitzender',
    quote: 'Das Gegenmittel gegen Rassismus und Antisemitismus ist sozialer Friede. Wir sagen: Nicht mit uns!',
  },
  {
    name: 'Franziska Irl',
    role: 'Vorstandsvorsitzende',
    quote: 'Gerade wir Heranwachsenden müssen gut informiert sein, damit sich die Geschichte nicht wiederholt.',
  },
];

const WEITERE = [
  ['Christian Ude', 'Gründungsmitglied', 'Wir sind alle verantwortlich, dass sich die Geschichte in keiner Stadt wiederholt.'],
  ['Susanne von Lieven-Jell', 'Gründungsmitglied', 'Ich stehe auf, weil ich niemals von meinen Enkeln gefragt werden will: Warum hast Du damals nichts gemacht?'],
  ['Michael Dietmayr', 'Gründungsmitglied', 'Wir sollten die Chancen nutzen, von den schönen Dingen anderer Kulturen zu profitieren — ohne Vorurteile, Hass und Hetze.'],
  ['Alexander Wolfrum', 'Gründungsmitglied', 'Ich bin ein Verfassungs-Fan. Die Würde des Menschen ist unantastbar.'],
  ['Marian Offmann', 'Gründungsmitglied', '1933 darf sich niemals wiederholen! Lasst uns kämpfen!'],
  ['Sebastian Roloff', 'Ehrenmitglied · MdB', 'Die Werte, die unsere Gesellschaft zusammenhalten, sind bedroht. Wir müssen sie jeden Tag verteidigen.'],
  ['Uschi Glas', 'Ehrenmitglied', 'Viele Menschen nehmen die Demokratie und unsere Freiheit zu selbstverständlich.'],
];

const FIELDS = [
  [
    '01',
    'Veranstaltungen',
    'Diskussionsplattformen, Lesungen, Konzerte und Jugendveranstaltungen — der Verein setzt sich mit Leidenschaft gegen Rassismus, Extremismus und Antisemitismus ein.',
  ],
  [
    '02',
    'Kunst & Kampagne',
    'Künstleraktivitäten jeder Art: Lesungen, Konzerte, Performances, Bildende Kunst und Kampagnen — auch gemeinsam mit prominenten Partnern.',
  ],
  [
    '03',
    'Junge Menschen',
    'Spezielle Angebote für junge Menschen: Debatten, Streams und Diskurse — veröffentlicht auf der Website des Vereins.',
  ],
];

/* ---------- components ---------- */
function Nav() {
  return (
    <nav>
      <a className="logo" href="#top" aria-label="Nicht mit uns e.V.">
        <span className="stamp">NM</span>
        <span>NICHT MIT UNS E.V.</span>
      </a>
      <div className="links">
        <a href="#manifest">Manifest</a>
        <a href="#haltung">Haltung</a>
        <a href="#projekte">Projekte</a>
        <a href="#menschen">Menschen</a>
      </div>
      <a className="join" href="#mitglied">Mitglied werden</a>
    </nav>
  );
}

function Hero({ onDownload, busy }: { onDownload: () => void; busy: boolean }) {
  return (
    <header className="hero" id="top">
      <span className="tape">Verein(t) gegen Rassismus — seit dem Song von Ron Williams &amp; Friends</span>
      <div>
        <h1>
          <span className="w-red">Nicht</span>
          <br />
          <span className="w-blue">mit</span>
          <br />
          <span className="w-ink">uns!</span>
        </h1>
        <p className="intro">
          Der Song <mark>„Nicht mit uns!“</mark> war der Startschuss: Wir engagieren uns gegen
          jeglichen Extremismus — egal ob von rechts oder links — sowie gegen Rassismus und
          Antisemitismus.
        </p>
        <div className="btns">
          <a className="btn red" href="#mitglied">Mitglied werden</a>
          <a className="btn ghost" href="https://youtu.be/F0XQANsuSGQ" target="_blank" rel="noreferrer">▶ Der Song</a>
          <button className="btn blue" onClick={onDownload} disabled={busy}>
            {busy ? 'Wird erstellt …' : '⬇ Plakat als PNG'}
          </button>
        </div>
      </div>
      <div className="side">
        <figure className="polaroid">
          <span className="tape-strip" />
          <img src="/img/ron-williams.jpg" alt="Ron Williams — Der Song" />
          <figcaption>Ron Williams · Der Song</figcaption>
        </figure>
        <span className="est">★ Est. München</span>
      </div>
      <span className="sticker">Gegen jeden Extremismus ✊</span>
    </header>
  );
}

function Marquee({ cls }: { cls: string }) {
  return (
    <div className={`mq ${cls}`} aria-hidden="true">
      <div className="track">
        <span>{MQ_ITEMS.repeat(3)}</span>
        <span>{MQ_ITEMS.repeat(3)}</span>
      </div>
    </div>
  );
}

function Manifest() {
  return (
    <section className="manifest reveal" id="manifest">
      <span className="kicker">Manifest</span>
      <h2>
        Gemeinsam für eine <span className="stroke">wehrhafte</span> Demokratie
      </h2>
      <div className="grid">
        <p className="big">
          Wir haben uns aufgrund des Protestsongs von Ron Williams &amp; Friends mit dem Titel
          „Nicht mit uns!“ zusammengefunden, um uns gemeinsam für den Erhalt der Demokratie zu
          engagieren. Wir machen die <span className="hl-red">Mehrheit sichtbar</span> — all
          diejenigen, die sich gegen Rassismus und Faschismus stellen und sagen:{' '}
          <span className="hl-blue">„Nicht mit uns!“</span>
        </p>
        <p className="lead">
          Der Verein widersetzt sich dem internationalen Rechtsruck und unterstützt unsere
          wehrhafte Demokratie in Zeiten, in denen extremistische Parteien immer mehr Zulauf
          erhalten. Es ist die Aufgabe der Politik, das Vertrauen der Wähler zurückzugewinnen —
          aber auch wir als Gesellschaft müssen unseren Anteil im Kampf gegen Rassismus,
          Diskriminierung, Hass und Hetze leisten.
        </p>
      </div>
      <div className="facts">
        {FACTS.map((f) => (
          <article className={`fact ${f.cls}`} key={f.no}>
            <span className="ghost">{f.no}</span>
            <span className="tag">{f.tag}</span>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Haltung() {
  return (
    <section className="haltung reveal" id="haltung">
      <span className="kicker">Unsere Haltung</span>
      <h2>
        Für gesellschaftliche <span className="stroke">Vielfalt</span> — Nein zu Rassismus!
      </h2>
      <ul className="should">
        {SOLLTEN.map((s, i) => (
          <li key={i}>
            <b>Wir sollten</b>
            <span>{s}</span>
          </li>
        ))}
      </ul>
      <div className="fuer">
        <span className="fuer-label">Gemeinsam gegen jede Form von Extremismus, Hass und Hetze — dafür stehen wir:</span>
        <div className="chips">
          {FUER.map((f) => (
            <span className="chip" key={f}>
              Für {f}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function GGQuote() {
  return (
    <section className="gg reveal">
      <span className="kicker">Artikel 1 · Absatz 1 · Grundgesetz</span>
      <blockquote>
        „Die Würde
        <br />
        des Menschen ist
        <br />
        <span className="w-red">unantastbar.</span>"
      </blockquote>
      <div className="bar" />
      <div className="checker" />
    </section>
  );
}

function Wette() {
  return (
    <section className="wette reveal" id="projekte">
      <span className="kicker">Projekt</span>
      <h2>
        Die Wette — <span className="stroke">100.000 Unterschriften</span> gegen Extremismus
      </h2>
      <div className="story">
        {WETTE.map(([t, p]) => (
          <p key={t}>
            <b>{t}</b>
            {p}
          </p>
        ))}
      </div>
      <div className="count">
        <b>50.000+</b>
        <span>
          Unterschriften bis zum 01.10.24 — das Ziel bleibt 100.000.
          <br />
          Mit BMW-Betriebsrat Martin Kimmich sammeln wir weiter. Die Wette war verloren — das Zeichen bleibt!
        </span>
      </div>
      <div className="breakfast">
        <span className="tag">Auch im Programm</span>
        <h3>Debatten am Frühstückstisch</h3>
        <p>
          Einmal pro Monat spendiert der Verein zwei Personen ein Frühstück, die über aktuelle
          Themen hitzig diskutieren und debattieren — Reden als Schlüssel zum friedfertigen
          Miteinander.
        </p>
      </div>
    </section>
  );
}

function Menschen() {
  return (
    <section className="menschen reveal" id="menschen">
      <span className="kicker">Über uns</span>
      <h2>
        Die Menschen hinter dem <span className="stroke">Verein</span>
      </h2>
      <p className="lead">
        Gemeinsam zeigen wir Gesicht — gemeinsam stehen wir auf — gemeinsam sind wir stark.
        In unserem Team sind alle Demokraten herzlich willkommen.
      </p>
      <div className="board">
        {VORSTAND.map((p, i) => (
          <article className="person" key={p.name}>
            <span className="mono" aria-hidden="true">
              {p.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}
            </span>
            <span className="role">{p.role}</span>
            <h3>{p.name}</h3>
            <p>„{p.quote}“</p>
            <span className="idx">{String(i + 1).padStart(2, '0')}</span>
          </article>
        ))}
      </div>
      <ul className="more">
        {WEITERE.map(([name, role, quote]) => (
          <li key={name}>
            <div className="who">
              <b>{name}</b>
              <span className="role">{role}</span>
            </div>
            <p>„{quote}“</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Fields() {
  return (
    <section className="fields reveal" id="arbeit">
      <span className="kicker">Arbeitsfelder</span>
      <h2>
        Wir zeigen <span className="stroke">Engagement</span>
      </h2>
      <div className="cards">
        {FIELDS.map(([no, t, p]) => (
          <article className="field-card" key={no}>
            <span className="no">{no}</span>
            <h3>{t}</h3>
            <p>{p}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Street() {
  const photos: Array<[string, string]> = [
    ['/img/team.jpg', 'Das Team · München'],
    ['/img/event.jpg', 'Kultur · Begegnung'],
    ['/img/projekt.jpg', 'Projekt · Gemeinschaft'],
  ];
  return (
    <section className="street reveal">
      <span className="kicker">Gemeinsam sind wir stärker</span>
      <h2>
        Menschen zeigen <span className="stroke">Gesicht</span>
      </h2>
      <div className="photos">
        {photos.map(([src, cap]) => (
          <figure className="polaroid" key={cap}>
            <span className="tape-strip" />
            <img src={src} alt={cap} />
            <figcaption>{cap}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="cta reveal" id="mitglied">
      <h2>Nicht mit uns!</h2>
      <p>
        Der NICHT MIT UNS e.V. lebt von seinen Mitgliedern: Je mehr Mitglieder und Förderer wir
        haben, desto kraftvoller können wir auftreten und unsere Stimme gegen Extremismus,
        Rassismus und Antisemitismus erheben. Seien Sie dabei — als Mitglied, als aktives Mitglied
        oder als Förderer.
      </p>
      <div className="perks">
        <span className="perk">60 € Jahresbeitrag</span>
        <span className="perk">Aktiv · Fördernd · Ehrenmitglied</span>
        <span className="perk">Spendenquittung möglich</span>
      </div>
      <div className="bank">
        <b>Spendenkonto · Ihre Spende für Toleranz und Vielfalt</b>
        <br />
        Inhaber: Nicht mit uns e.V. · Bank: Münchner Bank
        <br />
        IBAN: DE34 7019 0000 0003 3812 50 · BIC: GENODEV1M01
      </div>
      <div className="btns" style={{ marginTop: '5vh' }}>
        <a className="btn white" href="https://nichtmituns.org/mitglied-werden/" target="_blank" rel="noreferrer">
          Mitgliedsantrag ↗
        </a>
        <a className="btn ghostlight" href="mailto:info@nichtmituns.org">
          Kontakt aufnehmen
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="word">
        Nicht <span className="w-red">mit</span> uns!
      </div>
      <div className="meta">
        Kaiserplatz 10 · 80803 München
        <br />
        <a href="mailto:info@nichtmituns.org">info@nichtmituns.org</a> ·{' '}
        <a href="tel:+491702208483">+49 170 2208483</a>
        <br />
        Amtsgericht München · VR 210559 · St.-Nr. 143/220/00066
        <br />
        <a href="https://www.instagram.com/nichtmituns.ev/" target="_blank" rel="noreferrer">Instagram</a> ·{' '}
        <a href="https://www.facebook.com/nichtmitunsev" target="_blank" rel="noreferrer">Facebook</a> ·{' '}
        <a href="https://www.tiktok.com/@nichtmituns.ev" target="_blank" rel="noreferrer">TikTok</a> ·{' '}
        <a href="https://nichtmituns.org/impressum/" target="_blank" rel="noreferrer">Impressum</a> ·{' '}
        <a href="https://nichtmituns.org/datenschutz/" target="_blank" rel="noreferrer">Datenschutz</a> ·{' '}
        <a href="https://nichtmituns.org/satzung/" target="_blank" rel="noreferrer">Satzung</a>
        <br />© 2024 Nicht mit uns e.V. — Design-Entwurf
      </div>
    </footer>
  );
}

/* ---------- poster export via canvas (deterministisch, keine Font-Probleme) ---------- */
const C = { red: '#dc1f26', blue: '#123063', ink: '#141414', paper: '#f7f4ee', yellow: '#ffce00' };

async function renderPosterBlob(): Promise<Blob | null> {
  const W = 1080;
  const H = 1528;
  const R = 2;
  await Promise.all([
    document.fonts.load('500 21px Oswald'),
    document.fonts.load('600 40px Oswald'),
    document.fonts.load('700 218px Oswald'),
    document.fonts.load('400 17px Archivo'),
    document.fonts.load('500 18px Oswald'),
    document.fonts.load('600 22px Oswald'),
  ]);
  const cv = document.createElement('canvas');
  cv.width = W * R;
  cv.height = H * R;
  const g = cv.getContext('2d');
  if (!g) return null;
  g.scale(R, R);

  // Hintergrund + Rahmen
  g.fillStyle = C.paper;
  g.fillRect(0, 0, W, H);
  g.strokeStyle = C.ink;
  g.lineWidth = 6;
  g.strokeRect(3, 3, W - 6, H - 6);

  // Banderole (Schriftgröße bis zum Passen reduzieren)
  const tapeText = 'Verein(t) gegen Rassismus — seit dem Song von Ron Williams & Friends'.toUpperCase();
  let tapeSize = 21;
  g.font = `500 ${tapeSize}px Oswald`;
  while (g.measureText(tapeText).width > W - 200 && tapeSize > 10) {
    tapeSize -= 1;
    g.font = `500 ${tapeSize}px Oswald`;
  }
  const tapeW = g.measureText(tapeText).width + 44;
  g.save();
  g.translate(60, 78);
  g.rotate((-1 * Math.PI) / 180);
  g.fillStyle = C.ink;
  g.fillRect(0, 0, tapeW, tapeSize + 26);
  g.fillStyle = C.paper;
  g.textBaseline = 'middle';
  g.fillText(tapeText, 22, (tapeSize + 26) / 2 + 1);
  g.restore();

  // Headline
  g.textBaseline = 'top';
  const lines: Array<[string, string]> = [
    ['NICHT', C.red],
    ['MIT', C.blue],
    ['UNS!', C.ink],
  ];
  let y = 300;
  for (const [word, color] of lines) {
    g.font = '700 218px Oswald';
    g.fillStyle = color;
    g.fillText(word, 60, y);
    y += 207;
  }

  // GG-Zitat
  const quoteLines: Array<[string, string]> = [
    ['„DIE ', C.ink],
    ['WÜRDE', C.red],
    [' DES', C.ink],
  ];
  g.font = '600 40px Oswald';
  let qx = 60;
  const qy = 1010;
  for (const [t, col] of quoteLines) {
    g.fillStyle = col;
    g.fillText(t, qx, qy);
    qx += g.measureText(t).width;
  }
  g.fillStyle = C.ink;
  g.fillText(' MENSCHEN IST', 60, qy + 50);
  g.fillText('UNANTASTBAR."', 60, qy + 100);
  g.font = '400 17px Archivo';
  g.fillStyle = 'rgba(20,20,20,0.75)';
  g.fillText('— ARTIKEL 1, ABSATZ 1 DES GRUNDGESETZES', 60, qy + 168);

  // Handschlag-Motiv rechts neben dem Zitat (schwarz auf Papier)
  try {
    const hand = new Image();
    hand.src = '/img/handschlag.webp';
    await hand.decode();
    g.save();
    g.translate(640, 950);
    g.rotate((2 * Math.PI) / 180);
    g.drawImage(hand, 0, 0, 390, 390);
    g.restore();
  } catch {
    /* Plakat bleibt auch ohne Motiv gültig */
  }

  // Blaue Linie unter dem Zitat
  g.save();
  g.translate(60, qy + 210);
  g.rotate((-1 * Math.PI) / 180);
  g.fillStyle = C.blue;
  g.fillRect(0, 0, 150, 16);
  g.restore();

  // Fußzeile: Adresse links
  g.font = '500 18px Oswald';
  g.fillStyle = C.ink;
  g.textBaseline = 'top';
  const addr = ['NICHT MIT UNS E.V.', 'KAISERPLATZ 10 · 80803 MÜNCHEN', 'NICHTMITUNS.ORG'];
  addr.forEach((l, i) => g.fillText(l, 60, H - 170 + i * 32));

  // Sticker rechts unten
  const stickText = 'GEGEN JEDEN EXTREMISMUS!';
  g.font = '600 22px Oswald';
  const stW = g.measureText(stickText).width + 48;
  g.save();
  g.translate(W - 60 - stW + 8, H - 160 + 8);
  g.fillStyle = C.ink;
  g.fillRect(0, 0, stW, 64);
  g.restore();
  g.save();
  g.translate(W - 60 - stW, H - 160);
  g.rotate((3 * Math.PI) / 180);
  g.fillStyle = C.yellow;
  g.fillRect(0, 0, stW, 64);
  g.strokeStyle = C.ink;
  g.lineWidth = 4;
  g.strokeRect(2, 2, stW - 4, 60);
  g.fillStyle = C.ink;
  g.textBaseline = 'middle';
  g.fillText(stickText, 24, 34);
  g.restore();

  return new Promise((resolve) => cv.toBlob(resolve, 'image/png'));
}

/* ---------- app ---------- */
export default function App() {
  useReveal();
  const [busy, setBusy] = useState(false);

  const download = async () => {
    if (busy) return;
    setBusy(true);
    try {
      const blob = await renderPosterBlob();
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.download = 'nicht-mit-uns-plakat.png';
      a.href = url;
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 5000);
    } catch (err) {
      console.error('Export fehlgeschlagen:', err);
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      <Nav />
      <Hero onDownload={download} busy={busy} />
      <Marquee cls="red" />
      <Manifest />
      <GGQuote />
      <Haltung />
      <Marquee cls="ink" />
      <Wette />
      <Fields />
      <Menschen />
      <Street />
      <Cta />
      <Footer />
    </>
  );
}
