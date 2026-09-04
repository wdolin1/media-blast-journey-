import logo from '../assets/logo.png'
import { journeyStages } from '../data/journey'

export function SiteFooter() {
  return (
    <footer className="bg-[#161513] font-body text-[#9c9384]">
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr] md:px-14">
        <div>
          <img src={logo} alt="Log &amp; Timber Worx" className="mb-4 h-14 w-auto" />
          <p className="max-w-md text-sm leading-relaxed">
            This page follows one cabin through the restoration process, stage by stage. It's a
            demo for now — real photos and the resource files for each stage will replace the
            placeholders here soon.
          </p>
        </div>

        <div>
          <div className="mb-4 font-display text-xs font-bold tracking-[0.12em] text-cream uppercase">
            Jump to a stage
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2.5 text-sm">
            {journeyStages.map((stage) => (
              <a key={stage.id} href={`#${stage.id}`} className="hover:text-gold">
                {stage.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[#2a2723] px-6 py-6 font-display text-[11.5px] tracking-[0.1em] uppercase md:px-14">
        <span>A project by Log &amp; Timber Worx</span>
        <a href="mailto:dan@logandtimberworx.com" className="text-[#6b6356] normal-case hover:text-gold">
          dan@logandtimberworx.com
        </a>
      </div>
    </footer>
  )
}
