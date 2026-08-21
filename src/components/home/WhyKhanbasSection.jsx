const reasons = [
  {
    title: 'Multidisciplinary',
    text: 'Access engineering, technology, logistics, and business capabilities through one organization.',
  },
  {
    title: 'Flexible',
    text: 'Engage one division independently or combine capabilities around a larger requirement.',
  },
  {
    title: 'Coordinated',
    text: 'Reduce complexity by bringing related project requirements together.',
  },
  {
    title: 'Business-Focused',
    text: 'Solutions are structured around what the operation or project actually needs.',
  },
]

const scenarios = [
  {
    title: 'Construction Project',
    lines: ['Civil + MEP', 'Machinery + Transportation', 'CCTV + Networks', 'Procurement + Project Support'],
  },
  {
    title: 'Logistics Company',
    lines: ['Vehicles + Fleet Support', 'GPS + Dashcams + Fleet Platform', 'Operational Support'],
  },
  {
    title: 'Industrial Facility',
    lines: ['Civil + Facility Works', 'Machinery + Material Movement', 'Smart Factory + IoT + CCTV', 'Procurement + Operational Support'],
  },
]

export function WhyKhanbasSection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[2.5rem] border border-white/10 bg-[linear-gradient(165deg,rgba(201,151,61,0.12),rgba(14,20,27,0.92))] p-7 shadow-[0_24px_60px_rgba(0,0,0,0.2)] sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[color:var(--color-gold-bright)]">
              Why Khanbas
            </p>
            <h2 className="mt-4 font-display text-4xl leading-[0.95] text-white sm:text-5xl">
              One Relationship. Broader Capability.
            </h2>
            <div className="mt-8 space-y-4">
              {reasons.map((reason) => (
                <div key={reason.title} className="rounded-[1.5rem] border border-white/10 bg-black/12 p-5 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--color-gold-bright)]">
                    {reason.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[color:var(--color-sand)]">
                    {reason.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[color:var(--color-gold-bright)]">
                  Cross-Division Scenarios
                </p>
                <h3 className="mt-4 font-display text-4xl leading-[0.95] text-white sm:text-5xl">
                  How KHANBAS Comes Together
                </h3>
              </div>
              <div className="hidden h-px flex-1 bg-[linear-gradient(90deg,rgba(201,151,61,0.45),transparent)] lg:block" />
            </div>

            <div className="mt-8 space-y-4">
              {scenarios.map((scenario, index) => (
                <article
                  key={scenario.title}
                  className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.03)] transition hover:border-[color:var(--color-gold-soft)]/35 hover:bg-white/[0.045]"
                >
                  <div className="grid gap-6 p-6 sm:p-7 lg:grid-cols-[auto_1fr] lg:items-start">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[color:var(--color-gold-soft)]/20 bg-[rgba(201,151,61,0.08)] text-sm font-semibold text-[color:var(--color-gold-bright)]">
                      0{index + 1}
                    </div>
                    <div>
                      <h4 className="font-display text-3xl text-white">
                        {scenario.title}
                      </h4>
                      <div className="mt-5 flex flex-wrap gap-3">
                        {scenario.lines.map((line) => (
                          <span
                            key={line}
                            className="rounded-full border border-white/10 px-4 py-2 text-sm text-[color:var(--color-sand)]"
                          >
                            {line}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
