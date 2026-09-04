export function SiteFooter() {
  return (
    <footer className="border-t border-line px-6 py-8 md:px-[30px]">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-2 font-mono text-[11.5px] tracking-[0.1em] text-muted uppercase">
        <span>
          Log &amp; Timber<span className="text-amber">Worx</span>
        </span>
        <a href="mailto:dan@logandtimberworx.com" className="normal-case hover:text-amber">
          dan@logandtimberworx.com
        </a>
      </div>
    </footer>
  )
}
