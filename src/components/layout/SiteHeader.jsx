import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BrandMark } from '../brand/BrandMark.jsx'
import { DesktopNav } from '../navigation/DesktopNav.jsx'
import { MobileNav } from '../navigation/MobileNav.jsx'

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--color-gold-soft)]/15 bg-[rgba(10,14,19,0.94)] shadow-[0_16px_40px_rgba(0,0,0,0.28)] backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <BrandMark />

          <DesktopNav />

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden whitespace-nowrap rounded-full border border-[color:var(--color-gold-soft)]/60 bg-[linear-gradient(135deg,rgba(244,205,112,0.95),rgba(171,124,42,0.95))] px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--color-ink)] shadow-[0_18px_35px_rgba(171,124,42,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_40px_rgba(171,124,42,0.35)] sm:inline-flex"
            >
              Talk to our team
            </Link>

            <button
              type="button"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[color:var(--color-gold-bright)] transition hover:bg-white/10 xl:hidden"
              onClick={() => setIsOpen((open) => !open)}
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="text-lg">{isOpen ? 'x' : '+'}</span>
            </button>
          </div>
        </div>

        <MobileNav isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </header>
  )
}
