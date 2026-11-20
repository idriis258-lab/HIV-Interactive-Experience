import { ArrowLeft } from 'lucide-react'
import { useI18n } from '@/app/providers/I18nProvider'
import { ButtonLink } from '@/components/ui/Button'
import { Kicker } from '@/components/ui/Kicker'

export function NotFoundView() {
  const { t } = useI18n()

  return (
    <section
      aria-labelledby="not-found-title"
      className="page-x page-y relative flex flex-1 items-center overflow-hidden"
    >
      <span
        className="pointer-events-none absolute -end-6 top-1/2 -translate-y-1/2 font-brand text-[clamp(12rem,32vw,28rem)] leading-none text-bone/[0.035]"
        aria-hidden="true"
      >
        404
      </span>

      <div className="relative z-10 mx-auto w-full max-w-3xl">
        <Kicker>{t('error.notFoundTitle')}</Kicker>
        <h1
          id="not-found-title"
          className="mt-5 font-display text-hero text-bone"
        >
          {t('error.notFoundTitle')}
        </h1>
        <p className="mt-5 max-w-lg text-small leading-relaxed text-mist">
          {t('error.notFoundBody')}
        </p>
        <ButtonLink
          href="#/program"
          variant="secondary"
          className="mt-8"
          leadingIcon={
            <ArrowLeft className="h-4 w-4 rtl:-scale-x-100" aria-hidden="true" />
          }
        >
          {t('error.notFoundCta')}
        </ButtonLink>
      </div>
    </section>
  )
}
