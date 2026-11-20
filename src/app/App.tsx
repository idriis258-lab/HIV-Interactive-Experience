import { MotionConfig } from 'framer-motion'
import type { ReactNode } from 'react'
import { AppErrorFallback } from '@/components/ui/AppErrorFallback'
import { ErrorBoundary } from '@/components/ui/ErrorBoundary'
import { AppProviders } from './providers/AppProviders'
import { useMotionPreferences } from './providers/MotionPreferencesProvider'
import { Experience } from './Experience'

function MotionBridge({ children }: { children: ReactNode }) {
  const { reducedMotion } = useMotionPreferences()

  return (
    <MotionConfig reducedMotion={reducedMotion ? 'always' : 'never'}>
      {children}
    </MotionConfig>
  )
}

export function App() {
  return (
    <AppProviders>
      <MotionBridge>
        <ErrorBoundary fallback={<AppErrorFallback />}>
          <Experience />
        </ErrorBoundary>
      </MotionBridge>
    </AppProviders>
  )
}
