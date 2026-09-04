import logo from '../assets/logo.png'

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-cream-border bg-cream px-6 py-3 md:px-14">
      <a href="#top" className="flex items-center gap-3">
        <img src={logo} alt="Log &amp; Timber Worx" className="h-10 w-auto md:h-11" />
        <span className="hidden font-display text-[11px] leading-tight font-semibold tracking-[0.1em] text-body-faint uppercase sm:block">
          Restoration
          <br />
          Walkthrough
        </span>
      </a>
      <nav className="flex items-center gap-6 font-display text-[13px] font-semibold tracking-[0.07em] text-ink-soft uppercase md:gap-8">
        <a href="#journey" className="hover:text-rust">
          The Journey
        </a>
        <a href="#stages" className="hidden hover:text-rust sm:inline">
          Stages
        </a>
        <a href="mailto:dan@logandtimberworx.com" className="hover:text-rust">
          Contact
        </a>
      </nav>
    </header>
  )
}
