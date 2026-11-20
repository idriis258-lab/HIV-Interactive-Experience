import { cn } from '@/utils/cn'

export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={cn('h-9 w-9', className)}
      aria-hidden="true"
    >
      <circle
        cx="20"
        cy="20"
        r="15.5"
        stroke="currentColor"
        strokeOpacity="0.42"
        strokeWidth="1"
      />
      <path
        d="M20 4.5a15.5 15.5 0 0 1 14.86 11.02"
        stroke="var(--color-crimson)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="20" cy="20" r="3.5" fill="var(--color-crimson)" />
    </svg>
  )
}
