import { Eyebrow } from './components/Eyebrow'
import { JourneyScroller } from './components/JourneyScroller'
import { PlaceholderImage } from './components/PlaceholderImage'
import { SiteFooter } from './components/SiteFooter'
import { SiteNav } from './components/SiteNav'
import { journeyStages } from './data/journey'

function App() {
  return (
    <div id="top" className="w-full bg-cream font-body text-body">
      <SiteNav />

      {/* HERO */}
      <div className="grid min-h-[520px] grid-cols-1 md:min-h-[600px] md:grid-cols-[1.05fr_1fr]">
        <div className="flex flex-col justify-center bg-ink px-6 py-16 text-cream md:px-16 md:py-0">
          <Eyebrow tone="gold" className="mb-6">
            A Restoration Walkthrough
          </Eyebrow>
          <h1 className="m-0 font-display text-5xl leading-[0.95] font-black tracking-[-0.02em] uppercase md:text-7xl">
            One cabin, <span className="text-gold">six stages</span> back to life.
          </h1>
          <p className="mt-7 max-w-[500px] text-lg leading-relaxed text-cream-on-dark">
            Scroll through this cabin's restoration from first inspection to final finish — the
            photo alongside each stage changes as you go, so you can watch it come back to life
            step by step.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3.5">
            <a
              href="#journey"
              className="rounded-sm bg-gold px-8 py-4 font-display text-[13.5px] font-extrabold tracking-[0.1em] text-ink uppercase"
            >
              Start the Journey
            </a>
          </div>
        </div>
        <PlaceholderImage
          dark
          label="Drop hero photo — this cabin, before restoration"
          className="min-h-[320px] w-full md:min-h-0"
        />
      </div>

      {/* INTRO */}
      <div
        id="journey"
        className="mx-auto grid max-w-[1500px] grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-2 md:gap-20 md:px-16 md:py-28"
      >
        <div>
          <Eyebrow>This walkthrough is a demo</Eyebrow>
          <h2 className="mt-4 mb-0 font-display text-4xl leading-tight font-extrabold tracking-[-0.02em] uppercase md:text-[46px]">
            The Restoration Journey
          </h2>
        </div>
        <div>
          <p className="mb-4 text-lg leading-relaxed text-body-muted md:text-[18.5px]">
            Restoring a log cabin isn't one job — it's a sequence of stages, each building on the
            last. As you scroll, the photo beside each stage will update to show the cabin at
            that point in the process.
          </p>
          <p className="mb-0 text-lg leading-relaxed text-body-muted md:text-[18.5px]">
            The photos and stage details here are placeholders for now — this cabin's real photos
            and the guides, spec sheets, and files for each stage will replace them soon.
          </p>
        </div>
      </div>

      {/* STAGE OVERVIEW */}
      <div id="stages" className="bg-rust px-6 py-20 text-cream md:px-16 md:py-24">
        <div className="mx-auto max-w-[1500px]">
          <h2 className="m-0 mb-12 font-display text-4xl leading-none font-black tracking-[-0.02em] uppercase md:text-5xl">
            Six Stages, Start to Finish
          </h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {journeyStages.map((stage) => (
              <a key={stage.id} href={`#${stage.id}`} className="block hover:opacity-80">
                <div className="mb-3 font-display text-4xl leading-none font-black text-gold md:text-5xl">
                  {stage.number}
                </div>
                <h3 className="m-0 mb-2 font-display text-[15px] font-extrabold tracking-[-0.01em] uppercase md:text-lg">
                  {stage.title}
                </h3>
                <p className="m-0 text-[13px] leading-snug text-rust-on-dark md:text-sm">
                  {stage.tagline}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* SCROLL-DRIVEN WALKTHROUGH */}
      <JourneyScroller stages={journeyStages} />

      <SiteFooter />
    </div>
  )
}

export default App
