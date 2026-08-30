import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PageShell } from '../components/page/PageShell.jsx'
import { divisions } from '../data/divisions.js'
import { SlideBottom, SlideLeft, SlideRight } from '../utility/animation.js'

const heroSlides = [
  {
    eyebrow: 'Business Divisions | KHANBAS',
    title: 'Four Specialized Divisions. One KHANBAS.',
    description:
      'Explore the four business divisions that shape the KHANBAS model across engineering, technology, logistics, and business support.',
    accent: 'Balanced multidisciplinary structure',
    backgroundImage:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=85',
  },
  {
    eyebrow: 'Coordinated Delivery | KHANBAS',
    title: 'Separate expertise with one shared standard.',
    description:
      'Each division stays specialized while fitting into a broader delivery model for projects and operations that need more than one capability.',
    accent: 'Integrated client experience',
    backgroundImage:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85',
  },
]

const principles = [
  {
    title: 'Focused by Capability',
    text: 'Every division has a clear service logic, so visitors can quickly identify the best-fit capability.',
  },
  {
    title: 'Balanced as a Brand',
    text: 'The KHANBAS story stays broader than any single service area, with equal visual weight across the structure.',
  },
  {
    title: 'Connected for Delivery',
    text: 'When requirements cross disciplines, multiple divisions can support one project or one operating need with clarity.',
  },
]

export function DivisionsPage() {
  return (
    <>
      <PageShell slides={heroSlides}>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/contact"
            className="rounded-full border border-[color:var(--color-gold-soft)]/60 bg-[linear-gradient(135deg,rgba(244,205,112,0.95),rgba(171,124,42,0.95))] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--color-ink)] transition hover:-translate-y-0.5"
          >
            Talk to Our Team
          </Link>
          <Link
            to="/projects"
            className="rounded-full border border-white/12 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-[color:var(--color-gold-soft)]/55 hover:bg-white/5"
          >
            View Projects
          </Link>
        </div>
      </PageShell>

      <section className="bg-[linear-gradient(180deg,#f3ebdd_0%,#e9dcc8_100%)] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
          <div>
            <motion.p
              variants={SlideRight(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="text-xs uppercase tracking-[0.34em] text-[#9d6c24]"
            >
              Division Structure
            </motion.p>
            <motion.h2
              variants={SlideRight(0.4)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-3 font-display text-[2.6rem] leading-[0.94] text-[#132538] sm:text-[3.2rem]"
            >
              Specialized capabilities arranged around real client needs.
            </motion.h2>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-5 max-w-2xl text-base leading-8 text-[#576775]"
            >
              KHANBAS is structured so visitors can understand both parts of the story:
              dedicated expertise inside each division and coordinated support when a
              project or operation needs more than one capability.
            </motion.p>
          </div>

          <motion.div
            variants={SlideBottom(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-4 sm:grid-cols-3"
          >
            {principles.map((item) => (
              <article
                key={item.title}
                className="border border-[#d3c09d]/65 bg-white/45 p-5 shadow-[0_16px_28px_rgba(40,31,17,0.08)]"
              >
                <p className="text-[0.72rem] uppercase tracking-[0.26em] text-[#9d6c24]">
                  Principle
                </p>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-[#173047]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5d6e7b]">{item.text}</p>
              </article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#0b141d_0%,#0d1722_100%)] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,151,61,0.12),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(45,76,109,0.18),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-3xl">
              <motion.p
                variants={SlideRight(0.2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="text-xs uppercase tracking-[0.34em] text-[color:var(--color-gold-bright)]"
              >
                All Divisions
              </motion.p>
              <motion.h2
                variants={SlideRight(0.4)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="mt-3 font-display text-[2.6rem] leading-[0.94] text-white sm:text-[3.2rem]"
              >
                Explore each division in detail.
              </motion.h2>
            </div>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="max-w-lg text-sm leading-7 text-[#c7d3dd]"
            >
              Every division now has its own dedicated page while keeping the same
              KHANBAS visual system and navigation flow.
            </motion.p>
          </div>

          <motion.div
            variants={SlideLeft(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-4 lg:grid-cols-2"
          >
            {divisions.map((division) => (
              <article
                key={division.to}
                className="group relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[rgba(255,255,255,0.03)] shadow-[0_20px_42px_rgba(0,0,0,0.18)]"
              >
                <div className="grid md:grid-cols-[1.02fr_0.98fr] md:items-stretch">
                  <Link to={division.to} className="relative min-h-[12rem] overflow-hidden md:h-full">
                    <img
                      src={division.image}
                      alt={division.label}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(8,12,18,0.82)_100%)]" />
                    <div className="absolute left-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-black/25 text-xs font-semibold text-[color:var(--color-gold-bright)] backdrop-blur">
                      {division.number}
                    </div>
                  </Link>

                  <div className="flex h-full flex-col p-5">
                    <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-gold-bright)]">
                      {division.shortLabel}
                    </p>
                    <Link
                      to={division.to}
                      className="mt-2 font-display text-[1.7rem] leading-tight text-white transition hover:text-[color:var(--color-gold-bright)]"
                    >
                      {division.label}
                    </Link>
                    <p className="mt-3 text-sm leading-7 text-[color:var(--color-sand)]">
                      {division.summary}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {division.sectors.map((sector) => (
                        <span
                          key={sector}
                          className="rounded-full border border-white/10 px-3 py-1.5 text-[0.66rem] uppercase tracking-[0.16em] text-[color:var(--color-mist)]"
                        >
                          {sector}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={division.to}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:text-[color:var(--color-gold-bright)] md:mt-auto"
                    >
                      Explore Division
                      <span aria-hidden="true">+</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
