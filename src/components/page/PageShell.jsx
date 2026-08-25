import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SlideRight } from "../../utility/animation";

export function PageShell({
  eyebrow,
  title,
  description,
  accent,
  backgroundImage,
  slides,
  children,
}) {
  const heroSlides =
    slides && slides.length > 0
      ? slides
      : [{ eyebrow, title, description, accent, backgroundImage }];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (heroSlides.length <= 1) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5500);

    return () => window.clearInterval(intervalId);
  }, [heroSlides.length]);

  useEffect(() => {
    setActiveSlide(0);
  }, [heroSlides.length]);

  const currentSlide = heroSlides[activeSlide];

  return (
    <section className="relative min-h-[78vh] overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={`${slide.title}-${index}`}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 ${
            index === activeSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url("${slide.backgroundImage}")` }}
        />
      ))}

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,12,0.35)_0%,rgba(7,11,16,0.44)_20%,rgba(8,12,18,0.64)_55%,rgba(8,12,18,0.9)_100%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,213,127,0.18),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(19,35,52,0.28),transparent_28%)]" />

      <div className="relative mx-auto flex min-h-[78vh] max-w-7xl items-end px-4 pb-14 pt-16 sm:px-6 sm:pb-16 sm:pt-20 lg:px-8 lg:pb-20 lg:pt-24">
        <div className="max-w-4xl">

          {/* Eyebrow */}
          <motion.p
            variants={SlideRight(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-5 text-xs uppercase tracking-[0.38em] text-[color:var(--color-gold-bright)]"
          >
            {currentSlide.eyebrow}
          </motion.p>

          {/* Title */}
          <motion.h1
            variants={SlideRight(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-3xl font-display text-5xl leading-[0.9] text-white transition-opacity duration-500 sm:text-6xl lg:text-7xl"
          >
            {currentSlide.title}
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={SlideRight(0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-6 max-w-2xl text-base leading-7 text-[color:var(--color-sand)] sm:text-lg lg:text-xl"
          >
            {currentSlide.description}
          </motion.p>

          {/* Accent */}
          <motion.div
            variants={SlideRight(0.9)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-8"
          >
            <div className="inline-flex rounded-full border border-[color:var(--color-gold-soft)]/35 bg-black/20 px-5 py-3 text-xs uppercase tracking-[0.28em] text-[color:var(--color-gold-bright)] backdrop-blur-sm">
              {currentSlide.accent}
            </div>
          </motion.div>

          {/* Children */}
          <motion.div
            variants={SlideRight(1.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-8"
          >
            {children}
          </motion.div>

          {/* Slide Indicators */}
          {heroSlides.length > 1 ? (
            <motion.div
              variants={SlideRight(1.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-8 flex items-center gap-3"
            >
              {heroSlides.map((slide, index) => (
                <button
                  key={`${slide.title}-indicator-${index}`}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === activeSlide
                      ? "w-10 bg-[color:var(--color-gold-bright)]"
                      : "w-2.5 bg-white/45 hover:bg-white/70"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </motion.div>
          ) : null}

        </div>
      </div>
    </section>
  );
}