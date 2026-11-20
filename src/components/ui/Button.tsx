import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react'
import { cn } from '@/utils/cn'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonStyleOptions {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
}

const BASE_CLASSES =
  'group inline-flex select-none items-center justify-center gap-3 rounded-xs border border-transparent font-body font-medium transition-colors duration-300 disabled:pointer-events-none disabled:opacity-40'

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: 'bg-bone text-ink hover:bg-white',
  secondary:
    'border-line-strong bg-transparent text-bone hover:border-bone hover:bg-bone/5',
  ghost: 'text-mist hover:text-bone',
}

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-[0.62rem]',
  md: 'h-11 px-6 text-[0.66rem]',
  lg: 'h-14 px-8 text-[0.72rem]',
}

export function buttonClassName({
  variant = 'primary',
  size = 'md',
  className,
}: ButtonStyleOptions = {}): string {
  return cn(BASE_CLASSES, 'label', VARIANT_CLASSES[variant], SIZE_CLASSES[size], className)
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  leadingIcon?: ReactNode
  trailingIcon?: ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  leadingIcon,
  trailingIcon,
  className,
  children,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonClassName({ variant, size, className })}
      {...props}
    >
      {leadingIcon}
      <span>{children}</span>
      {trailingIcon}
    </button>
  )
}

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  leadingIcon?: ReactNode
  trailingIcon?: ReactNode
}

export function ButtonLink({
  variant = 'primary',
  size = 'md',
  leadingIcon,
  trailingIcon,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a className={buttonClassName({ variant, size, className })} {...props}>
      {leadingIcon}
      <span>{children}</span>
      {trailingIcon}
    </a>
  )
}
