
import { motion } from 'framer-motion'
import { SlideLeft, SlideRight } from '../../utility/animation'

const advantageFlow = [
  { title: 'Engineering', action: 'Build & Maintain' },
  { title: 'Logistics', action: 'Move & Equip' },
  { title: 'Technology', action: 'Connect & Control' },
  { title: 'Business Services', action: 'Manage & Support' },
]

const markers = [
  { label: 'Site & Buildings', division: 'Engineering & Contracting', style: 'left-[8%] top-[18%]' },
  { label: 'Heavy Equipment', division: 'Logistics & Equipment', style: 'left-[22%] top-[52%]' },
  { label: 'Vehicles', division: 'Logistics & Equipment', style: 'left-[58%] top-[62%]' },
  { label: 'CCTV & Network', division: 'Technology', style: 'left-[64%] top-[22%]' },
  { label: 'Procurement', division: 'Business Services', style: 'left-[80%] top-[40%]' },
]

export function KhanbasAdvantageSection() {
  return (
    <section className="bg-[linear-gradient(180deg,#f4eddf_0%,#ede3d3_100%)] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2.25rem] border border-black/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.58)_0%,rgba(255,255,255,0.36)_100%)] shadow-[0_20px_46px_rgba(47,34,18,0.1)] backdrop-blur">
          <div className="grid gap-8 px-5 py-6 sm:px-6 sm:py-7 lg:grid-cols-[0.86fr_1.14fr] lg:px-8 lg:py-8">
            <div>


              <motion.p
              variants={SlideRight(0.2)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
              className="text-xs font-semibold uppercase tracking-[0.34em] text-[#a87124]">
                The Khanbas Advantage
              </motion.p>


              <motion.h2
              variants={SlideRight(0.5)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
              className="mt-3 font-display text-[2.7rem] leading-[0.92] text-[#18120d] sm:text-[3.25rem]">
                More Capability. Less Complexity.
              </motion.h2>


              <motion.p
             variants={SlideRight(0.7)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
              className="mt-4 max-w-lg text-[1rem] leading-7 text-[#4c4033] sm:text-[1.05rem]">
                Large projects rarely depend on one service alone. KHANBAS
                brings multiple disciplines together so clients can coordinate
                more of their requirements through one partner.
              </motion.p>


              <div className="mt-6 space-y-3">
                {advantageFlow.map((item, index) => (
                  <motion.div
                  variants={SlideRight(0.2)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
                  
                  key={item.title} className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c9973d]/25 bg-[rgba(201,151,61,0.08)] text-sm font-semibold text-[#a87124]">
                      0{index + 1}
                    </div>
                    <div>
                      <p className="text-[0.78rem] uppercase tracking-[0.28em] text-[#74695c]">
                        {item.title}
                      </p>
                      <p className="mt-0.5 font-display text-[1.85rem] leading-none text-[#18120d]">
                        {item.action}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.p
               variants={SlideRight(0.2)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
              className="mt-6 text-[0.82rem] uppercase tracking-[0.26em] text-[#a87124]">
                One relationship. Multiple capabilities.
              </motion.p>
            </div>

            <div>



              <motion.div 
              variants={SlideLeft(0.4)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
              className="relative overflow-hidden rounded-[1.85rem] border border-white/10 bg-black">
                <img
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80"
                  alt="Integrated commercial project environment"
                  className="h-[24rem] w-full object-cover opacity-80 sm:h-[26rem] lg:h-[28rem]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,14,0.16),rgba(7,10,14,0.68))]" />

                {markers.map((marker) => (
                  <div key={marker.label} className={`absolute ${marker.style}`}>
                    <div className="flex items-center gap-2.5">
                      <span className="relative flex h-3.5 w-3.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--color-gold-bright)]/35" />
                        <span className="relative inline-flex h-3.5 w-3.5 rounded-full border border-white/40 bg-[color:var(--color-gold-bright)]" />
                      </span>
                      <div className="rounded-[1.1rem] border border-white/10 bg-[rgba(10,15,22,0.8)] px-3 py-2.5 shadow-[0_10px_24px_rgba(0,0,0,0.22)] backdrop-blur">
                        <p className="text-[0.6rem] uppercase tracking-[0.24em] text-[color:var(--color-gold-bright)]">
                          {marker.division}
                        </p>
                        <p className="mt-0.5 text-[0.92rem] font-medium text-white">{marker.label}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>






              <motion.p
              variants={SlideRight(0.3)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
               className="mt-4 max-w-2xl text-sm leading-6 text-[#675d50]">
                Whether a requirement involves one division or several, KHANBAS
                can bring the right capabilities around the project.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
