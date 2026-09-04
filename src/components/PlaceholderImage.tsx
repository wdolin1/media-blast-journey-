export function PlaceholderImage({
  label,
  className = '',
  dark = false,
}: {
  label: string
  className?: string
  dark?: boolean
}) {
  return (
    <div
      className={`flex items-center justify-center border-2 border-dashed text-center font-display text-xs font-semibold uppercase tracking-[0.1em] ${
        dark
          ? 'border-cream-on-dark/30 bg-white/5 text-cream-on-dark'
          : 'border-cream-border bg-white/60 text-body-faintest'
      } ${className}`}
    >
      <span className="px-6">{label}</span>
    </div>
  )
}
