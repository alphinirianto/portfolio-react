import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="w-full bg-[#f5f1e8] text-[#1a1a1a] py-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

        {/* LEFT */}
        <div className="lg:col-span-5">
          <p className="text-sm text-[#7a756a] mb-5">
            {t("about.label")}
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold leading-[1.05] tracking-tight">
            {t("about.title1")}{" "}
            <span className="text-[#070707]">
              {t("about.titleHighlight")}
            </span>, {t("about.title2")}
          </h2>

          {/* IMAGE */}
          <div className="mt-10 relative overflow-hidden rounded-2xl border border-black/10 bg-[#ede7dc] aspect-[4/5] max-w-sm">
            <img
              src="https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg"
              alt="Profile"
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
              <div className="text-[10px] uppercase tracking-[0.22em] opacity-80">
                {t("about.location")}
              </div>
              <div className="text-sm font-medium">
                Alphin Irianto Naibaho
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-7">

          <div className="space-y-6 text-[17px] leading-[1.75] text-[#5f5a4f]">
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
            <p>{t("about.p3")}</p>
          </div>

          
          {/* STATS */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-black/10 pt-8">
            {t("about.stats", { returnObjects: true }).map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-semibold tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-[#7a756a] mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}