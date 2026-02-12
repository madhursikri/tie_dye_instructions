import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { Droplets, Sparkles, ThermometerSnowflake, Wind } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import heroImage from "@/assets/images/tie-dye-hero.png";

const LANGUAGES = ["en", "es", "fr", "de", "hi", "pa", "it", "ur"] as const;
type Language = (typeof LANGUAGES)[number];

const RTL_LANGUAGES: ReadonlySet<Language> = new Set(["ur"]);

interface Step {
  title: string;
  desc: string;
  icon: LucideIcon;
}

interface Translation {
  title: string;
  subtitle: string;
  steps: Step[];
  footer: string;
}

const translations: Record<Language, Translation> = {
  en: {
    title: "Tie-Dye Care Guide",
    subtitle: "Keep your colors vibrant forever",
    steps: [
      {
        title: "Rinse Cold",
        desc: "Rinse under cold running water until the water runs clear.",
        icon: Droplets,
      },
      {
        title: "Wash Alone",
        desc: "For the first wash, keep it solo to avoid color bleeding.",
        icon: ThermometerSnowflake,
      },
      {
        title: "Air Dry",
        desc: "Avoid direct sunlight. Flat dry for the best shape preservation.",
        icon: Wind,
      },
      {
        title: "Color Safe",
        desc: "Use mild, bleach-free detergent for future washes.",
        icon: Sparkles,
      },
    ],
    footer: "Handcrafted with love. Treat it with care.",
  },
  es: {
    title: "Guía de Cuidado Tie-Dye",
    subtitle: "Mantén tus colores vibrantes para siempre",
    steps: [
      {
        title: "Enjuague Frío",
        desc: "Enjuaga con agua fría hasta que el agua salga clara.",
        icon: Droplets,
      },
      {
        title: "Lavar Solo",
        desc: "Para el primer lavado, lávalo solo para evitar que se destiña.",
        icon: ThermometerSnowflake,
      },
      {
        title: "Secar al Aire",
        desc: "Evita la luz solar directa. Seca en plano para preservar la forma.",
        icon: Wind,
      },
      {
        title: "Protección de Color",
        desc: "Usa detergente suave sin lejía para futuros lavados.",
        icon: Sparkles,
      },
    ],
    footer: "Hecho a mano con amor. Trátalo con cuidado.",
  },
  fr: {
    title: "Guide d'Entretien Tie-Dye",
    subtitle: "Gardez vos couleurs éclatantes pour toujours",
    steps: [
      {
        title: "Rinçage à Froid",
        desc: "Rincez à l'eau froide jusqu'à ce que l'eau soit claire.",
        icon: Droplets,
      },
      {
        title: "Laver Seul",
        desc: "Pour le premier lavage, lavez-le seul pour éviter les dégorgements.",
        icon: ThermometerSnowflake,
      },
      {
        title: "Séchage à l'Air",
        desc: "Évitez la lumière directe du soleil. Séchez à plat pour préserver la forme.",
        icon: Wind,
      },
      {
        title: "Couleurs Préservées",
        desc: "Utilisez une lessive douce sans javel pour les prochains lavages.",
        icon: Sparkles,
      },
    ],
    footer: "Fait main avec amour. Traitez-le avec soin.",
  },
  de: {
    title: "Batik Pflegeanleitung",
    subtitle: "Halten Sie Ihre Farben für immer lebendig",
    steps: [
      {
        title: "Kalt Spülen",
        desc: "Unter kaltem fließendem Wasser spülen, bis das Wasser klar ist.",
        icon: Droplets,
      },
      {
        title: "Einzeln Waschen",
        desc: "Bei der ersten Wäsche einzeln waschen, um Abfärben zu vermeiden.",
        icon: ThermometerSnowflake,
      },
      {
        title: "Lufttrocknen",
        desc: "Direktes Sonnenlicht vermeiden. Liegend trocknen für beste Form.",
        icon: Wind,
      },
      {
        title: "Farbschutz",
        desc: "Verwenden Sie für zukünftige Wäschen mildes, bleichmittelfreies Waschmittel.",
        icon: Sparkles,
      },
    ],
    footer: "Mit Liebe handgefertigt. Mit Sorgfalt behandeln.",
  },
  hi: {
    title: "टाई-डाई देखभाल मार्गदर्शिका",
    subtitle: "अपने रंगों को हमेशा के लिए जीवंत रखें",
    steps: [
      {
        title: "ठंडे पानी से धोएं",
        desc: "ठंडे बहते पानी के नीचे तब तक धोएं जब तक पानी साफ न हो जाए।",
        icon: Droplets,
      },
      {
        title: "अकेले धोएं",
        desc: "पहली धुलाई के लिए इसे अलग रखें ताकि रंग न फैले।",
        icon: ThermometerSnowflake,
      },
      {
        title: "हवा में सुखाएं",
        desc: "सीधी धूप से बचाएं। बेहतर आकार के लिए इसे समतल सुखाएं।",
        icon: Wind,
      },
      {
        title: "रंग सुरक्षित",
        desc: "भविष्य की धुलाई के लिए हल्का, ब्लीच-मुक्त डिटर्जेंट इस्तेमाल करें।",
        icon: Sparkles,
      },
    ],
    footer: "प्यार से हाथ से बनाया गया। इसे सावधानी से संभालें।",
  },
  pa: {
    title: "ਟਾਈ-ਡਾਈ ਦੇਖਭਾਲ ਗਾਈਡ",
    subtitle: "ਆਪਣੇ ਰੰਗਾਂ ਨੂੰ ਹਮੇਸ਼ਾ ਲਈ ਜੀਵੰਤ ਰੱਖੋ",
    steps: [
      {
        title: "ਠੰਡੇ ਪਾਣੀ ਨਾਲ ਧੋਵੋ",
        desc: "ਠੰਡੇ ਵਗਦੇ ਪਾਣੀ ਦੇ ਹੇਠਾਂ ਉਦੋਂ ਤੱਕ ਧੋਵੋ ਜਦੋਂ ਤੱਕ ਪਾਣੀ ਸਾਫ਼ ਨਾ ਹੋ ਜਾਵੇ।",
        icon: Droplets,
      },
      {
        title: "ਇਕੱਲੇ ਧੋਵੋ",
        desc: "ਪਹਿਲੀ ਵਾਰ ਧੋਣ ਵੇਲੇ, ਰੰਗਾਂ ਨੂੰ ਮਿਲਣ ਤੋਂ ਰੋਕਣ ਲਈ ਇਸਨੂੰ ਇਕੱਲਾ ਰੱਖੋ।",
        icon: ThermometerSnowflake,
      },
      {
        title: "ਹਵਾ ਵਿੱਚ ਸੁਕਾਓ",
        desc: "ਸਿੱਧੀ ਧੁੱਪ ਤੋਂ ਬਚੋ। ਬਿਹਤਰ ਆਕਾਰ ਲਈ ਇਸਨੂੰ ਸਮਤਲ ਸੁਕਾਓ।",
        icon: Wind,
      },
      {
        title: "ਰੰਗ ਸੁਰੱਖਿਅਤ",
        desc: "ਭਵਿੱਖ ਦੀਆਂ ਧੁਲਾਈਆਂ ਲਈ ਹਲਕਾ, ਬਲੀਚ-ਮੁਕਤ ਡਿਟਰਜੈਂਟ ਵਰਤੋ।",
        icon: Sparkles,
      },
    ],
    footer: "ਪਿਆਰ ਨਾਲ ਹੱਥੀਂ ਬਣਾਇਆ ਗਿਆ। ਇਸਦੀ ਦੇਖਭਾਲ ਕਰੋ।",
  },
  it: {
    title: "Guida alla Cura Tie-Dye",
    subtitle: "Mantieni i tuoi colori vivaci per sempre",
    steps: [
      {
        title: "Risciacquo Freddo",
        desc: "Risciacquare sotto acqua fredda corrente finché l'acqua non è limpida.",
        icon: Droplets,
      },
      {
        title: "Lavare da Solo",
        desc: "Per il primo lavaggio, lavare separatamente per evitare macchie di colore.",
        icon: ThermometerSnowflake,
      },
      {
        title: "Asciugare all'Aria",
        desc: "Evitare la luce solare diretta. Asciugare in piano per preservare la forma.",
        icon: Wind,
      },
      {
        title: "Colori Protetti",
        desc: "Usare un detersivo delicato senza candeggina per i futuri lavaggi.",
        icon: Sparkles,
      },
    ],
    footer: "Fatto a mano con amore. Trattalo con cura.",
  },
  ur: {
    title: "ٹائی ڈائی دیکھ بھال گائیڈ",
    subtitle: "اپنے رنگوں کو ہمیشہ کے لیے روشن رکھیں",
    steps: [
      {
        title: "ٹھنڈے پانی سے دھوئیں",
        desc: "ٹھنڈے بہتے پانی کے نیچے تب تک دھوئیں جب تک پانی صاف نہ ہو جائے۔",
        icon: Droplets,
      },
      {
        title: "اکیلے دھوئیں",
        desc: "پہلی بار دھونے کے لیے، رنگ ملنے سے بچانے کے لیے اسے الگ رکھیں۔",
        icon: ThermometerSnowflake,
      },
      {
        title: "ہوا میں سکھائیں",
        desc: "براہ راست دھوپ سے بچائیں۔ بہتر شکل کے لیے اسے ہموار سطح پر سکھائیں۔",
        icon: Wind,
      },
      {
        title: "رنگ محفوظ",
        desc: "مستقبل میں دھونے کے لیے ہلکا، بلیچ سے پاک ڈٹرجنٹ استعمال کریں۔",
        icon: Sparkles,
      },
    ],
    footer: "محبت سے ہاتھ سے بنایا گیا۔ اسے احتیاط سے استعمال کریں۔",
  },
};

const languageNames: Record<Language, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  hi: "हिंदी",
  pa: "ਪੰਜਾਬੀ",
  it: "Italiano",
  ur: "اردو",
};

function isLanguage(value: string): value is Language {
  return (LANGUAGES as readonly string[]).includes(value);
}

export default function Home() {
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    const browserLang = navigator.language.split("-")[0];
    if (isLanguage(browserLang)) {
      setLang(browserLang);
    }
  }, []);

  const t = translations[lang];
  const isRTL = RTL_LANGUAGES.has(lang);

  return (
    <div className="min-h-screen bg-background font-sans">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-serif text-2xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            Patterson Elementary PTA
          </div>
          <Select value={lang} onValueChange={(val) => isLanguage(val) && setLang(val)}>
            <SelectTrigger
              className="w-[180px] rounded-full border-primary/20 hover:border-primary/50 transition-colors"
              data-testid="select-language"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {LANGUAGES.map((code) => (
                <SelectItem key={code} value={code} data-testid={`option-lang-${code}`}>
                  {languageNames[code]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </nav>

      <main className="pt-24 pb-12" dir={isRTL ? "rtl" : "ltr"}>
        <div className="container mx-auto px-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative h-[300px] md:h-[450px] rounded-[2rem] overflow-hidden shadow-2xl"
          >
            <img src={heroImage} alt="Tie-dye textures" className="w-full h-full object-cover" />
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12 ${isRTL ? "items-end text-right" : "items-start text-left"}`}
            >
              <h1
                className="font-serif text-4xl md:text-6xl text-white mb-4"
                data-testid="text-title"
              >
                {t.title}
              </h1>
              <p
                className="text-white/90 text-lg md:text-xl font-medium"
                data-testid="text-subtitle"
              >
                {t.subtitle}
              </p>
            </div>
          </motion.div>
        </div>

        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="wait">
            {t.steps.map((step, idx) => (
              <motion.div
                key={`${lang}-${idx}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card
                  className={`h-full border-none bg-secondary/50 hover:bg-secondary transition-all duration-300 group overflow-hidden relative ${isRTL ? "text-right" : ""}`}
                >
                  <div
                    className={`absolute top-0 p-4 text-primary/10 group-hover:text-primary/20 transition-colors ${isRTL ? "left-0" : "right-0"}`}
                  >
                    <step.icon size={80} strokeWidth={1} />
                  </div>
                  <CardHeader className={isRTL ? "flex flex-col items-end" : ""}>
                    <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground mb-4 shadow-lg shadow-primary/20">
                      <step.icon size={24} />
                    </div>
                    <CardTitle className="font-serif text-xl" data-testid={`text-step-title-${idx}`}>
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p
                      className="text-muted-foreground leading-relaxed"
                      data-testid={`text-step-desc-${idx}`}
                    >
                      {step.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <footer className="container mx-auto px-6 mt-20 text-center">
          <div className="h-px w-24 bg-primary/20 mx-auto mb-8" />
          <p className="text-muted-foreground font-medium italic" data-testid="text-footer">
            {t.footer}
          </p>
        </footer>
      </main>
    </div>
  );
}
