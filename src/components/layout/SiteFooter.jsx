import { Link } from 'react-router-dom'
import { BrandMark } from '../brand/BrandMark.jsx'
import { divisionLinks, footerGroups, primaryNavLinks } from '../../data/navigation.js'

export function SiteFooter() {
  return (
    <footer className="relative mt-20 border-t border-white/10 bg-[color:var(--color-panel-strong)]/80 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_1.2fr]">
        <div className="space-y-5">
          <BrandMark />
          <p className="max-w-xl text-base leading-7 text-[color:var(--color-sand)]">
            Multidisciplinary solutions across engineering, technology, logistics,
            and business services.
          </p>
          <div className="flex flex-wrap gap-3">
            {primaryNavLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[color:var(--color-mist)] transition hover:border-[color:var(--color-gold-soft)]/50 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {footerGroups.map((group, index) => (
            <div key={group.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--color-gold-bright)]">
                {group.title}
              </h3>
              <ul className="space-y-3 text-sm text-[color:var(--color-sand)]">
                {group.items.map((item, itemIndex) => (
                  <li key={`${group.title}-${item}`}>
                    {index < divisionLinks.length && itemIndex === 0 ? (
                      <Link
                        to={divisionLinks[index].to}
                        className="transition hover:text-white"
                      >
                        {item}
                      </Link>
                    ) : (
                      <span>{item}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-2 border-t border-white/10 pt-6 text-sm text-[color:var(--color-mist)] sm:flex-row sm:items-center sm:justify-between">
        <p>KHANBAS | Riyadh, Saudi Arabia</p>
        <p>© KHANBAS. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
