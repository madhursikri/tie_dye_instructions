const LANGUAGES = ["en", "es", "fr", "de", "hi", "pa", "it", "ur", "zh", "ko"];
const RTL_LANGUAGES = new Set(["ur"]);
const LANG_STORAGE_KEY = "tieDyeLanguage";

const languageNames = {
  en: "English",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  hi: "हिंदी",
  pa: "ਪੰਜਾਬੀ",
  it: "Italiano",
  ur: "اردو",
  zh: "中文",
  ko: "한국어",
};

const icons = {
  rinse: "💧",
  wash: "🧺",
  dry: "🌬️",
  safe: "✨",
};

const translations = {
  en: {
    eyebrow: "Care Guide",
    pageTitle: "Tie-Dye Care Guide",
    stepsHeading: "Step-by-step care",
    languageSelectLabel: "Select language",
    title: "Tie-Dye Care Guide",
    subtitle: "Keep your colors vibrant forever",
    steps: [
      { title: "Rinse Cold", desc: "Rinse under cold running water until the water runs clear.", icon: icons.rinse },
      { title: "Wash Alone", desc: "For the first wash, keep it solo to avoid color bleeding.", icon: icons.wash },
      { title: "Air Dry", desc: "Avoid direct sunlight. Flat dry for the best shape preservation.", icon: icons.dry },
      { title: "Color Safe", desc: "Use mild, bleach-free detergent for future washes.", icon: icons.safe },
    ],
    footer: "Handcrafted with love. Treat it with care.",
  },
  es: {
    eyebrow: "Guía de Cuidado",
    pageTitle: "Guía de Cuidado Tie-Dye",
    stepsHeading: "Cuidado paso a paso",
    languageSelectLabel: "Seleccionar idioma",
    title: "Guía de Cuidado Tie-Dye",
    subtitle: "Mantén tus colores vibrantes para siempre",
    steps: [
      { title: "Enjuague Frío", desc: "Enjuaga con agua fría hasta que el agua salga clara.", icon: icons.rinse },
      { title: "Lavar Solo", desc: "Para el primer lavado, lávalo solo para evitar que se destiña.", icon: icons.wash },
      { title: "Secar al Aire", desc: "Evita la luz solar directa. Seca en plano para preservar la forma.", icon: icons.dry },
      { title: "Protección de Color", desc: "Usa detergente suave sin lejía para futuros lavados.", icon: icons.safe },
    ],
    footer: "Hecho a mano con amor. Trátalo con cuidado.",
  },
  fr: {
    eyebrow: "Guide d'entretien",
    pageTitle: "Guide d'Entretien Tie-Dye",
    stepsHeading: "Entretien étape par étape",
    languageSelectLabel: "Choisir la langue",
    title: "Guide d'Entretien Tie-Dye",
    subtitle: "Gardez vos couleurs éclatantes pour toujours",
    steps: [
      { title: "Rinçage à Froid", desc: "Rincez à l'eau froide jusqu'à ce que l'eau soit claire.", icon: icons.rinse },
      { title: "Laver Seul", desc: "Pour le premier lavage, lavez-le seul pour éviter les dégorgements.", icon: icons.wash },
      { title: "Séchage à l'Air", desc: "Évitez la lumière directe du soleil. Séchez à plat pour préserver la forme.", icon: icons.dry },
      { title: "Couleurs Préservées", desc: "Utilisez une lessive douce sans javel pour les prochains lavages.", icon: icons.safe },
    ],
    footer: "Fait main avec amour. Traitez-le avec soin.",
  },
  de: {
    eyebrow: "Pflegeanleitung",
    pageTitle: "Batik Pflegeanleitung",
    stepsHeading: "Schritt-für-Schritt-Pflege",
    languageSelectLabel: "Sprache auswählen",
    title: "Batik Pflegeanleitung",
    subtitle: "Halten Sie Ihre Farben für immer lebendig",
    steps: [
      { title: "Kalt Spülen", desc: "Unter kaltem fließendem Wasser spülen, bis das Wasser klar ist.", icon: icons.rinse },
      { title: "Einzeln Waschen", desc: "Bei der ersten Wäsche einzeln waschen, um Abfärben zu vermeiden.", icon: icons.wash },
      { title: "Lufttrocknen", desc: "Direktes Sonnenlicht vermeiden. Liegend trocknen für beste Form.", icon: icons.dry },
      { title: "Farbschutz", desc: "Verwenden Sie für zukünftige Wäschen mildes, bleichmittelfreies Waschmittel.", icon: icons.safe },
    ],
    footer: "Mit Liebe handgefertigt. Mit Sorgfalt behandeln.",
  },
  hi: {
    eyebrow: "देखभाल गाइड",
    pageTitle: "टाई-डाई देखभाल मार्गदर्शिका",
    stepsHeading: "चरण-दर-चरण देखभाल",
    languageSelectLabel: "भाषा चुनें",
    title: "टाई-डाई देखभाल मार्गदर्शिका",
    subtitle: "अपने रंगों को हमेशा के लिए जीवंत रखें",
    steps: [
      { title: "ठंडे पानी से धोएं", desc: "ठंडे बहते पानी के नीचे तब तक धोएं जब तक पानी साफ न हो जाए।", icon: icons.rinse },
      { title: "अकेले धोएं", desc: "पहली धुलाई के लिए इसे अलग रखें ताकि रंग न फैले।", icon: icons.wash },
      { title: "हवा में सुखाएं", desc: "सीधी धूप से बचाएं। बेहतर आकार के लिए इसे समतल सुखाएं।", icon: icons.dry },
      { title: "रंग सुरक्षित", desc: "भविष्य की धुलाई के लिए हल्का, ब्लीच-मुक्त डिटर्जेंट इस्तेमाल करें।", icon: icons.safe },
    ],
    footer: "प्यार से हाथ से बनाया गया। इसे सावधानी से संभालें।",
  },
  pa: {
    eyebrow: "ਦੇਖਭਾਲ ਗਾਈਡ",
    pageTitle: "ਟਾਈ-ਡਾਈ ਦੇਖਭਾਲ ਗਾਈਡ",
    stepsHeading: "ਕਦਮ-ਦਰ-ਕਦਮ ਦੇਖਭਾਲ",
    languageSelectLabel: "ਭਾਸ਼ਾ ਚੁਣੋ",
    title: "ਟਾਈ-ਡਾਈ ਦੇਖਭਾਲ ਗਾਈਡ",
    subtitle: "ਆਪਣੇ ਰੰਗਾਂ ਨੂੰ ਹਮੇਸ਼ਾ ਲਈ ਜੀਵੰਤ ਰੱਖੋ",
    steps: [
      { title: "ਠੰਡੇ ਪਾਣੀ ਨਾਲ ਧੋਵੋ", desc: "ਠੰਡੇ ਵਗਦੇ ਪਾਣੀ ਦੇ ਹੇਠਾਂ ਉਦੋਂ ਤੱਕ ਧੋਵੋ ਜਦੋਂ ਤੱਕ ਪਾਣੀ ਸਾਫ਼ ਨਾ ਹੋ ਜਾਵੇ।", icon: icons.rinse },
      { title: "ਇੱਕਲੇ ਧੋਵੋ", desc: "ਪਹਿਲੀ ਵਾਰ ਧੋਣ ਵੇਲੇ, ਰੰਗਾਂ ਨੂੰ ਮਿਲਣ ਤੋਂ ਰੋਕਣ ਲਈ ਇਸਨੂੰ ਇੱਕਲਾ ਰੱਖੋ।", icon: icons.wash },
      { title: "ਹਵਾ ਵਿੱਚ ਸੁਕਾਓ", desc: "ਸਿੱਧੀ ਧੁੱਪ ਤੋਂ ਬਚੋ। ਬਿਹਤਰ ਆਕਾਰ ਲਈ ਇਸਨੂੰ ਸਮਤਲ ਸੁਕਾਓ।", icon: icons.dry },
      { title: "ਰੰਗ ਸੁਰੱਖਿਅਤ", desc: "ਭਵਿੱਖ ਦੀਆਂ ਧੁਲਾਈਆਂ ਲਈ ਹਲਕਾ, ਬਲੀਚ-ਮੁਕਤ ਡਿਟਰਜੈਂਟ ਵਰਤੋ।", icon: icons.safe },
    ],
    footer: "ਪਿਆਰ ਨਾਲ ਹੱਥੀਂ ਬਣਾਇਆ ਗਿਆ। ਇਸਦੀ ਦੇਖਭਾਲ ਕਰੋ।",
  },
  it: {
    eyebrow: "Guida alla Cura",
    pageTitle: "Guida alla Cura Tie-Dye",
    stepsHeading: "Cura passo dopo passo",
    languageSelectLabel: "Seleziona lingua",
    title: "Guida alla Cura Tie-Dye",
    subtitle: "Mantieni i tuoi colori vivaci per sempre",
    steps: [
      { title: "Risciacquo Freddo", desc: "Risciacquare sotto acqua fredda corrente finché l'acqua non è limpida.", icon: icons.rinse },
      { title: "Lavare da Solo", desc: "Per il primo lavaggio, lavare separatamente per evitare macchie di colore.", icon: icons.wash },
      { title: "Asciugare all'Aria", desc: "Evitare la luce solare diretta. Asciugare in piano per preservare la forma.", icon: icons.dry },
      { title: "Colori Protetti", desc: "Usare un detersivo delicato senza candeggina per i futuri lavaggi.", icon: icons.safe },
    ],
    footer: "Fatto a mano con amore. Trattalo con cura.",
  },
  ur: {
    eyebrow: "دیکھ بھال گائیڈ",
    pageTitle: "ٹائی ڈائی دیکھ بھال گائیڈ",
    stepsHeading: "مرحلہ وار دیکھ بھال",
    languageSelectLabel: "زبان منتخب کریں",
    title: "ٹائی ڈائی دیکھ بھال گائیڈ",
    subtitle: "اپنے رنگوں کو ہمیشہ کے لیے روشن رکھیں",
    steps: [
      { title: "ٹھنڈے پانی سے دھوئیں", desc: "ٹھنڈے بہتے پانی کے نیچے تب تک دھوئیں جب تک پانی صاف نہ ہو جائے۔", icon: icons.rinse },
      { title: "اکیلے دھوئیں", desc: "پہلی بار دھونے کے لیے، رنگ ملنے سے بچانے کے لیے اسے الگ رکھیں۔", icon: icons.wash },
      { title: "ہوا میں سکھائیں", desc: "براہ راست دھوپ سے بچائیں۔ بہتر شکل کے لیے اسے ہموار سطح پر سکھائیں۔", icon: icons.dry },
      { title: "رنگ محفوظ", desc: "مستقبل میں دھونے کے لیے ہلکا، بلیچ سے پاک ڈٹرجنٹ استعمال کریں۔", icon: icons.safe },
    ],
    footer: "محبت سے ہاتھ سے بنایا گیا۔ اسے احتیاط سے استعمال کریں۔",
  },
  zh: {
    eyebrow: "护理指南",
    pageTitle: "扎染护理指南",
    stepsHeading: "分步护理",
    languageSelectLabel: "选择语言",
    title: "扎染护理指南",
    subtitle: "让你的色彩始终鲜艳",
    steps: [
      { title: "冷水冲洗", desc: "在冷水下冲洗，直到流出的水变清澈。", icon: icons.rinse },
      { title: "单独洗涤", desc: "第一次清洗请单独洗，避免串色。", icon: icons.wash },
      { title: "自然晾干", desc: "避免阳光直晒。平铺晾干可更好保持版型。", icon: icons.dry },
      { title: "护色清洁", desc: "后续清洗请使用温和无漂白剂的洗涤剂。", icon: icons.safe },
    ],
    footer: "手工用心制作，请细心护理。",
  },
  ko: {
    eyebrow: "관리 가이드",
    pageTitle: "타이다이 관리 가이드",
    stepsHeading: "단계별 관리법",
    languageSelectLabel: "언어 선택",
    title: "타이다이 관리 가이드",
    subtitle: "색감을 오래도록 선명하게 유지하세요",
    steps: [
      { title: "찬물 헹굼", desc: "흐르는 찬물에 물이 맑아질 때까지 헹궈 주세요.", icon: icons.rinse },
      { title: "단독 세탁", desc: "첫 세탁은 이염 방지를 위해 단독으로 세탁하세요.", icon: icons.wash },
      { title: "자연 건조", desc: "직사광선을 피하고, 형태 유지를 위해 평평하게 말리세요.", icon: icons.dry },
      { title: "색상 보호", desc: "이후 세탁에는 표백제 없는 순한 세제를 사용하세요.", icon: icons.safe },
    ],
    footer: "정성껏 만든 제품입니다. 소중히 관리해 주세요.",
  },
};

function renderLanguageOptions(select) {
  select.innerHTML = LANGUAGES.map((code) => `<option value="${code}">${languageNames[code]}</option>`).join("");
}

function render(lang) {
  const t = translations[lang] || translations.en;
  const isRTL = RTL_LANGUAGES.has(lang);

  document.documentElement.lang = lang;

  const content = document.getElementById("content");
  content.dir = isRTL ? "rtl" : "ltr";

  const heroText = document.getElementById("hero-text");
  heroText.className = `hero-overlay ${isRTL ? "text-right" : "text-left"}`;

  document.title = `${t.pageTitle} | Patterson Elementary PTA`;
  document.getElementById("title").textContent = t.title;
  document.getElementById("subtitle").textContent = t.subtitle;
  document.getElementById("eyebrow").textContent = t.eyebrow;
  document.getElementById("steps-heading").textContent = t.stepsHeading;
  document.getElementById("lang-select").setAttribute("aria-label", t.languageSelectLabel);
  document.getElementById("footer-text").textContent = t.footer;

  const stepsGrid = document.getElementById("steps-grid");
  stepsGrid.innerHTML = t.steps
    .map(
      (step) => `
        <article class="step ${isRTL ? "text-right" : "text-left"}">
          <div class="icon" aria-hidden="true">${step.icon}</div>
          <h3>${step.title}</h3>
          <p>${step.desc}</p>
        </article>
      `,
    )
    .join("");
}

(function init() {
  const select = document.getElementById("lang-select");
  renderLanguageOptions(select);

  const savedLang = localStorage.getItem(LANG_STORAGE_KEY);
  const browserLang = (navigator.language || "en").split("-")[0];
  const initialLang = LANGUAGES.includes(savedLang)
    ? savedLang
    : LANGUAGES.includes(browserLang)
      ? browserLang
      : "en";

  select.value = initialLang;
  render(initialLang);

  select.addEventListener("change", (e) => {
    const selectedLang = e.target.value;
    localStorage.setItem(LANG_STORAGE_KEY, selectedLang);
    render(selectedLang);
  });
})();
