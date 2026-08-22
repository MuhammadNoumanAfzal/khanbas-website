import { NavLink } from 'react-router-dom'
import { divisionsEnabled, divisionLinks, primaryNavLinks } from '../../data/navigation.js'

export function MobileNav({ isOpen, onClose }) {
  if (!isOpen) {
    return null
  }

  return (
    <div className="xl:hidden">
      <div className="mt-4 rounded-[2rem] border border-white/10 bg-[color:var(--color-panel-strong)] p-5 shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur">
        <nav className="flex flex-col gap-2">
          {primaryNavLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={onClose}
              className={({ isActive }) =>
                `rounded-2xl px-4 py-3 text-sm uppercase tracking-[0.18em] transition ${
                  isActive
                    ? 'bg-[color:var(--color-gold-soft)]/15 text-[color:var(--color-gold-bright)]'
                    : 'text-[color:var(--color-sand)] hover:bg-white/5 hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="mt-5 border-t border-white/10 pt-5">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[color:var(--color-mist)]">
            Divisions
          </p>
          <div className="grid gap-2">
            {divisionLinks.map((division) =>
              divisionsEnabled ? (
                <NavLink
                  key={division.to}
                  to={division.to}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `rounded-2xl px-4 py-3 text-sm transition ${
                      isActive
                        ? 'bg-[color:var(--color-gold-soft)]/15 text-[color:var(--color-gold-bright)]'
                        : 'bg-white/[0.02] text-[color:var(--color-sand)] hover:bg-white/5 hover:text-white'
                    }`
                  }
                >
                  {division.label}
                </NavLink>
              ) : (
                <span
                  key={division.to}
                  className="cursor-not-allowed rounded-2xl bg-white/[0.02] px-4 py-3 text-sm text-white/38"
                >
                  {division.label}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
