import { PlaceholderImage } from './PlaceholderImage'
import type { Stage } from '../data/journey'

export function JourneyStage({ stage, index }: { stage: Stage; index: number }) {
  const dark = index % 2 === 1
  const imageFirst = index % 2 === 0

  const wrapperClass = dark ? 'bg-ink-soft text-cream' : 'bg-cream text-body'
  const numberColor = dark ? 'text-gold' : 'text-rust'
  const bodyColor = dark ? 'text-cream-on-dark' : 'text-body-muted'
  const detailColor = dark ? 'text-cream-on-dark-2' : 'text-body-faint'

  const image = (
    <PlaceholderImage
      dark={dark}
      label={`Drop "${stage.title}" photo here`}
      className="h-72 w-full md:h-full md:min-h-[420px]"
    />
  )

  const content = (
    <div className="flex flex-col justify-center px-6 py-14 md:px-16 md:py-20">
      <div className={`mb-4 font-display text-6xl leading-none font-black ${numberColor}`}>
        {stage.number}
      </div>
      <div
        className={`mb-3 font-display text-xs font-bold tracking-[0.18em] uppercase ${dark ? 'text-gold' : 'text-rust'}`}
      >
        {stage.tagline}
      </div>
      <h3 className="mb-5 font-display text-3xl leading-tight font-extrabold tracking-[-0.02em] uppercase md:text-[42px]">
        {stage.title}
      </h3>
      <p className={`mb-6 text-[17px] leading-relaxed ${bodyColor}`}>{stage.description}</p>

      <ul className="mb-8 space-y-2.5">
        {stage.details.map((detail) => (
          <li key={detail} className={`flex gap-3 text-[15px] leading-relaxed ${detailColor}`}>
            <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${dark ? 'bg-gold' : 'bg-rust'}`} />
            <span>{detail}</span>
          </li>
        ))}
      </ul>

      <div
        className={`border-l-4 p-6 ${
          dark ? 'border-gold bg-white/5' : 'border-rust border-y border-r border-y-cream-border border-r-cream-border bg-white'
        }`}
      >
        <div
          className={`mb-4 font-display text-xs font-bold tracking-[0.14em] uppercase ${dark ? 'text-gold' : 'text-rust'}`}
        >
          Resources to learn more
        </div>
        <div className="space-y-4">
          {stage.resources.map((resource) => (
            <a
              key={resource.title}
              href={resource.href}
              className="block hover:opacity-80"
            >
              <div className="font-display text-[15px] font-bold underline decoration-1 underline-offset-2">
                {resource.title} →
              </div>
              <div className={`mt-1 text-[13.5px] ${detailColor}`}>{resource.description}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <section id={stage.id} className={wrapperClass}>
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 md:grid-cols-2">
        {imageFirst ? (
          <>
            {image}
            {content}
          </>
        ) : (
          <>
            {content}
            {image}
          </>
        )}
      </div>
    </section>
  )
}
