# Tie-Dye Instructions Project

This project is now a plain static website:

- `index.html`
- `styles.css`
- `script.js`
- `public/` assets

## Run / Deploy

No build step is required.

1. Open `index.html` directly in a browser, or
2. Host the folder on any static web server (GitHub Pages, Netlify, S3, etc.).

## Language Updates

All language-related content lives in `script.js`.

### Edit an existing language

1. Open `script.js`.
2. Find the language code inside `translations` (for example `en`, `es`, `fr`).
3. Update:
   - `title`
   - `subtitle`
   - each item in `steps` (`title`, `desc`)
   - `footer`
4. Update the top eyebrow text for that language in `guideLabels`.
5. Save and refresh `index.html`.

### Add a new language (step-by-step)

1. Pick a language code (example: `pt`).
2. Add the code to `LANGUAGES`.
3. Add the display name in `languageNames`:
   - Example: `pt: "Português"`
4. Add the eyebrow label in `guideLabels`:
   - Example: `pt: "Guia de Cuidados"`
5. Add a full translation object in `translations` using the same shape as `en`:
   - `title`, `subtitle`, `steps` (4 items), `footer`
6. If the language is RTL, add its code to `RTL_LANGUAGES`.
7. Save and refresh `index.html`.
