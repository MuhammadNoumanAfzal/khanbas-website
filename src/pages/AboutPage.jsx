// ==========================================
// Imports
// ==========================================
import { Link } from 'react-router-dom'
import { PageShell } from '../components/page/PageShell.jsx'
import { motion } from 'framer-motion'
import { SlideBottom, SlideLeft, SlideRight  ,SlideUp} from '../utility/animation.js'

// ==========================================
// Four Main Business Divisions
// ==========================================
const capabilityGroups = [
  {
    number: '01',
    title: 'Engineering & Contracting',
    text: 'Civil works, construction, MEP, infrastructure, fit-out, and maintenance capabilities built around dependable project execution.',
  },
  {
    number: '02',
    title: 'Technology & Digital',
    text: 'IT, software, CCTV, fleet technology, AI, and smart systems designed to support practical business and operational requirements.',
  },
  {
    number: '03',
    title: 'Logistics & Equipment',
    text: 'Transportation support, fleet solutions, equipment access, and logistics coordination for projects and ongoing operations.',
  },
  {
    number: '04',
    title: 'Management & Business Support',
    text: 'Project support, procurement coordination, management assistance, and operational services aligned with changing client needs.',
  },
]

// ==========================================
// KHANBAS Operating Principles
// ==========================================
const principles = [
  {
    title: 'Specialized by Division',
    text: 'Each division keeps its own focus, expertise, and service logic so clients can access the capability that fits the requirement best.',
  },
  {
    title: 'Integrated When Needed',
    text: 'When a requirement crosses disciplines, KHANBAS can align multiple services around one project, one scope, or one operating need.',
  },
  {
    title: 'Built Around the Client',
    text: 'The structure is designed to reduce complexity, improve coordination, and make broader capability easier to manage through one partner.',
  },
]

// ==========================================
// Company Highlights
// ==========================================
const highlights = [
  'Multidisciplinary Saudi company',
  'Balanced across four business divisions',
  'Designed for projects and operations',
  'One relationship with broader capability',
]

// ==========================================
// About Page
// ==========================================
export function AboutPage() {
  return (
    <>
      {/* ==========================================
          Hero / Page Header Section
          ========================================== */}
      <PageShell
        eyebrow="About KHANBAS"
        title="Built for Complex Requirements."
        description="KHANBAS is a Saudi multidisciplinary company serving organizations across engineering, technology, logistics, and business support with a more coordinated way to access specialized capability."
        accent="Corporate positioning"
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
      >
        {/* Hero CTA Buttons */}
        <motion.div
          variants={SlideRight(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-wrap gap-4"
        >
          <Link
            to="/engineering-contracting"
            className="cursor-pointer rounded-full border border-[color:var(--color-gold-soft)]/60 bg-[linear-gradient(135deg,rgba(244,205,112,0.95),rgba(171,124,42,0.95))] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--color-ink)] transition hover:-translate-y-0.5"
          >
            Explore Our Divisions
          </Link>

          <Link
            to="/contact"
            className="cursor-pointer rounded-full border border-white/12 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-[color:var(--color-gold-soft)]/55 hover:bg-white/5"
          >
            Talk to Our Team
          </Link>
        </motion.div>
      </PageShell>

      {/* ==========================================
          Who We Are Section
          ========================================== */}
      <section className="relative overflow-hidden bg-[#f3ecdf] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">

        {/* Decorative Background */}
        <div className="absolute -left-32 top-10 h-60 w-60 rounded-full bg-[#c9973d]/10 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-[#183047]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          {/* Section Heading */}
          <div className="mb-7 max-w-4xl">
            <div className="mb-3 flex items-center gap-4">
              <span className="h-px w-10 bg-[#b9863f]" />

              <motion.p
                variants={SlideRight(0.2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8b641f]"
              >
                Who We Are
              </motion.p>
            </div>

            <motion.h2
              variants={SlideRight(0.4)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="font-display text-[2.4rem] font-semibold leading-[1.05] text-[#132538] sm:text-[3rem] lg:text-[3.6rem]"
            >
              A broader business structure,
              <span className="block text-[#94651f]">
                built around real client needs.
              </span>
            </motion.h2>
          </div>

          {/* Main Content */}
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">

            {/* Company Information */}
            <div>

              <motion.div
                variants={SlideRight(0.6)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="mb-4 flex items-center gap-3"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#b9863f]/50 bg-white/70 text-xs font-bold text-[#8b641f]">
                  01
                </span>

                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#405668]">
                  The KHANBAS Approach
                </p>
              </motion.div>

              <motion.p
                variants={SlideLeft(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="max-w-xl text-base leading-7 text-[#354b5c]"
              >
                KHANBAS is a Saudi multidisciplinary company providing engineering,
                technology, logistics, and business support services. Our purpose is
                straightforward: give clients access to specialized capabilities while
                making complex requirements easier to coordinate.
              </motion.p>

              {/* Gold Divider */}
              <div className="my-5 h-px max-w-xl bg-gradient-to-r from-[#c9973d]/60 via-[#c9973d]/20 to-transparent" />

              {/* Highlights */}
              <motion.div
                            variants={SlideLeft(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              
               className="grid max-w-xl gap-x-6 gap-y-3 sm:grid-cols-2">
                {highlights.map((item, index) => (
                  <div
                    key={item}
                    className="group flex cursor-pointer items-start gap-3 border-b border-[#cdbb9b]/50 pb-3"
                  >
                    <span className="pt-1 text-xs font-bold text-[#a47429]">
                      0{index + 1}
                    </span>

                    <p className="text-sm font-semibold leading-5 text-[#263d50] transition group-hover:text-[#8b641f]">
                      {item}
                    </p>
                  </div>
                ))}
              </motion.div>

              {/* Premium Quote */}
              <motion.div
              variants={SlideRight(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              className="relative mt-6 max-w-xl border border-[#cbb991] bg-white/60 p-4 shadow-md backdrop-blur-sm">

                <div className="absolute left-0 top-0 h-full w-1 bg-[#b9863f]" />

                <p className="font-display text-lg font-medium leading-7 text-[#183047] sm:text-xl">
                  Specialized capabilities, coordinated through one trusted partner.
                </p>

                <div className="mt-3 flex items-center gap-3">
                  <span className="h-px w-7 bg-[#b9863f]" />

                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8b641f]">
                    KHANBAS
                  </span>
                </div>
              </motion.div>

            </div>

            {/* Image Area */}
            <motion.div
                    variants={SlideLeft(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            className="relative min-h-[370px]">

              {/* Main Image */}
              <div className="absolute right-0 top-0 h-[300px] w-[82%] overflow-hidden shadow-2xl">

                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85"
                  alt="KHANBAS engineering"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1723]/85 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e0bc70]">
                    Built Around Capability
                  </p>

                  <p className="mt-1 font-display text-xl font-medium text-white">
                    Engineering & Operations
                  </p>
                </div>
              </div>

              {/* Top Image */}
              <div className="absolute left-0 top-5 z-10 h-28 w-32 overflow-hidden border-6 border-[#f3ecdf] shadow-xl sm:h-36 sm:w-40">
                <img
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=85"
                  alt="KHANBAS team"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Bottom Image */}
              <div className="absolute bottom-0 left-[10%] z-20 h-32 w-40 overflow-hidden border-6 border-[#f3ecdf] shadow-xl sm:h-40 sm:w-48">
                <img
                  src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=900&q=85"
                  alt="KHANBAS logistics"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Floating Card */}
              <div className="absolute bottom-3 right-0 z-30 w-44 border border-[#d4bc8e] bg-[#122334] p-3 shadow-2xl">

                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4ad5b]">
                    KHANBAS
                  </span>

                  <span className="text-[#d4ad5b]">✦</span>
                </div>

                <p className="mt-2 font-display text-3xl font-medium text-white">
                  04
                </p>

                <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#b8c7d3]">
                  Business Divisions
                </p>

                <div className="my-2 h-px bg-white/15" />

                <p className="text-xs leading-5 text-[#d5e0e8]">
                  Engineering, technology, logistics and business support.
                </p>

              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* ==========================================
          Vision & Mission Section
          ========================================== */}
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#0c1520_0%,#09111a_100%)] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">

        {/* Decorative Background */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,151,61,0.14),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(44,75,109,0.22),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl">

          {/* Section Heading */}
          <div className="grid gap-6 border-b border-white/10 pb-7 lg:grid-cols-[1.1fr_0.7fr] lg:items-end">

            <motion.div
            variants={SlideRight(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            className="max-w-4xl">

              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-10 bg-[#c9973d]" />

                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d4ad5b]">
                  Vision & Mission
                </p>
              </div>

              <h2 className="font-display text-[2.5rem] font-medium leading-[0.96] text-white sm:text-[3rem] lg:text-[3.45rem]">
                Clear direction,
                <span className="block text-[#d4ad5b]">
                  practical execution.
                </span>
              </h2>

            </motion.div>

            <motion.p
            variants={SlideLeft(0.2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            className="max-w-md text-sm leading-7 text-[#b5c4d0] lg:justify-self-end">
              A disciplined long-term view supported by practical delivery across
              engineering, technology, logistics, and business services.
            </motion.p>

          </div>

          {/* Vision & Mission Cards */}
          <div className="mt-8 grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">

            {/* Vision Card */}
            <motion.div
            variants={SlideRight(0.4)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            className="group relative overflow-hidden border border-[#3a5269] bg-[linear-gradient(145deg,#152838_0%,#1b3042_100%)] p-6 shadow-[0_24px_48px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-1 hover:border-[#b9863f]/60">

              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#c9973d]/10 blur-2xl transition duration-500 group-hover:bg-[#c9973d]/20" />

              <div className="absolute right-5 top-5">
                <span className="font-display text-5xl text-white/[0.04]">
                  01
                </span>
              </div>

              <div className="relative">

                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[#c9973d]/40 bg-[#c9973d]/10">
                    <span className="text-sm text-[#d4ad5b]">✦</span>
                  </div>

                  <div>
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#d4ad5b]">
                      Our Vision
                    </p>

                    <div className="mt-2 h-px w-20 bg-gradient-to-r from-[#c9973d] to-transparent" />
                  </div>
                </div>

                <p className="max-w-xl font-display text-[1.8rem] font-medium leading-[1.08] text-white sm:text-[2.15rem]">
                  A trusted multidisciplinary partner for growth and operations in
                  Saudi Arabia.
                </p>

                <p className="mt-5 max-w-xl text-sm leading-7 text-[#c8d5df]">
                  To build KHANBAS into a trusted multidisciplinary partner supporting
                  the growth and operations of businesses and projects across Saudi Arabia.
                </p>

              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
            variants={SlideLeft(0.4)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            className="group relative overflow-hidden border border-white/10 bg-white/[0.035] p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#c9973d]/30">

              <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-[#c9973d] to-transparent" />

              <div className="absolute right-5 top-5">
                <span className="font-display text-5xl text-white/[0.04]">
                  02
                </span>
              </div>

              <div className="relative">

                <div className="mb-6 flex items-center justify-between gap-4">

                  <div className="flex items-center gap-3">

                    <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[#c9973d]/40 bg-[#c9973d]/10">
                      <span className="text-sm text-[#d4ad5b]">◆</span>
                    </div>

                    <div>
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#d4ad5b]">
                        Our Mission
                      </p>

                      <div className="mt-2 h-px w-20 bg-gradient-to-r from-[#c9973d] to-transparent" />
                    </div>

                  </div>

                  <span className="hidden rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-[#aebdca] sm:block">
                    Coordinated Delivery
                  </span>

                </div>

                <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-start">

                  <p className="max-w-2xl text-base leading-7 text-[#d8e3ea]">
                    To deliver practical, coordinated solutions across engineering,
                    technology, logistics, and business services while building
                    long-term client relationships.
                  </p>

                  {/* Mission Details */}
                  <div className="grid gap-3 md:min-w-[175px]">

                    <div className="border-b border-white/10 pb-3">
                      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#8499aa]">
                        Focus
                      </p>

                      <p className="mt-1.5 text-sm font-semibold text-white">
                        Practical Solutions
                      </p>
                    </div>

                    <div className="border-b border-white/10 pb-3">
                      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#8499aa]">
                        Method
                      </p>

                      <p className="mt-1.5 text-sm font-semibold text-white">
                        Coordinated Support
                      </p>
                    </div>

                    <div>
                      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#8499aa]">
                        Outcome
                      </p>

                      <p className="mt-1.5 text-sm font-semibold text-white">
                        Long-Term Trust
                      </p>
                    </div>

                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ==========================================
          Operating Model Section
          ========================================== */}
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#efe4d1_0%,#e7d9c2_100%)] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">

        {/* Decorative Background */}
        <div className="pointer-events-none absolute -left-32 top-10 h-64 w-64 rounded-full bg-[#c9973d]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#183047]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">

          {/* Operating Model Content */}
          <div>

            <motion.div
            variants={SlideLeft(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                 className="mb-3 flex items-center gap-3">
              <span className="h-px w-10 bg-[#b9863f]" />

              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8d641f]">
                Our Operating Model
              </p>
            </motion.div>

            <motion.h2
 variants={SlideRight(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            
             className="font-display text-[2.45rem] font-medium leading-[1] text-[#132538] sm:text-[2.9rem]">
              Specialists when you need them.
              <span className="block text-[#9d6c24]">
                Integrated when it matters.
              </span>
            </motion.h2>

            <motion.p
             variants={SlideLeft(0.7)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
             className="mt-4 max-w-2xl text-base leading-7 text-[#405565]">
              Each KHANBAS division focuses on its own area of expertise. When a
              requirement crosses disciplines, those capabilities can work together
              around the client without changing the clarity of the structure.
            </motion.p>

            {/* Operating Principles */}
            <motion.div
             variants={SlideLeft(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            className="mt-6 grid gap-3">

              {principles.map((item, index) => (
                <div
                  key={item.title}
                  className="group relative cursor-pointer border border-[#d3c09d]/60 bg-white/35 px-5 py-4 transition duration-300 hover:border-[#b9863f]/70 hover:bg-white/55"
                >

                  <div className="absolute left-0 top-0 h-full w-[3px] bg-[#b9863f] opacity-70 transition group-hover:opacity-100" />

                  <div className="flex gap-4">

                    <span className="pt-1 text-xs font-bold text-[#b9863f]">
                      0{index + 1}
                    </span>

                    <div>
                      <h3 className="text-lg font-semibold leading-6 text-[#183047]">
                        {item.title}
                      </h3>

                      <p className="mt-1.5 max-w-2xl text-sm leading-6 text-[#526575]">
                        {item.text}
                      </p>
                    </div>

                  </div>
                </div>
              ))}

            </motion.div>
          </div>

          {/* Division Structure Diagram */}
          <motion.div 
           variants={SlideBottom(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
          className="relative flex min-h-[390px] items-center justify-center overflow-hidden border border-[#d5c29d]/60 bg-[linear-gradient(180deg,rgba(249,244,235,0.95),rgba(239,229,211,0.95))] p-6 shadow-[0_24px_50px_rgba(41,31,17,0.1)]">

            <div className="absolute h-32 w-32 rounded-full border border-[#c5aa7b]/45" />
            <div className="absolute h-52 w-52 rounded-full border border-[#d2bd96]/40" />
            <div className="absolute h-72 w-72 rounded-full border border-[#dfcfb0]/30" />

            <div className="absolute h-40 w-40 rounded-full bg-[#c9973d]/10 blur-3xl" />

            <div className="relative grid h-full w-full place-items-center">

              {/* Engineering */}
              <div className="absolute left-0 top-5 max-w-[165px] cursor-pointer border border-[#d5c29d]/70 bg-white/65 p-3 shadow-[0_12px_25px_rgba(40,31,17,0.08)] transition hover:-translate-y-1">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#9d6c24]">
                  Division 01
                </p>

                <p className="mt-1.5 text-sm font-bold leading-5 text-[#183047]">
                  Engineering & Contracting
                </p>
              </div>

              {/* Technology */}
              <div className="absolute right-0 top-9 max-w-[165px] cursor-pointer border border-[#d5c29d]/70 bg-white/65 p-3 shadow-[0_12px_25px_rgba(40,31,17,0.08)] transition hover:-translate-y-1">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#9d6c24]">
                  Division 02
                </p>

                <p className="mt-1.5 text-sm font-bold leading-5 text-[#183047]">
                  Technology & Digital
                </p>
              </div>

              {/* Logistics */}
              <div className="absolute bottom-9 left-2 max-w-[165px] cursor-pointer border border-[#d5c29d]/70 bg-white/65 p-3 shadow-[0_12px_25px_rgba(40,31,17,0.08)] transition hover:-translate-y-1">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#9d6c24]">
                  Division 03
                </p>

                <p className="mt-1.5 text-sm font-bold leading-5 text-[#183047]">
                  Logistics & Equipment
                </p>
              </div>

              {/* Business Services */}
              <div className="absolute bottom-5 right-0 max-w-[180px] cursor-pointer border border-[#d5c29d]/70 bg-white/65 p-3 shadow-[0_12px_25px_rgba(40,31,17,0.08)] transition hover:-translate-y-1">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#9d6c24]">
                  Division 04
                </p>

                <p className="mt-1.5 text-sm font-bold leading-5 text-[#183047]">
                  Management & Business Services
                </p>
              </div>

              {/* KHANBAS Center */}
              <div className="z-10 flex h-28 w-28 cursor-pointer items-center justify-center rounded-full border border-[#c9973d]/50 bg-[linear-gradient(145deg,#152b3d_0%,#213a4f_100%)] p-4 text-center shadow-[0_20px_45px_rgba(20,29,39,0.25)]">

                <div>
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-[#d4ad5b]">
                    Center
                  </p>

                  <p className="mt-1 font-display text-[1.7rem] font-medium leading-none text-white">
                    KHANBAS
                  </p>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* ==========================================
          Four Business Divisions Section
          ========================================== */}
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#0a121a_0%,#0d1722_100%)] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">

        {/* Decorative Background */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(201,151,61,0.12),transparent_24%),radial-gradient(circle_at_left_bottom,rgba(42,74,108,0.18),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl">

          {/* Section Header */}
          <motion.div
           variants={SlideRight(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
          
          className="mb-8 max-w-3xl">

            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-10 bg-[#c9973d]" />

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d4ad5b]">
                Four Business Divisions
              </p>
            </div>

            <h2 className="font-display text-[2.6rem] font-medium leading-[0.96] text-white sm:text-[3.3rem]">
              Separate capabilities.
              <span className="block text-[#d4ad5b]">
                Equal importance. One KHANBAS.
              </span>
            </h2>

          </motion.div>

          {/* Division Cards */}
          <motion.div
           variants={SlideLeft(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
          className="grid gap-4 md:grid-cols-2">

            {capabilityGroups.map((group, index) => (

              <article
                key={group.title}
                className={`group relative cursor-pointer overflow-hidden border p-6 transition duration-300 hover:-translate-y-1 ${
                  index % 2 === 0
                    ? 'border-[#3a526b] bg-[linear-gradient(145deg,#152534_0%,#1d3244_100%)] shadow-[0_20px_40px_rgba(0,0,0,0.18)]'
                    : 'border-white/10 bg-white/[0.035] backdrop-blur-md hover:border-[#c9973d]/30'
                }`}
              >

                {/* Decorative Number */}
                <div className="absolute right-5 top-3">
                  <span className="font-display text-6xl text-white/[0.035]">
                    {group.number}
                  </span>
                </div>

                {/* Card Header */}
                <div className="relative mb-6 flex items-start justify-between gap-4">

                  <div>

                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4ad5b]">
                      Division {group.number}
                    </p>

                    <h3 className="mt-2 max-w-md font-display text-[1.85rem] font-medium leading-[1] text-white">
                      {group.title}
                    </h3>

                  </div>

                  {/* Premium Icon Circle */}
                  <div className="flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[#c9973d]/35 bg-white/[0.04] transition duration-300 group-hover:border-[#c9973d]/70 group-hover:bg-[#c9973d]/10">
                    <span className="text-sm text-[#d4ad5b]">
                      ✦
                    </span>
                  </div>

                </div>

                {/* Description */}
                <p className="relative max-w-xl text-sm leading-7 text-[#d0dce5]">
                  {group.text}
                </p>

                {/* Bottom Accent */}
                <div className="mt-6 h-px w-16 bg-gradient-to-r from-[#c9973d] to-transparent transition-all duration-300 group-hover:w-28" />

              </article>

            ))}

          </motion.div>
        </div>
      </section>

      {/* ==========================================
          Final CTA / KHANBAS View Section
          ========================================== */}
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f1e7d8_0%,#e7dbc9_100%)] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">

        {/* Decorative Background */}
        <div className="pointer-events-none absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-[#c9973d]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 top-0 h-72 w-72 rounded-full bg-[#183047]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">

            {/* Premium Image Gallery */}
            <div className="relative grid gap-3 sm:grid-cols-2">

              {/* Main Image */}
              <motion.div 
               variants={SlideRight(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              className="group relative min-h-[260px] overflow-hidden shadow-[0_22px_45px_rgba(39,30,17,0.14)] sm:min-h-[330px]">

                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=85"
                  alt="KHANBAS construction"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#102131]/70 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-[#e1bd70]">
                    Built for Delivery
                  </p>

                  <p className="mt-1 font-display text-xl text-white">
                    Projects & Operations
                  </p>
                </div>
              </motion.div>

              {/* Supporting Images */}
              <div className="grid gap-3">

                <motion.div
                 variants={SlideBottom(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="group relative min-h-[125px] overflow-hidden shadow-[0_18px_35px_rgba(39,30,17,0.1)] sm:min-h-[158px]">
                  <img
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85"
                    alt="KHANBAS technology"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#102131]/60 to-transparent" />

                  <p className="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                    Technology
                  </p>
                </motion.div>

                <motion.div
                 variants={SlideUp(0.2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                
                className="group relative min-h-[125px] overflow-hidden shadow-[0_18px_35px_rgba(39,30,17,0.1)] sm:min-h-[158px]">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=85"
                    alt="KHANBAS business services"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#102131]/60 to-transparent" />

                  <p className="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                    Business Support
                  </p>
                </motion.div>

              </div>

              {/* Small Floating Badge */}
              <div className="absolute -bottom-4 left-5 z-10 border border-[#d1b77f]/70 bg-[#122334] px-5 py-3 shadow-xl">

                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-[#d4ad5b]">
                  KHANBAS
                </p>

                <p className="mt-1 text-xs font-medium text-white">
                  One Partner. Multiple Capabilities.
                </p>

              </div>

            </div>

            {/* Final Content */}
            <div>

              {/* Section Label */}
              <motion.div
               variants={SlideLeft(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              
              className="mb-3 flex items-center gap-3">
                <span className="h-px w-10 bg-[#b9863f]" />

                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8d641f]">
                  The KHANBAS View
                </p>
              </motion.div>

              {/* Heading */}
              <motion.h2
              
               variants={SlideLeft(0.7)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              className="font-display text-[2.7rem] font-medium leading-[0.98] text-[#132538] sm:text-[3.35rem]">
                One relationship.
                <span className="block text-[#9d6c24]">
                  Broader capability.
                </span>
              </motion.h2>

              {/* Description */}
              <motion.p
                 variants={SlideLeft(0.8)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              className="mt-5 max-w-2xl text-base leading-7 text-[#405565]">
                KHANBAS is structured to help clients access more than one type of
                support without losing clarity. Some requirements stay within one
                division. Others bring together engineering, logistics, technology,
                and business support around one coordinated need.
              </motion.p>

              <motion.p
               variants={SlideLeft(0.2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              className="mt-4 max-w-2xl text-base leading-7 text-[#405565]">
                The result is a balanced multidisciplinary company able to support
                several parts of a project or operation through one trusted partner.
              </motion.p>

              {/* Gold Divider */}
              <div className="my-6 h-px max-w-lg bg-gradient-to-r from-[#c9973d]/70 via-[#c9973d]/20 to-transparent" />

              {/* CTA Buttons */}
              <motion.div
               variants={SlideRight(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              className="flex flex-wrap gap-3">

                {/* Primary CTA */}
                <Link
                  to="/contact"
                  className="group inline-flex cursor-pointer items-center gap-3 rounded-full border border-[#c9973d]/70 bg-[linear-gradient(135deg,#f4cd70,#ab7c2a)] px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-[#172536] shadow-[0_10px_25px_rgba(171,124,42,0.2)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(171,124,42,0.28)]"
                >
                  Talk to Our Team

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                {/* Secondary CTA */}
                <Link
                  to="/projects"
                  className="inline-flex cursor-pointer items-center gap-3 rounded-full border border-[#b8a27a]/70 bg-white/30 px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-[#1e3145] transition duration-300 hover:-translate-y-1 hover:bg-white/60"
                >
                  View Projects

                  <span>→</span>
                </Link>

              </motion.div>

            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage