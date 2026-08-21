const industries = [
  {
    title: 'Construction & Infrastructure',
    image:
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1400&q=80',
    items: ['Engineering', 'Equipment', 'Transportation', 'Technology', 'Project Support'],
  },
  {
    title: 'Logistics & Transportation',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80',
    items: ['Fleet', 'Transportation Support', 'GPS', 'Dashcams', 'Operational Support'],
  },
  {
    title: 'Industrial & Manufacturing',
    image:
      'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1400&q=80',
    items: ['Civil Works', 'Equipment', 'Industrial Technology', 'Smart Factory', 'Maintenance'],
  },
  {
    title: 'Corporate & Enterprise',
    image:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80',
    items: ['IT', 'Software', 'Procurement', 'Management Support', 'Operational Services'],
  },
]

export function IndustriesSection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[color:var(--color-gold-bright)]">
            Industries We Support
          </p>
          <h2 className="mt-4 font-display text-4xl leading-[0.95] text-white sm:text-5xl">
            Capabilities Across Industries.
          </h2>
        </div>

        <div className="mt-10 space-y-5">
          {industries.map((industry, index) => (
            <article
              key={industry.title}
              className={`group grid overflow-hidden rounded-[2.25rem] border border-white/10 bg-[rgba(255,255,255,0.03)] shadow-[0_26px_60px_rgba(0,0,0,0.18)] lg:grid-cols-[${index % 2 === 0 ? '1.05fr_0.95fr' : '0.95fr_1.05fr'}]`}
            >
              <div className={`${index % 2 !== 0 ? 'lg:order-2' : ''} relative min-h-[19rem] overflow-hidden`}>
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,14,0.14),rgba(7,10,14,0.66))]" />
              </div>

              <div className={`${index % 2 !== 0 ? 'lg:order-1' : ''} flex flex-col justify-center p-6 sm:p-8`}>
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-gold-bright)]">
                  Sector 0{index + 1}
                </p>
                <h3 className="mt-3 font-display text-3xl leading-tight text-white sm:text-4xl">
                  {industry.title}
                </h3>
                <div className="mt-6 flex flex-wrap gap-3">
                  {industry.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-[color:var(--color-sand)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
