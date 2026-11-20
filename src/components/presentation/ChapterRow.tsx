import { ArrowUpRight } from 'lucide-react'
import { useI18n } from '@/app/providers/I18nProvider'
import { Badge } from '@/components/ui/Badge'
import { sceneHref, sceneNumber, type SceneDefinition } from '@/config/scenes'

interface ChapterRowProps {
  scene: SceneDefinition
}

export function ChapterRow({ scene }: ChapterRowProps) {
  const { t } = useI18n()
  const isReady = scene.status === 'ready'
  const Icon = scene.icon

  return (
    <li data-reveal className="border-b border-line">
      <a
        href={sceneHref(scene.id)}
        className="group -mx-3 grid grid-cols-[2.25rem_minmax(0,1fr)_auto] items-center gap-3 px-3 py-4 transition-colors duration-300 hover:bg-bone/[0.025] sm:grid-cols-[3rem_minmax(0,1fr)_auto] sm:gap-5 sm:py-5"
      >
        <span className="font-brand text-base tabular-nums text-mist-dim transition-colors duration-300 group-hover:text-crimson sm:text-lg">
          {sceneNumber(scene.id)}
        </span>

        <span className="min-w-0">
          <span className="flex items-center gap-2">
            <span className="font-display text-[clamp(1.05rem,1.5vw,1.35rem)] leading-tight text-bone">
              {t(scene.titleKey)}
            </span>
            {isReady ? (
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan"
                aria-hidden="true"
              />
            ) : null}
          </span>
          <span className="mt-1 line-clamp-2 block text-[0.8rem] leading-snug text-mist-dim sm:line-clamp-1">
            {t(scene.scopeKey)}
          </span>
        </span>

        <span className="flex items-center gap-3">
          <Badge tone={isReady ? 'ready' : 'planned'} className="hidden sm:inline-flex">
            {isReady ? t('program.status.ready') : t('program.status.planned')}
          </Badge>
          <Icon className="hidden h-4 w-4 text-mist-dim md:block" aria-hidden="true" />
          <ArrowUpRight
            className="h-4 w-4 text-mist transition-colors duration-300 group-hover:text-bone rtl:-scale-x-100"
            aria-hidden="true"
          />
        </span>
      </a>
    </li>
  )
}
