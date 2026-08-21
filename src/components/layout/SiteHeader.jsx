import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BrandMark } from '../brand/BrandMark.jsx'
import { DesktopNav } from '../navigation/DesktopNav.jsx'
import { MobileNav } from '../navigation/MobileNav.jsx'

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-40 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[rgba(7,10,14,0.18)] px-4 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.2)] backdrop-blur-md xl:px-6">
        <div className="flex items-center justify-between gap-4">
          <BrandMark />

          <DesktopNav />

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden rounded-full border border-[color:var(--color-gold-soft)]/60 bg-[linear-gradient(135deg,rgba(244,205,112,0.95),rgba(171,124,42,0.95))] px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--color-ink)] shadow-[0_18px_35px_rgba(171,124,42,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_40px_rgba(171,124,42,0.35)] sm:inline-flex"
            >
              Talk to Our Team
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
