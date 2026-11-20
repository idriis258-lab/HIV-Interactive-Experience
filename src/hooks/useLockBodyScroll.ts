import { useEffect } from 'react'

export function useLockBodyScroll(locked: boolean): void {
  useEffect(() => {
    if (!locked) return

    const previousOverflow = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'

    return () => {
      document.documentElement.style.overflow = previousOverflow
    }
  }, [locked])
}
