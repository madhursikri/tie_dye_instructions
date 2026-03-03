import { chromium } from "playwright";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");
const outputPath = path.join(repoRoot, "public", "print", "tie-dye-workshop-handout.pdf");

const websiteUrl = "https://tie-dye-instructions.pages.dev/";
const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(websiteUrl)}`;

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Tie-Dye Workshop Care Instructions</title>
  <style>
    @page {
      size: Letter;
      margin: 0.5in;
    }
    * {
      box-sizing: border-box;
    }
    html, body {
      margin: 0;
      padding: 0;
      font-family: "Arial", sans-serif;
      color: #111827;
    }
    body {
      font-size: 10.5pt;
      line-height: 1.32;
    }
    .sheet {
      min-height: calc(11in - 1in);
      display: flex;
      flex-direction: column;
      gap: 0.18in;
    }
    h1 {
      margin: 0;
      font-size: 20pt;
      text-align: center;
    }
    .subtitle {
      margin: 0;
      text-align: center;
      font-size: 10.5pt;
      color: #374151;
    }
    .section {
      border: 1px solid #d1d5db;
      border-radius: 8px;
      padding: 10px 12px;
      background: #f9fafb;
    }
    h2 {
      margin: 0 0 6px;
      font-size: 13.5pt;
    }
    ol {
      margin: 0;
      padding-left: 20px;
    }
    li + li {
      margin-top: 4px;
    }
    li strong {
      font-size: 10.7pt;
    }
    .footer {
      margin-top: auto;
      text-align: center;
      border-top: 1px dashed #d1d5db;
      padding-top: 10px;
    }
    .qr {
      width: 1.35in;
      height: 1.35in;
      object-fit: contain;
      display: block;
      margin: 0 auto 6px;
      border: 1px solid #e5e7eb;
      border-radius: 6px;
      background: white;
      padding: 4px;
    }
    .link {
      margin: 0;
      font-size: 9.5pt;
      color: #1f2937;
      word-break: break-all;
    }
    .tiny {
      margin: 4px 0 0;
      font-size: 9pt;
      color: #4b5563;
    }
  </style>
</head>
<body>
  <main class="sheet">
    <header>
      <h1>Tie-Dye Care Instructions</h1>
      <p class="subtitle">Please take this home and follow in order.</p>
    </header>

    <section class="section">
      <h2>Initial Wash Process</h2>
      <ol>
        <li><strong>Keep Bands On:</strong> Rinse the item while still tied up under cold running water to prevent colors from bleeding into white areas.</li>
        <li><strong>Rinse to Clear:</strong> Gradually increase water temperature from cold to warm, and finally to hot, squeezing gently until the water runs clear.</li>
        <li><strong>Remove Bands:</strong> Remove the rubber bands and rinse again in warm/hot water.</li>
        <li><strong>Machine Wash:</strong> Wash the item(s) alone in the washing machine using hot water and a small amount of detergent.</li>
        <li><strong>Optional Step:</strong> To ensure maximum color retention, soak the item in equal parts white vinegar and cold water for 30 minutes after the initial rinse.</li>
      </ol>
    </section>

    <section class="section">
      <h2>Subsequent Washes</h2>
      <ol>
        <li><strong>Initial Times:</strong> Wash new tie-dye items separately for the first 1-2 washes to avoid staining other clothes.</li>
        <li><strong>Water Temp:</strong> Use cold water for future washes to prevent fading.</li>
        <li><strong>Detergent:</strong> Use mild, color-safe detergent.</li>
        <li><strong>Method:</strong> Air drying is best to prevent fading, but you can tumble dry on low heat.</li>
      </ol>
    </section>

    <footer class="footer">
      <img class="qr" src="${qrSrc}" alt="QR code to tie-dye instructions website" />
      <p class="link">${websiteUrl}</p>
      <p class="tiny">Scan to view the multilingual online version.</p>
    </footer>
  </main>
</body>
</html>`;

await fs.mkdir(path.dirname(outputPath), { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setContent(html, { waitUntil: "networkidle" });

await page.pdf({
  path: outputPath,
  format: "Letter",
  printBackground: true,
  margin: { top: "0.5in", right: "0.5in", bottom: "0.5in", left: "0.5in" },
});

await browser.close();
console.log(`Created ${outputPath}`);
