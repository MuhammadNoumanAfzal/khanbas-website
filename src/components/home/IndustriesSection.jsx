import { motion } from 'framer-motion'
import { SlideLeft, SlideRight } from '../../utility/animation'

const industries = [
  {
    title: 'Construction & Infrastructure',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=85',
    items: ['Engineering', 'Equipment', 'Transportation', 'Technology'],
  },
  {
    title: 'Logistics & Transportation',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=85',
    items: ['Fleet', 'GPS', 'Dashcams', 'Operational Support'],
  },
  {
    title: 'Industrial & Manufacturing',
    image:
      'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1600&q=85',
    items: ['Civil Works', 'Smart Factory', 'Maintenance', 'Equipment'],
  },
  {
    title: 'Corporate & Enterprise',
    image:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=85',
    items: ['IT', 'Software', 'Procurement', 'Management Support'],
  },
]

export function IndustriesSection() {
  return (
    <section className="bg-[#091119] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:gap-8">
        <div className="flex flex-col justify-between py-2">
          <motion.div 
          variants={SlideRight(0.2)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.2 }}

          className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[color:var(--color-gold-bright)]">
              Industries We Support
            </p>
            <h2 className="mt-3 font-display text-[2.7rem] leading-[0.92] text-white sm:text-[3.2rem]">
              Capabilities Across Industries.
            </h2>
            <p className="mt-4 max-w-lg text-[0.98rem] leading-7 text-[color:var(--color-mist)] sm:text-base">
              A tighter industry snapshot showing where KHANBAS can combine
              engineering, logistics, technology, and operational support in
              different business environments.
            </p>
          </motion.div>

          <motion.div
          variants={SlideRight(0.4)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.2 }}
          className="mt-6 max-w-xl">
            <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--color-gold-bright)]">
              Sector Range
            </p>
            <p className="mt-3 font-display text-[1.9rem] leading-tight text-white">
              Physical operations, infrastructure, transport, and corporate
              support.
            </p>
          </motion.div>
        </div>



        <motion.div
        variants={SlideLeft(0.2)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.2 }}
        
        className="grid gap-3 sm:grid-cols-2">
          {industries.map((industry, index) => (
            <article
              key={industry.title}
              className="group relative min-h-[13.5rem] overflow-hidden rounded-[1.7rem] bg-[#111a23] transition hover:-translate-y-0.5"
            >
              <img
                src={industry.image}
                alt={industry.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,14,0.06),rgba(7,10,14,0.84)_100%)]" />
              <div className="relative flex h-full flex-col justify-end p-4 sm:p-5">
                <div className="max-w-[16rem] rounded-[1.1rem] bg-[rgba(8,12,18,0.54)] p-3 backdrop-blur-sm">
                  <p className="text-[0.68rem] uppercase tracking-[0.26em] text-[color:var(--color-gold-bright)]">
                    Sector 0{index + 1}
                  </p>
                  <h3 className="mt-1.5 font-display text-[1.75rem] leading-[0.95] text-white">
                    {industry.title}
                  </h3>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {industry.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-[rgba(8,12,18,0.68)] px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.16em] text-[color:#f0dfbd] backdrop-blur"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
