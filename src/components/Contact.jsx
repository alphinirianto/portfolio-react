import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t, ready } = useTranslation();
  if (!ready) return null;

  const contact = t("contact", { returnObjects: true });

  const socials = [
    { label: contact.socials.github, link: contact.links.github },
    { label: contact.socials.linkedin, link: contact.links.linkedin },
    { label: contact.socials.twitter, link: contact.links.twitter },
    { label: contact.socials.resume, link: contact.links.resume },
    { label: contact.socials.instagram, link: contact.links.instagram },
    { label: contact.socials.whatsapp, link: contact.links.whatsapp },
  ];

  return (
    <section
      id="contact"
      className="w-full bg-[#e7e2d9] py-24 text-[#1a1a1a] scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* LEFT */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="text-sm text-[#7a756a]">
              {contact.label}
            </span>

            <h2 className="text-3xl md:text-5xl font-semibold leading-[1.05] tracking-tight">
              {contact.title1}
              <br />
              {contact.title2}
            </h2>

            <p className="text-[#6f6a63] max-w-md leading-relaxed">
              {contact.desc}
            </p>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-6 flex flex-col gap-8">

            {/* EMAIL CTA */}
            <div className="bg-[#f8f5f0] border border-[#ddd6cc] rounded-2xl p-6 flex flex-col gap-4">
              <p className="text-sm text-[#7a756a]">
                {contact.cta}
              </p>

              <a
                href={`mailto:${contact.email}`}
                className="text-xl md:text-2xl font-semibold hover:underline"
              >
                {contact.email} →
              </a>
            </div>

            {/* SOCIALS */}
            <div className="grid grid-cols-2 gap-4">
              {socials.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#f8f5f0] border border-[#ddd6cc] rounded-xl p-4 flex justify-between items-center hover:bg-[#efeae2] transition"
                >
                  <span>{item.label}</span>
                  <span>↗</span>
                </a>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}