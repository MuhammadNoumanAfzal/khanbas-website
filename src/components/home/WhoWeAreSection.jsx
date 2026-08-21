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
    <section className="bg-[linear-gradient(180deg,#f5efe4_0%,#ede4d5_100%)] px-4 pb-6 pt-10 sm:px-6 sm:pb-8 sm:pt-12 lg:px-8 lg:pb-10 lg:pt-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-10">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[color:var(--color-gold-soft)]">
              Who We Are
            </p>
            <h2 className="mt-4 max-w-lg font-display text-[2.8rem] leading-[0.92] text-[color:var(--color-ink)] sm:text-5xl">
              Built to Support More.
            </h2>
            <div className="mt-5 h-px w-20 bg-[linear-gradient(90deg,rgba(201,151,61,0.95),rgba(201,151,61,0))]" />
            <p className="mt-6 max-w-lg text-[1.05rem] leading-8 text-[color:#564835]">
              KHANBAS is a multidisciplinary Saudi company providing
              engineering, technology, logistics, and business support
              services.
            </p>
            <p className="mt-4 max-w-lg text-[0.98rem] leading-8 text-[color:#716857] sm:text-[1.05rem]">
              Our structure allows clients to access specialized capabilities
              across multiple requirements while working with one coordinated
              partner.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[1.35rem] border border-black/8 bg-white/55 p-3.5 shadow-[0_14px_30px_rgba(47,34,18,0.08)] backdrop-blur">
                <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--color-gold-soft)]">
                  Core Position
                </p>
                <p className="mt-2 text-sm leading-7 text-[color:#625544]">
                  One coordinated partner across engineering, logistics,
                  technology, and operational support.
                </p>
              </div>
              <div className="rounded-[1.35rem] border border-[color:var(--color-gold-soft)]/18 bg-[linear-gradient(145deg,rgba(201,151,61,0.14),rgba(255,255,255,0.4))] p-3.5 shadow-[0_14px_30px_rgba(47,34,18,0.06)]">
                <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--color-gold-soft)]">
                  Visual Balance
                </p>
                <p className="mt-2 text-sm leading-7 text-[color:#625544]">
                  The story stays broader than technology so the brand feels
                  diversified and credible.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <Link
                to="/about"
                className="inline-flex items-center rounded-full border border-[color:var(--color-gold-soft)]/55 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--color-ink)] transition hover:bg-[color:var(--color-gold-soft)]/12 hover:text-[color:var(--color-gold-soft)]"
              >
                Discover Khanbas
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -left-4 -top-4 h-20 w-20 rounded-full bg-[rgba(201,151,61,0.12)] blur-2xl" />
            <div className="pointer-events-none absolute -bottom-4 right-6 h-24 w-24 rounded-full bg-[rgba(34,56,79,0.18)] blur-2xl" />

            <div className="grid gap-3 sm:grid-cols-2">
              {collageImages.map((image) => (
                <article
                  key={image.label}
                  className="group relative aspect-[1.5] overflow-hidden rounded-[1.5rem]  border-black/8 bg-[color:var(--color-panel)] shadow-[0_16px_34px_rgba(47,34,18,0.1)]"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,14,0.04),rgba(7,10,14,0.7)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-3.5">
                    <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[color:var(--color-gold-bright)]">
                      Visual
                    </p>
                    <h3 className="mt-1 max-w-[10rem] font-display text-[1.45rem] leading-[0.95] text-white sm:text-[1.55rem]">
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
