import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { readStorage, removeStorage, writeStorage } from '@/utils/storage'

const MOTION_STORAGE_KEY = 'hiv.reduced-motion'

interface MotionPreferencesContextValue {
  reducedMotion: boolean
  systemReducedMotion: boolean
  hasOverride: boolean
  setReducedMotion: (value: boolean) => void
  resetToSystem: () => void
}

const MotionPreferencesContext = createContext<MotionPreferencesContextValue | null>(null)

function readInitialOverride(): boolean | null {
  if (typeof window === 'undefined') return null
  const stored = readStorage(MOTION_STORAGE_KEY)
  if (stored === 'true') return true
  if (stored === 'false') return false
  return null
}

export function MotionPreferencesProvider({ children }: { children: ReactNode }) {
  const systemReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  const [override, setOverride] = useState<boolean | null>(readInitialOverride)

  const reducedMotion = override ?? systemReducedMotion

  const setReducedMotion = useCallback((value: boolean) => {
    setOverride(value)
    writeStorage(MOTION_STORAGE_KEY, String(value))
  }, [])

  const resetToSystem = useCallback(() => {
    setOverride(null)
    removeStorage(MOTION_STORAGE_KEY)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.reducedMotion = String(reducedMotion)
  }, [reducedMotion])

  const value = useMemo<MotionPreferencesContextValue>(
    () => ({
      reducedMotion,
      systemReducedMotion,
      hasOverride: override !== null,
      setReducedMotion,
      resetToSystem,
    }),
    [reducedMotion, systemReducedMotion, override, setReducedMotion, resetToSystem],
  )

  return (
    <MotionPreferencesContext.Provider value={value}>
      {children}
    </MotionPreferencesContext.Provider>
  )
}

export function useMotionPreferences(): MotionPreferencesContextValue {
  const context = useContext(MotionPreferencesContext)
  if (!context) {
    throw new Error('useMotionPreferences must be used within MotionPreferencesProvider')
  }
  return context
}
