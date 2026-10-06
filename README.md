# Nicht mit uns e.V. — Website-Entwurf

React-Redesign der Vereinsseite (Plakat-Stil) mit herunterladbarem PNG-Plakat.

## Stack

- React + TypeScript + Vite + Tailwind CSS

## Entwicklung

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Das Ergebnis liegt in `dist/`.

## Bilder

Die Seite lädt ihre Bilder aus `public/img/` (im Code über `/img/…`-Pfade
verlinkt). Die 6 Dateien müssen einmalig ins Repository hochgeladen werden:

- `event.jpg`
- `handschlag-bg.jpg` (Hintergrund Handschlag-Abschnitt)
- `handschlag.png` (Plakat-Export)
- `projekt.jpg`
- `ron-williams.jpg` (Hero-Foto)
- `team.jpg`

Am einfachsten über die GitHub-Weboberfläche: Ordner `public/img/` öffnen
→ **Add file → Upload files** → die 6 Dateien per Drag & Drop ablegen →
**Commit changes**. Ohne sie läuft die Seite, zeigt aber keine Fotos.
