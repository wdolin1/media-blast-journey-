import type { Stage } from '../data/mediaBlastStages'

export function StageNotes({ stages }: { stages: Stage[] }) {
  return (
    <section className="bg-cream px-6 py-20 md:px-[30px] md:py-24">
      <div className="mx-auto max-w-[1180px]">
        <p className="m-0 mb-3 font-display text-[13px] font-bold tracking-[0.2em] text-rust uppercase">Go deeper</p>
        <h2 className="m-0 mb-14 font-display text-3xl font-extrabold tracking-[-0.02em] text-ink uppercase md:text-[38px]">
          Every stage, with resources to learn more
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {stages.map((stage, index) => {
            const accent = index < 3 ? 'border-t-rust' : 'border-t-gold'
            return (
              <div
                key={stage.id}
                id={stage.id}
                className={`scroll-mt-24 border border-cream-border ${accent} border-t-4 bg-white p-7`}
              >
                <div className="mb-2 font-display text-xs font-bold tracking-[0.1em] text-rust">{stage.number}</div>
                <h3 className="m-0 mb-2 font-display text-xl font-extrabold tracking-[-0.01em] text-ink uppercase">
                  {stage.name}
                </h3>
                <p className="m-0 mb-5 max-w-[48ch] text-[15.5px] leading-relaxed text-body-muted">{stage.body}</p>

                <div className="space-y-3 border-t border-cream-border pt-5">
                  {stage.resources.map((resource) => (
                    <a key={resource.title} href={resource.href} className="block hover:opacity-75">
                      <div className="font-display text-sm font-bold text-rust underline decoration-1 underline-offset-2">
                        {resource.title} →
                      </div>
                      <div className="mt-0.5 text-[13px] text-body-faint">{resource.description}</div>
                    </a>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
