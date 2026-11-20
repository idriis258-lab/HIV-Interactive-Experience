import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface KickerProps {
  children: ReactNode
  className?: string
  tone?: 'crimson' | 'cyan' | 'bone'
}

const TONE_CLASSES = {
  crimson: 'bg-crimson',
  cyan: 'bg-cyan',
  bone: 'bg-bone',
} as const

export function Kicker({ children, className, tone = 'crimson' }: KickerProps) {
  return (
    <p className={cn('eyebrow', className)}>
      <span
        className={cn('h-px w-8 shrink-0', TONE_CLASSES[tone])}
        aria-hidden="true"
      />
      <span>{children}</span>
    </p>
  )
}
