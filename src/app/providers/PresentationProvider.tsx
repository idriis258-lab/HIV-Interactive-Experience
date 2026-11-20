import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { PRESENTATION, PRESENTATION_QUERY_VALUE } from '@/config/presentation'
import { updateQueryParam } from '@/utils/url'

interface PresentationContextValue {
  isPresentation: boolean
  isFullscreen: boolean
  setPresentation: (value: boolean) => void
  togglePresentation: () => void
}

const PresentationContext = createContext<PresentationContextValue | null>(null)

function readInitialPresentation(): boolean {
  if (typeof window === 'undefined') return false
  return (
    new URLSearchParams(window.location.search).get(
      PRESENTATION.presentationQueryParam,
    ) === PRESENTATION_QUERY_VALUE
  )
}

export function PresentationProvider({ children }: { children: ReactNode }) {
  const [isPresentation, setIsPresentation] = useState(readInitialPresentation)
  const [isFullscreen, setIsFullscreen] = useState(
    () => typeof document !== 'undefined' && Boolean(document.fullscreenElement),
  )

  useEffect(() => {
    document.documentElement.dataset.presentation = String(isPresentation)
    updateQueryParam(
      PRESENTATION.presentationQueryParam,
      isPresentation ? PRESENTATION_QUERY_VALUE : null,
    )
  }, [isPresentation])

  useEffect(() => {
    const handleFullscreenChange = () => {
      const fullscreen = Boolean(document.fullscreenElement)
      setIsFullscreen(fullscreen)
      if (!fullscreen) {
        setIsPresentation(false)
      }
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  const setPresentation = useCallback((value: boolean) => {
    setIsPresentation(value)

    if (typeof document === 'undefined') return

    if (value) {
      const requestFullscreen = document.documentElement.requestFullscreen
      if (requestFullscreen && !document.fullscreenElement) {
        void requestFullscreen.call(document.documentElement).catch(() => undefined)
      }
      return
    }

    if (document.fullscreenElement) {
      void document.exitFullscreen().catch(() => undefined)
    }
  }, [])

  const togglePresentation = useCallback(() => {
    setPresentation(!isPresentation)
  }, [isPresentation, setPresentation])

  const value = useMemo<PresentationContextValue>(
    () => ({
      isPresentation,
      isFullscreen,
      setPresentation,
      togglePresentation,
    }),
    [isPresentation, isFullscreen, setPresentation, togglePresentation],
  )

  return (
    <PresentationContext.Provider value={value}>
      {children}
    </PresentationContext.Provider>
  )
}

export function usePresentation(): PresentationContextValue {
  const context = useContext(PresentationContext)
  if (!context) {
    throw new Error('usePresentation must be used within PresentationProvider')
  }
  return context
}
