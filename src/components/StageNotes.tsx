import type { Stage } from '../data/mediaBlastStages'

export function StageNotes({ stages }: { stages: Stage[] }) {
  return (
    <section className="border-t border-line px-6 py-16 md:px-[30px] md:py-24">
      <div className="mx-auto max-w-[1180px]">
        <p className="m-0 mb-2.5 font-mono text-[11px] tracking-[0.16em] text-muted uppercase">Go deeper</p>
        <h2 className="m-0 mb-14 font-display text-2xl font-bold tracking-[-0.014em] text-ink-bright md:text-[32px]">
          Every stage, with resources to learn more
        </h2>

        <div className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2">
          {stages.map((stage) => (
            <div key={stage.id} id={stage.id} className="scroll-mt-24 border-t border-line pt-6">
              <div className="mb-2 font-mono text-xs tracking-[0.1em] text-amber">{stage.number}</div>
              <h3 className="m-0 mb-2 font-display text-xl font-bold tracking-[-0.012em] text-ink-bright">
                {stage.name}
              </h3>
              <p className="m-0 mb-5 max-w-[48ch] text-[15.5px] leading-relaxed text-muted">{stage.body}</p>

              <div className="space-y-3">
                {stage.resources.map((resource) => (
                  <a key={resource.title} href={resource.href} className="block hover:opacity-75">
                    <div className="font-display text-sm font-bold text-ink underline decoration-1 underline-offset-2">
                      {resource.title} →
                    </div>
                    <div className="mt-0.5 text-[13px] text-muted">{resource.description}</div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
