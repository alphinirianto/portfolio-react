export default function TechMarquee() {
  const techs = [
    "TypeScript",
    "Go",
    "Postgres",
    "Distributed Systems",
    "Developer Experience",
    "React",
    "Kubernetes",
    "Open Source",
    "System Design",
    "GraphQL",
    "Rust",
  ];

  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-[85%] w-full max-w-5xl border-y border-black/10 py-5 overflow-hidden bg-[#f5f1e8]">
      <div className="marquee text-sm text-[#7a756a] font-mono gap-6 flex">
        {[...techs, ...techs].map((item, index) => (
          <span key={index} className="flex items-center gap-6 whitespace-nowrap">
            {item}
            <span>•</span>
          </span>
        ))}
      </div>
    </div>
  );
} 