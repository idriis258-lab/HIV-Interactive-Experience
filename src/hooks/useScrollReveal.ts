import { useEffect, useRef } from 'react'
import { useMotionPreferences } from '@/app/providers/MotionPreferencesProvider'
import { gsap, ScrollTrigger } from '@/utils/gsap'

/**
 * Reveals [data-reveal] elements as they enter the viewport.
 * Above-the-fold content is revealed immediately so the page is never
 * dependent on a scroll event to become readable.
 */
export function useScrollReveal<T extends HTMLElement>() {
  const rootRef = useRef<T>(null)
  const { reducedMotion } = useMotionPreferences()

  useEffect(() => {
    const root = rootRef.current
    if (!root || reducedMotion) return

    const elements = Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]'))
    if (elements.length === 0) return

    const aboveFold: HTMLElement[] = []
    const belowFold: HTMLElement[] = []

    for (const element of elements) {
      if (element.getBoundingClientRect().top < window.innerHeight * 0.92) {
        aboveFold.push(element)
      } else {
        belowFold.push(element)
      }
    }

    let safetyTimer: number | undefined
    let triggers: ScrollTrigger[] = []

    const context = gsap.context(() => {
      if (aboveFold.length > 0) {
        gsap.fromTo(
          aboveFold,
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.06,
            ease: 'power3.out',
            overwrite: true,
          },
        )
      }

      if (belowFold.length > 0) {
        gsap.set(belowFold, { opacity: 0, y: 18 })
        triggers = ScrollTrigger.batch(belowFold, {
          start: 'top 92%',
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.06,
              ease: 'power3.out',
              overwrite: true,
            }),
        })

        safetyTimer = window.setTimeout(() => {
          if (triggers.length === 0) {
            gsap.to(belowFold, {
              opacity: 1,
              y: 0,
              duration: 0.4,
              overwrite: true,
            })
          }
        }, 1200)
      }

      ScrollTrigger.refresh()
    }, root)

    return () => {
      if (safetyTimer !== undefined) window.clearTimeout(safetyTimer)
      triggers.forEach((trigger) => trigger.kill())
      context.revert()
    }
  }, [reducedMotion])

  return rootRef
}
