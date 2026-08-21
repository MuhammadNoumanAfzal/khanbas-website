const advantageFlow = [
  { title: 'Engineering', action: 'Build & Maintain' },
  { title: 'Logistics', action: 'Move & Equip' },
  { title: 'Technology', action: 'Connect & Control' },
  { title: 'Business Services', action: 'Manage & Support' },
]

const markers = [
  { label: 'Site & Buildings', division: 'Engineering & Contracting', style: 'left-[8%] top-[18%]' },
  { label: 'Heavy Equipment', division: 'Logistics & Equipment', style: 'left-[22%] top-[52%]' },
  { label: 'Vehicles', division: 'Logistics & Equipment', style: 'left-[58%] top-[62%]' },
  { label: 'CCTV & Network', division: 'Technology', style: 'left-[64%] top-[22%]' },
  { label: 'Procurement', division: 'Business Services', style: 'left-[80%] top-[40%]' },
]

export function KhanbasAdvantageSection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2.75rem] border border-white/10 bg-[linear-gradient(180deg,#0b1118_0%,#111923_100%)] shadow-[0_30px_80px_rgba(0,0,0,0.28)]">
          <div className="grid gap-12 px-6 py-10 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[color:var(--color-gold-bright)]">
                The Khanbas Advantage
              </p>
              <h2 className="mt-4 font-display text-4xl leading-[0.95] text-white sm:text-5xl">
                More Capability. Less Complexity.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-[color:var(--color-sand)] sm:text-lg">
                Large projects rarely depend on one service alone. KHANBAS
                brings multiple disciplines together so clients can coordinate
                more of their requirements through one partner.
              </p>

              <div className="mt-8 space-y-4">
                {advantageFlow.map((item, index) => (
                  <div key={item.title} className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--color-gold-soft)]/25 bg-white/[0.03] text-sm font-semibold text-[color:var(--color-gold-bright)]">
                      0{index + 1}
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.28em] text-[color:var(--color-mist)]">
                        {item.title}
                      </p>
                      <p className="mt-1 font-display text-2xl text-white">
                        {item.action}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-sm uppercase tracking-[0.26em] text-[color:var(--color-gold-bright)]">
                One relationship. Multiple capabilities.
              </p>
            </div>

            <div>
              <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-black">
                <img
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80"
                  alt="Integrated commercial project environment"
                  className="h-[32rem] w-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,14,0.16),rgba(7,10,14,0.68))]" />

                {markers.map((marker) => (
                  <div key={marker.label} className={`absolute ${marker.style}`}>
                    <div className="flex items-center gap-3">
                      <span className="relative flex h-4 w-4">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--color-gold-bright)]/35" />
                        <span className="relative inline-flex h-4 w-4 rounded-full border border-white/40 bg-[color:var(--color-gold-bright)]" />
                      </span>
                      <div className="rounded-2xl border border-white/10 bg-[rgba(10,15,22,0.78)] px-4 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.24)] backdrop-blur">
                        <p className="text-[0.68rem] uppercase tracking-[0.26em] text-[color:var(--color-gold-bright)]">
                          {marker.division}
                        </p>
                        <p className="mt-1 text-sm text-white">{marker.label}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[color:var(--color-mist)]">
                Whether a requirement involves one division or several, KHANBAS
                can bring the right capabilities around the project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
