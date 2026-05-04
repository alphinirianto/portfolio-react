import { useTranslation } from "react-i18next";
import TechMarquee from "./TechMarquee";

export default function Hero() {
  const { t, i18n } = useTranslation();
  
  const lang = i18n.language;

  

  return (
<section
  key={i18n.language}
  className="w-full min-h-screen bg-[#f5f1e8] text-[#1a1a1a] flex flex-col justify-between"
>
      {/* CONTENT */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-10 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>
          <p className="text-sm text-[#7a756a] mb-4">
            {t("hero.available")}
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Alphin Irianto <br />
            <span className="text-[#b0a58f]">Naibaho.</span>
          </h1>

          <p className="mt-6 text-[#7a756a] max-w-lg">
            {t("hero.desc")}
          </p>

          {/* BUTTON */}
          <div className="mt-8 flex flex-wrap gap-4">

            {/* WORK */}
            <a href="#work">
              <button className="bg-[#1a1a1a] text-white px-6 py-3 rounded-full hover:opacity-80 transition">
                {t("hero.ctaWork")} →
              </button>
            </a>

            {/* CONTACT */}
            <a href="#contact">
              <button className="border border-[#d6d0c4] px-6 py-3 rounded-full hover:bg-[#ece7dc] transition">
                {t("hero.ctaContact")} →
              </button>
            </a>

            {/* CV */}
            <a href="/Cv-Alphin irianto terbaru.pdf" download>
              <button className="text-[#7a756a] underline hover:text-black transition">
                {t("hero.ctaCV")} →
              </button>
            </a>

          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">

          {/* TERMINAL */}
          <div className="bg-[#1a1a1a] rounded-2xl p-5 shadow-xl text-[13px] leading-relaxed font-mono">

            <div className="flex gap-2 mb-3">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>

            <pre className="whitespace-pre-wrap">
              <span className="text-white/40">$</span> whoami{"\n"}
              <span className="text-[#e7e2d6]">alphin</span>{"\n"}

              <span className="text-white/40">$</span> cat role.json{"\n"}
              <span className="text-[#e7e2d6]">
{`{
  "name": "Alphin Irianto Naibaho",
  "role": "${t("hero.role")}",
  "stack": ["React", "Node JS", "Postgres", "Php", "Laravel" , "Codeigniter", "Javascript", "Springboot" ],
  "based": "Indonesia"
}`}
              </span>{"\n"}

              <span className="text-white/40">$</span> ./say-hello{"\n"}
              <span className="text-[#c9b079]">
                {t("hero.hello")}
              </span>
            </pre>
          </div>

          {/* STATS */}
          <div className="flex gap-4">
            <div className="border border-[#d6d0c4] p-5 rounded-xl w-full bg-[#faf7f2]">
              <h2 className="text-2xl font-bold">3+</h2>
              <p className="text-xs text-[#7a756a]">{t("hero.exp")}</p>
            </div>

            <div className="border border-[#d6d0c4] p-5 rounded-xl w-full bg-[#faf7f2]">
              <h2 className="text-2xl font-bold">6</h2>
              <p className="text-xs text-[#7a756a]">{t("hero.projects")}</p>
            </div>
          </div>

        </div>
      </div>

      {/* MARQUEE */}
      <TechMarquee />

    </section>
  );
}