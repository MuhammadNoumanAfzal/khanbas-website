import { Link } from 'react-router-dom'
import { PageShell } from '../components/page/PageShell.jsx'

const capabilityGroups = [
  {
    number: '01',
    title: 'Engineering & Contracting',
    text: 'Civil works, construction, MEP, infrastructure, fit-out, and maintenance capabilities built around dependable project execution.',
  },
  {
    number: '02',
    title: 'Technology & Digital',
    text: 'IT, software, CCTV, fleet technology, AI, and smart systems designed to support practical business and operational requirements.',
  },
  {
    number: '03',
    title: 'Logistics & Equipment',
    text: 'Transportation support, fleet solutions, equipment access, and logistics coordination for projects and ongoing operations.',
  },
  {
    number: '04',
    title: 'Management & Business Support',
    text: 'Project support, procurement coordination, management assistance, and operational services aligned with changing client needs.',
  },
]

const principles = [
  {
    title: 'Specialized by Division',
    text: 'Each division keeps its own focus, expertise, and service logic so clients can access the capability that fits the requirement best.',
  },
  {
    title: 'Integrated When Needed',
    text: 'When a requirement crosses disciplines, KHANBAS can align multiple services around one project, one scope, or one operating need.',
  },
  {
    title: 'Built Around the Client',
    text: 'The structure is designed to reduce complexity, improve coordination, and make broader capability easier to manage through one partner.',
  },
]

const highlights = [
  'Multidisciplinary Saudi company',
  'Balanced across four business divisions',
  'Designed for projects and operations',
  'One relationship with broader capability',
]

export function AboutPage() {
  return (
    <>
      <PageShell
        eyebrow="About KHANBAS"
        title="Built for Complex Requirements."
        description="KHANBAS is a Saudi multidisciplinary company serving organizations across engineering, technology, logistics, and business support with a more coordinated way to access specialized capability."
        accent="Corporate positioning"
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
      >
        <div className="flex flex-wrap gap-4">
          <Link
            to="/engineering-contracting"
            className="rounded-full border border-[color:var(--color-gold-soft)]/60 bg-[linear-gradient(135deg,rgba(244,205,112,0.95),rgba(171,124,42,0.95))] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--color-ink)] transition hover:-translate-y-0.5"
          >
            Explore Our Divisions
          </Link>
          <Link
            to="/contact"
            className="rounded-full border border-white/12 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-[color:var(--color-gold-soft)]/55 hover:bg-white/5"
          >
            Talk to Our Team
          </Link>
        </div>
      </PageShell>

      <section className="bg-[linear-gradient(180deg,#f4eddf_0%,#ecdfca_100%)] px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-[#9d6c24]">
              Who We Are
            </p>
            <h2 className="mt-3 font-display text-[2.8rem] leading-[0.92] text-[#142537] sm:text-[3.4rem]">
              A broader business structure, built around real client needs.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#4d6071]">
              KHANBAS is a Saudi multidisciplinary company providing engineering,
              technology, logistics, and business support services. Our purpose is
              straightforward: give clients access to specialized capabilities while
              making complex requirements easier to coordinate.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="border-b border-[#ceb991]/55 pb-3 text-sm font-medium text-[#22384d]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-[1.2fr_0.8fr]">
            <div className="min-h-[360px] bg-cover bg-center shadow-[0_24px_50px_rgba(33,28,19,0.12)]"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80")',
              }}
            />
            <div className="grid gap-4">
              <div
                className="min-h-[172px] bg-cover bg-center shadow-[0_20px_40px_rgba(33,28,19,0.1)]"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80")',
                }}
              />
              <div
                className="min-h-[172px] bg-cover bg-center shadow-[0_20px_40px_rgba(33,28,19,0.1)]"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=900&q=80")',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#0c1520_0%,#0a121b_100%)] px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,151,61,0.12),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(44,75,109,0.18),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.34em] text-[color:var(--color-gold-bright)]">
              Vision & Mission
            </p>
            <h2 className="mt-3 font-display text-[2.8rem] leading-[0.92] text-white sm:text-[3.4rem]">
              Clear direction, practical execution, and long-term relationships.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="border border-white/10 bg-white/[0.03] p-7 backdrop-blur">
              <p className="text-[0.72rem] uppercase tracking-[0.28em] text-[color:var(--color-gold-bright)]">
                Our Vision
              </p>
              <p className="mt-4 text-lg leading-8 text-[#d6e0e8]">
                To build KHANBAS into a trusted multidisciplinary partner supporting
                the growth and operations of businesses and projects across Saudi Arabia.
              </p>
            </div>
            <div className="border border-[#3d536b] bg-[linear-gradient(180deg,#172736_0%,#1c3042_100%)] p-7 shadow-[0_20px_40px_rgba(0,0,0,0.18)]">
              <p className="text-[0.72rem] uppercase tracking-[0.28em] text-[color:var(--color-gold-bright)]">
                Our Mission
              </p>
              <p className="mt-4 text-lg leading-8 text-[#d6e0e8]">
                To deliver practical, coordinated solutions across engineering,
                technology, logistics, and business services while building long-term
                client relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#efe4d1_0%,#e7d9c2_100%)] px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-[#9d6c24]">
              Our Operating Model
            </p>
            <h2 className="mt-3 font-display text-[2.8rem] leading-[0.92] text-[#132538] sm:text-[3.3rem]">
              Specialists when you need them. Integrated when it matters.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#4d6071]">
              Each KHANBAS division focuses on its own area of expertise. When a
              requirement crosses disciplines, those capabilities can work together
              around the client without changing the clarity of the structure.
            </p>

            <div className="mt-8 space-y-4">
              {principles.map((item) => (
                <div
                  key={item.title}
                  className="border-l-2 border-[#b9863f] pl-5"
                >
                  <h3 className="text-xl font-semibold text-[#183047]">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-7 text-[#596b79]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex min-h-[470px] items-center justify-center overflow-hidden border border-[#d5c29d]/55 bg-[linear-gradient(180deg,rgba(249,244,235,0.94),rgba(239,229,211,0.92))] p-8 shadow-[0_26px_50px_rgba(41,31,17,0.1)]">
            <div className="absolute h-40 w-40 rounded-full border border-[#ccb48a]/45" />
            <div className="absolute h-64 w-64 rounded-full border border-[#d7c4a1]/35" />
            <div className="absolute h-88 w-88 rounded-full border border-[#dfcfb0]/25" />

            <div className="relative grid h-full w-full place-items-center">
              <div className="absolute left-0 top-10 max-w-[180px] border border-[#d5c29d]/55 bg-white/55 p-4 shadow-[0_16px_30px_rgba(40,31,17,0.08)]">
                <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#9d6c24]">
                  Division
                </p>
                <p className="mt-2 text-lg font-semibold leading-6 text-[#183047]">
                  Engineering & Contracting
                </p>
              </div>

              <div className="absolute right-0 top-16 max-w-[180px] border border-[#d5c29d]/55 bg-white/55 p-4 shadow-[0_16px_30px_rgba(40,31,17,0.08)]">
                <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#9d6c24]">
                  Division
                </p>
                <p className="mt-2 text-lg font-semibold leading-6 text-[#183047]">
                  Technology & Digital
                </p>
              </div>

              <div className="absolute bottom-16 left-4 max-w-[180px] border border-[#d5c29d]/55 bg-white/55 p-4 shadow-[0_16px_30px_rgba(40,31,17,0.08)]">
                <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#9d6c24]">
                  Division
                </p>
                <p className="mt-2 text-lg font-semibold leading-6 text-[#183047]">
                  Logistics & Equipment
                </p>
              </div>

              <div className="absolute bottom-10 right-2 max-w-[200px] border border-[#d5c29d]/55 bg-white/55 p-4 shadow-[0_16px_30px_rgba(40,31,17,0.08)]">
                <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#9d6c24]">
                  Division
                </p>
                <p className="mt-2 text-lg font-semibold leading-6 text-[#183047]">
                  Management & Business Services
                </p>
              </div>

              <div className="z-10 flex h-36 w-36 items-center justify-center rounded-full border border-[#b98740]/40 bg-[linear-gradient(180deg,#182b3c_0%,#21384c_100%)] p-6 text-center shadow-[0_24px_50px_rgba(20,29,39,0.22)]">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[color:var(--color-gold-bright)]">
                    Center
                  </p>
                  <p className="mt-2 font-display text-3xl leading-none text-white">
                    KHANBAS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#0a121a_0%,#0d1722_100%)] px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(201,151,61,0.1),transparent_22%),radial-gradient(circle_at_left_bottom,rgba(42,74,108,0.16),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.34em] text-[color:var(--color-gold-bright)]">
              Four Business Divisions
            </p>
            <h2 className="mt-3 font-display text-[2.8rem] leading-[0.92] text-white sm:text-[3.4rem]">
              Separate capabilities. Equal importance. One KHANBAS.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {capabilityGroups.map((group, index) => (
              <article
                key={group.title}
                className={`group overflow-hidden border p-6 transition duration-300 hover:-translate-y-1 ${
                  index % 2 === 0
                    ? 'border-[#3a526b] bg-[linear-gradient(180deg,#152534_0%,#1d3244_100%)] shadow-[0_22px_44px_rgba(0,0,0,0.16)]'
                    : 'border-white/10 bg-white/[0.03] backdrop-blur'
                }`}
              >
                <div className="mb-8 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[0.72rem] uppercase tracking-[0.28em] text-[color:var(--color-gold-bright)]">
                      {group.number}
                    </p>
                    <h3 className="mt-3 font-display text-[2rem] leading-[0.95] text-white">
                      {group.title}
                    </h3>
                  </div>
                  <div className="h-14 w-14 rounded-full border border-[color:var(--color-gold-soft)]/35 bg-[rgba(255,255,255,0.04)]" />
                </div>
                <p className="max-w-xl text-sm leading-7 text-[#d2dde6]">
                  {group.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#f1e7d8_0%,#e7dbc9_100%)] px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="grid gap-4 sm:grid-cols-2">
              <div
                className="min-h-[240px] bg-cover bg-center shadow-[0_22px_44px_rgba(39,30,17,0.12)] sm:min-h-[320px]"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80")',
                }}
              />
              <div className="grid gap-4">
                <div
                  className="min-h-[150px] bg-cover bg-center shadow-[0_18px_34px_rgba(39,30,17,0.1)]"
                  style={{
                    backgroundImage:
                      'url("https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80")',
                  }}
                />
                <div
                  className="min-h-[150px] bg-cover bg-center shadow-[0_18px_34px_rgba(39,30,17,0.1)]"
                  style={{
                    backgroundImage:
                      'url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80")',
                  }}
                />
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-[#9d6c24]">
                The KHANBAS View
              </p>
              <h2 className="mt-3 font-display text-[2.8rem] leading-[0.92] text-[#132538] sm:text-[3.4rem]">
                One relationship. Broader capability.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#556674]">
                KHANBAS is structured to help clients access more than one type of
                support without losing clarity. Some requirements stay within one
                division. Others bring together engineering, logistics, technology,
                and business support around one coordinated need.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#556674]">
                The result is a more balanced business identity: not only technology,
                not only contracting, but a multidisciplinary company able to support
                several parts of a project or operation through one partner.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="rounded-full border border-[#c9973d]/60 bg-[linear-gradient(135deg,rgba(244,205,112,0.95),rgba(171,124,42,0.95))] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--color-ink)] transition hover:-translate-y-0.5"
                >
                  Talk to Our Team
                </Link>
                <Link
                  to="/projects"
                  className="rounded-full border border-[#b8a27a]/55 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#1e3145] transition hover:bg-white/40"
                >
                  View Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
