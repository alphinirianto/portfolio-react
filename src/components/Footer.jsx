export default function Footer() {
  return (
    <footer className="w-full bg-[#e7e2d9] text-[#1a1a1a] py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* LEFT (PROFILE) */}
          <div className="md:col-span-6">
            <div className="flex items-center gap-3">
              
              <span className="h-9 w-9 rounded-md bg-[#1a1a1a] text-[#f8f5f0] grid place-items-center font-semibold text-sm">
                A
              </span>

              <div className="leading-tight">
                <div className="text-base font-semibold tracking-tight">
                  Alphin Irianto Naibaho
                </div>

                <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-[#7a756a]">
                  Software Engineer · Jakarta, Indonesia
                </div>
              </div>
            </div>

            <p className="mt-6 max-w-md text-[#4b4742] text-[15px] leading-relaxed">
              Designed and developed end-to-end. Set in Inter & JetBrains Mono.
              Built with care, not haste.
            </p>
          </div>

          {/* RIGHT (LINKS) */}
          <div className="md:col-span-6 grid grid-cols-2 gap-10">

            {/* SITEMAP */}
            <div>
              <h4 className="text-sm mb-4 text-[#7a756a]">Sitemap</h4>
              <ul className="flex flex-col gap-2 text-sm">
                <li><a href="#work" className="hover:underline">Work</a></li>
                <li><a href="#about" className="hover:underline">About</a></li>
                <li><a href="#experience" className="hover:underline">Experience</a></li>
                <li><a href="#writing" className="hover:underline">Writing</a></li>
                <li><a href="#contact" className="hover:underline">Contact</a></li>
              </ul>
            </div>

            {/* SOCIAL */}
            <div>
              <h4 className="text-sm mb-4 text-[#7a756a]">Elsewhere</h4>
              <ul className="flex flex-col gap-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    GitHub — @alphin
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    LinkedIn — in/alphin
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    X / Twitter — @alphin
                  </a>
                </li>
                <li>
                  <a href="mailto:alphin@example.com" className="hover:underline">
                    Email — alphin@example.com
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-16 pt-6 border-t border-[#d6d0c7] text-sm text-[#7a756a]">
          © 2026 Alphin Irianto Naibaho. All rights reserved.
        </div>

      </div>
    </footer>
  );
}