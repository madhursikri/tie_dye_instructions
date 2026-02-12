# Tie-Dye Instructions Project

This repository is a plain static website.

## Project Structure

- `index.html`: page structure and metadata
- `styles.css`: all styling
- `script.js`: language data and UI rendering
- `public/`: static assets (`favicon`, social image, hero image)

## Local Run

No build step is required.

1. Open `index.html` directly in a browser, or
2. Serve the folder from any static web server.

Example using Python:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Production Deployment

This project is ready for static hosting (GitHub Pages, Netlify, Vercel static output, S3 + CloudFront, etc.).

Deployment checklist:

1. Upload the repository root and keep `public/` at the same relative path.
2. Ensure `index.html`, `styles.css`, and `script.js` are served as UTF-8.
3. Enable gzip/brotli compression on the host if available.
4. Set a long cache TTL for files in `public/` and a shorter TTL for `index.html`.

## Language Updates

All language content is in `script.js`, inside `translations`.

### Edit an existing language

1. Find the language code inside `translations` (for example `en`, `es`, `fr`).
2. Update all user-facing values:
   - `eyebrow`
   - `pageTitle`
   - `stepsHeading`
   - `languageSelectLabel`
   - `title`
   - `subtitle`
   - `steps` items (`title`, `desc`)
   - `footer`

### Add a new language

1. Add the language code to `LANGUAGES`.
2. Add the display name to `languageNames`.
3. Add a full translation entry in `translations` using the same keys as `en`.
4. If the language is RTL, add the code to `RTL_LANGUAGES`.
