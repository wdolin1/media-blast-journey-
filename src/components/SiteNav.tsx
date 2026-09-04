import logo from '../assets/logo.png'

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-cream-border bg-cream px-6 py-3 md:px-14">
      <a href="#top" className="block">
        <img src={logo} alt="Log &amp; Timber Worx" className="h-12 w-auto md:h-14" />
      </a>
      <nav className="hidden items-center gap-8 font-display text-[13px] font-semibold uppercase tracking-[0.07em] text-ink-soft md:flex">
        <a href="#top" className="hover:text-rust">
          Home
        </a>
        <a href="#journey" className="hover:text-rust">
          The Restoration Journey
        </a>
        <a href="#stages" className="hover:text-rust">
          Stages
        </a>
      </nav>
      <div className="flex items-center gap-4">
        <a
          href="tel:18447824637"
          className="hidden font-display text-sm font-bold tracking-[0.02em] text-ink sm:block"
        >
          (844) STAINER
        </a>
        <a
          href="mailto:dan@logandtimberworx.com"
          className="rounded-sm bg-rust px-4 py-3 font-display text-xs font-bold uppercase tracking-[0.1em] text-white md:px-5"
        >
          Get an Estimate
        </a>
      </div>
    </header>
  )
}
