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
type Person = { name: string; role: string; bio: string; quote: string };

const TEAM: Person[] = [
  {
    name: 'Ron Williams',
    role: 'Gründungsmitglied · Vorstandsvorsitzender',
    bio: 'Seit Jahrzehnten im Einsatz gegen Rassismus hat kaum ein anderer schon so viel in Deutschland bewegt. Die Wahrung von Demokratie und kultureller Vielfalt ist sein oberstes Ziel. Sein Motto hat er von seinem Idol Harry Belafonte übernommen.',
    quote: 'Wir haben die Verantwortung! Hass und Gewalt müssen wir mit Herz und Verstand entgegentreten.',
  },
  {
    name: 'Viktor Worms',
    role: 'Vorstandsvorsitzender',
    bio: 'Als Medienprofi weiß er, wie man Menschen erreichen kann. Sich für den Erhalt der Demokratie einzusetzen, ist für ihn eine gesellschaftliche Verpflichtung.',
    quote: 'Wir haben unsere Eltern vielleicht nie direkt gefragt, aber mit Blick auf die deutsche Geschichte haben wir die Frage auf der Zunge gehabt: Warum habt Ihr das zugelassen?',
  },
  {
    name: 'Tobias Irl',
    role: 'Vorstandsvorsitzender',
    bio: 'Seinen individuellen Beitrag zum Erhalt einer bunten und vielfältigen Gesellschaft zu leisten, ist für ihn eine absolute Herzensangelegenheit und wichtiger denn je.',
    quote: 'An welchem Ort man zur Welt kommt, in welcher Kultur man aufwächst, das kann man sich nicht aussuchen. Viel mehr kann man darauf stolz sein, was man in seinem Leben erreicht.',
  },
  {
    name: 'Ali Kiliç',
    role: 'Vorstandsvorsitzender',
    bio: 'Als ehemaliger Bürgermeister der türkischen Stadtgemeinde Maltepe bringt er nicht nur langjährige politische Erfahrung mit, er engagiert sich auch leidenschaftlich für einen interkulturellen Austausch sowie den Erhalt der demokratischen Ordnung.',
    quote: 'Europa, die Wiege der Demokratie, durchlebt eine Zeit, welche an der Grundordnung unserer demokratischen Werte rüttelt. Das Gegenmittel gegen Rassismus und Antisemitismus ist sozialer Friede.',
  },
  {
    name: 'Franziska Irl',
    role: 'Vorstandsvorsitzende',
    bio: 'Sie sieht ihre Aufgabe vor allem darin, die junge Generation anzusprechen und die Inhalte des Vereins in den sozialen Netzwerken zu verbreiten. Ihr ist es besonders wichtig, den extremen Parteien diese neue Plattform nicht zu überlassen.',
    quote: 'Gerade bei uns, den Heranwachsenden, ist es wichtig, ausreichend zu informieren, damit sich die Geschichte nicht wiederholt. Deshalb möchte ich möglichst viele junge Menschen aufklären.',
  },
];

const GRUENDUNG: Person[] = [
  {
    name: 'Christian Ude',
    role: 'Gründungsmitglied',
    bio: 'Über 20 Jahre lang hat er sich als Münchner Stadtoberhaupt dafür eingesetzt, dem Judentum wieder einen Platz und eine Zukunft in dieser Stadt zu geben, religiöse und sexuelle Minderheiten zu respektieren und Vielfalt als Bereicherung zu erleben.',
    quote: 'München hat erlebt, wie Rechtsextremisten das politische Klima der Stadt erst verpesten und dann die Bevölkerung in einen Weltkrieg treiben. Wir sind alle verantwortlich, dass dies in keiner Stadt nochmals geschieht.',
  },
  {
    name: 'Susanne von Lieven-Jell',
    role: 'Gründungsmitglied',
    bio: 'An diesem Projekt aktiv teilzunehmen, war für sie eine selbstverständliche gesellschaftliche Verpflichtung. Wegschauen löst keine Probleme — deshalb hat sie ihre Einstellung auch ganz klar formuliert.',
    quote: 'Ich stehe auf, weil ich niemals von meinen Enkeln gefragt werden will: Warum hast Du damals nichts gemacht?',
  },
  {
    name: 'Michael Dietmayr',
    role: 'Gründungsmitglied',
    bio: 'Durch die aktive Teilnahme an diesem Verein möchte er dazu beitragen, auch weiterhin in einem Land leben zu dürfen, in dem es so viele unterschiedliche Kulturen und Menschen gibt.',
    quote: 'Wir sollten die Chancen nutzen, von schönen Dingen anderer Kulturen zu profitieren. Ohne Vorurteile, Hass und Hetze.',
  },
  {
    name: 'Alexander Wolfrum',
    role: 'Gründungsmitglied',
    bio: 'Reden ist für ihn der Schlüssel zu einem friedfertigen Miteinander aller Religionen und Kulturen. Der direkte Austausch ist und bleibt das wichtigste Mittel für ein harmonisches Zusammenleben.',
    quote: 'Ich bin ein Verfassungs-Fan. Die Würde des Menschen ist unantastbar.',
  },
  {
    name: 'Marian Offmann',
    role: 'Gründungsmitglied',
    bio: 'Seit er politische Ämter bekleidet — sei es im Vorstand der jüdischen Gemeinde oder im Münchner Rathaus — steht er konsequent auf gegen Rechtsradikale, gegen Antisemiten und Rassisten.',
    quote: '1933 darf sich niemals wiederholen! Wir müssen gemeinsam offensiv die Rechtspopulisten und Neonazis in die Schranken weisen. Lasst uns kämpfen!',
  },
];

const EHREN: Person[] = [
  {
    name: 'Sebastian Roloff',
    role: 'Ehrenmitglied · MdB',
    bio: 'Als Mitglied des Deutschen Bundestages ist es für ihn eine Selbstverständlichkeit, sich zu engagieren — und seine Kontakte für den Verein spielen zu lassen.',
    quote: 'Die Werte, die unsere Gesellschaft ausmachen und zusammenhalten, sind bedroht. Wir müssen sie jeden Tag verteidigen — gegen Rassisten, Antisemiten und andere Hetzer von rechts, die nichts weniger wollen, als unsere Demokratie abzuschaffen.',
  },
  {
    name: 'Uschi Glas',
    role: 'Ehrenmitglied',
    bio: 'Als Demokratin durch und durch sieht sie es als ihre Pflicht an, sich gegen Extremismus jeglicher Art zu engagieren. Als sie von diesem Verein hörte, war sie sofort bereit, ihre Unterstützung anzubieten.',
    quote: 'Viele Menschen nehmen die Demokratie und unsere Freiheit zu selbstverständlich.',
  },
];

function PersonCard({ p, i }: { p: Person; i: number }) {
  return (
    <article className="person big">
      <span className="mono" aria-hidden="true">
        {p.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}
      </span>
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
