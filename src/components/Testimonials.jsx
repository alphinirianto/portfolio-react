import { useMemo } from "react";
import { useTranslation } from "react-i18next";

export default function Testimonials() {
  const { t, i18n, ready } = useTranslation();

  if (!ready) return null;

  // 🔥 ambil text global
  const testi = t("testimonials", { returnObjects: true });

  // 🔥 ambil data array
  const testimonials = useMemo(() => {
    return (
      i18n.getResourceBundle(i18n.language, "translation")?.testimonials?.items || []
    );
  }, [i18n.language]);

  return (
    <section className="w-full bg-[#e7e2d9] py-24 text-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* HEADER */}
        <div className="mb-12">
          <span className="text-sm text-[#7a756a]">
            {testi.label}
          </span>

          <h2 className="text-3xl md:text-5xl font-semibold leading-[1.05] tracking-tight mt-4 max-w-2xl">
            {testi.title}
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#f8f5f0] border border-[#ddd6cc] rounded-2xl p-6 flex flex-col gap-6"
            >
              {/* QUOTE */}
              <span className="text-3xl text-[#c45c2e]">”</span>

              {/* TEXT */}
              <p className="text-[#4b4742] leading-relaxed text-sm">
                {t.quote}
              </p>

              {/* FOOTER */}
              <div className="mt-auto pt-4 border-t border-[#ddd6cc]">
                <p className="font-medium text-sm">{t.name}</p>
                <p className="text-xs text-[#9c978f] tracking-widest mt-1">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}