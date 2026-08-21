import { Link } from 'react-router-dom'

const collageImages = [
  {
    src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80',
    alt: 'Saudi construction and infrastructure scene',
    label: 'Engineering & Construction',
  },
  {
    src: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=80',
    alt: 'Heavy machinery operating on site',
    label: 'Equipment & Site Operations',
  },
  {
    src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80',
    alt: 'Professional management team in discussion',
    label: 'Management & Coordination',
  },
  {
    src: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=900&q=80',
    alt: 'Commercial trucks and logistics operations',
    label: 'Logistics & Fleet Support',
  },
]

export function WhoWeAreSection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-14">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[color:var(--color-gold-bright)]">
              Who We Are
            </p>
            <h2 className="mt-5 max-w-xl font-display text-4xl leading-[0.95] text-white sm:text-5xl">
              Built to Support More.
            </h2>
            <div className="mt-6 h-px w-24 bg-[linear-gradient(90deg,rgba(201,151,61,0.95),rgba(201,151,61,0))]" />
            <p className="mt-7 max-w-xl text-lg leading-8 text-[color:var(--color-sand)]">
              KHANBAS is a multidisciplinary Saudi company providing
              engineering, technology, logistics, and business support
              services.
            </p>
            <p className="mt-5 max-w-xl text-base leading-8 text-[color:var(--color-mist)] sm:text-lg">
              Our structure allows clients to access specialized capabilities
              across multiple requirements while working with one coordinated
              partner.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-5 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--color-gold-bright)]">
                  Core Position
                </p>
                <p className="mt-3 text-sm leading-7 text-[color:var(--color-sand)]">
                  One coordinated partner across engineering, logistics,
                  technology, and operational support.
                </p>
              </div>
              <div className="rounded-[1.8rem] border border-[color:var(--color-gold-soft)]/20 bg-[linear-gradient(145deg,rgba(201,151,61,0.12),rgba(255,255,255,0.03))] p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--color-gold-bright)]">
                  Visual Balance
                </p>
                <p className="mt-3 text-sm leading-7 text-[color:var(--color-sand)]">
                  The story stays broader than technology so the brand feels
                  diversified and credible.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Link
                to="/about"
                className="inline-flex items-center rounded-full border border-[color:var(--color-gold-soft)]/55 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[color:var(--color-gold-soft)]/12 hover:text-[color:var(--color-gold-bright)]"
              >
                Discover Khanbas
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -left-5 -top-5 h-24 w-24 rounded-full bg-[rgba(201,151,61,0.14)] blur-2xl" />
            <div className="pointer-events-none absolute -bottom-6 right-8 h-28 w-28 rounded-full bg-[rgba(34,56,79,0.24)] blur-2xl" />

            <div className="grid gap-4 sm:grid-cols-2">
              {collageImages.map((image) => (
                <article
                  key={image.label}
                  className="group relative aspect-square overflow-hidden rounded-[2rem] border border-white/10 bg-[color:var(--color-panel)] shadow-[0_22px_50px_rgba(0,0,0,0.22)]"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,14,0.04),rgba(7,10,14,0.7)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--color-gold-bright)]">
                      Supporting Visual
                    </p>
                    <h3 className="mt-2 font-display text-[1.9rem] leading-tight text-white">
                      {image.label}
                    </h3>
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
