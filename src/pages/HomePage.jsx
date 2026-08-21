import { Link } from 'react-router-dom'
import { PagePlaceholder } from '../components/page/PagePlaceholder.jsx'
import { PageShell } from '../components/page/PageShell.jsx'

export function HomePage() {
  return (
    <>
      <PageShell
        eyebrow="Multidisciplinary Solutions | Saudi Arabia"
        title="One Partner. Multiple Capabilities."
        description="A refined home page shell for KHANBAS with routing, strong brand presence, and visual balance built around engineering, technology, logistics, and business services."
        accent="Balanced corporate positioning"
        backgroundImage="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1600&q=80"
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

      <PagePlaceholder
        items={[
          'Who We Are',
          'Four Business Divisions',
          'Khanbas Advantage',
          'Industries We Support',
          'Why Khanbas',
          'Cross-Division Scenarios',
        ]}
      />
    </>
  )
}
