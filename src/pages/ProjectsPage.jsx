import { Link } from 'react-router-dom'
import { PageShell } from '../components/page/PageShell.jsx'

const projectEnvironments = [
  {
    number: '01',
    title: 'Construction & Infrastructure',
    text: 'Project environments where civil works, MEP, site logistics, transport, technology, and coordination may need to work together.',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85',
    tags: ['Civil Works', 'MEP', 'Site Logistics', 'Project Support'],
  },
  {
    number: '02',
    title: 'Industrial & Operational Sites',
    text: 'Facilities that may require equipment movement, smart monitoring, maintenance support, procurement, and operational coordination.',
    image:
      'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1400&q=85',
    tags: ['Equipment', 'Monitoring', 'Maintenance', 'Operations'],
  },
  {
    number: '03',
    title: 'Fleet & Transportation Operations',
    text: 'Operating environments where fleet support, GPS, dashcams, transportation, and business services intersect around visibility and control.',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=85',
    tags: ['Fleet', 'GPS', 'Transportation', 'Support'],
  },
]

const integratedExamples = [
  {
    title: 'Commercial Project Setup',
    lead: 'Engineering + Logistics + Technology + Business Support',
    text: 'A project environment may involve site preparation, transport support, CCTV or network systems, procurement, and general coordination.',
  },
  {
    title: 'Industrial Facility Support',
    lead: 'Engineering + Equipment + Technology + Operations',
    text: 'A facility can require civil works, material movement, industrial monitoring, and practical support functions around day-to-day operations.',
  },
  {
    title: 'Transport-Driven Business Need',
    lead: 'Logistics + Fleet Technology + Business Services',
    text: 'Vehicle support, connected visibility tools, and operational assistance can be aligned under one coordinated business relationship.',
  },
]

const pagePrinciples = [
  {
    label: 'Important Note',
    value: 'This page presents project environments and capability examples, not unsupported claims about completed contracts.',
  },
  {
    label: 'Purpose',
    value: 'To show how KHANBAS capabilities can come together around complex requirements across projects and operations.',
  },
  {
    label: 'Positioning',
    value: 'Multidisciplinary support through one coordinated partner across engineering, technology, logistics, and business services.',
  },
]

export function ProjectsPage() {
  const featuredEnvironment = projectEnvironments[0]
  const secondaryEnvironments = projectEnvironments.slice(1)

  return (
    <>
      <PageShell
        eyebrow="Projects | KHANBAS"
        title="Project Capability, Framed with Clarity."
        description="KHANBAS supports project and operational requirements through multidisciplinary capabilities that can work independently or together, depending on the need."
        accent="Integrated capability view"
        backgroundImage="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1600&q=80"
      >
        <div className="flex flex-wrap gap-4">
          <Link
            to="/industries"
            className="rounded-full border border-[color:var(--color-gold-soft)]/60 bg-[linear-gradient(135deg,rgba(244,205,112,0.95),rgba(171,124,42,0.95))] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--color-ink)] transition hover:-translate-y-0.5"
          >
            View Industries
          </Link>
          <Link
            to="/contact"
            className="rounded-full border border-white/12 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-[color:var(--color-gold-soft)]/55 hover:bg-white/5"
          >
            Discuss Your Requirement
          </Link>
        </div>
      </PageShell>

      <section className="bg-[linear-gradient(180deg,#f4eddf_0%,#eadcc8_100%)] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-[#9d6c24]">
              Project Perspective
            </p>
            <h2 className="mt-3 font-display text-[2.5rem] leading-[0.92] text-[#132538] sm:text-[3.1rem]">
              Not one project type. Not one capability path.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#556674]">
              The KHANBAS project story is not limited to one division. Some
              requirements stay within engineering, technology, logistics, or
              business services. Others require a broader combination of
              capabilities around one operating need.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {pagePrinciples.map((item) => (
              <div
                key={item.label}
                className="border border-[#d5c29d]/60 bg-white/45 p-5 shadow-[0_16px_30px_rgba(41,31,17,0.06)]"
              >
                <p className="text-[0.72rem] uppercase tracking-[0.28em] text-[#9d6c24]">
                  {item.label}
                </p>
                <p className="mt-3 text-sm leading-7 text-[#5b6c79]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#0a131c_0%,#0d1722_100%)] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,151,61,0.12),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(43,75,109,0.18),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.34em] text-[color:var(--color-gold-bright)]">
                Featured Environment
              </p>
              <h2 className="mt-3 font-display text-[2.5rem] leading-[0.92] text-white sm:text-[3rem]">
                One environment can involve multiple KHANBAS capabilities.
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-7 text-[#9bb0c3]">
              A featured project-style environment helps explain how the business
              structure works without overstating specific project history.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
            <div className="relative min-h-[390px] overflow-hidden border border-[#36506a] shadow-[0_24px_50px_rgba(0,0,0,0.18)]">
              <img
                src={featuredEnvironment.image}
                alt={featuredEnvironment.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,14,0.08),rgba(7,10,14,0.88)_100%)]" />
              <div className="relative flex h-full flex-col justify-between p-6 sm:p-7">
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full border border-white/14 bg-black/20 px-4 py-2 text-[0.72rem] uppercase tracking-[0.24em] text-[color:var(--color-gold-bright)] backdrop-blur-sm">
                    Project Environment
                  </span>
                  <span className="text-sm font-medium text-[#d9e4ec]">
                    {featuredEnvironment.number}
                  </span>
                </div>

                <div className="max-w-2xl">
                  <p className="text-[0.72rem] uppercase tracking-[0.28em] text-[color:var(--color-gold-bright)]">
                    {featuredEnvironment.title}
                  </p>
                  <h3 className="mt-3 font-display text-[2.45rem] leading-[0.92] text-white sm:text-[3rem]">
                    Coordinated support around active site and infrastructure needs.
                  </h3>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-[#d4dfe7]">
                    {featuredEnvironment.text}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
                <p className="text-[0.72rem] uppercase tracking-[0.28em] text-[color:var(--color-gold-bright)]">
                  Related Capabilities
                </p>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {featuredEnvironment.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#3d566f] bg-[rgba(255,255,255,0.03)] px-4 py-2 text-sm text-[#d4dee7]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border border-[#37506a] bg-[linear-gradient(180deg,#152635_0%,#1a2f40_100%)] p-6 shadow-[0_18px_38px_rgba(0,0,0,0.16)]">
                <p className="text-[0.72rem] uppercase tracking-[0.28em] text-[color:var(--color-gold-bright)]">
                  Structure
                </p>
                <p className="mt-4 text-base leading-8 text-[#d5dfe8]">
                  The goal is not to force every project into one division. It is
                  to bring the right mix of capabilities around the requirement
                  with a clearer, more manageable client relationship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#efe4d1_0%,#e8dbc6_100%)] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.34em] text-[#9d6c24]">
              Integrated Examples
            </p>
            <h2 className="mt-3 font-display text-[2.5rem] leading-[0.92] text-[#132538] sm:text-[3rem]">
              Different project patterns, one multidisciplinary model.
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {integratedExamples.map((example, index) => (
              <article
                key={example.title}
                className={`border p-6 shadow-[0_18px_36px_rgba(40,31,17,0.08)] ${
                  index === 1
                    ? 'border-[#cfbb96]/60 bg-[linear-gradient(180deg,rgba(250,245,236,0.96),rgba(240,232,216,0.92))]'
                    : 'border-[#cfbb96]/60 bg-[linear-gradient(180deg,rgba(246,239,227,0.96),rgba(236,226,207,0.92))]'
                }`}
              >
                <p className="text-[0.72rem] uppercase tracking-[0.28em] text-[#9d6c24]">
                  Project Pattern
                </p>
                <h3 className="mt-3 font-display text-[2rem] leading-[0.95] text-[#173047]">
                  {example.title}
                </h3>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#57708a]">
                  {example.lead}
                </p>
                <p className="mt-4 text-sm leading-7 text-[#5a6b79]">
                  {example.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#09121a_0%,#0d1722_100%)] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(201,151,61,0.1),transparent_22%),radial-gradient(circle_at_right_bottom,rgba(43,75,109,0.16),transparent_28%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
          {secondaryEnvironments.map((environment, index) => (
            <article
              key={environment.title}
              className={`overflow-hidden border ${
                index === 0
                  ? 'border-[#37506a] bg-[linear-gradient(180deg,#152635_0%,#1c3143_100%)]'
                  : 'border-white/10 bg-white/[0.03] backdrop-blur'
              }`}
            >
              <div className="grid gap-0 md:grid-cols-[0.85fr_1.15fr]">
                <div
                  className="min-h-[240px] bg-cover bg-center"
                  style={{ backgroundImage: `url("${environment.image}")` }}
                />
                <div className="p-6">
                  <p className="text-[0.72rem] uppercase tracking-[0.28em] text-[color:var(--color-gold-bright)]">
                    Environment {environment.number}
                  </p>
                  <h3 className="mt-3 font-display text-[2rem] leading-[0.95] text-white">
                    {environment.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#d0dbe4]">
                    {environment.text}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {environment.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#3e576f] px-3 py-1.5 text-[0.78rem] text-[#d4dee7]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
