import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  children: ReactNode
  tone?: 'outline' | 'ghost'
}

export function IconButton({
  label,
  children,
  tone = 'outline',
  className,
  type = 'button',
  ...props
}: IconButtonProps) {
  return (
    <button
      type={type}
      aria-label={label}
      title={label}
      className={cn(
        'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xs transition-colors duration-300',
        tone === 'outline'
          ? 'border border-line text-mist hover:border-line-strong hover:text-bone'
          : 'text-mist hover:text-bone',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
