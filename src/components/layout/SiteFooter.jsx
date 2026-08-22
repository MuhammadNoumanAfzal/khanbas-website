import { Link } from 'react-router-dom'
import { BrandMark } from '../brand/BrandMark.jsx'
import { divisionLinks, footerGroups, primaryNavLinks } from '../../data/navigation.js'

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-[#29405a] bg-[linear-gradient(180deg,#0d1722_0%,#09121b_100%)] px-4 py-10 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,160,73,0.08),transparent_30%),radial-gradient(circle_at_top_right,rgba(60,95,132,0.18),transparent_34%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-8 xl:grid-cols-[1.05fr_1.35fr] xl:items-start">
        <div className="space-y-4 xl:pr-8">
          <div className="inline-flex rounded-[1.25rem] border border-white/8 bg-white/[0.02] px-3 py-2">
            <BrandMark />
          </div>
          <p className="max-w-md text-[0.95rem] leading-6 text-[#d7e1ea]">
            Multidisciplinary solutions across engineering, technology, logistics,
            and business services.
          </p>
          <div className="flex flex-wrap gap-2">
            {primaryNavLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="rounded-full border border-[#32485f] bg-white/[0.02] px-3.5 py-1.5 text-[0.66rem] uppercase tracking-[0.18em] text-[#f2f6fb] transition hover:border-[color:var(--color-gold-soft)]/55 hover:bg-white/[0.05]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {footerGroups.map((group, index) => (
            <div key={group.title} className="min-w-0">
              <h3 className="mb-3 text-[0.78rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--color-gold-bright)]">
                {group.title}
              </h3>
              <ul className="space-y-2 text-[0.92rem] leading-6 text-[#d7e1ea]">
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

      <div className="relative mx-auto mt-8 flex max-w-7xl flex-col gap-3 border-t border-[#24384d] pt-4 text-[0.85rem] text-[#9bb0c5] md:flex-row md:items-center md:justify-between">
        <p>KHANBAS | Riyadh, Saudi Arabia</p>
        <p>&copy; KHANBAS. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
