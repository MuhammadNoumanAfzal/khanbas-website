export function PagePlaceholder({ items }) {
  return (
    <section className="px-4 pb-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2.5rem] border border-white/10 bg-[rgba(255,255,255,0.03)] p-6 shadow-[0_20px_40px_rgba(0,0,0,0.18)] backdrop-blur sm:p-8">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-[color:var(--color-mist)]">
                Layout Preview
              </p>
              <h2 className="mt-3 font-display text-3xl text-white">
                Placeholder Content Blocks
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[color:var(--color-sand)]">
              These are intentionally light placeholders so we can focus on
              structure, routing, header, footer, and overall look first.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {items.map((item) => (
              <div
                key={item}
                className="group rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-5 transition hover:-translate-y-1 hover:border-[color:var(--color-gold-soft)]/45"
              >
                <div className="mb-4 h-36 rounded-[1.4rem] bg-[linear-gradient(135deg,rgba(255,214,122,0.18),rgba(255,255,255,0.03),rgba(23,33,43,0.45))]" />
                <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--color-gold-bright)]">
                  Section
                </p>
                <h3 className="mt-3 font-display text-2xl text-white">{item}</h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--color-sand)]">
                  Ready for full content, imagery, and interactions when you want
                  to build the next phase.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
