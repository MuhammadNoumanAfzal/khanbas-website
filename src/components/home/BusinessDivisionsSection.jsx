import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "../../utility/animation";
import { divisions } from "../../data/divisions.js";

export function BusinessDivisionsSection() {
  return (
    <section className="bg-[#0c131b] px-4 pb-10 pt-4 sm:px-6 sm:pb-12 sm:pt-6 lg:px-8 lg:pb-14 lg:pt-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-5 border-t border-white/8 pt-7 sm:pt-8">
          <div className="max-w-2xl">
            <motion.p
              variants={SlideRight(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="text-xs font-semibold uppercase tracking-[0.34em] text-[color:var(--color-gold-bright)]"
            >
              Our Business Divisions
            </motion.p>

            <motion.h2
              variants={SlideRight(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-3 font-display text-[2.7rem] leading-[0.94] text-white sm:text-[3.2rem]"
            >
              Specialized Capabilities. One KHANBAS.
            </motion.h2>
          </div>

          <motion.p
            variants={SlideRight(0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-2xl text-[0.98rem] leading-7 text-[color:var(--color-mist)] sm:text-base"
          >
            Four focused divisions serving different requirements while working
            together when projects demand more. Each division carries equal
            visual weight to keep the KHANBAS story balanced.
          </motion.p>
        </div>

        <motion.div
          variants={SlideLeft(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-7 grid gap-4 lg:grid-cols-2"
        >
            {divisions.map((division, index) => (
            <article
              key={division.label}
              className="group relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[rgba(255,255,255,0.03)] shadow-[0_20px_42px_rgba(0,0,0,0.18)]"
            >
              <div className="grid md:grid-cols-[1.02fr_0.98fr] md:items-stretch">
                <Link
                  to={division.to}
                  className="relative min-h-[11.5rem] cursor-pointer overflow-hidden md:h-full"
                >
                  <img
                    src={division.image}
                    alt={division.label}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                  />

                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(8,12,18,0.78)_100%)]" />

                  <div className="absolute left-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-black/25 text-xs font-semibold text-[color:var(--color-gold-bright)] backdrop-blur">
                    0{index + 1}
                  </div>
                </Link>

                <div className="flex h-full flex-col bg-[linear-gradient(155deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] p-4.5 md:p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-gold-bright)]">
                    Division
                  </p>

                  <Link
                    to={division.to}
                    className="mt-2 inline-block min-h-[5.5rem] cursor-pointer font-display text-[1.7rem] leading-tight text-white transition hover:text-[color:var(--color-gold-bright)]"
                  >
                    {division.label}
                  </Link>

                  <p className="mt-2.5 min-h-[4.5rem] text-sm leading-6 text-[color:var(--color-sand)]">
                    {division.summary}
                  </p>

                  <div className="mt-3.5 flex min-h-[5.75rem] flex-wrap content-start gap-1.5">
                    {division.services.slice(0, 4).map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 px-2.5 py-1.5 text-[0.66rem] uppercase tracking-[0.16em] text-[color:var(--color-mist)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={division.to}
                    className="mt-4 inline-flex cursor-pointer items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:text-[color:var(--color-gold-bright)] md:mt-auto"
                  >
                    Explore Division
                    <span aria-hidden="true">+</span>
                  </Link>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,214,122,0.08),transparent_24%)]" />
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
