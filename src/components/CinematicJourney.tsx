import { useEffect, useRef, useState } from 'react'
import type { Stage } from '../data/mediaBlastStages'

interface CinematicJourneyProps {
  stages: Stage[]
  logo: string
  kicker: string
  title: string
  /** Real rendered frame URLs (e.g. frames/f000.jpg...f239.jpg). Omit to draw
   * placeholder frames on the canvas instead — swap this in once real
   * photography/render frames exist and the scrubbing behaves identically. */
  frames?: string[]
}

function drawPlaceholderFrame(ctx: CanvasRenderingContext2D, w: number, h: number, stage: Stage, alpha: number) {
  ctx.save()
  ctx.globalAlpha = alpha
  ctx.fillStyle = '#1d1c1a'
  ctx.fillRect(0, 0, w, h)

  const grad = ctx.createRadialGradient(w / 2, h * 0.55, h * 0.12, w / 2, h * 0.55, h * 0.95)
  grad.addColorStop(0, 'rgba(255,255,255,0.05)')
  grad.addColorStop(1, 'rgba(0,0,0,0)')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, w, h)

  ctx.fillStyle = 'rgba(243,236,224,0.07)'
  ctx.font = `900 ${Math.round(h * 0.6)}px Archivo, sans-serif`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(stage.number, w / 2, h * 0.52)

  const inset = Math.round(Math.min(w, h) * 0.045)
  ctx.strokeStyle = 'rgba(227,165,31,0.35)'
  ctx.lineWidth = Math.max(1, Math.round(h * 0.0018))
  ctx.setLineDash([Math.round(h * 0.012), Math.round(h * 0.009)])
  ctx.strokeRect(inset, inset, w - inset * 2, h - inset * 2)
  ctx.setLineDash([])

  ctx.fillStyle = 'rgba(243,236,224,0.55)'
  ctx.font = `800 ${Math.max(12, Math.round(h * 0.018))}px Archivo, sans-serif`
  const label = `Placeholder frame · ${stage.name}`.toUpperCase()
  // manual letter-spacing so canvas text matches the tracked-uppercase brand label style
  let x = w / 2 - ctx.measureText(label.split('').join(' ')).width / 2
  const y = h * 0.7
  for (const ch of label) {
    ctx.fillText(ch, x, y)
    x += ctx.measureText(ch).width + Math.round(h * 0.0022)
  }
  ctx.restore()
}

export function CinematicJourney({ stages, logo, kicker, title, frames }: CinematicJourneyProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const pinRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const bootRef = useRef<HTMLDivElement>(null)

  const kRef = useRef(0)
  const [railIndex, setRailIndex] = useState(0)
  const [captionIndex, setCaptionIndex] = useState(0)
  const [captionVisible, setCaptionVisible] = useState(true)

  const NF = frames?.length ?? stages.length

  useEffect(() => {
    const canvas = canvasRef.current!
    const pin = pinRef.current!
    const track = trackRef.current!
    const ctx = canvas.getContext('2d', { alpha: false })!

    const imgs: HTMLImageElement[] = []
    let ready = 0
    if (frames) {
      for (const src of frames) {
        const img = new Image()
        img.decoding = 'async'
        img.onload = img.onerror = () => {
          ready++
          if (bootRef.current) bootRef.current.style.width = `${(ready / frames.length) * 100}%`
          if (ready === frames.length && bootRef.current) bootRef.current.style.opacity = '0'
          paint()
        }
        img.src = src
        imgs.push(img)
      }
    }

    let cur = -1e9

    function progress() {
      const r = track.getBoundingClientRect()
      const s = r.height - pin.offsetHeight
      return s <= 0 ? 0 : Math.min(1, Math.max(0, -r.top / s))
    }

    function paint() {
      const p = progress()
      const t = p * (NF - 1)
      const i = Math.min(NF - 1, Math.floor(t))
      const f = t - i
      if (Math.abs(t - cur) < 0.002) {
        updateCaption(p)
        return
      }
      cur = t
      const cw = canvas.width
      const ch = canvas.height

      if (frames) {
        const A = imgs[i]
        const B = imgs[Math.min(NF - 1, i + 1)]
        if (!(A && A.complete && A.naturalWidth)) return
        const put = (im: HTMLImageElement, alpha: number) => {
          const s = Math.max(cw / im.naturalWidth, ch / im.naturalHeight)
          ctx.globalAlpha = alpha
          ctx.drawImage(im, (cw - im.naturalWidth * s) / 2, (ch - im.naturalHeight * s) / 2, im.naturalWidth * s, im.naturalHeight * s)
        }
        put(A, 1)
        if (f > 0.004 && B && B.complete && B.naturalWidth && B !== A) put(B, f)
        ctx.globalAlpha = 1
      } else {
        const stageA = stages[Math.min(stages.length - 1, i)]
        const stageB = stages[Math.min(stages.length - 1, i + 1)]
        drawPlaceholderFrame(ctx, cw, ch, stageA, 1)
        if (f > 0.004 && stageB !== stageA) drawPlaceholderFrame(ctx, cw, ch, stageB, f)
      }

      updateCaption(p)
    }

    function updateCaption(p: number) {
      let k = 0
      for (let j = 0; j < stages.length; j++) if (p >= stages[j].progress - 1e-6) k = j
      setRailIndex(k)
      if (kRef.current !== k) {
        kRef.current = k
        setCaptionVisible(false)
        setTimeout(() => {
          setCaptionIndex(k)
          setCaptionVisible(true)
        }, 140)
      }
    }

    function size() {
      const r = pin.getBoundingClientRect()
      const d = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(r.width * d)
      canvas.height = Math.round(r.height * d)
      canvas.style.width = `${r.width}px`
      canvas.style.height = `${r.height}px`
      cur = -1e9
      paint()
    }

    let queued = false
    const onScroll = () => {
      if (!queued) {
        queued = true
        requestAnimationFrame(() => {
          queued = false
          paint()
        })
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', size)
    document.fonts?.ready?.then(paint)
    size()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', size)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stages, frames])

  const trackHeightVh = Math.round(stages.length * 108.6)
  const stage = stages[captionIndex]

  return (
    <section ref={trackRef} className="relative" style={{ height: `${trackHeightVh}vh` }}>
      <div ref={pinRef} className="sticky top-0 h-screen overflow-hidden bg-ink">
        <canvas ref={canvasRef} className="block h-full w-full" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(29,28,26,.78) 0%, rgba(29,28,26,0) 30%, rgba(29,28,26,.1) 58%, rgba(22,21,19,.92) 100%)',
          }}
        />

        {/* masthead */}
        <div className="absolute inset-x-0 top-0 z-10 px-6 pt-7 md:px-[30px]">
          <div className="mx-auto flex max-w-[1180px] flex-wrap items-center gap-4">
            <img src={logo} alt="Log & Timber Worx" className="h-14 w-auto md:h-16" />
            <div className="font-display text-[11.5px] font-bold tracking-[0.18em] text-cream-on-dark uppercase">
              {kicker}
            </div>
          </div>
          <h1 className="mx-auto mt-5 max-w-[1180px] px-0 font-display text-[clamp(36px,6.4vw,82px)] leading-[0.93] font-black tracking-[-0.02em] text-cream-bright uppercase [text-shadow:0_2px_34px_rgba(0,0,0,.55)]">
            {title}
          </h1>
        </div>

        {/* progress rail */}
        <div className="absolute top-1/2 right-6 z-10 hidden -translate-y-1/2 flex-col gap-2.5 sm:flex md:right-[30px]">
          {stages.map((s, index) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              aria-label={`Jump to ${s.name}`}
              className={`h-0.5 rounded-full transition-all duration-300 ${
                index === railIndex
                  ? 'w-[40px] bg-gold'
                  : index < railIndex
                    ? 'w-[26px] bg-cream/45'
                    : 'w-[26px] bg-cream/22'
              }`}
            />
          ))}
        </div>

        {/* caption */}
        <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-10 md:px-[30px]">
          <div
            className="mx-auto grid max-w-[660px] grid-cols-[auto_1fr] gap-x-5 transition-opacity duration-300"
            style={{ opacity: captionVisible ? 1 : 0 }}
          >
            <div className="pt-2.5 font-display text-xs font-bold tracking-[0.1em] text-gold">{stage.number}</div>
            <div>
              <h2 className="m-0 font-display text-[clamp(22px,3.2vw,34px)] leading-[1.1] font-extrabold tracking-[-0.012em] text-cream-bright uppercase">
                {stage.name}
              </h2>
              <p className="mt-2.5 max-w-[56ch] text-[17px] leading-[1.55] text-cream-on-dark">{stage.body}</p>
            </div>
          </div>
        </div>

        {frames && <div ref={bootRef} className="absolute bottom-0 left-0 z-20 h-0.5 w-0 bg-gold transition-[width] duration-200 ease-linear" />}
      </div>
    </section>
  )
}
