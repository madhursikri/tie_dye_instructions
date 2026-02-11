# Adding Support for a New Language

This guide explains how to add a new language to the Tie-Dye Care Guide website.

## Files to Update

### 1. `client/src/pages/home.tsx`

This is the primary file where all translations and language configurations reside.

#### Step A: Update the `Language` Type
Add your new language code (ISO 639-1) to the `Language` type definition.
```typescript
type Language = "en" | "es" | "fr" | "de" | "hi" | "pa" | "it" | "ur" | "your_new_code";
```

#### Step B: Add Translations
Add a new entry to the `translations` object with the translated text for each section.
```typescript
const translations: Record<Language, Translation> = {
  // ... existing languages
  your_new_code: {
    title: "Translated Title",
    subtitle: "Translated Subtitle",
    steps: [
      { title: "Step 1", desc: "Description 1", icon: Droplets },
      { title: "Step 2", desc: "Description 2", icon: ThermometerSnowflake },
      { title: "Step 3", desc: "Description 3", icon: Wind },
      { title: "Step 4", desc: "Description 4", icon: Sparkles },
    ],
    footer: "Translated Footer"
  }
};
```

#### Step C: Update Language Names
Add the display name for the new language to the `languageNames` object.
```typescript
const languageNames: Record<Language, string> = {
  // ... existing languages
  your_new_code: "Display Name (Local Name)"
};
```

#### Step D: Handle RTL (Optional)
If the new language is Right-to-Left (like Arabic or Hebrew), update the logic in the `Home` component's JSX to apply RTL classes. Search for the `lang === 'ur'` checks and add your new language code there.

Example:
```tsx
<main className={`pt-24 pb-12 ${['ur', 'your_new_code'].includes(lang) ? 'rtl' : 'ltr'}`}>
```

## Testing Your Changes
1. Open the website.
2. Use the language selector dropdown in the top navigation bar.
3. Verify that all static text, titles, and step descriptions update correctly.
4. Check that the layout remains polished and responsive.
