import { Link } from 'react-router-dom'
import { BusinessDivisionsSection } from '../components/home/BusinessDivisionsSection.jsx'
import { IndustriesSection } from '../components/home/IndustriesSection.jsx'
import { KhanbasAdvantageSection } from '../components/home/KhanbasAdvantageSection.jsx'
import { WhoWeAreSection } from '../components/home/WhoWeAreSection.jsx'
import { WhyKhanbasSection } from '../components/home/WhyKhanbasSection.jsx'
import { PageShell } from '../components/page/PageShell.jsx'

const heroSlides = [
  {
    eyebrow: 'Multidisciplinary Solutions | Saudi Arabia',
    title: 'One Partner for Integrated Project Delivery.',
    description:
      'KHANBAS connects engineering, technology, logistics, and business support into one reliable structure for projects that demand speed, clarity, and disciplined execution.',
    accent: 'Integrated corporate capability',
    backgroundImage: '/hero1.jpeg',
  },
  {
    eyebrow: 'Operational Support | Saudi Arabia',
    title: 'Built to Support Sites, Systems, and Operations.',
    description:
      'From infrastructure and fleet support to smart systems and procurement, KHANBAS helps organizations move from planning to delivery with confidence and control.',
    accent: 'Practical end-to-end support',
    backgroundImage: '/hero2.jpeg',
  },
  {
    eyebrow: 'Cross-Division Capability | Saudi Arabia',
    title: 'Structured Solutions for Complex Business Needs.',
    description:
      'Our divisions work together to deliver coordinated services across construction, technology, transport, and operations with a consistent standard of quality.',
    accent: 'Coordinated multi-division execution',
    backgroundImage: '/hero3.jpeg',
  },
]

export function HomePage() {
  return (
    <>
      <PageShell
        slides={heroSlides}
      >
        <div className="flex flex-wrap gap-4">
          <Link
            to="/divisions"
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

      <WhoWeAreSection />
      <BusinessDivisionsSection />
      <KhanbasAdvantageSection />
      <IndustriesSection />
      <WhyKhanbasSection />
    </>
  )
}
