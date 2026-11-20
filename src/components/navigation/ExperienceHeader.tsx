import { Info, Maximize2, Minimize2 } from 'lucide-react'
import { useI18n } from '@/app/providers/I18nProvider'
import { usePresentation } from '@/app/providers/PresentationProvider'
import { BrandMark } from '@/components/ui/BrandMark'
import { LanguageSwitcher } from '@/components/navigation/LanguageSwitcher'
import type { Route } from '@/hooks/useHashRoute'
import { cn } from '@/utils/cn'

interface ExperienceHeaderProps {
  route: Route
  onOpenAbout: () => void
}

export function ExperienceHeader({ route, onOpenAbout }: ExperienceHeaderProps) {
  const { t } = useI18n()
  const { isPresentation, togglePresentation } = usePresentation()

  const isHome = route.name === 'home'
  const isProgram =
    route.name === 'program' || route.name === 'chapter' || route.name === 'credits'

  const presentationLabel = isPresentation
    ? t('nav.exitPresentation')
    : t('nav.presentation')

  return (
    <header
      className={cn(
        'sticky top-0 z-40 transition-colors duration-500',
        isHome
          ? 'border-b border-transparent bg-gradient-to-b from-ink/90 via-ink/50 to-transparent'
          : 'border-b border-line/70 bg-ink/85 backdrop-blur-xl',
      )}
    >
      <div className="page-x flex h-16 items-center justify-between gap-3 sm:h-[4.5rem]">
        <a
          href="#/"
          title={t('a11y.brandHome')}
          className="group flex shrink-0 items-center gap-2.5"
        >
          <BrandMark className="h-8 w-8 text-bone transition-colors duration-300 group-hover:text-crimson" />
          <span className="flex flex-col leading-none">
            <span className="font-brand text-lg font-medium tracking-[-0.05em] text-bone">
              HIV<span className="text-crimson">.</span>
            </span>
            <span className="label mt-1 hidden max-w-[15rem] truncate text-[0.44rem] text-mist-dim sm:block">
              {t('intro.subtitle')}
            </span>
          </span>
          <span className="sr-only">{t('a11y.brandHome')}</span>
        </a>

        <nav className="flex items-center gap-1 sm:gap-2" aria-label={t('nav.program')}>
          <a
            href="#/program"
            aria-current={isProgram ? 'page' : undefined}
            className={cn(
              'label relative hidden h-10 items-center px-2 text-[0.56rem] transition-colors duration-200 sm:inline-flex',
              isProgram ? 'text-bone' : 'text-mist hover:text-bone',
            )}
          >
            {t('nav.program')}
            <span
              className={cn(
                'absolute inset-x-2 bottom-0 h-px bg-crimson transition-opacity duration-300',
                isProgram ? 'opacity-100' : 'opacity-0',
              )}
              aria-hidden="true"
            />
          </a>

          <LanguageSwitcher />

          <button
            type="button"
            onClick={togglePresentation}
            aria-label={presentationLabel}
            title={presentationLabel}
            className="label inline-flex h-10 items-center gap-2 border border-line px-2.5 text-[0.54rem] text-mist transition-colors duration-200 hover:border-line-strong hover:text-bone xl:px-3"
          >
            {isPresentation ? (
              <Minimize2 className="h-3.5 w-3.5" aria-hidden="true" />
            ) : (
              <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
            )}
            <span className="hidden xl:inline">{presentationLabel}</span>
          </button>

          <button
            type="button"
            onClick={onOpenAbout}
            aria-label={t('nav.openAbout')}
            title={t('nav.openAbout')}
            className="inline-flex h-10 w-10 items-center justify-center border border-line text-mist transition-colors duration-200 hover:border-line-strong hover:text-bone"
          >
            <Info className="h-4 w-4" aria-hidden="true" />
          </button>
        </nav>
      </div>
    </header>
  )
}
