import { useEffect, useRef } from 'react'
import { isEditableTarget } from '@/utils/dom'

interface KeyboardShortcutOptions {
  onHome: () => void
  onProgram: () => void
  onPresentation: () => void
  onAbout: () => void
}

export function useKeyboardShortcuts(options: KeyboardShortcutOptions): void {
  const optionsRef = useRef(options)
  optionsRef.current = options

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.defaultPrevented) return
      if (event.metaKey || event.ctrlKey || event.altKey) return
      if (document.querySelector('dialog[open]')) return
      if (isEditableTarget(event.target)) return

      const key = event.key.toLowerCase()

      if (key === 'h') {
        event.preventDefault()
        optionsRef.current.onHome()
        return
      }

      if (key === 'g') {
        event.preventDefault()
        optionsRef.current.onProgram()
        return
      }

      if (key === 'p') {
        event.preventDefault()
        optionsRef.current.onPresentation()
        return
      }

      if (event.key === '?') {
        event.preventDefault()
        optionsRef.current.onAbout()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])
}
