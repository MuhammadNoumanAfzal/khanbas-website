import { Link } from 'react-router-dom'
import { PageShell } from '../components/page/PageShell.jsx'

export function NotFoundPage() {
  return (
    <PageShell
      eyebrow="Page Not Found"
      title="This route does not exist yet."
      description="The page you tried to open is not part of the current site structure. You can return to the homepage and continue from there."
      accent="404 route"
      backgroundImage="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1600&q=80"
    >
      <Link
        to="/"
        className="rounded-full border border-[color:var(--color-gold-soft)]/60 bg-[linear-gradient(135deg,rgba(244,205,112,0.95),rgba(171,124,42,0.95))] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--color-ink)] transition hover:-translate-y-0.5"
      >
        Return Home
      </Link>
    </PageShell>
  )
}
