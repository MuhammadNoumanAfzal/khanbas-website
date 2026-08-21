export function PageShell({
  eyebrow,
  title,
  description,
  accent,
  backgroundImage,
  children,
}) {
  return (
    <section className="relative min-h-[82vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${backgroundImage}")` }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,12,0.52)_0%,rgba(7,11,16,0.58)_18%,rgba(8,12,18,0.72)_52%,rgba(8,12,18,0.94)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,213,127,0.22),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(19,35,52,0.35),transparent_28%)]" />

      <div className="relative mx-auto flex min-h-[82vh] max-w-7xl items-end px-4 pb-14 pt-32 sm:px-6 sm:pb-16 sm:pt-36 lg:px-8 lg:pb-20 lg:pt-40">
        <div className="max-w-4xl">
          <p className="mb-5 text-xs uppercase tracking-[0.38em] text-[color:var(--color-gold-bright)]">
            {eyebrow}
          </p>
          <h1 className="max-w-3xl font-display text-5xl leading-[0.9] text-white sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[color:var(--color-sand)] sm:text-lg lg:text-xl">
            {description}
          </p>

          <div className="mt-8">
            <div className="inline-flex rounded-full border border-[color:var(--color-gold-soft)]/35 bg-black/20 px-5 py-3 text-xs uppercase tracking-[0.28em] text-[color:var(--color-gold-bright)] backdrop-blur-sm">
              {accent}
            </div>
          </div>

          <div className="mt-8">{children}</div>
        </div>
      </div>
    </section>
  )
}
