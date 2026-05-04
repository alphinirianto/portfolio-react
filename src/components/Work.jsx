import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";

const categories = ["ALL", "FRONTEND", "BACKEND", "OSS", "TOOLS"];

export default function Work() {
  const { t, i18n, ready } = useTranslation();
  const [active, setActive] = useState("ALL");

  if (!ready) return null;

  const projects = useMemo(() => {
    return (
      i18n.getResourceBundle(i18n.language, "translation")?.work?.projects || []
    );
  }, [i18n, i18n.language]);

  const filtered = useMemo(() => {
    if (!projects.length) return [];

    return active === "ALL"
      ? projects
      : projects.filter((p) => p.category === active);
  }, [active, projects]);

  return (
    <section id="work" className="w-full bg-[#e7e2d9] py-20 text-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* LEFT */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <span className="text-sm text-[#7a756a]">{t("work.label")}</span>

          <h2 className="text-3xl md:text-5xl font-semibold leading-[1.05] tracking-tight">
            {t("work.title1")}
            <br />
            {t("work.title2")}
          </h2>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-7">
          {/* FILTER */}
          <div className="flex gap-3 flex-wrap mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm border transition-all duration-200 ${
                  active === cat
                    ? "bg-black text-white border-black"
                    : "bg-[#f3efe9] text-[#2b2b2b] border-[#d6d0c7] hover:bg-[#e5dfd6]"
                }`}
              >
                {t(`work.categories.${cat}`)}
              </button>
            ))}
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((project, i) => (
              <ProjectCard key={`${project.title}-${i}`} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="group bg-[#f8f5f0] rounded-2xl overflow-hidden border border-[#ddd6cc] transition hover:shadow-lg">
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-52 object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute top-4 left-4 text-xs bg-[#f8f5f0] px-3 py-1 rounded-full border border-[#ddd6cc]">
          {project.role} · {project.year}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2 text-[#1f1f1f]">
          {project.title}
        </h3>

        <p className="text-[#6f6a63] mb-4 text-sm leading-relaxed">
          {project.desc}
        </p>

        <div className="flex gap-2 flex-wrap">
          {project.tags.map((tag, idx) => (
            <span
              key={`${tag}-${idx}`}
              className="text-xs px-3 py-1 bg-[#ece7df] text-[#5c5750] rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}