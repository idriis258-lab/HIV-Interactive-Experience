import { useI18n } from '@/app/providers/I18nProvider'
import { SITE } from '@/config/site'
import type { Route } from '@/hooks/useHashRoute'

interface ExperienceFooterProps {
  route: Route
}

export function ExperienceFooter({ route }: ExperienceFooterProps) {
  const { t } = useI18n()
  const isHome = route.name === 'home'

  return (
    <footer className="relative z-10 border-t border-line/60 bg-ink/60 backdrop-blur-sm">
      <div className="page-x flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <p className="label text-[0.54rem] text-mist-dim presentation:text-[0.64rem]">
          {t('footer.phase')}
        </p>

        <p className="label hidden text-center text-[0.54rem] text-mist-dim sm:block presentation:text-[0.64rem]">
          {isHome
            ? `${t('footer.chapters', { count: SITE.totalChapters })} · ${t('footer.format')}`
            : t('footer.disclaimer')}
        </p>

        <p className="label text-[0.54rem] text-mist-dim presentation:text-[0.64rem]">
          {t('footer.abstract')}
        </p>
      </div>
    </footer>
  )
}
