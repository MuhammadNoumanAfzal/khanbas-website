import { Link } from 'react-router-dom'
import { PageShell } from '../components/page/PageShell.jsx'

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
        <div className="flex flex-wrap gap-4">
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
        </div>
      </PageShell>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#0a121a_0%,#0d1823_54%,#0a131c_100%)] px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,151,61,0.12),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(42,74,108,0.2),transparent_28%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.34em] text-[color:var(--color-gold-bright)]">
              Contact Details
            </p>
            <h2 className="mt-3 font-display text-[2.8rem] leading-[0.92] text-white sm:text-[3.2rem]">
              Let&apos;s discuss your requirement properly.
            </h2>
            <p className="mt-5 text-base leading-8 text-[#c5d1dc]">
              Use the form for project inquiries, service requests, or early
              coordination. If you prefer a direct route, our main contact
              details are listed here for immediate access.
            </p>

            <div className="mt-8 space-y-6">
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
            </div>

            <div className="mt-10">
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
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-8 hidden h-28 w-28 rounded-full bg-[rgba(201,151,61,0.14)] blur-3xl lg:block" />
            <div className="absolute -right-4 bottom-10 hidden h-32 w-32 rounded-full bg-[rgba(28,52,78,0.2)] blur-3xl lg:block" />

            <div className="relative border border-[#31465d] bg-[linear-gradient(180deg,rgba(247,242,232,0.97),rgba(239,229,213,0.93))] px-5 py-6 shadow-[0_28px_60px_rgba(4,10,18,0.28)] backdrop-blur sm:px-7 sm:py-8 lg:px-8">
              <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-[0.72rem] uppercase tracking-[0.28em] text-[#9c6c26]">
                    Inquiry Form
                  </p>
                  <h2 className="mt-3 font-display text-[2.3rem] leading-[0.94] text-[#142537] sm:text-[2.7rem]">
                    Tell us about your inquiry.
                  </h2>
                </div>
                <p className="max-w-sm text-sm leading-7 text-[#5a6b79]">
                  A brief summary helps our team understand your needs and return
                  with the right response.
                </p>
              </div>

              <form className="grid gap-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-[0.72rem] uppercase tracking-[0.24em] text-[#8d6730]">
                      Full Name
                    </span>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full cursor-text border-0 border-b border-[#cfba97] bg-transparent px-0 py-3 text-base text-[#12253a] outline-none transition placeholder:text-[#8b99a5] focus:border-[#9c6c26]"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-[0.72rem] uppercase tracking-[0.24em] text-[#8d6730]">
                      Company
                    </span>
                    <input
                      type="text"
                      placeholder="Company or organization"
                      className="w-full cursor-text border-0 border-b border-[#cfba97] bg-transparent px-0 py-3 text-base text-[#12253a] outline-none transition placeholder:text-[#8b99a5] focus:border-[#9c6c26]"
                    />
                  </label>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-[0.72rem] uppercase tracking-[0.24em] text-[#8d6730]">
                      Email
                    </span>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      className="w-full cursor-text border-0 border-b border-[#cfba97] bg-transparent px-0 py-3 text-base text-[#12253a] outline-none transition placeholder:text-[#8b99a5] focus:border-[#9c6c26]"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-[0.72rem] uppercase tracking-[0.24em] text-[#8d6730]">
                      Phone
                    </span>
                    <input
                      type="tel"
                      placeholder="+966"
                      className="w-full cursor-text border-0 border-b border-[#cfba97] bg-transparent px-0 py-3 text-base text-[#12253a] outline-none transition placeholder:text-[#8b99a5] focus:border-[#9c6c26]"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-[0.72rem] uppercase tracking-[0.24em] text-[#8d6730]">
                    Service Type
                  </span>
                  <select className="w-full cursor-pointer border-0 border-b border-[#cfba97] bg-transparent px-0 py-3 text-base text-[#12253a] outline-none transition focus:border-[#9c6c26]">
                    <option>Choose an inquiry type</option>
                    {inquiryTypes.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-[0.72rem] uppercase tracking-[0.24em] text-[#8d6730]">
                    Project or Inquiry
                  </span>
                  <textarea
                    rows="6"
                    placeholder="Please share your requirement, project stage, location, and the type of support you are looking for."
                    className="w-full resize-none cursor-text border border-[#d6c09b] bg-[rgba(255,255,255,0.34)] px-4 py-4 text-base leading-7 text-[#12253a] outline-none transition placeholder:text-[#8b99a5] focus:border-[#9c6c26] focus:bg-[rgba(255,255,255,0.54)]"
                  />
                </label>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <p className="max-w-md text-sm leading-7 text-[#5a6b79]">
                    Suitable for new project discussions, service requests, and
                    early coordination across KHANBAS divisions.
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
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
