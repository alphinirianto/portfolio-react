import { useMemo } from "react";
import { useTranslation } from "react-i18next";

export default function Writing() {
  const { t, i18n, ready } = useTranslation();

  if (!ready) return null;

  // 🔥 ambil text global
  const writing = t("writing", { returnObjects: true });

  // 🔥 ambil posts array
  const posts = useMemo(() => {
    return (
      i18n.getResourceBundle(i18n.language, "translation")?.writing?.posts || []
    );
  }, [i18n.language]);

  return (
    <section
      id="writing"
      className="w-full bg-[#e7e2d9] py-24 text-[#1a1a1a] scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-sm text-[#7a756a]">
              {writing.label}
            </span>

            <h2 className="text-3xl md:text-5xl font-semibold leading-[1.05] tracking-tight mt-4">
              {writing.title}
            </h2>
          </div>

          <a
            href="#"
            className="text-sm text-[#4b4742] hover:underline flex items-center gap-2"
          >
            {writing.viewAll}
          </a>
        </div>

        {/* POSTS */}
        <div className="grid md:grid-cols-3 border border-[#d6d0c7] rounded-2xl overflow-hidden">
          {posts.map((post, i) => (
            <div
              key={i}
              className={`p-6 flex flex-col gap-4 transition hover:bg-[#f3efe9] ${
                i !== posts.length - 1 ? "border-r border-[#d6d0c7]" : ""
              }`}
            >
              <span className="text-xs tracking-widest text-[#9c978f]">
                {post.date}
              </span>

              <h3 className="text-lg font-semibold leading-snug">
                {post.title}
              </h3>

              <p className="text-sm text-[#6f6a63] leading-relaxed">
                {post.desc}
              </p>

              <span className="text-xs mt-auto text-[#4b4742] tracking-wide">
                {writing.read}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}