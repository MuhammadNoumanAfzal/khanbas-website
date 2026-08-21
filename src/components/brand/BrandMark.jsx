import { Link } from 'react-router-dom'

export function BrandMark() {
  return (
    <Link
      to="/"
      className="group inline-flex items-center gap-3 text-left"
      aria-label="KHANBAS home"
    >
      <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-[1.4rem] border border-[color:var(--color-gold-soft)] bg-[radial-gradient(circle_at_30%_20%,rgba(252,227,160,0.92),rgba(170,123,37,0.98)_50%,rgba(43,33,20,1)_100%)] shadow-[0_18px_35px_rgba(0,0,0,0.35)]">
        <span className="absolute inset-[4px] rounded-[1.1rem] border border-[rgba(255,230,163,0.5)]" />
        <span className="font-display text-2xl leading-none text-[color:var(--color-ink)]">
          K
        </span>
      </span>
      <span className="flex flex-col">
        <span className="font-display text-[1.6rem] leading-none tracking-[0.24em] text-white transition-colors duration-300 group-hover:text-[color:var(--color-gold-bright)]">
          KHANBAS
        </span>
        <span className="text-[0.65rem] uppercase tracking-[0.34em] text-[color:var(--color-mist)]">
          One Partner. Multiple Capabilities.
        </span>
      </span>
    </Link>
  )
}
