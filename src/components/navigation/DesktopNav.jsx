import { NavLink } from 'react-router-dom'
import { divisionsEnabled, divisionLinks, primaryNavLinks } from '../../data/navigation.js'

const baseLinkClass =
  'rounded-full px-4 py-2 text-sm font-medium tracking-[0.18em] uppercase transition duration-300'

function getNavLinkClass({ isActive }) {
  return `${baseLinkClass} ${
    isActive
      ? 'bg-[color:var(--color-gold-soft)]/18 text-[color:var(--color-gold-bright)]'
      : 'text-white hover:bg-white/8 hover:text-[color:var(--color-gold-bright)]'
  }`
}

export function DesktopNav() {
  return (
    <nav className="hidden items-center gap-2 xl:flex">
      {primaryNavLinks.slice(0, 2).map((link) => (
        <NavLink key={link.to} to={link.to} className={getNavLinkClass} end={link.to === '/'}>
          {link.label}
        </NavLink>
      ))}

      <div className="group relative">
        <button
          type="button"
          className={`${baseLinkClass} ${
            divisionsEnabled
              ? 'flex items-center gap-2 text-white hover:bg-white/8 hover:text-[color:var(--color-gold-bright)]'
              : 'flex cursor-not-allowed items-center gap-2 text-white/60'
          }`}
          disabled={!divisionsEnabled}
          aria-disabled={!divisionsEnabled}
        >
          Divisions
          <span className="text-xs">+</span>
        </button>
        {divisionsEnabled ? (
          <div className="pointer-events-none absolute left-0 top-full z-30 mt-4 w-80 translate-y-2 rounded-[1.75rem] border border-white/10 bg-[color:var(--color-panel-strong)] p-3 opacity-0 shadow-[0_30px_60px_rgba(0,0,0,0.35)] backdrop-blur transition duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
            {divisionLinks.map((division) => (
              <NavLink
                key={division.to}
                to={division.to}
                className={({ isActive }) =>
                  `block rounded-2xl px-4 py-3 text-sm transition ${
                    isActive
                      ? 'bg-[color:var(--color-gold-soft)]/14 text-[color:var(--color-gold-bright)]'
                      : 'text-[color:var(--color-sand)] hover:bg-white/5 hover:text-white'
                  }`
                }
              >
                {division.label}
              </NavLink>
            ))}
          </div>
        ) : null}
      </div>

      {primaryNavLinks.slice(2).map((link) => (
        <NavLink key={link.to} to={link.to} className={getNavLinkClass}>
          {link.label}
        </NavLink>
      ))}
    </nav>
  )
}
