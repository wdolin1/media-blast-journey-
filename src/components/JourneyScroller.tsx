import { useEffect, useRef, useState } from 'react'
import { PlaceholderImage } from './PlaceholderImage'
import type { Stage } from '../data/journey'

export function JourneyScroller({ stages }: { stages: Stage[] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const index = Number((entry.target as HTMLElement).dataset.index)
            setActiveIndex(index)
          }
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )
    for (const el of stepRefs.current) {
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [stages.length])

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2">
      {/* PINNED VISUAL */}
      <div className="top-[76px] hidden bg-ink md:sticky md:block md:h-[calc(100vh-76px)]">
        <div className="relative h-full w-full overflow-hidden">
          {stages.map((stage, index) => (
            <PlaceholderImage
              key={stage.id}
              dark
              label={`Drop "${stage.title}" photo here`}
              className={`absolute inset-0 h-full w-full transition-opacity duration-700 ease-out ${
                index === activeIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}

          {/* caption bar */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/95 to-transparent px-10 pt-16 pb-8">
            <div className="mb-2 font-display text-xs font-bold tracking-[0.18em] text-gold uppercase">
              Stage {activeIndex + 1} of {stages.length}
            </div>
            <div className="font-display text-2xl font-extrabold tracking-[-0.01em] text-cream uppercase">
              {stages[activeIndex].title}
            </div>
          </div>

          {/* progress rail */}
          <div className="absolute top-8 right-8 flex flex-col gap-2.5">
            {stages.map((stage, index) => (
              <a
                key={stage.id}
                href={`#${stage.id}`}
                aria-label={`Jump to ${stage.title}`}
                className={`h-2.5 w-2.5 rounded-full border transition-colors ${
                  index === activeIndex
                    ? 'border-gold bg-gold'
                    : 'border-cream/40 bg-transparent hover:border-cream'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* STEPS */}
      <div>
        {stages.map((stage, index) => {
          const dark = index % 2 === 1
          return (
            <div
              key={stage.id}
              id={stage.id}
              ref={(el) => {
                stepRefs.current[index] = el
              }}
              data-index={index}
              className={`flex min-h-[80vh] flex-col justify-center border-b px-6 py-16 md:min-h-screen md:px-14 ${
                dark
                  ? 'border-black/20 bg-ink-soft text-cream'
                  : 'border-cream-border bg-cream text-body'
              }`}
            >
              <PlaceholderImage
                dark={dark}
                label={`Drop "${stage.title}" photo here`}
                className="mb-8 h-56 w-full md:hidden"
              />

              <div className={`mb-4 font-display text-5xl leading-none font-black ${dark ? 'text-gold' : 'text-rust'}`}>
                {stage.number}
              </div>
              <div
                className={`mb-3 font-display text-xs font-bold tracking-[0.18em] uppercase ${dark ? 'text-gold' : 'text-rust'}`}
              >
                {stage.tagline}
              </div>
              <h3 className="mb-5 font-display text-3xl leading-tight font-extrabold tracking-[-0.02em] uppercase md:text-[40px]">
                {stage.title}
              </h3>
              <p className={`mb-6 max-w-xl text-[17px] leading-relaxed ${dark ? 'text-cream-on-dark' : 'text-body-muted'}`}>
                {stage.description}
              </p>

              <ul className="mb-8 max-w-xl space-y-2.5">
                {stage.details.map((detail) => (
                  <li
                    key={detail}
                    className={`flex gap-3 text-[15px] leading-relaxed ${dark ? 'text-cream-on-dark-2' : 'text-body-faint'}`}
                  >
                    <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${dark ? 'bg-gold' : 'bg-rust'}`} />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              <div
                className={`max-w-xl border-l-4 p-6 ${
                  dark
                    ? 'border-gold bg-white/5'
                    : 'border-rust border-y border-r border-y-cream-border border-r-cream-border bg-white'
                }`}
              >
                <div
                  className={`mb-4 font-display text-xs font-bold tracking-[0.14em] uppercase ${dark ? 'text-gold' : 'text-rust'}`}
                >
                  Resources to learn more
                </div>
                <div className="space-y-4">
                  {stage.resources.map((resource) => (
                    <a key={resource.title} href={resource.href} className="block hover:opacity-80">
                      <div className="font-display text-[15px] font-bold underline decoration-1 underline-offset-2">
                        {resource.title} →
                      </div>
                      <div className={`mt-1 text-[13.5px] ${dark ? 'text-cream-on-dark-2' : 'text-body-faint'}`}>
                        {resource.description}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
        {/* buffer so the pinned panel stays visible through the final stage
            instead of unsticking early as the row runs out of room */}
        <div
          className={`hidden md:block md:h-[calc(100vh-76px)] ${
            (stages.length - 1) % 2 === 1 ? 'bg-ink-soft' : 'bg-cream'
          }`}
        />
      </div>
    </div>
  )
}
