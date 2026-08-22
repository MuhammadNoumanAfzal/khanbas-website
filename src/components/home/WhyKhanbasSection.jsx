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
    <section className="bg-[linear-gradient(180deg,#f4eddf_0%,#ede4d5_100%)] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">
          <div className="rounded-[2rem] border border-black/8 bg-[rgba(255,255,255,0.48)] p-5 shadow-[0_18px_40px_rgba(47,34,18,0.08)] backdrop-blur sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#a87124]">
              Why Khanbas
            </p>
            <h2 className="mt-3 font-display text-[2.5rem] leading-[0.94] text-[#18120d] sm:text-[3rem]">
              One Relationship. Broader Capability.
            </h2>

            <div className="mt-5 grid gap-3">
              {reasons.map((reason) => (
                <div
                  key={reason.title}
                  className="rounded-[1.25rem] border border-[#35506c]/55 bg-[linear-gradient(180deg,#1a2c3d_0%,#203447_100%)] p-4 shadow-[0_18px_34px_rgba(12,26,40,0.22)]"
                >
                  <p className="text-[0.72rem] uppercase tracking-[0.28em] text-[#d29a43]">
                    {reason.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#f3f7fb]">
                    {reason.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#a87124]">
                  Cross-Division Scenarios
                </p>
                <h3 className="mt-3 font-display text-[2.45rem] leading-[0.94] text-[#18120d] sm:text-[3rem]">
                  How KHANBAS Comes Together
                </h3>
              </div>
              <div className="hidden h-px flex-1 bg-[linear-gradient(90deg,rgba(201,151,61,0.45),transparent)] lg:block" />
            </div>

            <div className="mt-5 space-y-3">
              {scenarios.map((scenario, index) => (
                <article
                  key={scenario.title}
                  className="overflow-hidden rounded-[1.7rem] border border-[#35506c]/50 bg-[linear-gradient(180deg,#1b2e40_0%,#22384c_100%)] shadow-[0_20px_38px_rgba(12,26,40,0.18)]"
                >
                  <div className="grid gap-4 p-4 sm:p-5 lg:grid-cols-[auto_1fr] lg:items-start">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#5b7390]/70 bg-[rgba(255,255,255,0.04)] text-sm font-semibold text-[#d4a04a]">
                      0{index + 1}
                    </div>
                    <div>
                      <h4 className="font-display text-[1.95rem] leading-none text-[#f4f7fb]">
                        {scenario.title}
                      </h4>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {scenario.lines.map((line) => (
                          <span
                            key={line}
                            className="rounded-full border border-[#4d6886]/60 bg-[rgba(255,255,255,0.05)] px-3 py-1.5 text-[0.78rem] text-[#e7eef5]"
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
