import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { lazy, Suspense } from 'react'
import { useI18n } from '@/app/providers/I18nProvider'
import { useMotionPreferences } from '@/app/providers/MotionPreferencesProvider'
import { Button, ButtonLink } from '@/components/ui/Button'
import { ErrorBoundary } from '@/components/ui/ErrorBoundary'
import { Kicker } from '@/components/ui/Kicker'
import { WebGLFallback } from '@/components/ui/WebGLFallback'
import { fadeUp, staggerContainer, titleReveal } from '@/config/motion'
import { cn } from '@/utils/cn'

const SceneCanvas = lazy(() => import('@/three/SceneCanvas'))

interface IntroSceneProps {
  onOpenAbout: () => void
}

export function IntroScene({ onOpenAbout }: IntroSceneProps) {
  const { t } = useI18n()
  const { reducedMotion } = useMotionPreferences()

  return (
    <section
      aria-labelledby="intro-title"
      className="relative flex flex-1 flex-col overflow-x-clip"
    >
      <div className="pointer-events-none absolute inset-0">
        <ErrorBoundary fallback={<WebGLFallback />}>
          <Suspense fallback={null}>
            <SceneCanvas animate={!reducedMotion} />
          </Suspense>
        </ErrorBoundary>

        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 14%, rgba(5,5,6,0.62) 80%)',
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <motion.div
        initial={reducedMotion ? false : 'hidden'}
        animate="visible"
        variants={staggerContainer(0.09, 0.15)}
        className="page-x page-y relative z-10 flex flex-1 flex-col justify-center"
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">
          <motion.div variants={fadeUp}>
            <Kicker>{t('intro.kicker')}</Kicker>
          </motion.div>

          <motion.h1
            id="intro-title"
            variants={titleReveal}
            className="mt-6 font-brand text-display text-bone text-glow"
          >
            HIV<span className="text-crimson">.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-2 max-w-3xl font-display text-[clamp(0.95rem,1.9vw,1.8rem)] leading-tight text-bone/90"
          >
            {t('intro.subtitle')}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col gap-1 font-display text-[clamp(1.15rem,2.4vw,2.35rem)] leading-[1.16]"
          >
            <span className="text-bone">{t('intro.tagline1')}</span>
            <span className="text-mist">{t('intro.tagline2')}</span>
            <span className="text-crimson">{t('intro.tagline3')}</span>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-xl text-small leading-relaxed text-mist"
          >
            {t('intro.prologue')}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center"
          >
            <ButtonLink
              href="#/program"
              size="lg"
              className="w-full sm:w-auto"
              trailingIcon={
                <ArrowRight
                  className="h-4 w-4 rtl:-scale-x-100"
                  aria-hidden="true"
                />
              }
            >
              {t('nav.enterExperience')}
            </ButtonLink>

            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
              onClick={onOpenAbout}
            >
              {t('nav.aboutBuild')}
            </Button>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className={cn(
              'label mt-8 max-w-md text-[0.54rem] leading-relaxed text-mist-dim',
            )}
          >
            {t('intro.scienceNote')}
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}
