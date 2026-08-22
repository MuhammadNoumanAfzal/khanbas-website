import { Link } from 'react-router-dom'
import { PageShell } from '../components/page/PageShell.jsx'

const industryCards = [
  {
    number: '01',
    title: 'Construction & Infrastructure',
    text: 'Engineering, equipment, transport, technology, and project support aligned with active site and infrastructure requirements.',
    capabilities: ['Engineering', 'Equipment', 'Transportation', 'Technology', 'Project Support'],
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85',
  },
  {
    number: '02',
    title: 'Logistics & Transportation',
    text: 'Fleet support, transport coordination, GPS visibility, dashcams, and operational assistance for moving businesses.',
    capabilities: ['Fleet', 'Transportation Support', 'GPS', 'Dashcams', 'Operational Support'],
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=85',
  },
  {
    number: '03',
    title: 'Industrial & Manufacturing',
    text: 'Civil works, equipment support, industrial systems, smart monitoring, and operational continuity around facility needs.',
    capabilities: ['Civil Works', 'Equipment', 'Industrial Technology', 'Smart Factory', 'Maintenance', 'Operational Support'],
    image:
      'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1400&q=85',
  },
  {
    number: '04',
    title: 'Real Estate & Development',
    text: 'Construction, MEP, fit-out, smart building systems, and maintenance support for built environments and development programs.',
    capabilities: ['Construction', 'MEP', 'Fit-Out', 'Smart Buildings', 'Automation', 'Maintenance'],
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85',
  },
  {
    number: '05',
    title: 'Corporate & Enterprise',
    text: 'IT, software, AI, procurement, management support, and operational services for corporate environments and business functions.',
    capabilities: ['IT', 'AI', 'Software', 'Procurement', 'Management Support', 'Operational Services'],
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85',
  },
  {
    number: '06',
    title: 'Government & Public Sector',
    text: 'Engineering, logistics, equipment, technology, and structured support capabilities relevant to public-sector operating environments.',
    capabilities: ['Engineering', 'Technology', 'Logistics', 'Equipment', 'Operational Support'],
    image:
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=85',
  },
]

const deliveryPoints = [
  {
    title: 'Physical Operations First',
    text: 'The industry view begins with real projects, infrastructure, movement, facilities, and operating environments.',
  },
  {
    title: 'Balanced Across Divisions',
    text: 'Engineering, technology, logistics, and business support work with equal relevance depending on sector demands.',
  },
  {
    title: 'Built Around Requirements',
    text: 'Each industry can require one division or several, and KHANBAS is structured to support both approaches clearly.',
  },
]

export function IndustriesPage() {
  const featuredIndustry = industryCards[0]
  const remainingIndustries = industryCards.slice(1)

  return (
    <>
      <PageShell
        eyebrow="Industries | KHANBAS"
        title="Capabilities Across Industries."
        description="KHANBAS supports projects, operations, and business environments across multiple sectors through engineering, technology, logistics, equipment, and business support capabilities."
        accent="Sector-focused presentation"
        backgroundImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80"
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

      <section className="bg-[linear-gradient(180deg,#f4eddf_0%,#eadcc7_100%)] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-[#9d6c24]">
              Sector Perspective
            </p>
            <h2 className="mt-3 font-display text-[2.55rem] leading-[0.92] text-[#132538] sm:text-[3.15rem]">
              Industries with different needs, supported through one coordinated structure.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#556674]">
              KHANBAS is built to support a wide range of sectors without forcing
              every requirement into one service model. Some industries need site
              execution, some need technology or fleet support, and others require
              a broader combination of capabilities.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {deliveryPoints.map((point) => (
              <div
                key={point.title}
                className="border border-[#d6c29b]/60 bg-white/45 p-5 shadow-[0_16px_30px_rgba(40,31,17,0.06)]"
              >
                <p className="text-[0.72rem] uppercase tracking-[0.26em] text-[#9d6c24]">
                  Principle
                </p>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-[#163047]">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5f707d]">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#0b141d_0%,#0d1722_100%)] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,151,61,0.12),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(45,76,109,0.18),transparent_28%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="relative min-h-[380px] overflow-hidden border border-[#37506b] shadow-[0_24px_50px_rgba(0,0,0,0.18)]">
            <img
              src={featuredIndustry.image}
              alt={featuredIndustry.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,10,14,0.1),rgba(6,10,14,0.88)_100%)]" />
            <div className="relative flex h-full flex-col justify-between p-6 sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full border border-white/14 bg-black/20 px-4 py-2 text-[0.72rem] uppercase tracking-[0.24em] text-[color:var(--color-gold-bright)] backdrop-blur-sm">
                  Featured Industry
                </span>
                <span className="text-sm font-medium text-[#d9e4ec]">
                  {featuredIndustry.number}
                </span>
              </div>

              <div className="max-w-2xl">
                <p className="text-[0.72rem] uppercase tracking-[0.3em] text-[color:var(--color-gold-bright)]">
                  {featuredIndustry.title}
                </p>
                <h2 className="mt-3 font-display text-[2.5rem] leading-[0.92] text-white sm:text-[3rem]">
                  Sector support that combines site, systems, movement, and coordination.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-[#d4dfe7]">
                  {featuredIndustry.text}
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
              <p className="text-[0.72rem] uppercase tracking-[0.28em] text-[color:var(--color-gold-bright)]">
                Core Capabilities
              </p>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {featuredIndustry.capabilities.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#3f576f] bg-[rgba(255,255,255,0.03)] px-4 py-2 text-sm text-[#d4dee7]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="border border-[#38516b] bg-[linear-gradient(180deg,#152635_0%,#1a2f40_100%)] p-6 shadow-[0_20px_40px_rgba(0,0,0,0.16)]">
              <p className="text-[0.72rem] uppercase tracking-[0.28em] text-[color:var(--color-gold-bright)]">
                Why It Matters
              </p>
              <p className="mt-4 text-base leading-8 text-[#d5dfe8]">
                Industries rarely depend on one service alone. KHANBAS can align
                construction, transport, equipment, technology, and support
                functions around the actual operating environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#efe4d1_0%,#e8dbc6_100%)] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.34em] text-[#9d6c24]">
                Industry Breakdown
              </p>
              <h2 className="mt-3 font-display text-[2.55rem] leading-[0.92] text-[#132538] sm:text-[3.1rem]">
                Distinct sectors, each with a different support pattern.
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-7 text-[#5a6b79]">
              The page is structured to show range without making every industry
              look identical.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {remainingIndustries.map((industry, index) => (
              <article
                key={industry.title}
                className={`overflow-hidden border shadow-[0_18px_36px_rgba(37,30,18,0.08)] ${
                  index % 2 === 0
                    ? 'border-[#d5c29d]/60 bg-[linear-gradient(180deg,rgba(252,248,240,0.96),rgba(241,232,214,0.92))]'
                    : 'border-[#d5c29d]/60 bg-[linear-gradient(180deg,rgba(248,241,229,0.96),rgba(235,225,206,0.94))]'
                }`}
              >
                <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="min-h-[250px] bg-cover bg-center" style={{ backgroundImage: `url("${industry.image}")` }} />
                  <div className="p-6">
                    <p className="text-[0.72rem] uppercase tracking-[0.28em] text-[#9d6c24]">
                      Sector {industry.number}
                    </p>
                    <h3 className="mt-3 font-display text-[2.1rem] leading-[0.94] text-[#163047]">
                      {industry.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[#5a6b79]">
                      {industry.text}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {industry.capabilities.map((capability) => (
                        <span
                          key={capability}
                          className="rounded-full border border-[#c9b189]/65 px-3 py-1.5 text-[0.78rem] text-[#34506a]"
                        >
                          {capability}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#09121a_0%,#0d1722_100%)] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(201,151,61,0.1),transparent_22%),radial-gradient(circle_at_right_bottom,rgba(45,76,109,0.16),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-[color:var(--color-gold-bright)]">
                One Industry View
              </p>
              <h2 className="mt-3 font-display text-[2.5rem] leading-[0.92] text-white sm:text-[3rem]">
                Different sectors. One multidisciplinary business story.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#c7d4df]">
                The industry page should make the KHANBAS structure easy to
                understand. Clients should be able to see where our capabilities
                fit, how the divisions connect, and why one coordinated partner can
                support multiple requirements more effectively.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="border border-white/10 bg-white/[0.03] p-5 backdrop-blur">
                <p className="text-[0.72rem] uppercase tracking-[0.28em] text-[color:var(--color-gold-bright)]">
                  Visual Balance
                </p>
                <p className="mt-3 text-sm leading-7 text-[#d1dce5]">
                  Construction, logistics, equipment, business operations, and
                  technology all appear as part of the same company identity.
                </p>
              </div>
              <div className="border border-[#36506a] bg-[linear-gradient(180deg,#162736_0%,#1e3143_100%)] p-5">
                <p className="text-[0.72rem] uppercase tracking-[0.28em] text-[color:var(--color-gold-bright)]">
                  Client View
                </p>
                <p className="mt-3 text-sm leading-7 text-[#d1dce5]">
                  The visitor should understand quickly that KHANBAS supports more
                  than one part of a project or operation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
