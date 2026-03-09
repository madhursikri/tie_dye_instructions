import { chromium } from "playwright";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");
const outputPath = process.env.OUTPUT_PATH
  ? path.resolve(repoRoot, process.env.OUTPUT_PATH)
  : path.join(repoRoot, "public", "print", "tie-dye-workshop-handout.pdf");

const websiteUrl = "https://tie-dye-instructions.pages.dev/";
const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(websiteUrl)}`;
const heroImagePath = path.join(repoRoot, "public", "images", "tie-dye-hero.png");
const heroImageBuffer = await fs.readFile(heroImagePath);
const heroImageDataUri = `data:image/png;base64,${heroImageBuffer.toString("base64")}`;

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
      font-size: 10pt;
      line-height: 1.28;
    }
    .sheet {
      min-height: calc(11in - 1in);
      display: flex;
      flex-direction: column;
      gap: 0.14in;
    }
    .hero {
      position: relative;
      border: 1px solid #d1d5db;
      border-radius: 8px;
      overflow: hidden;
      height: 1.15in;
      background: #111827;
    }
    .hero img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .hero-title {
      position: absolute;
      inset: 0;
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 19pt;
      font-weight: 700;
      letter-spacing: 0.01em;
      text-shadow: 0 1px 6px rgba(0, 0, 0, 0.5);
      background: linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2));
    }
    h1 {
      margin: 0;
      font-size: 18pt;
      text-align: center;
    }
    .subtitle {
      margin: 0;
      text-align: center;
      font-size: 10pt;
      color: #374151;
    }
    .section {
      border: 1px solid #d1d5db;
      border-radius: 8px;
      padding: 8px 10px;
      background: #f9fafb;
    }
    h2 {
      margin: 0 0 5px;
      font-size: 12.5pt;
    }
    ol {
      margin: 0;
      padding-left: 20px;
    }
    li + li {
      margin-top: 3px;
    }
    li strong {
      font-size: 10.2pt;
    }
    .footer {
      margin-top: auto;
      text-align: center;
      padding-top: 4px;
      background: linear-gradient(to bottom, #ffffff, #f8fbff);
      border-radius: 10px;
    }
    .qr-block {
      text-align: center;
      margin-top: 2px;
    }
    .qr-caption-top {
      margin: 0 0 6px;
      font-size: 10pt;
      color: #4b5563;
      font-weight: 700;
    }
    .qr-caption-top p {
      margin: 0;
      line-height: 1.2;
      font-weight: 700;
    }
    .qr-caption-top p + p {
      margin-top: 2px;
    }
    .qr {
      width: 1.55in;
      height: 1.55in;
      object-fit: contain;
      display: block;
      margin: 0 auto 6px;
      border: 2px solid #0f172a;
      border-radius: 6px;
      background: white;
      padding: 5px;
      box-shadow: 0 6px 18px rgba(15, 23, 42, 0.18);
    }
    .link {
      margin: 0;
      font-size: 9.2pt;
      color: #111827;
      font-weight: 600;
      word-break: break-all;
    }
    .crafted-bottom {
      margin: 7px 0 0;
      font-size: 9.8pt;
      color: #374151;
      font-style: italic;
    }
  </style>
</head>
<body>
  <main class="sheet">
    <section class="hero" aria-label="Tie-dye hero image">
      <img src="${heroImageDataUri}" alt="Tie-dye pattern" />
      <p class="hero-title">Patterson Elementary PTA, Tie-Dye Care Guide</p>
    </section>

    <header>
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

    <section class="qr-block">
      <div class="qr-caption-top">
        <p>Scan to view the multilingual online version.</p>
        <p>Escanea para ver la versión multilingüe en línea.</p>
        <p>扫码查看多语言在线版本。</p>
        <p>다국어 온라인 버전을 보려면 스캔하세요.</p>
      </div>
      <img class="qr" src="${qrSrc}" alt="QR code to tie-dye instructions website" />
      <p class="link">${websiteUrl}</p>
      <p class="crafted-bottom">Handcrafted with love. Treat it with care.</p>
    </section>

    <footer class="footer">
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
