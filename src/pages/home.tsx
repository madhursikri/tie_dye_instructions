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

type Language = "en" | "es" | "fr" | "de" | "hi" | "pa" | "it" | "ur";

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
    title: "Guia de Cuidado Tie-Dye",
    subtitle: "Manten tus colores vibrantes para siempre",
    steps: [
      {
        title: "Enjuague Frio",
        desc: "Enjuaga con agua fria hasta que el agua salga clara.",
        icon: Droplets,
      },
      {
        title: "Lavar Solo",
        desc: "Para el primer lavado, lavalo solo para evitar que se destina.",
        icon: ThermometerSnowflake,
      },
      {
        title: "Secar al Aire",
        desc: "Evita la luz solar directa. Seca en plano para preservar la forma.",
        icon: Wind,
      },
      {
        title: "Proteccion de Color",
        desc: "Usa detergente suave sin lejia para futuros lavados.",
        icon: Sparkles,
      },
    ],
    footer: "Hecho a mano con amor. Tratalo con cuidado.",
  },
  fr: {
    title: "Guide d'Entretien Tie-Dye",
    subtitle: "Gardez vos couleurs eclatantes pour toujours",
    steps: [
      {
        title: "Rincage a Froid",
        desc: "Rincez a l'eau froide jusqu'a ce que l'eau soit claire.",
        icon: Droplets,
      },
      {
        title: "Laver Seul",
        desc: "Pour le premier lavage, lavez-le seul pour eviter les degorgements.",
        icon: ThermometerSnowflake,
      },
      {
        title: "Sechage a l'Air",
        desc: "Evitez la lumiere directe du soleil. Sechez a plat pour preserver la forme.",
        icon: Wind,
      },
      {
        title: "Couleurs Preservees",
        desc: "Utilisez une lessive douce sans javel pour les prochains lavages.",
        icon: Sparkles,
      },
    ],
    footer: "Fait main avec amour. Traitez-le avec soin.",
  },
  de: {
    title: "Batik Pflegeanleitung",
    subtitle: "Halten Sie Ihre Farben fur immer lebendig",
    steps: [
      {
        title: "Kalt Spulen",
        desc: "Unter kaltem flieendem Wasser spulen, bis das Wasser klar ist.",
        icon: Droplets,
      },
      {
        title: "Einzeln Waschen",
        desc: "Bei der ersten Wasche einzeln waschen, um Abfarben zu vermeiden.",
        icon: ThermometerSnowflake,
      },
      {
        title: "Lufttrocknen",
        desc: "Direktes Sonnenlicht vermeiden. Liegend trocknen fur beste Form.",
        icon: Wind,
      },
      {
        title: "Farbschutz",
        desc: "Verwenden Sie fur zukunftige Waschen mildes, bleichmittelfreies Waschmittel.",
        icon: Sparkles,
      },
    ],
    footer: "Mit Liebe handgefertigt. Mit Sorgfalt behandeln.",
  },
  hi: {
    title: "Tie-Dye Dekhbhal Margdarshika",
    subtitle: "Apne rango ko hamesha ke liye jeevant rakhen",
    steps: [
      {
        title: "Thande Pani Se Dhoen",
        desc: "Thande behte pani ke niche tab tak dhoen jab tak pani saaf na ho jaye.",
        icon: Droplets,
      },
      {
        title: "Akele Dhoen",
        desc: "Pehli dhulai ke liye ise alag rakhen taki rang na phale.",
        icon: ThermometerSnowflake,
      },
      {
        title: "Hawa Mein Sukhaen",
        desc: "Seedhi dhoop se bachayen. Behtar aakar ke liye ise samatal sukhaen.",
        icon: Wind,
      },
      {
        title: "Rang Surakshit",
        desc: "Bhavishya ki dhulai ke liye halka, bleach-mukt detergent istemal karen.",
        icon: Sparkles,
      },
    ],
    footer: "Pyar se hath se banaya gaya. Ise saavdhani se sambhalen.",
  },
  pa: {
    title: "Tie-Dye Dekhbhaal Guide",
    subtitle: "Apne ranga nu hamesha layi jeevant rakho",
    steps: [
      {
        title: "Thande Pani Naal Dho Vo",
        desc: "Thande vagde pani de hethan udon tak dho vo jadon tak pani saaf na ho jave.",
        icon: Droplets,
      },
      {
        title: "Ikalle Dho Vo",
        desc: "Pehli vaar dhon vele, ranga nu milan ton rokan layi isnu ikalla rakho.",
        icon: ThermometerSnowflake,
      },
      {
        title: "Hawa Vich Sukhao",
        desc: "Sidhi dhoop ton bacho. Behtar aakar layi isnu padhar sukhao.",
        icon: Wind,
      },
      {
        title: "Rang Surakhit",
        desc: "Bhavikh diyan dhulayan layi halka, bleach-mukt detergent varto.",
        icon: Sparkles,
      },
    ],
    footer: "Pyar nal hathi banaya giya. Isdi dekhbhaal karo.",
  },
  it: {
    title: "Guida alla Cura Tie-Dye",
    subtitle: "Mantieni i tuoi colori vivaci per sempre",
    steps: [
      {
        title: "Risciacquo Freddo",
        desc: "Risciacquare sotto acqua fredda corrente finche l'acqua non e limpida.",
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
    title: "Tie-Dye Care Guide (Urdu)",
    subtitle: "Apne rangon ko hamesha roshan rakhen",
    steps: [
      {
        title: "Thande Pani Se Dhoyen",
        desc: "Thande behte pani ke niche tab tak dhoyen jab tak pani saaf na ho jaye.",
        icon: Droplets,
      },
      {
        title: "Akele Dhoyen",
        desc: "Pehli baar dhone ke liye, rang milne se bachane ke liye ise alag rakhen.",
        icon: ThermometerSnowflake,
      },
      {
        title: "Hawa Mein Sukhayen",
        desc: "Seedhi dhoop se bachayen. Behtar shakal ke liye ise hamwar sukhayen.",
        icon: Wind,
      },
      {
        title: "Rang Mehfooz",
        desc: "Mustaqbil mein dhone ke liye halka, bleach-free detergent istemal karen.",
        icon: Sparkles,
      },
    ],
    footer: "Mohabbat se hath se banaya gaya. Ise ehtiyat se istemal karen.",
  },
};

const languageNames: Record<Language, string> = {
  en: "English",
  es: "Espanol",
  fr: "Francais",
  de: "Deutsch",
  hi: "Hindi",
  pa: "Punjabi",
  it: "Italiano",
  ur: "Urdu",
};

const rtlLanguages: Language[] = ["ur"];

export default function Home() {
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    const browserLang = navigator.language.split("-")[0] as Language;
    if (translations[browserLang]) {
      setLang(browserLang);
    }
  }, []);

  const t = translations[lang];
  const isRTL = rtlLanguages.includes(lang);

  return (
    <div className="min-h-screen bg-background font-sans">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-serif text-2xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            Patterson Elementary PTA
          </div>
          <Select value={lang} onValueChange={(val) => setLang(val as Language)}>
            <SelectTrigger
              className="w-[180px] rounded-full border-primary/20 hover:border-primary/50 transition-colors"
              data-testid="select-language"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(languageNames).map(([code, name]) => (
                <SelectItem key={code} value={code} data-testid={`option-lang-${code}`}>
                  {name}
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
