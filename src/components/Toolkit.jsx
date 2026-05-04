import { useMemo } from "react";
import { useTranslation } from "react-i18next";

export default function Toolkit() {
  const { t, i18n, ready } = useTranslation();

  // ⛔ tunggu i18n siap (hindari flicker / undefined)
  if (!ready) return null;

  // 🔥 ambil text global (string)
  const toolkit = t("toolkit", { returnObjects: true });

  // 🔥 ambil sections (array) langsung dari resource
  const sections = useMemo(() => {
    return (
      i18n.getResourceBundle(i18n.language, "translation")?.toolkit?.sections || []
    );
  }, [i18n.language]);

  return (
    <section className="w-full bg-[#e7e2d9] py-24 text-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

        {/* LEFT */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <span className="text-sm text-[#7a756a]">
            {toolkit.label}
          </span>

          <h2 className="text-3xl md:text-5xl font-semibold leading-[1.05] tracking-tight">
            {toolkit.title1} <br /> {toolkit.title2}
          </h2>

          <p className="text-[#6f6a63] max-w-md leading-relaxed">
            {toolkit.desc}
          </p>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 border border-[#d6d0c7] rounded-2xl overflow-hidden">

            {sections.map((section, i) => (
              <div
                key={i}
                className={`p-6 ${
                  i % 2 === 0 ? "border-r border-[#d6d0c7]" : ""
                } ${
                  i < 2 ? "border-b border-[#d6d0c7]" : ""
                }`}
              >
                {/* HEADER */}
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium">{section.title}</h3>
                  <span className="text-xs text-[#9c978f]">
                    0{section.items.length}
                  </span>
                </div>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2">
                  {section.items.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm border border-[#d6d0c7] rounded-full text-[#3a3835] bg-[#f3efe9]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}