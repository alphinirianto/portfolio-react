import { useMemo } from "react";
import { useTranslation } from "react-i18next";

export default function Experience() {
  const { t, i18n, ready } = useTranslation();

  if (!ready) return null;

  // 🔥 ambil string
  const expText = t("experience", { returnObjects: true });

  // 🔥 ambil array (stabil)
  const experiences = useMemo(() => {
    return (
      i18n.getResourceBundle(i18n.language, "translation")?.experience?.items || []
    );
  }, [i18n.language]);

  return (
    <section
      id="experience"
      className="w-full bg-[#e7e2d9] py-24 text-[#1a1a1a] scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* HEADER */}
        <div className="mb-16">
          <span className="text-sm text-[#7a756a]">
            {expText.label}
          </span>

          <h2 className="text-3xl md:text-5xl font-semibold leading-[1.05] tracking-tight mt-4">
            {expText.title}
          </h2>
        </div>

        {/* LIST */}
        <div className="flex flex-col divide-y divide-[#d6d0c7]">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 py-10"
            >

              {/* LEFT */}
              <div className="md:col-span-3 text-sm text-[#7a756a] flex flex-col gap-2">
                <span className="tracking-wide">{exp.period}</span>

                <span className="flex items-center gap-2">
                  📍 {exp.location}
                </span>
              </div>

              {/* RIGHT */}
              <div className="md:col-span-9 flex flex-col gap-4">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <h3 className="text-lg md:text-xl font-semibold">
                    {exp.role}{" "}
                    <span className="text-[#6f6a63] font-normal">
                      · {exp.company}
                    </span>
                  </h3>

                  <span className="text-xs text-[#9c978f]">
                    {String(index + 1).padStart(2, "0")} /{" "}
                    {String(experiences.length).padStart(2, "0")}
                  </span>
                </div>

                <ul className="flex flex-col gap-3 text-[#4b4742] text-sm">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-[#c45c2e]">›</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}