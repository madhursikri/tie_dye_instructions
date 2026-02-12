# Tie-Dye Instructions Project

This repository currently contains two UI implementations of the same tie-dye care guide:

1. `index.html`: plain HTML/JS version.
2. `src/pages/home.tsx`: React/TypeScript version.

Both versions include the same translation content and language selector.

## Adding a New Language

Update both implementations so they stay in sync.

### 1. Plain HTML/JS version (`index.html`)

1. Add the new option in `<select id="lang-select">`.
2. Add a new entry in `translations`.
3. If the language is RTL, update:
   - `const isRTL = ['ur', 'your_new_code'].includes(lang);`

### 2. React/TypeScript version (`src/pages/home.tsx`)

1. Extend the `Language` type with the new language code.
2. Add translated content in `translations`.
3. Add label in `languageNames`.
4. If the language is RTL, include it in:
   - `const isRTL = ['ur', 'your_new_code'].includes(lang);`

## Testing

1. Open the app.
2. Switch to the new language from the dropdown.
3. Verify title, subtitle, steps, footer, and RTL layout (if applicable).
