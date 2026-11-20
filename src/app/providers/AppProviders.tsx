import type { ReactNode } from 'react'
import { I18nProvider } from './I18nProvider'
import { MotionPreferencesProvider } from './MotionPreferencesProvider'
import { PresentationProvider } from './PresentationProvider'

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <I18nProvider>
      <MotionPreferencesProvider>
        <PresentationProvider>{children}</PresentationProvider>
      </MotionPreferencesProvider>
    </I18nProvider>
  )
}
