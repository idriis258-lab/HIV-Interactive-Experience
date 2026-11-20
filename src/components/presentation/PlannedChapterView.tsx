import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useI18n } from '@/app/providers/I18nProvider'
import { Badge } from '@/components/ui/Badge'
import { ButtonLink } from '@/components/ui/Button'
import { Kicker } from '@/components/ui/Kicker'
import {
  getAdjacentChapters,
  sceneHref,
  sceneNumber,
  type SceneAccent,
  type SceneDefinition,
} from '@/config/scenes'
import { cn } from '@/utils/cn'

const ACCENT_GLOW: Record<SceneAccent, string> = {
  crimson: 'bg-crimson/10',
  cyan: 'bg-cyan/10',
  electric: 'bg-electric/10',
  bone: 'bg-bone/[0.06]',
}

interface PlannedChapterViewProps {
  scene: SceneDefinition
}

export function PlannedChapterView({ scene }: PlannedChapterViewProps) {
  const { t } = useI18n()
  const { previous, next } = getAdjacentChapters(scene.id)
  const isCoda = scene.kind === 'coda'

  const kicker = isCoda
    ? t('planned.kickerCoda')
    : t('planned.kicker', { number: sceneNumber(scene.id) })

  return (
    <section
      aria-labelledby="chapter-title"
      className="relative flex flex-1 flex-col overflow-x-clip"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <span className="absolute -end-8 top-0 font-brand text-[clamp(12rem,32vw,30rem)] leading-none text-bone/[0.035]">
          {sceneNumber(scene.id)}
        </span>
        <span
          className={cn(
            'absolute -end-24 top-24 h-80 w-80 rounded-full blur-[120px]',
            ACCENT_GLOW[scene.accent],
          )}
        />
        <span className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/70" />
      </div>

      <div className="page-x page-y relative z-10 mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.7fr)] lg:gap-16">
        <div>
          <Kicker>{kicker}</Kicker>

          <h1
            id="chapter-title"
            className="mt-6 font-display text-hero text-bone"
          >
            {t(scene.titleKey)}
          </h1>

          <p className="mt-4 text-small text-crimson">
            {isCoda ? t('planned.codaTitle') : t('planned.title')}
          </p>

          <div className="mt-10 border-t border-line pt-6">
            <h2 className="label text-[0.58rem] text-bone">
              {t('planned.scopeTitle')}
            </h2>
            <p className="mt-3 max-w-xl text-body leading-relaxed text-mist">
              {t(scene.scopeKey)}
            </p>
            <p className="mt-3 max-w-xl text-[0.78rem] leading-relaxed text-mist-dim">
              {isCoda ? t('planned.codaBody') : t('planned.scopeNote')}
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
            <ButtonLink
              href="#/program"
              variant="secondary"
              leadingIcon={
                <ArrowLeft className="h-4 w-4 rtl:-scale-x-100" aria-hidden="true" />
              }
            >
              {t('planned.back')}
            </ButtonLink>

            <div className="flex items-center gap-5">
              {previous ? (
                <a
                  href={sceneHref(previous.id)}
                  className="label group inline-flex items-center gap-2 text-[0.54rem] text-mist-dim transition-colors hover:text-bone"
                >
                  <ArrowLeft
                    className="h-3.5 w-3.5 rtl:-scale-x-100"
                    aria-hidden="true"
                  />
                  {t('planned.previous')}
                </a>
              ) : null}

              {next ? (
                <a
                  href={sceneHref(next.id)}
                  className="label group inline-flex items-center gap-2 text-[0.54rem] text-mist transition-colors hover:text-bone"
                >
                  {t('planned.next')}
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-colors group-hover:text-crimson rtl:-scale-x-100"
                    aria-hidden="true"
                  />
                </a>
              ) : null}
            </div>
          </div>
        </div>

        <aside className="border-t border-line pt-6 lg:border-s lg:border-t-0 lg:ps-8 lg:pt-0">
          <div>
            <h2 className="label text-[0.58rem] text-bone">
              {t('planned.statusLabel')}
            </h2>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <Badge tone="planned">{t('common.inProduction')}</Badge>
              <Badge tone="review">{t('common.reviewPending')}</Badge>
            </div>
            <p className="mt-4 text-small leading-relaxed text-mist">
              {t('planned.phaseBody', { number: scene.phase })}
            </p>
          </div>

          <div className="mt-7 border-t border-line pt-5">
            <h3 className="label text-[0.58rem] text-bone">
              {t('planned.reviewTitle')}
            </h3>
            <p className="mt-2 text-small leading-relaxed text-mist">
              {t('planned.reviewBody')}
            </p>
          </div>

          <div className="mt-7 border-t border-line pt-5">
            <h3 className="label text-[0.58rem] text-bone">
              {t('planned.referencesTitle')}
            </h3>
            <p className="mt-2 text-small leading-relaxed text-mist">
              {t('planned.referencesBody')}
            </p>
          </div>

          <div className="mt-7 border-t border-line pt-5">
            <h3 className="label text-[0.58rem] text-bone">
              {t('planned.nextStepsTitle')}
            </h3>
            <p className="mt-2 text-small leading-relaxed text-mist">
              {t('planned.nextStepsBody')}
            </p>
          </div>
        </aside>
      </div>
    </section>
  )
}
