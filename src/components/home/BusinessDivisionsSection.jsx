import { Link } from "react-router-dom";

const divisions = [
  {
    title: "Engineering & Contracting",
    to: "/engineering-contracting",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Dependable project execution across civil works, MEP, infrastructure, fit-out, and maintenance.",
    capabilities: [
      "Civil Works",
      "General Construction",
      "MEP Works",
      "Infrastructure",
    ],
    tone: "from-[#8d6332]/55 to-[#0d141c]/80",
  },
  {
    title: "Technology & Digital",
    to: "/technology",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Operational technology, software, AI, and connected systems aligned with real business needs.",
    capabilities: [
      "IT Infrastructure",
      "Software Solutions",
      "CCTV",
      "Fleet Technology",
    ],
    tone: "from-[#27435f]/55 to-[#0d141c]/82",
  },
  {
    title: "Logistics & Equipment",
    to: "/logistics-equipment",
    image:
      "https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Flexible transport, vehicles, machinery, and equipment support for projects and operations.",
    capabilities: [
      "Fleet Rental",
      "Machinery Rental",
      "Transportation",
      "Logistics Support",
    ],
    tone: "from-[#7a5628]/50 to-[#111821]/84",
  },
  {
    title: "Management & Business Services",
    to: "/business-services",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Practical coordination, procurement, project support, and operational services built around clients.",
    capabilities: [
      "Management Services",
      "Procurement",
      "Project Support",
      "Operational Support",
    ],
    tone: "from-[#44586c]/45 to-[#0f141c]/84",
  },
];

export function BusinessDivisionsSection() {
  return (
    <section className="px-4 pb-16 pt-6 sm:px-6 sm:pb-20 sm:pt-8 lg:px-8 lg:pb-24 lg:pt-10 bg-[#0c131b]">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6 border-t border-white/8 pt-10 sm:pt-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[color:var(--color-gold-bright)]">
              Our Business Divisions
            </p>
            <h2 className="mt-4 font-display text-4xl leading-[0.95] text-white sm:text-5xl">
              Specialized Capabilities. One KHANBAS.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[color:var(--color-mist)] sm:text-lg">
            Four focused divisions serving different requirements while working
            together when projects demand more. Each division carries equal
            visual weight to keep the KHANBAS story balanced.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {divisions.map((division, index) => (
            <article
              key={division.title}
              className="group relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-[rgba(255,255,255,0.03)] shadow-[0_26px_60px_rgba(0,0,0,0.22)]"
            >
              <div className="grid md:grid-cols-[1.08fr_0.92fr]">
                <div className="relative min-h-[18rem] overflow-hidden">
                  <img
                    src={division.image}
                    alt={division.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                  />
                  <div
                    className={`absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(8,12,18,0.78)_100%)]`}
                  />
                  <div className="absolute left-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-black/25 text-sm font-semibold text-[color:var(--color-gold-bright)] backdrop-blur">
                    0{index + 1}
                  </div>
                </div>

                <div
                  className={`bg-[linear-gradient(155deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] p-6 md:p-7`}
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-gold-bright)]">
                    Division
                  </p>
                  <h3 className="mt-3 font-display text-3xl leading-tight text-white">
                    {division.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[color:var(--color-sand)]">
                    {division.summary}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {division.capabilities.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 px-3 py-2 text-[0.7rem] uppercase tracking-[0.18em] text-[color:var(--color-mist)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={division.to}
                    className="mt-7 inline-flex items-center text-sm font-semibold uppercase tracking-[0.18em] text-white transition group-hover:text-[color:var(--color-gold-bright)]"
                  >
                    Explore Division
                  </Link>
                </div>
              </div>

              <div
                className={`pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,214,122,0.08),transparent_24%)]`}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
