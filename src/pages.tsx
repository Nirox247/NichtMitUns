import { useEffect, type ReactNode } from 'react';
import { Link } from 'react-router';

/* ---------- reveal on scroll (pro Seite beim Mounten) ---------- */
export function useReveal() {
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

/* ---------- shared page bits ---------- */
export const PAGES: Array<[string, string]> = [
  ['/', 'Start'],
  ['/ueber-uns', 'Über uns'],
  ['/projekte', 'Projekte'],
  ['/afd', 'Aufklärung'],
  ['/mitglied-werden', 'Mitglied werden'],
  ['/satzung', 'Satzung'],
  ['/kontakt', 'Kontakt'],
];

function PageHead({ kicker, title, lead }: { kicker: string; title: ReactNode; lead?: string }) {
  return (
    <header className="page-head">
      <span className="kicker">{kicker}</span>
      <h1>{title}</h1>
      {lead ? <p className="lead">{lead}</p> : null}
    </header>
  );
}

function PageLinks({ current }: { current: string }) {
  return (
    <div className="pagelinks" aria-label="Weitere Seiten">
      <span className="pagelinks-label">Weiter stöbern:</span>
      <div className="chips">
        {PAGES.filter(([p]) => p !== current).map(([p, label]) => (
          <Link className="chip" to={p} key={p}>
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ================================================================
   ÜBER UNS
================================================================ */
type Person = { name: string; role: string; bio: string; quote: string; photo: string };

const TEAM: Person[] = [
  {
    name: 'Ron Williams',
    photo: '/img/vorstand-ron-williams.webp',
    role: 'Gründungsmitglied · Vorstandsvorsitzender',
    bio: 'Seit Jahrzehnten im Einsatz gegen Rassismus hat kaum ein anderer schon so viel in Deutschland bewegt. Die Wahrung von Demokratie und kultureller Vielfalt ist sein oberstes Ziel. Sein Motto hat er von seinem Idol Harry Belafonte übernommen.',
    quote: 'Wir haben die Verantwortung! Hass und Gewalt müssen wir mit Herz und Verstand entgegentreten.',
  },
  {
    name: 'Viktor Worms',
    photo: '/img/vorstand-viktor-worms.webp',
    role: 'Vorstandsvorsitzender',
    bio: 'Als Medienprofi weiß er, wie man Menschen erreichen kann. Sich für den Erhalt der Demokratie einzusetzen, ist für ihn eine gesellschaftliche Verpflichtung.',
    quote: 'Wir haben unsere Eltern vielleicht nie direkt gefragt, aber mit Blick auf die deutsche Geschichte haben wir die Frage auf der Zunge gehabt: Warum habt Ihr das zugelassen?',
  },
  {
    name: 'Tobias Irl',
    photo: '/img/vorstand-tobias-irl.webp',
    role: 'Vorstandsvorsitzender',
    bio: 'Seinen individuellen Beitrag zum Erhalt einer bunten und vielfältigen Gesellschaft zu leisten, ist für ihn eine absolute Herzensangelegenheit und wichtiger denn je.',
    quote: 'An welchem Ort man zur Welt kommt, in welcher Kultur man aufwächst, das kann man sich nicht aussuchen. Viel mehr kann man darauf stolz sein, was man in seinem Leben erreicht.',
  },
  {
    name: 'Ali Kiliç',
    photo: '/img/vorstand-ali-kilic.webp',
    role: 'Vorstandsvorsitzender',
    bio: 'Als ehemaliger Bürgermeister der türkischen Stadtgemeinde Maltepe bringt er nicht nur langjährige politische Erfahrung mit, er engagiert sich auch leidenschaftlich für einen interkulturellen Austausch sowie den Erhalt der demokratischen Ordnung.',
    quote: 'Europa, die Wiege der Demokratie, durchlebt eine Zeit, welche an der Grundordnung unserer demokratischen Werte rüttelt. Das Gegenmittel gegen Rassismus und Antisemitismus ist sozialer Friede.',
  },
  {
    name: 'Franziska Irl',
    photo: '/img/vorstand-franziska-irl.webp',
    role: 'Vorstandsvorsitzende',
    bio: 'Sie sieht ihre Aufgabe vor allem darin, die junge Generation anzusprechen und die Inhalte des Vereins in den sozialen Netzwerken zu verbreiten. Ihr ist es besonders wichtig, den extremen Parteien diese neue Plattform nicht zu überlassen.',
    quote: 'Gerade bei uns, den Heranwachsenden, ist es wichtig, ausreichend zu informieren, damit sich die Geschichte nicht wiederholt. Deshalb möchte ich möglichst viele junge Menschen aufklären.',
  },
];

const GRUENDUNG: Person[] = [
  {
    name: 'Christian Ude',
    photo: '/img/gruendung-christian-ude.webp',
    role: 'Gründungsmitglied',
    bio: 'Über 20 Jahre lang hat er sich als Münchner Stadtoberhaupt dafür eingesetzt, dem Judentum wieder einen Platz und eine Zukunft in dieser Stadt zu geben, religiöse und sexuelle Minderheiten zu respektieren und Vielfalt als Bereicherung zu erleben.',
    quote: 'München hat erlebt, wie Rechtsextremisten das politische Klima der Stadt erst verpesten und dann die Bevölkerung in einen Weltkrieg treiben. Wir sind alle verantwortlich, dass dies in keiner Stadt nochmals geschieht.',
  },
  {
    name: 'Susanne von Lieven-Jell',
    photo: '/img/gruendung-susanne-jell.webp',
    role: 'Gründungsmitglied',
    bio: 'An diesem Projekt aktiv teilzunehmen, war für sie eine selbstverständliche gesellschaftliche Verpflichtung. Wegschauen löst keine Probleme — deshalb hat sie ihre Einstellung auch ganz klar formuliert.',
    quote: 'Ich stehe auf, weil ich niemals von meinen Enkeln gefragt werden will: Warum hast Du damals nichts gemacht?',
  },
  {
    name: 'Michael Dietmayr',
    photo: '/img/gruendung-michael-dietmayr.webp',
    role: 'Gründungsmitglied',
    bio: 'Durch die aktive Teilnahme an diesem Verein möchte er dazu beitragen, auch weiterhin in einem Land leben zu dürfen, in dem es so viele unterschiedliche Kulturen und Menschen gibt.',
    quote: 'Wir sollten die Chancen nutzen, von schönen Dingen anderer Kulturen zu profitieren. Ohne Vorurteile, Hass und Hetze.',
  },
  {
    name: 'Alexander Wolfrum',
    photo: '/img/gruendung-alexander-wolfrum.webp',
    role: 'Gründungsmitglied',
    bio: 'Reden ist für ihn der Schlüssel zu einem friedfertigen Miteinander aller Religionen und Kulturen. Der direkte Austausch ist und bleibt das wichtigste Mittel für ein harmonisches Zusammenleben.',
    quote: 'Ich bin ein Verfassungs-Fan. Die Würde des Menschen ist unantastbar.',
  },
  {
    name: 'Marian Offmann',
    photo: '/img/gruendung-marian-offman.webp',
    role: 'Gründungsmitglied',
    bio: 'Seit er politische Ämter bekleidet — sei es im Vorstand der jüdischen Gemeinde oder im Münchner Rathaus — steht er konsequent auf gegen Rechtsradikale, gegen Antisemiten und Rassisten.',
    quote: '1933 darf sich niemals wiederholen! Wir müssen gemeinsam offensiv die Rechtspopulisten und Neonazis in die Schranken weisen. Lasst uns kämpfen!',
  },
];

const EHREN: Person[] = [
  {
    name: 'Sebastian Roloff',
    photo: '/img/ehren-sebastian-roloff.webp',
    role: 'Ehrenmitglied · MdB',
    bio: 'Als Mitglied des Deutschen Bundestages ist es für ihn eine Selbstverständlichkeit, sich zu engagieren — und seine Kontakte für den Verein spielen zu lassen.',
    quote: 'Die Werte, die unsere Gesellschaft ausmachen und zusammenhalten, sind bedroht. Wir müssen sie jeden Tag verteidigen — gegen Rassisten, Antisemiten und andere Hetzer von rechts, die nichts weniger wollen, als unsere Demokratie abzuschaffen.',
  },
  {
    name: 'Uschi Glas',
    photo: '/img/ehren-uschi-glas.webp',
    role: 'Ehrenmitglied',
    bio: 'Als Demokratin durch und durch sieht sie es als ihre Pflicht an, sich gegen Extremismus jeglicher Art zu engagieren. Als sie von diesem Verein hörte, war sie sofort bereit, ihre Unterstützung anzubieten.',
    quote: 'Viele Menschen nehmen die Demokratie und unsere Freiheit zu selbstverständlich.',
  },
];

function PersonCard({ p, i }: { p: Person; i: number }) {
  return (
    <article className="person big">
      <figure className="foto">
        <img src={p.photo} alt={p.name} loading="lazy" />
        <span className="tape-strip" aria-hidden="true" />
      </figure>
      <span className="role">{p.role}</span>
      <h3>{p.name}</h3>
      <p className="bio">{p.bio}</p>
      <p className="quote">„{p.quote}“</p>
      <span className="idx">{String(i + 1).padStart(2, '0')}</span>
    </article>
  );
}

export function UeberUns() {
  useReveal();
  return (
    <main className="page">
      <PageHead
        kicker="Über uns"
        title={
          <>
            Die Menschen hinter dem <span className="stroke">Verein</span>
          </>
        }
        lead="Gemeinsam zeigen wir Gesicht — gemeinsam stehen wir auf — gemeinsam sind wir stark."
      />
      <section className="page-block reveal">
        <h2 className="blocktitle">Die Gründungsmitglieder</h2>
        <p className="big-text">
          Wir haben uns aufgrund des Protestsongs von Ron Williams &amp; Friends mit dem Titel{' '}
          <mark>„Nicht mit uns!“</mark> zusammengefunden, um uns gemeinsam für den Erhalt der
          Demokratie zu engagieren. In unserem Team sind alle Demokraten herzlich willkommen.
        </p>
      </section>
      <section className="page-block reveal">
        <h2 className="blocktitle">Der Vorstand</h2>
        <p className="blocklead">
          Der Verein NICHT MIT UNS e.V. hat sich dem Kampf gegen Rassismus, Antisemitismus und
          Fremdenhass sowie dem Schutz demokratischer Werte verschrieben.
        </p>
        <div className="board">
          {TEAM.map((p, i) => (
            <PersonCard p={p} i={i} key={p.name} />
          ))}
        </div>
      </section>
      <section className="page-block reveal">
        <h2 className="blocktitle">Gründungsmitglieder</h2>
        <div className="board">
          {GRUENDUNG.map((p, i) => (
            <PersonCard p={p} i={i + TEAM.length} key={p.name} />
          ))}
        </div>
      </section>
      <section className="page-block reveal">
        <h2 className="blocktitle">Ehrenmitglieder</h2>
        <div className="board two">
          {EHREN.map((p, i) => (
            <PersonCard p={p} i={i + TEAM.length + GRUENDUNG.length} key={p.name} />
          ))}
        </div>
      </section>
      <section className="page-cta reveal">
        <h2>Wir sagen: Nicht mit uns!</h2>
        <p>
          Sind Sie interessiert an unserer Arbeit gegen Extremismus, Hass und Hetze? Zögern Sie
          nicht und schreiben Sie uns!
        </p>
        <div className="btns">
          <a className="btn white" href="mailto:info@nichtmituns.org">Kontakt aufnehmen</a>
          <Link className="btn ghostlight" to="/mitglied-werden">Mitglied werden</Link>
        </div>
      </section>
      <PageLinks current="/ueber-uns" />
    </main>
  );
}

/* ================================================================
   PROJEKTE
================================================================ */
const WETTE_STORY: Array<[string, string]> = [
  [
    'Die Wette',
    'Alles begann mit einer flapsigen Bemerkung bei einem der ersten Treffen unseres gerade neu gegründeten Vereins — darunter der Entertainer Ron Williams und Alt-OB Christian Ude. „Christian, wie wäre es, wenn Du 100.000 Unterschriften sammelst? Ich wette, das schaffst nicht mal Du!“ Ude, ohne zu zögern: „Top, die Wette gilt!“',
  ],
  [
    'Analog statt digital',
    'Auf digitalem Weg Signaturen zu sammeln war keine Option — wir wollten den direkten Austausch mit den Bürgerinnen und Bürgern. Also: zwei 500 Meter lange Papierrollen, jede über 120 kg schwer, an extra angefertigten Stahlgestellen, dazu Stifte, Flyer, Sonnenschirme und ein Megafon.',
  ],
  [
    '300 Kilo quer durch die Stadt',
    'Die rund 300 kg schweren Gestelle wurden täglich quer durch die Innenstadt gewuchtet — nachts regensicher im Innenhof von St. Michael und Heilig-Geist untergebracht. Dann die Lösung: rund 50.000 Klebeetiketten, auf denen man ebenso gut unterschreiben kann — in Geschäften und an Bahnhöfen.',
  ],
  [
    'Prominente Unterstützung',
    'Katerina Jacob, Uschi Glas und Gisela Schneeberger halfen alle für mehrere Stunden bei der Sammlung mit. Und unser Ehrenmitglied, der Bundestagsabgeordnete Sebastian Roloff, ließ seine Kontakte zum FC Bayern spielen.',
  ],
  [
    'Der FC Bayern steigt ein',
    'Präsident Herbert Hainer und der langjährige Bayern-Macher Uli Hoeneß haben nicht lange gezögert: „Gegen Rassismus muss man zusammenhalten“, so Hoeneß. Nach einem Besuch der Unterschriftenaktion am Viktualienmarkt war klar: Der FC Bayern unterstützt die Wette.',
  ],
  [
    'Verloren — und trotzdem gewonnen',
    'Bis zum 01.10.24 kamen knapp über 50.000 Signaturen zusammen — die Zeit war zu knapp, nicht die Bereitschaft der Menschen. Unzählige Diskussionen wurden angestoßen. Wir sammeln weiter: Martin Kimmich, Betriebsratsvorsitzender von BMW, hilft uns, die 100.000 doch noch voll zu machen. Und Christian Ude wird seine verlorene Wette einlösen — was er tun muss, erfahren Sie in Kürze hier.',
  ],
];

export function Projekte() {
  useReveal();
  return (
    <main className="page">
      <PageHead
        kicker="Projekte"
        title={
          <>
            Wir zeigen <span className="stroke">Engagement!</span>
          </>
        }
        lead="Der NICHT MIT UNS e.V. setzt sich mit Leidenschaft ein, Rassismus, Extremismus und Antisemitismus zu bekämpfen — mit Veranstaltungen wie Diskussionsplattformen, Lesungen, Konzerten und Jugendveranstaltungen."
      />

      <section className="page-block reveal">
        <span className="tagline red">Laufende Aktion</span>
        <h2 className="blocktitle">Die Wette — 100.000 Unterschriften gegen Extremismus</h2>
        <div className="count inline">
          <b>50.000+</b>
          <span>
            Unterschriften bis zum 01.10.24 — das Ziel bleibt 100.000.
            <br />
            Die Wette war verloren, das Zeichen bleibt: Wir sammeln weiter!
          </span>
        </div>
        <div className="story">
          {WETTE_STORY.map(([t, p], i) => (
            <p key={t}>
              <b>
                {String(i + 1).padStart(2, '0')} · {t}
              </b>
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="page-block reveal">
        <div className="duo">
          <article className="panel blue">
            <span className="tag">Monatlich</span>
            <h3>Debatten am Frühstückstisch</h3>
            <p>
              Einmal pro Monat spendiert der NICHT MIT UNS e.V. zwei Personen ein Frühstück, die
              über aktuelle Themen hitzig diskutieren und debattieren. Reden ist der Schlüssel zu
              einem friedfertigen Miteinander.
            </p>
          </article>
          <article className="panel ink">
            <span className="tag">Der Startschuss</span>
            <h3>Nicht mit uns! — Der Song</h3>
            <p>
              Mit diesem Song hat alles begonnen. Er diente nicht nur dazu, Zeichen zu setzen — er
              hat viele Menschen zusammengebracht: Gleichgesinnte, die Fremdenhass nicht tolerieren
              wollen und für ein demokratisches Miteinander kämpfen.
            </p>
            <a className="btn white" href="https://youtu.be/F0XQANsuSGQ" target="_blank" rel="noreferrer">
              ▶ Song ansehen
            </a>
          </article>
        </div>
      </section>

      <section className="page-cta reveal">
        <h2>Machen Sie mit!</h2>
        <p>Wir freuen uns über Ihre Anregungen und über Ihre Mitarbeit.</p>
        <div className="btns">
          <a className="btn white" href="mailto:info@nichtmituns.org">Idee einreichen</a>
          <Link className="btn ghostlight" to="/mitglied-werden">Mitglied werden</Link>
        </div>
      </section>
      <PageLinks current="/projekte" />
    </main>
  );
}

/* ================================================================
   AFD / AUFKLÄRUNG
================================================================ */
const BRANDSTIFTER: Array<[string, string]> = [
  [
    'AfD',
    'Die 2013 gegründete AfD profiliert sich u.a. mit restriktiven Positionen in der Zuwanderungspolitik und einer konservativen Gesellschaftspolitik. Die AfD vertritt rassistische Positionen, die mit demokratischen Prinzipien nicht vereinbar sind. Das betrifft nicht nur Einzelpersonen wie den Thüringer Abgeordneten Björn Höcke, der hetzerische Reden hält. Die AfD hat Verbindungen zu Neonazis und (ehemaligen) NPD-Mitgliedern, zur extrem rechten Identitären Bewegung und zu Burschenschaften.',
  ],
  [
    'Die Heimat',
    'Eine 1964 gegründete rechtsextreme und in Teilen neonazistische deutsche Kleinpartei, die bis Juni 2023 den Namen Nationaldemokratische Partei Deutschlands (NPD) trug. Laut Bundesverfassungsgericht weist sie eine programmatische und sprachliche Nähe zur NSDAP auf und vertritt eine völkisch-nationalistische und revanchistische Ideologie. Auf europäischer Ebene ist sie Mitglied der rechtsextremen Allianz für Frieden und Freiheit. Ziel ist es, die Heimat als Partei „der ethnischen Deutschen“ auszurichten.',
  ],
  [
    'Freie Kameradschaften',
    'Ideologisch berufen sich einige der „freien Kameradschaften“ auf die Weltanschauung der Nationalsozialisten, teils mit direktem Bezug auf die NS-Zeit und deren militärische und geistige „Führer“. Sie beziehen sich positiv auf die Ideologie des „politischen Soldaten“. Entsprechend erfreuen sich ehemalige, teils zum Schutz vor Strafverfolgung abgeänderte NS-Symbole großer Beliebtheit bei den Neonazis. Oft werden bei Demonstrationen schwarze Fahnen als Zeichen der „freien Kameradschaften“ getragen.',
  ],
  [
    'Der Dritte Weg',
    'Die Partei fordert einen sogenannten „deutschen Sozialismus“ als vermeintlichen „dritten Weg“ abseits von Kommunismus und Kapitalismus. Ihre Programmatik basiert auf einem extrem völkischen Menschenbild in enger Orientierung am historischen Nationalsozialismus und der militanten Kameradschaftsszene. Sie solidarisiert sich mit neonazistischen und rechtsextremen Parteien in ganz Europa, ist antisemitisch und antizionistisch, fordert den Austritt aus der NATO und in geschichtsrevisionistischer Weise die „Wiederherstellung Deutschlands in seinen völkerrechtlichen Grenzen“.',
  ],
  [
    'Identitäre Bewegung',
    'Die rechtsextreme „Identitäre Bewegung“ (IB) sieht sich gerne selbst als Avantgarde der sogenannten „neuen“ Rechten. Rassismus, Antifeminismus und reaktionäre Ideen sind wesentlich in ihrer Ideologie — lediglich versehen mit einem hippen Instagram-Filter und feschen Frisuren. Beim Treffen von Rechtsextremisten in Potsdam am 25. November 2023 stellte der österreichische Rechtsextremist Martin Sellner seine als „Masterplan zur Remigration“ bezeichneten Überlegungen vor — eine verharmlosende Umschreibung für Ausweisung, Abschiebung, Vertreibung und Deportation.',
  ],
  [
    'Reichsbürger',
    'Gruppen und Einzelpersonen, die aus unterschiedlichsten Motiven die Existenz der Bundesrepublik Deutschland leugnen — unter Berufung auf das historische Deutsche Reich, auf verschwörungstheoretische Argumentationsmuster oder ein selbstdefiniertes Naturrecht. Sie verweigern Steuern und Bußgelder, erstellen eigene Dokumente wie einen „Reichspersonalausweis“ und lehnen sich gegen Vertreter von Staat und Justiz auf. Sogenannte Selbstverwalter erklären einseitig ihren Austritt und errichten eigene lokale „Hoheitsgebiete“.',
  ],
  [
    'Deutsche Burschenschaft',
    'Die „Deutsche Burschenschaft“ ist ein Verband, in dem 66 Burschenschaften aus Deutschland und Österreich Mitglied sind, und gilt als stramm rechter Zusammenschluss. Einige vertreten einen völkischen Begriff von Deutschtum, in dem die Frage, wer Deutscher ist, nicht vom Pass, sondern vom Blut abhängt.',
  ],
];

const LINKS_STATT_RECHTS = [
  'Heinrich-Böll-Stiftung',
  'Campact',
  'München ist bunt',
  'Omas gegen rechts',
  'Bellevue di Monaco',
  'Schule ohne Rassismus — Schule mit Courage',
];

const PRAEVENTION: Array<[string, string, string?]> = [
  [
    'Schule ohne Rassismus — Schule mit Courage',
    'Im Netzwerk sind Kinder und Jugendliche aktiv, weil es sie stört, wenn Menschen wegen ihrer Hautfarbe, ihrer Herkunft oder ihrer Religion beschimpft, gemobbt oder gar körperlich bedroht werden. Es bietet Schülern und Pädagogen die Möglichkeit, das Klima an ihrer Schule aktiv mitzugestalten — indem sie sich bewusst gegen jede Form von Diskriminierung, Mobbing und Gewalt wenden.',
    '4.400+ Schulen · 2 Mio.+ Schüler*innen · 120 Koordinierungsstellen · 400 Kooperationspartner',
  ],
  [
    'Bayerisches Bündnis für Toleranz',
    'Das Bündnis tritt für Toleranz sowie den Schutz von Demokratie und Menschenwürde ein. Rechtsextremismus, Antisemitismus und Rassismus, die den Einzelnen, die Gesellschaft und den Staat bedrohen, setzt es diese Werte entgegen. Die Mitgliedsorganisationen bekämpfen rechtsextreme, antisemitische und rassistische Einstellungen, Haltungen und Handlungen — nicht aber die Menschen dahinter.',
    undefined,
  ],
  [
    'Zentralrat der Juden & Kultusministerkonferenz',
    '„Das Judentum ist seit vielen Jahrhunderten integraler Bestandteil der deutschen und europäischen Kultur, Geschichte und Gesellschaft. Jüdisches Leben wird in Schulbüchern und anderen Bildungsmedien vielfach verkürzt, verzerrt und undifferenziert dargestellt. Es ist nicht hinnehmbar, wenn sich Jüdinnen und Juden aus Angst vor antisemitischen Attacken nicht zu erkennen geben können.“ — Gemeinsame Erklärung zur Vermittlung jüdischer Geschichte, Religion und Kultur in der Schule.',
    undefined,
  ],
  [
    'Allgemeines Gleichbehandlungsgesetz (AGG)',
    'Diskriminierung ist in Deutschland verboten. Das AGG schützt vor Diskriminierung aus rassistischen Gründen oder wegen der ethnischen Herkunft, des Geschlechts, der Religion oder Weltanschauung, einer Behinderung, des Alters oder der sexuellen Identität — im Arbeitsleben und bei Alltagsgeschäften.',
    undefined,
  ],
];

export function Afd() {
  useReveal();
  return (
    <main className="page">
      <PageHead
        kicker="Aufklärung"
        title={
          <>
            Rechtsextreme <span className="stroke">Gruppierungen</span> in Deutschland
          </>
        }
        lead="Der Verfassungsschutz hat deutliche Worte für rechtsextreme Gruppierungen in Deutschland gefunden. Hier erfahren Sie mehr — sachlich, ohne Beschönigung."
      />

      <section className="page-block reveal">
        <h2 className="blocktitle">Die geistigen Brandstifter</h2>
        <div className="brands">
          {BRANDSTIFTER.map(([t, p], i) => (
            <article className="brand" key={t}>
              <span className="idx">{String(i + 1).padStart(2, '0')}</span>
              <h3>{t}</h3>
              <p>{p}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-block reveal">
        <h2 className="blocktitle">Links statt rechts</h2>
        <p className="blocklead">
          Gute Anlaufstellen für Engagement, Aufklärung und Demokratie-Arbeit:
        </p>
        <div className="chips">
          {LINKS_STATT_RECHTS.map((l) => (
            <span className="chip" key={l}>{l}</span>
          ))}
        </div>
      </section>

      <section className="page-block reveal">
        <h2 className="blocktitle">Organisationen für Prävention und Aufklärung</h2>
        <div className="prev">
          {PRAEVENTION.map(([t, p, stat]) => (
            <article className="prev-card" key={t}>
              <h3>{t}</h3>
              <p>{p}</p>
              {stat ? <span className="stat">{stat}</span> : null}
            </article>
          ))}
        </div>
      </section>

      <section className="page-cta reveal">
        <h2>Rechte Polemik, Hass und Hetze — nicht mit uns!</h2>
        <p>Aufklärung wirkt nur gemeinsam. Unterstützen Sie unsere Bildungsarbeit.</p>
        <div className="btns">
          <Link className="btn white" to="/mitglied-werden">Mitglied werden</Link>
          <a className="btn ghostlight" href="mailto:info@nichtmituns.org">Kontakt</a>
        </div>
      </section>
      <PageLinks current="/afd" />
    </main>
  );
}

/* ================================================================
   MITGLIED WERDEN
================================================================ */
const ANTRAG_URL = 'https://nichtmituns.org/wp-content/uploads/2024/07/Mitgliedsantrag-NMU.pdf';

const ARTEN: Array<[string, string, string]> = [
  [
    'Aktives Mitglied',
    '60 € / Jahr',
    'Kann jede natürliche Person werden, die im Verein oder einem von ihm geförderten Projekt aktiv mitarbeiten möchte.',
  ],
  [
    'Fördermitglied',
    '60 € / Jahr',
    'Kann jede natürliche oder juristische Person werden, die sich nicht aktiv betätigen, jedoch die Ziele und den Zweck des Vereins unterstützen möchte.',
  ],
  [
    'Ehrenmitglied',
    'beitragsfrei',
    'Können natürliche Personen werden, die sich in besonderer Weise um den Verein verdient gemacht haben — per einstimmigem Beschluss des Vorstands.',
  ],
];

const SCHRITTE: Array<[string, string]> = [
  ['Antrag laden', 'Mitgliedsantrag als PDF herunterladen.'],
  ['Ausfüllen', 'In Ruhe ausfüllen — bei Minderjährigen durch die gesetzlichen Vertreter.'],
  ['Zurückschicken', 'Per E-Mail an info@nichtmituns.org oder per Post an den Vorstand.'],
];

export function Mitglied() {
  useReveal();
  return (
    <main className="page">
      <PageHead
        kicker="Mitglied werden"
        title={
          <>
            Wir brauchen <span className="stroke">Sie!</span>
          </>
        }
        lead="Der NICHT MIT UNS e.V. lebt von seinen Mitgliedern — wir wollen die Mehrheit derjenigen sichtbar machen, die sich gegen Rassismus und Faschismus stellen und sagen: „Nicht mit uns!“"
      />

      <section className="page-block reveal">
        <p className="big-text">
          Je mehr Mitglieder und Förderer wir haben, desto kraftvoller können wir auftreten und
          unsere Stimme gegen <mark>Extremismus, Rassismus und Antisemitismus</mark> erheben. Seien
          Sie dabei — als Mitglied, als aktives Mitglied und/oder als Förderer. Unterstützung ist
          auch in Form von Künstleraktivitäten erwünscht: Lesungen, Konzerte, Performances,
          Bildende Kunst, Kampagnen sowie spezielle Angebote für junge Menschen.
        </p>
      </section>

      <section className="page-block reveal">
        <h2 className="blocktitle">Drei Wege, dabei zu sein</h2>
        <div className="board">
          {ARTEN.map(([t, preis, p], i) => (
            <article className="fact" key={t} style={{ ['--rot' as string]: `${(i - 1) * 0.8}deg` }}>
              <span className="tag">{preis}</span>
              <h3>{t}</h3>
              <p>{p}</p>
            </article>
          ))}
        </div>
        <p className="note">Die Gründungsmitglieder sind dauerhaft von den Mitgliedsbeiträgen befreit (§ 5 der Satzung).</p>
      </section>

      <section className="page-block reveal">
        <h2 className="blocktitle">Mitgliedsantrag — in drei Schritten</h2>
        <div className="steps">
          {SCHRITTE.map(([t, p], i) => (
            <div className="step" key={t}>
              <span className="ghost">{String(i + 1).padStart(2, '0')}</span>
              <b>{t}</b>
              <p>{p}</p>
            </div>
          ))}
        </div>
        <div className="btns">
          <a className="btn red" href={ANTRAG_URL} target="_blank" rel="noreferrer">
            ⬇ Mitgliedsantrag (PDF)
          </a>
          <a className="btn ghost" href="mailto:info@nichtmituns.org">Per E-Mail senden</a>
        </div>
      </section>

      <section className="page-block reveal">
        <h2 className="blocktitle">Ihre Spende für Toleranz und Vielfalt</h2>
        <p className="blocklead">
          Für unsere diversen Veranstaltungen benötigen wir Geld — daher sind wir dringend auf
          Spenden angewiesen. Selbstverständlich gegen Spendenquittung.
        </p>
        <div className="bank standalone">
          <b>Spendenkonto</b>
          <br />
          Inhaber: Nicht mit uns e.V. · Bank: Münchner Bank
          <br />
          IBAN: DE34 7019 0000 0003 3812 50 · BIC: GENODEV1M01
        </div>
      </section>

      <section className="page-cta reveal">
        <h2>Gemeinsam sind wir stärker!</h2>
        <p>Herzlichen Dank an zahlreiche Unterstützerinnen und Unterstützer.</p>
        <div className="btns">
          <a className="btn white" href={ANTRAG_URL} target="_blank" rel="noreferrer">Antrag herunterladen ↗</a>
        </div>
      </section>
      <PageLinks current="/mitglied-werden" />
    </main>
  );
}

/* ================================================================
   SATZUNG
================================================================ */
const SATZUNG: Array<[string, string[]]> = [
  [
    '§ 1 · Name, Sitz, Geschäftsjahr',
    [
      'Der Verein führt den Namen Nicht mit uns e.V. und soll in das Vereinsregister eingetragen werden.',
      'Der Nicht mit uns e.V. hat seinen Sitz in München und verfolgt ausschließlich und unmittelbar gemeinnützige Zwecke im Sinne des Abschnitts „Steuerbegünstigte Zwecke“ der Abgabenordnung.',
      'Das Geschäftsjahr des Vereins ist das Kalenderjahr.',
    ],
  ],
  [
    '§ 2 · Zweck des Vereins',
    [
      'Zweck des Vereins ist die Förderung der Demokratie, wie auch der internationalen Gesinnung, sowie der Toleranz auf allen Gebieten der Kultur und des Völkerverständigungsgedankens. Grundlage der Vereinsarbeit ist das Bekenntnis aller seiner Mitglieder zur freiheitlich demokratischen Grundordnung. Der Verein vertritt den Grundsatz religiöser und weltanschaulicher Toleranz sowie parteipolitischer Neutralität und fördert die soziale Integration ausländischer Mitbürgerinnen und Mitbürger.',
      'Der Satzungszweck wird verwirklicht insbesondere durch die Planung, Vorbereitung, Durchführung, Koordinierung und Nacharbeit von Veranstaltungen gegen Rassismus, Antisemitismus, Islamophobie, Fremdenfeindlichkeit und rechtsextremes Gedankengut, sowie durch die Herausgabe von Materialien, Plakaten, Broschüren, Handzetteln und Videos zum Zwecke der Anerkennung von Menschen fremder Herkunft.',
    ],
  ],
  [
    '§ 3 · Selbstlosigkeit',
    [
      'Der Verein ist selbstlos tätig und verfolgt nicht in erster Linie eigenwirtschaftliche Zwecke.',
      'Mittel des Vereins dürfen nur für die satzungsmäßigen Zwecke verwendet werden. Die Mitglieder erhalten keine Zuwendungen aus Mitteln des Vereins.',
      'Es darf keine Person durch Ausgaben, die dem Zweck der Körperschaft fremd sind, oder durch unverhältnismäßig hohe Vergütungen begünstigt werden.',
    ],
  ],
  [
    '§ 4 · Mitgliedschaft',
    [
      'Mitglied des Vereins kann jede natürliche wie auch juristische Person werden, die mit dem Ziel und Zweck des Vereins eng verbunden ist.',
      'Über die Aufnahme entscheidet nach schriftlichem Antrag der Vorstand. Bei Minderjährigen ist der Aufnahmeantrag durch die gesetzlichen Vertreter zu stellen.',
      'Der Verein besteht aus aktiven Mitgliedern, Fördermitgliedern und Ehrenmitgliedern.',
      'Aktives Mitglied kann jede natürliche Person werden, die im Verein oder einem von ihm geförderten Projekt aktiv mitarbeiten möchte.',
      'Fördermitglied kann jede natürliche oder juristische Person werden, die sich zwar nicht aktiv betätigt, jedoch die Ziele und den Zweck des Vereins unterstützen möchte.',
      'Zum Ehrenmitglied können natürliche Personen ernannt werden, die sich in besonderer Weise um den Verein verdient gemacht haben. Hierfür ist ein einstimmiger Beschluss des Vorstands erforderlich.',
      'Aufnahmeanträge sind schriftlich an den Vorstand des Vereins zu richten.',
      'Die Mitgliedschaft erlischt a) durch Tod des Mitglieds oder bei juristischen Personen durch Erlöschen, b) durch Austrittserklärung, c) durch Ausschluss.',
      'Der Austritt aus dem Verein ist jederzeit zulässig, ohne Einhaltung einer Frist. Er muss schriftlich gegenüber dem Vorstand erklärt werden.',
      'Der Ausschluss erfolgt a) falls das Mitglied seinen Jahresbeitrag drei Monate nach Fälligkeit trotz schriftlicher Mahnung nicht entrichtet hat, b) falls das Mitglied durch sein Verhalten die Belange oder das Ansehen des Vereins schädigt.',
      'Über den Ausschluss entscheidet der Vorstand. Das Mitglied wird unter Angabe der Gründe davon schriftlich unterrichtet. Gegen diesen Beschluss kann innerhalb eines Monats nach Zustellung die Entscheidung in der nächsten Mitgliederversammlung beantragt werden.',
      'Das ausgetretene oder ausgeschlossene Mitglied hat keinen Anspruch gegenüber dem Vereinsvermögen.',
    ],
  ],
  [
    '§ 5 · Beiträge & Finanzierung',
    [
      'Ein jährlicher Mitgliedsbeitrag ist zu leisten.',
      'Die Höhe des Mitgliedsbeitrags beträgt 60,- € pro Jahr.',
      'Die Gründungsmitglieder sind dauerhaft von den Mitgliedsbeiträgen befreit.',
      'Die Mittel zur Erreichung des Vereinszwecks sollen ferner durch Geld- und Sachspenden, Beiträge der Mitglieder, öffentliche Mittel sowie durch Inanspruchnahme öffentlicher oder privater Stiftungen aufgebracht werden.',
    ],
  ],
  [
    '§ 6 · Organe & Vorstand',
    [
      'Organe des Vereins sind a) der Vorstand, b) die Mitgliederversammlung.',
      'Der Vorstand im Sinne des § 26 BGB besteht aus mindestens drei Vorsitzenden. Der Verein wird von jeweils zwei Vorstandsmitgliedern gemeinsam vertreten.',
      'Der Vorstand wird von der Mitgliederversammlung auf die Dauer von fünf Jahren gewählt; er bleibt jedoch so lange im Amt, bis eine Neuwahl erfolgt ist.',
      'Der Verein wird gerichtlich und außergerichtlich durch jeweils zwei Vorstandsmitglieder gemeinsam vertreten. Im Innenverhältnis vertreten die Vorsitzenden den Verein ebenfalls zu zweit.',
      'Außer den dem Vorstand in dieser Satzung oder von der Mitgliederversammlung übertragenen Aufgaben führt der Vorstand die laufenden Geschäfte des Vereins. Er kann besondere Zuständigkeiten auf einzelne Mitglieder übertragen.',
      'Der Vorstand kann bei Bedarf und unter Berücksichtigung der wirtschaftlichen Verhältnisse und der Haushaltslage beschließen, dass Vereins- und Organ-Ämter entgeltlich auf der Grundlage eines Dienstvertrags oder gegen Zahlung einer pauschalierten Aufwandsentschädigung ausgeübt werden. Die Entscheidung über Vertragsbeginn, Vertragsinhalte und Vertragsende trifft der Vorstand.',
      'Der Vorstand ist ermächtigt, Tätigkeiten für den Verein gegen Zahlung einer angemessenen Vergütung oder Aufwandsentschädigung zu beauftragen. Maßgebend ist die Haushaltslage des Vereins.',
      'Zur Erledigung der Geschäftsführungsaufgaben und zur Führung der Geschäftsstelle ist der Vorstand ermächtigt, im Rahmen der haushaltsrechtlichen Tätigkeiten hauptamtlich Beschäftigte für die Verwaltung anzustellen.',
      'Im Übrigen haben die Mitglieder und Mitarbeiter des Vereins einen Aufwendungsersatzanspruch nach § 670 BGB für solche Aufwendungen, die ihnen durch die Tätigkeit für den Verein entstanden sind. Hierzu gehören insbesondere Fahrtkosten, Reisekosten, Porto-, Telefon- sowie Kopier- und Druckkosten. Die Mitglieder und Mitarbeiter haben das Gebot der Sparsamkeit zu beachten. Der Vorstand kann durch Beschluss im Rahmen der steuerrechtlichen Möglichkeiten Aufwandspauschalen festsetzen.',
    ],
  ],
  [
    '§ 7 · Mitgliederversammlung',
    [
      'Innerhalb von drei Monaten nach Ablauf eines Geschäftsjahres ist die ordentliche Mitgliederversammlung durch den Vorstand einzuberufen. Die Einladung hat schriftlich unter Angabe der Tagesordnung und Einhaltung einer Frist von vier Wochen zwischen Absendetermin und Versammlungstermin zu erfolgen.',
      'Außerordentliche Mitgliederversammlungen sind auf Antrag des Vorstandes oder auf schriftliches Verlangen von mindestens einem Viertel der Mitglieder durch den Vorstand einzuberufen. Dazu sind die unter § 7 Abs. 1 genannten Formvorschriften entsprechend anzuwenden.',
      'Der Beschlussfassung durch die ordentliche Mitgliederversammlung unterliegen insbesondere: a) Genehmigung des Berichts über das abgelaufene Geschäftsjahr, b) Genehmigung der Jahresabrechnung und des Haushaltsplanes, c) Entlastung des Vorstandes, d) Wahlen zum Vorstand, e) Wahl von zwei Rechnungsprüfern, f) Satzungsänderungen und Auflösung des Vereins.',
      'Im Übrigen beschließt die Mitgliederversammlung über die vom Vorstand bei Einberufung angekündigten Tagesordnungspunkte. Anträge zur Tagesordnung müssen bis 14 Tage vor der Mitgliederversammlung schriftlich an den Vorstand gestellt werden. In der Mitgliederversammlung können Anträge zur Tagesordnung nur noch in Dringlichkeitsfällen und mit Zustimmung von 3/4 der vertretenen Mitglieder zugelassen werden. Die Mitgliederversammlung wird vom Vorsitzenden oder vom Schriftführer geleitet. Über die Beschlüsse ist ein Protokoll anzufertigen, das vom Schriftführer zu unterzeichnen ist.',
      'Die Mitgliederversammlung beschließt, insoweit nicht gesetzlich eine andere Mehrheit zwingend vorgeschrieben ist, mit Mehrheit der abgegebenen Stimmen. Die Mitgliederversammlung ist unabhängig von der Anzahl der erschienenen Mitglieder auf jeden Fall beschlussfähig, sofern alle Vereinsmitglieder ordnungsgemäß geladen wurden.',
      'Jedes Mitglied des Vereins hat eine Stimme. Es kann sich in der Ausübung des Stimmrechts durch ein durch eine schriftliche Vollmacht ausgewiesenes Mitglied vertreten lassen. Bei Stimmengleichheit gibt die Stimme des Vorsitzenden den Ausschlag.',
    ],
  ],
  [
    '§ 8 · Auflösung des Vereins',
    [
      'Eine Auflösung des Vereins kann nur mit einer 3/4-Mehrheit der Mitgliederversammlung beschlossen werden, sofern mindestens 2/3 der Mitglieder vertreten sind. Sind weniger Mitglieder vertreten, ist innerhalb von 6 Wochen eine neue Mitgliederversammlung einzuberufen, die dann mit einer 3/4-Mehrheit aller vertretenen Mitglieder über die Auflösung beschließen kann.',
      'Bei Auflösung des Vereins hat die Mitgliederversammlung einen Liquidator zu bestellen.',
      'Bei Auflösung des Vereins, dem Entzug der Rechtsfähigkeit des Vereins oder bei Wegfall steuerbegünstigter Zwecke fällt das Vermögen des Vereins an eine juristische Person des öffentlichen Rechts oder eine andere steuerbegünstigte Körperschaft zwecks Verwendung im Bereich der Förderung des demokratischen Staatswesens (§ 52 Abs. 2 Nr. 24 AO). Die Auswahl der Körperschaft wird dem Vorstand überlassen.',
      'Ein Anspruch auf Rückgewährung geleisteter Beiträge, Zuwendungen, Spenden oder sonstiger Einlagen besteht weder bei Auflösung noch in einem sonstigen Fall.',
    ],
  ],
];

export function Satzung() {
  useReveal();
  let n = 0;
  return (
    <main className="page">
      <PageHead
        kicker="Transparenz"
        title={
          <>
            Satzung des <span className="stroke">Nicht mit uns e.V.</span>
          </>
        }
        lead="Unsere Statuten — wofür wir stehen, wie wir arbeiten und wie der Verein organisiert ist. Eingetragen beim Amtsgericht München, VR 210559."
      />
      <section className="page-block reveal">
        <div className="law">
          {SATZUNG.map(([para, arts]) => (
            <div className="law-group" key={para}>
              <h3>{para}</h3>
              <ol>
                {arts.map((a) => {
                  n += 1;
                  return (
                    <li key={n}>
                      <span className="no">{n}.</span>
                      <p>{a}</p>
                    </li>
                  );
                })}
              </ol>
            </div>
          ))}
        </div>
      </section>
      <PageLinks current="/satzung" />
    </main>
  );
}

/* ================================================================
   KONTAKT
================================================================ */
const KONTAKTE: Array<[string, ReactNode]> = [
  [
    'E-Mail',
    <a href="mailto:info@nichtmituns.org">info@nichtmituns.org</a>,
  ],
  [
    'Telefon',
    <a href="tel:+491702208483">+49 170 2208483</a>,
  ],
  [
    'Postadresse',
    <>
      Nicht mit uns e.V.
      <br />
      Kaiserplatz 10 · 80803 München
    </>,
  ],
  [
    'Vereinsadresse',
    <>
      Teufstettener Str. 4
      <br />
      85457 Wörth
    </>,
  ],
  [
    'Vereinsregister',
    <>
      Amtsgericht München
      <br />
      Registernummer: VR 210559
    </>,
  ],
  [
    'Finanzamt München',
    <>Steuernummer: 143/220/00066</>,
  ],
];

export function Kontakt() {
  useReveal();
  return (
    <main className="page">
      <PageHead
        kicker="Kontakt"
        title={
          <>
            Fragen? <span className="stroke">Kontaktieren</span> Sie uns!
          </>
        }
        lead="Engagiert bei der Bekämpfung von Extremismus und Rassismus: Unser Team setzt sich deutschlandweit mit Leidenschaft ein — durch Programme, Bildungsangebote und Aufklärungskampagnen. Scheuen Sie sich nicht, Kontakt aufzunehmen."
      />

      <section className="page-block reveal">
        <h2 className="blocktitle">Kontaktinformation</h2>
        <div className="contact">
          {KONTAKTE.map(([t, v], i) => (
            <article className="contact-card" key={t}>
              <span className="idx">{String(i + 1).padStart(2, '0')}</span>
              <b>{t}</b>
              <p>{v}</p>
            </article>
          ))}
        </div>
        <div className="chips socials">
          <a className="chip" href="https://www.instagram.com/nichtmituns.ev/" target="_blank" rel="noreferrer">Instagram</a>
          <a className="chip" href="https://www.facebook.com/nichtmitunsev" target="_blank" rel="noreferrer">Facebook</a>
          <a className="chip" href="https://www.tiktok.com/@nichtmituns.ev" target="_blank" rel="noreferrer">TikTok</a>
          <a className="chip" href="https://youtu.be/F0XQANsuSGQ" target="_blank" rel="noreferrer">YouTube</a>
        </div>
      </section>

      <section className="page-cta reveal">
        <h2>Schreiben Sie uns!</h2>
        <p>Ob Frage, Idee oder Unterstützung — wir freuen uns auf Ihre Nachricht.</p>
        <div className="btns">
          <a className="btn white" href="mailto:info@nichtmituns.org">✉ info@nichtmituns.org</a>
          <a className="btn ghostlight" href="tel:+491702208483">📞 Anrufen</a>
        </div>
      </section>
      <PageLinks current="/kontakt" />
    </main>
  );
}
