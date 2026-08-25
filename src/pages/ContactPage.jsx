import { Link } from 'react-router-dom'
import { PageShell } from '../components/page/PageShell.jsx'
import { motion } from 'framer-motion'
import { SlideLeft, SlideRight ,SlideUp ,SlideBottom } from '../utility/animation.js'

const contactDetails = [
  {
    label: 'Email',
    value: 'contact@khanbas.com',
    href: 'mailto:contact@khanbas.com',
  },
  {
    label: 'Phone',
    value: '+966 XX XXX XXXX',
    href: 'tel:+966XXXXXXXXX',
  },
  {
    label: 'Address',
    value: 'Riyadh, Saudi Arabia',
  },
]

const inquiryTypes = [
  'Engineering & Contracting',
  'Technology & Smart Systems',
  'Logistics & Fleet Support',
  'Business Support Services',
]

export function ContactPage() {
  return (
    <>
      <PageShell
        eyebrow="Contact | KHANBAS"
        title="A Clearer Way to Reach KHANBAS."
        description="Whether you are planning a project, requesting operational support, or exploring a service requirement, our team is ready to guide you toward the right next step."
        accent="Client inquiry experience"
        backgroundImage="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80"
      >
        <motion.div
              variants={SlideRight(0.3)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
        className="flex flex-wrap gap-4">
          <a
            href="mailto:contact@khanbas.com"
            className="rounded-full border border-[color:var(--color-gold-soft)]/60 bg-[linear-gradient(135deg,rgba(244,205,112,0.95),rgba(171,124,42,0.95))] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--color-ink)] transition hover:-translate-y-0.5"
          >
            Email KHANBAS
          </a>
          <Link
            to="/projects"
            className="rounded-full border border-white/12 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-[color:var(--color-gold-soft)]/55 hover:bg-white/5"
          >
            View Our Work
          </Link>
        </motion.div>
      </PageShell>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#0a121a_0%,#0d1823_54%,#0a131c_100%)] px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,151,61,0.12),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(42,74,108,0.2),transparent_28%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="max-w-xl">
            <motion.p
             variants={SlideRight(0.3)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            className="text-xs uppercase tracking-[0.34em] text-[color:var(--color-gold-bright)]">
              Contact Details
            </motion.p>


            <motion.h2 
             variants={SlideRight(0.4)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            className="mt-3 font-display text-[2.8rem] leading-[0.92] text-white sm:text-[3.2rem]">
              Let&apos;s discuss your requirement properly.
            </motion.h2>


            <motion.p
             variants={SlideRight(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            className="mt-5 text-base leading-8 text-[#c5d1dc]">
              Use the form for project inquiries, service requests, or early
              coordination. If you prefer a direct route, our main contact
              details are listed here for immediate access.
            </motion.p>

            <motion.div
            
             variants={SlideLeft(0.3)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            
            className="mt-8 space-y-6">
              {contactDetails.map((item) => (
                <div
                  key={item.label}
                  className="border-b border-white/10 pb-5 last:border-b-0"
                >
                  <p className="text-[0.72rem] uppercase tracking-[0.28em] text-[color:var(--color-gold-bright)]">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-2 inline-block cursor-pointer text-[1.15rem] font-semibold text-white transition hover:text-[color:var(--color-gold-bright)]"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-2 text-[1.15rem] font-semibold text-white">
                      {item.value}
                    </p>
                  )}
                </div>
              ))}
            </motion.div>




            <motion.div 
             variants={SlideRight(0.3)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            className="mt-10">
              <p className="text-[0.72rem] uppercase tracking-[0.28em] text-[color:var(--color-gold-bright)]">
                Areas of Support
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {inquiryTypes.map((item) => (
                  <span
                    key={item}
                    className="cursor-default rounded-full border border-[#3f556e] bg-white/[0.03] px-4 py-2 text-sm text-[#d5dfe8] transition hover:border-[color:var(--color-gold-soft)]/60 hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>


          <div className="relative">
            <div className="absolute -left-6 top-8 hidden h-28 w-28 rounded-full bg-[rgba(201,151,61,0.14)] blur-3xl lg:block" />
            <div className="absolute -right-4 bottom-10 hidden h-32 w-32 rounded-full bg-[rgba(28,52,78,0.2)] blur-3xl lg:block" />

            <div className="relative overflow-hidden border border-[#31465d] bg-[linear-gradient(145deg,rgba(248,244,236,0.98)_0%,rgba(238,228,210,0.94)_55%,rgba(230,218,198,0.92)_100%)] shadow-[0_30px_70px_rgba(4,10,18,0.32)] backdrop-blur">
              <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(201,151,61,0.85),transparent)]" />
              <div className="absolute right-0 top-0 h-40 w-40 bg-[radial-gradient(circle,rgba(201,151,61,0.16),transparent_65%)]" />

              <div className="grid gap-8 px-5 py-6 sm:px-7 sm:py-8 lg:grid-cols-[0.34fr_1fr] lg:px-8">
                <motion.div
                 variants={SlideRight(0.3)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="border-b border-[#ccb48d]/60 pb-6 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-6">
                  <p className="text-[0.72rem] uppercase tracking-[0.32em] text-[#9c6c26]">
                    Inquiry Form
                  </p>
                  <h2 className="mt-3 font-display text-[2.3rem] leading-[0.94] text-[#142537] sm:text-[2.7rem]">
                    Tell us what matters.
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[#586a79]">
                    Share the essentials and we will guide your inquiry to the
                    right team with clear next steps.
                  </p>

                  <motion.div
                   variants={SlideLeft(0.3)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                  className="mt-6 space-y-3">
                    <motion.div
                     variants={SlideRight(0.3)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                    className="border-b border-[#d7c3a2]/70 pb-3">
                      <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#9c6c26]">
                        Response
                      </p>
                      <p className="mt-1 text-sm font-medium text-[#193147]">
                        Business-day follow-up
                      </p>
                    </motion.div>


                    <motion.div
                     variants={SlideRight(0.4)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                    className="border-b border-[#d7c3a2]/70 pb-3">
                      <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#9c6c26]">
                        Best For
                      </p>
                      <p className="mt-1 text-sm font-medium text-[#193147]">
                        Projects, service requests, and early coordination
                      </p>
                    </motion.div>


                    <motion.div
                     variants={SlideRight(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                    >
                      <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#9c6c26]">
                        Approach
                      </p>
                      <p className="mt-1 text-sm font-medium text-[#193147]">
                        Structured, discreet, and professional
                      </p>
                    </motion.div>
                  </motion.div>
                </motion.div>




                <motion.div>




                  <motion.div
                   variants={SlideRight(0.2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                  
                  className="mb-8 flex flex-wrap items-end justify-between gap-4">
                    <div>
                      <p className="text-[0.72rem] uppercase tracking-[0.28em] text-[#9c6c26]">
                        Contact Request
                      </p>
                      <h3 className="mt-2 font-display text-[2rem] leading-[0.96] text-[#142537] sm:text-[2.35rem]">
                        A refined form for serious inquiries.
                      </h3>
                    </div>
                    <p className="max-w-sm text-sm leading-7 text-[#5a6b79]">
                      A concise message helps our team review your request faster
                      and respond with better direction.
                    </p>
                  </motion.div>



                  <form className="grid gap-5">
                    <motion.div
                     variants={SlideLeft(0.4)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                    className="grid gap-5 md:grid-cols-2">
                      <label className="group block">
                        <span className="mb-2 block text-[0.72rem] uppercase tracking-[0.24em] text-[#8d6730]">
                          Full Name
                        </span>
                        <input
                          type="text"
                          placeholder="Your name"
                          className="w-full cursor-text border-0 border-b border-[#cfba97] bg-transparent px-0 py-3 text-base text-[#12253a] outline-none transition duration-300 placeholder:text-[#8b99a5] focus:border-[#9c6c26] group-hover:border-[#b88a48]"
                        />
                      </label>

                      <label className="group block">
                        <span className="mb-2 block text-[0.72rem] uppercase tracking-[0.24em] text-[#8d6730]">
                          Company
                        </span>
                        <input
                          type="text"
                          placeholder="Company or organization"
                          className="w-full cursor-text border-0 border-b border-[#cfba97] bg-transparent px-0 py-3 text-base text-[#12253a] outline-none transition duration-300 placeholder:text-[#8b99a5] focus:border-[#9c6c26] group-hover:border-[#b88a48]"
                        />
                      </label>
                    </motion.div>



                    <motion.div
                     variants={SlideRight(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                    className="grid gap-5 md:grid-cols-2">
                      <label className="group block">
                        <span className="mb-2 block text-[0.72rem] uppercase tracking-[0.24em] text-[#8d6730]">
                          Email
                        </span>
                        <input
                          type="email"
                          placeholder="name@company.com"
                          className="w-full cursor-text border-0 border-b border-[#cfba97] bg-transparent px-0 py-3 text-base text-[#12253a] outline-none transition duration-300 placeholder:text-[#8b99a5] focus:border-[#9c6c26] group-hover:border-[#b88a48]"
                        />
                      </label>

                      <label className="group block">
                        <span className="mb-2 block text-[0.72rem] uppercase tracking-[0.24em] text-[#8d6730]">
                          Phone
                        </span>
                        <input
                          type="tel"
                          placeholder="+966"
                          className="w-full cursor-text border-0 border-b border-[#cfba97] bg-transparent px-0 py-3 text-base text-[#12253a] outline-none transition duration-300 placeholder:text-[#8b99a5] focus:border-[#9c6c26] group-hover:border-[#b88a48]"
                        />
                      </label>
                    </motion.div>

                    <motion.label
                     variants={SlideRight(0.6)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                    className="group block">
                      <span className="mb-2 block text-[0.72rem] uppercase tracking-[0.24em] text-[#8d6730]">
                        Service Type
                      </span>
                      <select className="w-full cursor-pointer border-0 border-b border-[#cfba97] bg-transparent px-0 py-3 text-base text-[#12253a] outline-none transition duration-300 focus:border-[#9c6c26] group-hover:border-[#b88a48]">
                        <option>Choose an inquiry type</option>
                        {inquiryTypes.map((item) => (
                          <option key={item}>{item}</option>
                        ))}
                      </select>
                    </motion.label>

                    <motion.label
                            variants={SlideLeft(0.6)}
                                           initial="hidden"
                                           whileInView="visible"
                                           viewport={{ once: true, amount: 0.2 }}
                    className="group block">
                      <span className="mb-2 block text-[0.72rem] uppercase tracking-[0.24em] text-[#8d6730]">
                        Project or Inquiry
                      </span>
                      <textarea
                        rows="6"
                        placeholder="Please share your requirement, project stage, location, and the type of support you are looking for."
                        className="w-full resize-none cursor-text border border-[#d6c09b] bg-[rgba(255,255,255,0.38)] px-4 py-4 text-base leading-7 text-[#12253a] outline-none transition duration-300 placeholder:text-[#8b99a5] focus:border-[#9c6c26] focus:bg-[rgba(255,255,255,0.56)] group-hover:border-[#b88a48]"
                      />
                    </motion.label>

                    <motion.div
                     variants={SlideRight(0.3)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                    className="flex flex-wrap items-center justify-between gap-4 pt-2">
                      <p className="max-w-md text-sm leading-7 text-[#5a6b79]">
                        Suitable for new project discussions, service requests,
                        and early coordination across KHANBAS divisions.
                      </p>
                      <button
                        type="submit"
                        className="group inline-flex cursor-pointer items-center gap-3 rounded-full border border-[#c9973d]/70 bg-[linear-gradient(135deg,rgba(244,205,112,0.96),rgba(171,124,42,0.96))] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--color-ink)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_30px_rgba(171,124,42,0.22)]"
                      >
                        Submit Inquiry
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          +
                        </span>
                      </button>
                    </motion.div>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
