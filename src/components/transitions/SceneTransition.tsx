import { AnimatePresence, motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useMotionPreferences } from '@/app/providers/MotionPreferencesProvider'
import { EASE_CINEMATIC } from '@/config/motion'

interface SceneTransitionProps {
  routeKey: string
  children: ReactNode
}

export function SceneTransition({ routeKey, children }: SceneTransitionProps) {
  const { reducedMotion } = useMotionPreferences()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={routeKey}
        initial={reducedMotion ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        exit={reducedMotion ? undefined : { opacity: 0, y: -10 }}
        transition={{
          duration: reducedMotion ? 0 : 0.42,
          ease: EASE_CINEMATIC,
        }}
        className="flex min-h-full flex-1 flex-col"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
