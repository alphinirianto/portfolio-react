import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    const newLang = i18n.language === "en" ? "id" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <div className="w-full border-b border-[#e5dfd3] bg-[#f5f1e8] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex justify-between items-center">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="bg-[#1a1a1a] text-white w-8 h-8 flex items-center justify-center rounded">
            A
          </div>

          <div>
            <h1 className="font-semibold">Alphin Naibaho</h1>
            <p className="text-xs text-[#7a756a]">
              {t("hero.role")}
            </p>
          </div>
        </div>

        {/* MENU */}
        <div className="hidden md:flex gap-8 text-sm text-[#5f5a4f] items-center">
          <a href="#work" className="hover:text-black transition">
            {t("navbar.work")}
          </a>
          <a href="#about" className="hover:text-black transition">
            {t("navbar.about")}
          </a>
          <a href="#experience" className="hover:text-black transition">
            {t("navbar.experience")}
          </a>
          <a href="#writing" className="hover:text-black transition">
            {t("navbar.writing")}
          </a>
          <a href="#contact" className="hover:text-black transition">
            {t("navbar.contact")}
          </a>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* TRANSLATE BUTTON */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-2 border border-[#d6d0c4] px-4 py-2 rounded-full text-sm hover:bg-[#ece7dc] transition"
          >
            <span>
              {i18n.language === "en" ? "🇬🇧" : "🇮🇩"}
            </span>
            <span>
              {i18n.language === "en" ? "EN" : "ID"}
            </span>
          </button>

          {/* CONTACT BUTTON */}
          <a href="#contact">
            <button className="border border-[#1a1a1a] px-4 py-2 rounded-full text-sm hover:bg-black hover:text-white transition">
              {t("navbar.cta")} →
            </button>
          </a>

        </div>

      </div>
    </div>
  );
}