import type { Transition, Variants } from 'framer-motion'

export const EASE_CINEMATIC: [number, number, number, number] = [0.16, 1, 0.3, 1]
export const EASE_OUT_EXPO: [number, number, number, number] = [0.19, 1, 0.22, 1]

export const DURATION = {
  fast: 0.18,
  base: 0.32,
  slow: 0.6,
  cinematic: 1,
} as const

export const TRANSITION: Transition = {
  duration: DURATION.slow,
  ease: EASE_CINEMATIC,
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: TRANSITION },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: TRANSITION },
}

export const staggerContainer = (stagger = 0.08, delay = 0.1): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
})

export const titleReveal: Variants = {
  hidden: { opacity: 0, y: 34, clipPath: 'inset(0 0 100% 0)' },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: 'inset(0 0 0% 0)',
    transition: {
      duration: 0.95,
      ease: EASE_CINEMATIC,
    },
  },
}
