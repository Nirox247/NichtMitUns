# Nicht mit uns e.V. – Website-Redesign (Vorschau)

Redesign-Vorschau für nichtmituns.org – gebaut mit React, TypeScript, Vite und Tailwind CSS.

## Schnellstart

```bash
npm install
npm run dev      # Entwicklung auf http://localhost:3000
npm run build    # Produktions-Build nach dist/
```

## Bilder

Die Bilder in `public/img/` sind nicht direkt im Repository gespeichert
(Binärdateien). Sie werden beim ersten `npm run dev` oder `npm run build`
automatisch heruntergeladen – siehe `IMAGES` in `vite.config.ts`.
Dafür ist einmalig eine Internetverbindung nötig. Danach liegt die Seite
komplett mit allen Bildern lokal vor, auch im Build-Ergebnis (`dist/img/`).
