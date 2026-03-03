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
    instructionSections: [
      {
        heading: "Initial wash process",
        steps: [
          {
            title: "Keep Bands On",
            desc: "Rinse the item while still tied up under cold running water to prevent colors from bleeding into white areas.",
            icon: icons.rinse,
          },
          {
            title: "Rinse to Clear",
            desc: "Gradually increase water temperature from cold to warm, and finally to hot, squeezing gently until the water runs clear.",
            icon: icons.rinse,
          },
          {
            title: "Remove Bands",
            desc: "Remove the rubber bands and rinse again in warm/hot water.",
            icon: icons.rinse,
          },
          {
            title: "Machine Wash",
            desc: "Wash the item(s) alone in the washing machine using hot water and a small amount of detergent.",
            icon: icons.wash,
          },
          {
            title: "Optional Step",
            desc: "To ensure maximum color retention, you can soak the item in a mixture of equal parts white vinegar and cold water for 30 minutes after the initial rinse.",
            icon: icons.safe,
          },
        ],
      },
      {
        heading: "Subsequent Washes",
        steps: [
          {
            title: "Initial Times",
            desc: "Wash new tie-dye items separately for the first 1-2 washes to avoid staining other clothes.",
            icon: icons.wash,
          },
          {
            title: "Water Temp",
            desc: "Use cold water for future washes to prevent fading.",
            icon: icons.rinse,
          },
          {
            title: "Detergent",
            desc: "Use mild, color-safe detergent.",
            icon: icons.safe,
          },
          {
            title: "Method",
            desc: "Air drying is best to prevent fading, but you can tumble dry on low heat.",
            icon: icons.dry,
          },
        ],
      },
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
    instructionSections: [
      {
        heading: "Proceso de lavado inicial",
        steps: [
          {
            title: "Mantén las bandas puestas",
            desc: "Enjuaga la prenda mientras aún está atada bajo agua fría corriente para evitar que los colores se pasen a las zonas blancas.",
            icon: icons.rinse,
          },
          {
            title: "Enjuaga hasta aclarar",
            desc: "Aumenta gradualmente la temperatura del agua de fría a tibia y finalmente a caliente, exprimiendo suavemente hasta que el agua salga clara.",
            icon: icons.rinse,
          },
          {
            title: "Retira las bandas",
            desc: "Retira las bandas elásticas y vuelve a enjuagar con agua tibia/caliente.",
            icon: icons.rinse,
          },
          {
            title: "Lavado a máquina",
            desc: "Lava la(s) prenda(s) sola(s) en la lavadora con agua caliente y una pequeña cantidad de detergente.",
            icon: icons.wash,
          },
          {
            title: "Paso opcional",
            desc: "Para asegurar la máxima retención del color, puedes remojar la prenda en una mezcla de partes iguales de vinagre blanco y agua fría durante 30 minutos después del enjuague inicial.",
            icon: icons.safe,
          },
        ],
      },
      {
        heading: "Lavados posteriores",
        steps: [
          {
            title: "Primeras veces",
            desc: "Lava las prendas tie-dye nuevas por separado durante los primeros 1-2 lavados para evitar manchar otra ropa.",
            icon: icons.wash,
          },
          {
            title: "Temperatura del agua",
            desc: "Usa agua fría en los lavados futuros para evitar que el color se desvanezca.",
            icon: icons.rinse,
          },
          {
            title: "Detergente",
            desc: "Usa un detergente suave y apto para colores.",
            icon: icons.safe,
          },
          {
            title: "Método",
            desc: "Secar al aire es lo mejor para evitar la decoloración, pero también puedes usar secadora en calor bajo.",
            icon: icons.dry,
          },
        ],
      },
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
    instructionSections: [
      {
        heading: "Processus de lavage initial",
        steps: [
          {
            title: "Gardez les liens en place",
            desc: "Rincez l'article encore attaché sous l'eau froide courante pour empêcher les couleurs de déteindre sur les zones blanches.",
            icon: icons.rinse,
          },
          {
            title: "Rincez jusqu'à ce que l'eau soit claire",
            desc: "Augmentez progressivement la température de l'eau de froide à tiède, puis à chaude, en pressant doucement jusqu'à ce que l'eau soit claire.",
            icon: icons.rinse,
          },
          {
            title: "Retirez les liens",
            desc: "Retirez les élastiques et rincez à nouveau à l'eau tiède/chaude.",
            icon: icons.rinse,
          },
          {
            title: "Lavage en machine",
            desc: "Lavez le(s) article(s) seul(s) en machine avec de l'eau chaude et une petite quantité de lessive.",
            icon: icons.wash,
          },
          {
            title: "Étape facultative",
            desc: "Pour une tenue maximale des couleurs, vous pouvez faire tremper l'article dans un mélange à parts égales de vinaigre blanc et d'eau froide pendant 30 minutes après le rinçage initial.",
            icon: icons.safe,
          },
        ],
      },
      {
        heading: "Lavages suivants",
        steps: [
          {
            title: "Premières fois",
            desc: "Lavez les nouveaux articles tie-dye séparément pendant les 1-2 premiers lavages pour éviter de tacher les autres vêtements.",
            icon: icons.wash,
          },
          {
            title: "Température de l'eau",
            desc: "Utilisez de l'eau froide pour les lavages suivants afin d'éviter la décoloration.",
            icon: icons.rinse,
          },
          {
            title: "Lessive",
            desc: "Utilisez une lessive douce, adaptée aux couleurs.",
            icon: icons.safe,
          },
          {
            title: "Méthode",
            desc: "Le séchage à l'air est préférable pour éviter la décoloration, mais vous pouvez utiliser le sèche-linge à basse température.",
            icon: icons.dry,
          },
        ],
      },
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
    instructionSections: [
      {
        heading: "Erster Waschvorgang",
        steps: [
          {
            title: "Bänder dranlassen",
            desc: "Spülen Sie das noch gebundene Stück unter kaltem, fließendem Wasser aus, damit keine Farbe in weiße Bereiche ausblutet.",
            icon: icons.rinse,
          },
          {
            title: "Klar ausspülen",
            desc: "Erhöhen Sie die Wassertemperatur schrittweise von kalt auf warm und schließlich auf heiß und drücken Sie dabei vorsichtig, bis das Wasser klar läuft.",
            icon: icons.rinse,
          },
          {
            title: "Bänder entfernen",
            desc: "Entfernen Sie die Gummibänder und spülen Sie anschließend erneut mit warmem/heißem Wasser.",
            icon: icons.rinse,
          },
          {
            title: "Maschinenwäsche",
            desc: "Waschen Sie das/die Teil(e) allein in der Waschmaschine mit heißem Wasser und einer kleinen Menge Waschmittel.",
            icon: icons.wash,
          },
          {
            title: "Optionaler Schritt",
            desc: "Für maximale Farbintensität können Sie das Teil nach dem ersten Spülen 30 Minuten in einer Mischung aus gleichen Teilen weißem Essig und kaltem Wasser einweichen.",
            icon: icons.safe,
          },
        ],
      },
      {
        heading: "Weitere Waschgänge",
        steps: [
          {
            title: "Erste Waschgänge",
            desc: "Waschen Sie neue Tie-Dye-Artikel in den ersten 1-2 Wäschen separat, damit andere Kleidung nicht verfärbt wird.",
            icon: icons.wash,
          },
          {
            title: "Wassertemperatur",
            desc: "Verwenden Sie bei späteren Wäschen kaltes Wasser, um Ausbleichen zu verhindern.",
            icon: icons.rinse,
          },
          {
            title: "Waschmittel",
            desc: "Verwenden Sie ein mildes, farbschonendes Waschmittel.",
            icon: icons.safe,
          },
          {
            title: "Methode",
            desc: "Lufttrocknen ist am besten gegen Ausbleichen, aber Trocknen im Wäschetrockner bei niedriger Hitze ist ebenfalls möglich.",
            icon: icons.dry,
          },
        ],
      },
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
    instructionSections: [
      {
        heading: "प्रारंभिक धुलाई प्रक्रिया",
        steps: [
          {
            title: "बैंड लगे रहने दें",
            desc: "कपड़े को बंधी हुई अवस्था में ही ठंडे बहते पानी के नीचे धोएं ताकि रंग सफेद हिस्सों में न फैलें।",
            icon: icons.rinse,
          },
          {
            title: "पानी साफ होने तक धोएं",
            desc: "पानी का तापमान धीरे-धीरे ठंडे से गुनगुने और फिर गर्म तक बढ़ाएं, और हल्के से निचोड़ते रहें जब तक पानी साफ न हो जाए।",
            icon: icons.rinse,
          },
          {
            title: "बैंड हटाएं",
            desc: "रबर बैंड हटाएं और फिर गुनगुने/गर्म पानी में दोबारा धोएं।",
            icon: icons.rinse,
          },
          {
            title: "मशीन वॉश",
            desc: "कपड़े को वॉशिंग मशीन में अकेले गर्म पानी और थोड़ी मात्रा में डिटर्जेंट के साथ धोएं।",
            icon: icons.wash,
          },
          {
            title: "वैकल्पिक चरण",
            desc: "अधिकतम रंग बनाए रखने के लिए, प्रारंभिक धुलाई के बाद कपड़े को सफेद सिरका और ठंडे पानी के बराबर मिश्रण में 30 मिनट भिगो सकते हैं।",
            icon: icons.safe,
          },
        ],
      },
      {
        heading: "आगे की धुलाई",
        steps: [
          {
            title: "शुरुआती बार",
            desc: "नई टाई-डाई वस्तुओं को पहले 1-2 धुलाइयों तक अलग धोएं ताकि अन्य कपड़ों पर दाग न लगे।",
            icon: icons.wash,
          },
          {
            title: "पानी का तापमान",
            desc: "भविष्य की धुलाई में रंग फीका पड़ने से बचाने के लिए ठंडा पानी इस्तेमाल करें।",
            icon: icons.rinse,
          },
          {
            title: "डिटर्जेंट",
            desc: "हल्का, रंग-सुरक्षित डिटर्जेंट इस्तेमाल करें।",
            icon: icons.safe,
          },
          {
            title: "तरीका",
            desc: "रंग फीका पड़ने से बचाने के लिए हवा में सुखाना सबसे अच्छा है, लेकिन आप कम तापमान पर ड्रायर भी चला सकते हैं।",
            icon: icons.dry,
          },
        ],
      },
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
    instructionSections: [
      {
        heading: "ਸ਼ੁਰੂਆਤੀ ਧੋਣ ਦੀ ਪ੍ਰਕਿਰਿਆ",
        steps: [
          {
            title: "ਰੱਬਰ ਬੈਂਡ ਲੱਗੇ ਰਹਿਣ ਦਿਓ",
            desc: "ਕਪੜੇ ਨੂੰ ਬੰਨ੍ਹਿਆ ਹੋਇਆ ਹੀ ਠੰਢੇ ਵਗਦੇ ਪਾਣੀ ਹੇਠ ਧੋਵੋ ਤਾਂ ਜੋ ਰੰਗ ਚਿੱਟੇ ਹਿੱਸਿਆਂ ਵਿੱਚ ਨਾ ਫੈਲਣ।",
            icon: icons.rinse,
          },
          {
            title: "ਪਾਣੀ ਸਾਫ਼ ਹੋਣ ਤੱਕ ਧੋਵੋ",
            desc: "ਪਾਣੀ ਦਾ ਤਾਪਮਾਨ ਹੌਲੀ-ਹੌਲੀ ਠੰਢੇ ਤੋਂ ਗੁੰਗੁਨੇ ਤੇ ਫਿਰ ਗਰਮ ਤੱਕ ਵਧਾਓ ਅਤੇ ਹੌਲੇ ਨਾਲ ਨਿਚੋੜੋ ਜਦ ਤੱਕ ਪਾਣੀ ਸਾਫ਼ ਨਾ ਹੋ ਜਾਵੇ।",
            icon: icons.rinse,
          },
          {
            title: "ਬੈਂਡ ਹਟਾਓ",
            desc: "ਰੱਬਰ ਬੈਂਡ ਹਟਾਓ ਅਤੇ ਫਿਰ ਗੁੰਗੁਨੇ/ਗਰਮ ਪਾਣੀ ਵਿੱਚ ਮੁੜ ਧੋਵੋ।",
            icon: icons.rinse,
          },
          {
            title: "ਮਸ਼ੀਨ ਧੁਲਾਈ",
            desc: "ਆਇਟਮ(ਆਂ) ਨੂੰ ਵਾਸ਼ਿੰਗ ਮਸ਼ੀਨ ਵਿੱਚ ਅੱਕੇਲੇ ਗਰਮ ਪਾਣੀ ਅਤੇ ਥੋੜ੍ਹੇ ਡਿਟਰਜੈਂਟ ਨਾਲ ਧੋਵੋ।",
            icon: icons.wash,
          },
          {
            title: "ਵਿਕਲਪਿਕ ਕਦਮ",
            desc: "ਅਧਿਕਤਮ ਰੰਗ ਕਾਇਮ ਰੱਖਣ ਲਈ, ਸ਼ੁਰੂਆਤੀ ਧੋਣ ਤੋਂ ਬਾਅਦ ਆਇਟਮ ਨੂੰ ਸਫੈਦ ਸਿਰਕੇ ਅਤੇ ਠੰਢੇ ਪਾਣੀ ਦੇ ਬਰਾਬਰ ਹਿੱਸਿਆਂ ਵਾਲੇ ਮਿਸ਼ਰਣ ਵਿੱਚ 30 ਮਿੰਟ ਲਈ ਭਿਗੋ ਸਕਦੇ ਹੋ।",
            icon: icons.safe,
          },
        ],
      },
      {
        heading: "ਬਾਅਦ ਦੀਆਂ ਧੁਲਾਈਆਂ",
        steps: [
          {
            title: "ਪਹਿਲੀਆਂ ਵਾਰਾਂ",
            desc: "ਨਵੇਂ ਟਾਈ-ਡਾਈ ਕੱਪੜੇ ਪਹਿਲੀਆਂ 1-2 ਧੁਲਾਈਆਂ ਲਈ ਅਲੱਗ ਧੋਵੋ ਤਾਂ ਜੋ ਹੋਰ ਕੱਪੜਿਆਂ 'ਤੇ ਦਾਗ ਨਾ ਪੈਣ।",
            icon: icons.wash,
          },
          {
            title: "ਪਾਣੀ ਦਾ ਤਾਪਮਾਨ",
            desc: "ਅਗਲੀ ਧੁਲਾਈਆਂ ਵਿੱਚ ਰੰਗ ਫਿੱਕਾ ਹੋਣ ਤੋਂ ਬਚਾਉਣ ਲਈ ਠੰਢਾ ਪਾਣੀ ਵਰਤੋ।",
            icon: icons.rinse,
          },
          {
            title: "ਡਿਟਰਜੈਂਟ",
            desc: "ਹਲਕਾ, ਰੰਗ-ਸੁਰੱਖਿਅਤ ਡਿਟਰਜੈਂਟ ਵਰਤੋ।",
            icon: icons.safe,
          },
          {
            title: "ਤਰੀਕਾ",
            desc: "ਰੰਗ ਫਿੱਕਾ ਹੋਣ ਤੋਂ ਬਚਾਉਣ ਲਈ ਹਵਾ ਵਿੱਚ ਸੁਕਾਉਣਾ ਸਭ ਤੋਂ ਵਧੀਆ ਹੈ, ਪਰ ਤੁਸੀਂ ਘੱਟ ਗਰਮੀ 'ਤੇ ਟੰਬਲ ਡ੍ਰਾਈ ਵੀ ਕਰ ਸਕਦੇ ਹੋ।",
            icon: icons.dry,
          },
        ],
      },
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
    instructionSections: [
      {
        heading: "Processo di lavaggio iniziale",
        steps: [
          {
            title: "Lascia gli elastici",
            desc: "Risciacqua il capo ancora legato sotto acqua corrente fredda per evitare che i colori sanguinino nelle aree bianche.",
            icon: icons.rinse,
          },
          {
            title: "Risciacqua fino a limpido",
            desc: "Aumenta gradualmente la temperatura dell'acqua da fredda a tiepida e infine calda, strizzando delicatamente finché l'acqua non scorre limpida.",
            icon: icons.rinse,
          },
          {
            title: "Rimuovi gli elastici",
            desc: "Rimuovi gli elastici e risciacqua di nuovo con acqua tiepida/calda.",
            icon: icons.rinse,
          },
          {
            title: "Lavaggio in lavatrice",
            desc: "Lava il/i capo/i da solo/i in lavatrice con acqua calda e una piccola quantità di detersivo.",
            icon: icons.wash,
          },
          {
            title: "Passaggio facoltativo",
            desc: "Per garantire la massima tenuta del colore, puoi lasciare il capo in ammollo per 30 minuti in una miscela di parti uguali di aceto bianco e acqua fredda dopo il risciacquo iniziale.",
            icon: icons.safe,
          },
        ],
      },
      {
        heading: "Lavaggi successivi",
        steps: [
          {
            title: "Prime volte",
            desc: "Lava i nuovi capi tie-dye separatamente per i primi 1-2 lavaggi per evitare di macchiare gli altri vestiti.",
            icon: icons.wash,
          },
          {
            title: "Temperatura dell'acqua",
            desc: "Usa acqua fredda per i lavaggi futuri per evitare che i colori sbiadiscano.",
            icon: icons.rinse,
          },
          {
            title: "Detersivo",
            desc: "Usa un detersivo delicato e sicuro per i colori.",
            icon: icons.safe,
          },
          {
            title: "Metodo",
            desc: "L'asciugatura all'aria è la migliore per prevenire lo scolorimento, ma puoi anche usare l'asciugatrice a bassa temperatura.",
            icon: icons.dry,
          },
        ],
      },
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
    instructionSections: [
      {
        heading: "ابتدائی دھلائی کا عمل",
        steps: [
          {
            title: "بینڈ لگے رہنے دیں",
            desc: "چیز کو بندھی ہوئی حالت میں ہی ٹھنڈے بہتے پانی کے نیچے دھوئیں تاکہ رنگ سفید حصوں میں نہ پھیلیں۔",
            icon: icons.rinse,
          },
          {
            title: "صاف پانی تک دھوئیں",
            desc: "پانی کا درجہ حرارت آہستہ آہستہ ٹھنڈے سے نیم گرم اور پھر گرم کریں، اور نرمی سے نچوڑتے رہیں جب تک پانی صاف نہ ہو جائے۔",
            icon: icons.rinse,
          },
          {
            title: "بینڈ ہٹائیں",
            desc: "ربڑ بینڈ ہٹا دیں اور پھر نیم گرم/گرم پانی میں دوبارہ دھوئیں۔",
            icon: icons.rinse,
          },
          {
            title: "مشین واش",
            desc: "چیز کو واشنگ مشین میں اکیلے گرم پانی اور تھوڑی مقدار میں ڈٹرجنٹ کے ساتھ دھوئیں۔",
            icon: icons.wash,
          },
          {
            title: "اختیاری مرحلہ",
            desc: "رنگ زیادہ دیر قائم رکھنے کے لیے، ابتدائی دھلائی کے بعد چیز کو سفید سرکے اور ٹھنڈے پانی کے برابر آمیزے میں 30 منٹ بھگو سکتے ہیں۔",
            icon: icons.safe,
          },
        ],
      },
      {
        heading: "بعد کی دھلائیاں",
        steps: [
          {
            title: "ابتدائی بار",
            desc: "نئے ٹائی ڈائی کپڑے پہلے 1-2 دھلائیوں تک الگ دھوئیں تاکہ دوسرے کپڑوں پر داغ نہ لگیں۔",
            icon: icons.wash,
          },
          {
            title: "پانی کا درجہ حرارت",
            desc: "آئندہ دھلائیوں میں رنگ پھیکا ہونے سے بچانے کے لیے ٹھنڈا پانی استعمال کریں۔",
            icon: icons.rinse,
          },
          {
            title: "ڈٹرجنٹ",
            desc: "ہلکا اور رنگ محفوظ رکھنے والا ڈٹرجنٹ استعمال کریں۔",
            icon: icons.safe,
          },
          {
            title: "طریقہ",
            desc: "رنگ کو مدھم ہونے سے بچانے کے لیے ہوا میں سکھانا بہتر ہے، لیکن کم حرارت پر ٹمبل ڈرائی بھی کر سکتے ہیں۔",
            icon: icons.dry,
          },
        ],
      },
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
    instructionSections: [
      {
        heading: "初次清洗流程",
        steps: [
          {
            title: "先不要拆皮筋",
            desc: "衣物保持绑扎状态，在冷的流动水下冲洗，防止颜色渗到白色区域。",
            icon: icons.rinse,
          },
          {
            title: "冲洗至清澈",
            desc: "将水温从冷水逐步升至温水，最后到热水，轻轻挤压，直到流出的水变清澈。",
            icon: icons.rinse,
          },
          {
            title: "拆下皮筋",
            desc: "取下橡皮筋后，再用温水/热水冲洗一次。",
            icon: icons.rinse,
          },
          {
            title: "机洗",
            desc: "将衣物单独放入洗衣机，用热水和少量洗涤剂清洗。",
            icon: icons.wash,
          },
          {
            title: "可选步骤",
            desc: "为获得最佳固色效果，初次冲洗后可将衣物放入白醋与冷水 1:1 的混合液中浸泡 30 分钟。",
            icon: icons.safe,
          },
        ],
      },
      {
        heading: "后续清洗",
        steps: [
          {
            title: "前几次清洗",
            desc: "新的扎染衣物在前 1-2 次清洗时请单独洗涤，避免染到其他衣物。",
            icon: icons.wash,
          },
          {
            title: "水温",
            desc: "后续清洗请使用冷水，以防褪色。",
            icon: icons.rinse,
          },
          {
            title: "洗涤剂",
            desc: "请使用温和、护色型洗涤剂。",
            icon: icons.safe,
          },
          {
            title: "方式",
            desc: "自然风干最能防止褪色，也可使用低温滚筒烘干。",
            icon: icons.dry,
          },
        ],
      },
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
    instructionSections: [
      {
        heading: "초기 세탁 과정",
        steps: [
          {
            title: "고무줄을 그대로 두기",
            desc: "염색한 물건을 묶인 상태 그대로 찬 흐르는 물에 헹궈 흰 부분으로 색이 번지는 것을 막아 주세요.",
            icon: icons.rinse,
          },
          {
            title: "맑아질 때까지 헹굼",
            desc: "물 온도를 찬물에서 미온수, 마지막으로 뜨거운 물로 천천히 올리며 물이 맑아질 때까지 부드럽게 짜 주세요.",
            icon: icons.rinse,
          },
          {
            title: "고무줄 제거",
            desc: "고무줄을 제거한 뒤 미온수/뜨거운 물로 다시 헹궈 주세요.",
            icon: icons.rinse,
          },
          {
            title: "세탁기 세탁",
            desc: "의류를 단독으로 세탁기에 넣고 뜨거운 물과 소량의 세제로 세탁해 주세요.",
            icon: icons.wash,
          },
          {
            title: "선택 단계",
            desc: "최대한의 색상 유지 효과를 위해 초기 헹굼 후 흰 식초와 찬물을 1:1로 섞은 물에 30분간 담가 둘 수 있습니다.",
            icon: icons.safe,
          },
        ],
      },
      {
        heading: "이후 세탁",
        steps: [
          {
            title: "초기 몇 회",
            desc: "새 타이다이 의류는 다른 옷에 이염되지 않도록 처음 1-2회는 단독 세탁하세요.",
            icon: icons.wash,
          },
          {
            title: "물 온도",
            desc: "이후 세탁은 변색을 막기 위해 찬물을 사용하세요.",
            icon: icons.rinse,
          },
          {
            title: "세제",
            desc: "순하고 색상 보호 기능이 있는 세제를 사용하세요.",
            icon: icons.safe,
          },
          {
            title: "건조 방법",
            desc: "변색 방지를 위해 자연 건조가 가장 좋지만, 저온 텀블 건조도 가능합니다.",
            icon: icons.dry,
          },
        ],
      },
    ],
    footer: "정성껏 만든 제품입니다. 소중히 관리해 주세요.",
  },
};

function renderLanguageOptions(select) {
  if (!select) return;
  select.innerHTML = LANGUAGES.map((code) => `<option value="${code}">${languageNames[code]}</option>`).join("");
}

function render(lang) {
  const t = translations[lang] || translations.en;
  const isRTL = RTL_LANGUAGES.has(lang);
  const content = document.getElementById("content");
  const heroText = document.getElementById("hero-text");
  const title = document.getElementById("title");
  const subtitle = document.getElementById("subtitle");
  const eyebrow = document.getElementById("eyebrow");
  const stepsHeading = document.getElementById("steps-heading");
  const languageSelect = document.getElementById("lang-select");
  const footerText = document.getElementById("footer-text");
  const stepsGrid = document.getElementById("steps-grid");

  if (!content || !heroText || !title || !subtitle || !eyebrow || !stepsHeading || !languageSelect || !footerText || !stepsGrid) {
    return;
  }

  document.documentElement.lang = lang;
  content.dir = isRTL ? "rtl" : "ltr";
  heroText.className = `hero-overlay ${isRTL ? "text-right" : "text-left"}`;

  document.title = `${t.pageTitle} | Patterson Elementary PTA`;
  title.textContent = t.title;
  subtitle.textContent = t.subtitle;
  eyebrow.textContent = t.eyebrow;
  stepsHeading.textContent = t.stepsHeading;
  languageSelect.setAttribute("aria-label", t.languageSelectLabel);
  footerText.textContent = t.footer;

  stepsGrid.innerHTML = t.instructionSections
    .map(
      (section) => `
        <section class="instruction-section ${isRTL ? "text-right" : "text-left"}">
          <h3 class="section-heading">${section.heading}</h3>
          <ol class="instruction-list">
            ${section.steps
              .map(
                (step) => `
                  <li class="instruction-item">
                    <div class="instruction-title-row">
                      <span class="instruction-icon" aria-hidden="true">${step.icon}</span>
                      <h4>${step.title}</h4>
                    </div>
                    <p>${step.desc}</p>
                  </li>
                `,
              )
              .join("")}
          </ol>
        </section>
      `,
    )
    .join("");
}

(function init() {
  const select = document.getElementById("lang-select");
  if (!select) return;

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
