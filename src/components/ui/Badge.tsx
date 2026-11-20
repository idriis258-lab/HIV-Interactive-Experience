import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

export type BadgeTone = 'ready' | 'planned' | 'review' | 'neutral'

const DOT_CLASSES: Record<BadgeTone, string> = {
  ready: 'bg-cyan',
  planned: 'bg-crimson',
  review: 'bg-mist-dim',
  neutral: 'bg-mist-dim',
}

interface BadgeProps {
  children: ReactNode
  tone?: BadgeTone
  className?: string
}

export function Badge({ children, tone = 'neutral', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'label inline-flex items-center gap-2 border border-line px-2.5 py-1 text-[0.56rem] text-mist',
        className,
      )}
    >
      <span
        className={cn('h-1.5 w-1.5 shrink-0 rounded-full', DOT_CLASSES[tone])}
        aria-hidden="true"
      />
      {children}
    </span>
  )
}
