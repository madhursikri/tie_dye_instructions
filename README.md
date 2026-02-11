# Adding Support for a New Language (Plain HTML/JS Version)

This guide explains how to add a new language to the Tie-Dye Care Guide website.

## Files to Update

### 1. `client/index.html`

All translations and configurations are now located in the `<script>` tag at the bottom of `client/index.html`.

#### Step A: Add to the Dropdown
Locate the `<select id="lang-select">` and add a new `<option>`.
```html
<option value="your_new_code">Display Name (Local Name)</option>
```

#### Step B: Add Translations to the `translations` Object
Find the `const translations = { ... };` object in the script tag and add your new entry.
```javascript
const translations = {
    // ... existing languages
    your_new_code: {
        title: "Translated Title",
        subtitle: "Translated Subtitle",
        steps: [
            { title: "Step 1", desc: "Description 1", icon: 'SVG_PATH_D_ATTRIBUTE' },
            { title: "Step 2", desc: "Description 2", icon: 'SVG_PATH_D_ATTRIBUTE' },
            { title: "Step 3", desc: "Description 3", icon: 'SVG_PATH_D_ATTRIBUTE' },
            { title: "Step 4", desc: "Description 4", icon: 'SVG_PATH_D_ATTRIBUTE' }
        ],
        footer: "Translated Footer"
    }
};
```
*Note: The `icon` field uses the `d` attribute of a Lucide icon SVG path.*

#### Step C: Handle RTL (Optional)
If the new language is Right-to-Left (like Arabic or Hebrew), update the `isUrdu` check in the `updateContent` function.
```javascript
const isRTL = ['ur', 'your_new_code'].includes(lang);
```

## Testing Your Changes
1. Open the website.
2. Select your new language from the dropdown.
3. Verify the text and layout.
