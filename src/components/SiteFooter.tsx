import logo from '../assets/logo.png'

export function SiteFooter() {
  return (
    <footer className="bg-footer px-6 py-10 md:px-[30px]">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Log & Timber Worx" className="h-12 w-auto" />
          <p className="m-0 max-w-sm text-[13.5px] leading-relaxed text-footer-muted">
            This page follows one cabin through the restoration process, stage by stage. It's a
            demo for now — real photos and files for each stage will replace the placeholders here.
          </p>
        </div>
        <div className="font-display text-[11.5px] tracking-[0.1em] text-footer-muted uppercase">
          <a href="mailto:dan@logandtimberworx.com" className="normal-case hover:text-gold">
            dan@logandtimberworx.com
          </a>
        </div>
      </div>
    </footer>
  )
}
