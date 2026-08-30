import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SlideBottom, SlideLeft, SlideRight } from '../../utility/animation.js'
import { PageShell } from './PageShell.jsx'

export function DivisionDetailPage({ division, otherDivisions }) {
  return (
    <>
      <PageShell
        eyebrow={division.eyebrow}
        title={division.title}
        description={division.description}
        accent={division.accent}
        backgroundImage={division.backgroundImage}
      >
        <div className="flex flex-wrap gap-4">
          <Link
            to="/divisions"
            className="rounded-full border border-[color:var(--color-gold-soft)]/60 bg-[linear-gradient(135deg,rgba(244,205,112,0.95),rgba(171,124,42,0.95))] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--color-ink)] transition hover:-translate-y-0.5"
          >
            All Divisions
          </Link>
          <Link
            to="/contact"
            className="rounded-full border border-white/12 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-[color:var(--color-gold-soft)]/55 hover:bg-white/5"
          >
            Talk to Our Team
          </Link>
        </div>
      </PageShell>

      <section className="bg-[linear-gradient(180deg,#efe5d4_0%,#e5d8c1_100%)] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <motion.p
              variants={SlideRight(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="text-xs uppercase tracking-[0.34em] text-[#9d6c24]"
            >
              Division Overview
            </motion.p>
            <motion.h2
              variants={SlideRight(0.4)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-3 font-display text-[2.5rem] leading-[0.94] text-[#132538] sm:text-[3.1rem]"
            >
              Specialized capability with a broader KHANBAS connection.
            </motion.h2>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-5 max-w-2xl text-base leading-8 text-[#566675]"
            >
              {division.intro}
            </motion.p>
            <motion.div
              variants={SlideLeft(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-6 grid gap-3 sm:grid-cols-3"
            >
              {division.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="border border-[#d3c09d]/65 bg-white/45 p-4 shadow-[0_16px_28px_rgba(39,30,17,0.08)]"
                >
                  <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#9d6c24]">
                    {metric.label}
                  </p>
                  <p className="mt-3 font-display text-[1.8rem] leading-none text-[#173047]">
                    {metric.value}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={SlideBottom(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative min-h-[360px] overflow-hidden border border-[#d1bc95]/70 shadow-[0_22px_45px_rgba(38,30,18,0.12)]"
          >
            <img
              src={division.image}
              alt={division.label}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,13,18,0.12),rgba(9,13,18,0.85)_100%)]" />
            <div className="relative flex h-full flex-col justify-between p-6 sm:p-7">
              <span className="w-fit rounded-full border border-white/12 bg-black/20 px-4 py-2 text-[0.72rem] uppercase tracking-[0.28em] text-[color:var(--color-gold-bright)] backdrop-blur-sm">
                Division {division.number}
              </span>
              <div className="max-w-xl">
                <p className="text-[0.72rem] uppercase tracking-[0.28em] text-[color:var(--color-gold-bright)]">
                  {division.shortLabel}
                </p>
                <h3 className="mt-3 font-display text-[2.3rem] leading-[0.95] text-white sm:text-[2.8rem]">
                  {division.summary}
                </h3>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#09121a_0%,#0d1721_100%)] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,151,61,0.1),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(37,65,92,0.18),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <motion.p
              variants={SlideRight(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="text-xs uppercase tracking-[0.34em] text-[color:var(--color-gold-bright)]"
            >
              Core Services
            </motion.p>
            <motion.h2
              variants={SlideRight(0.4)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-3 font-display text-[2.45rem] leading-[0.94] text-white sm:text-[3rem]"
            >
              Service areas designed for practical execution.
            </motion.h2>
            <motion.div
              variants={SlideLeft(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-6 grid gap-4"
            >
              {division.services.map((service, index) => (
                <div
                  key={service}
                  className="border border-white/10 bg-white/[0.03] px-5 py-4 backdrop-blur-sm"
                >
                  <div className="flex gap-4">
                    <span className="pt-1 text-xs font-bold text-[color:var(--color-gold-bright)]">
                      0{index + 1}
                    </span>
                    <p className="text-sm leading-7 text-[#d1dce6]">{service}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="grid gap-4">
            <motion.div
              variants={SlideLeft(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="border border-[#36506a] bg-[linear-gradient(180deg,#152636_0%,#1c3041_100%)] p-6 shadow-[0_20px_40px_rgba(0,0,0,0.18)]"
            >
              <p className="text-[0.72rem] uppercase tracking-[0.28em] text-[color:var(--color-gold-bright)]">
                Why Clients Choose This Division
              </p>
              <div className="mt-5 grid gap-3">
                {division.strengths.map((strength) => (
                  <div key={strength} className="border-l border-[color:var(--color-gold-soft)]/65 pl-4">
                    <p className="text-sm leading-7 text-[#d7e2ea]">{strength}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={SlideBottom(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
            >
              <p className="text-[0.72rem] uppercase tracking-[0.28em] text-[color:var(--color-gold-bright)]">
                Typical Sectors
              </p>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {division.sectors.map((sector) => (
                  <span
                    key={sector}
                    className="rounded-full border border-[#3b5670] bg-[rgba(255,255,255,0.03)] px-4 py-2 text-sm text-[#d2dde6]"
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#f3ebdd_0%,#ebddc9_100%)] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-3xl">
              <motion.p
                variants={SlideRight(0.2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="text-xs uppercase tracking-[0.34em] text-[#9d6c24]"
              >
                Delivery Flow
              </motion.p>
              <motion.h2
                variants={SlideRight(0.4)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="mt-3 font-display text-[2.5rem] leading-[0.94] text-[#132538] sm:text-[3rem]"
              >
                A clear process from requirement to ongoing support.
              </motion.h2>
            </div>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="max-w-lg text-sm leading-7 text-[#5c6d7a]"
            >
              Each division keeps its own specialty while still fitting into the broader
              KHANBAS operating model.
            </motion.p>
          </div>

          <motion.div
            variants={SlideBottom(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-4 md:grid-cols-2 xl:grid-cols-4"
          >
            {division.process.map((step, index) => (
              <article
                key={step}
                className="border border-[#d3c09d]/65 bg-white/55 p-5 shadow-[0_16px_30px_rgba(37,30,17,0.08)]"
              >
                <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[#9d6c24]">
                  Step 0{index + 1}
                </p>
                <p className="mt-4 font-display text-[1.7rem] leading-[1] text-[#183047]">
                  {step}
                </p>
              </article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#0a121a_0%,#0d1722_100%)] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(201,151,61,0.1),transparent_24%),radial-gradient(circle_at_left_bottom,rgba(42,74,108,0.16),transparent_28%)]" />
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
                Explore More
              </motion.p>
              <motion.h2
                variants={SlideRight(0.4)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="mt-3 font-display text-[2.45rem] leading-[0.94] text-white sm:text-[3rem]"
              >
                Other KHANBAS divisions.
              </motion.h2>
            </div>
          </div>

          <motion.div
            variants={SlideLeft(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-4 md:grid-cols-3"
          >
            {otherDivisions.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="group overflow-hidden border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm transition hover:-translate-y-1 hover:border-[color:var(--color-gold-soft)]/45"
              >
                <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[color:var(--color-gold-bright)]">
                  Division {item.number}
                </p>
                <h3 className="mt-3 font-display text-[1.9rem] leading-[0.95] text-white transition group-hover:text-[color:var(--color-gold-bright)]">
                  {item.label}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#cfdae4]">{item.summary}</p>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
