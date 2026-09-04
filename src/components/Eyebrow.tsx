import type { ReactNode } from 'react'

export function Eyebrow({
  children,
  tone = 'rust',
  className = '',
}: {
  children: ReactNode
  tone?: 'rust' | 'gold'
  className?: string
}) {
  const color = tone === 'gold' ? 'text-gold' : 'text-rust'
  return (
    <div
      className={`font-display text-[13px] font-bold uppercase tracking-[0.2em] ${color} ${className}`}
    >
      {children}
    </div>
  )
}
