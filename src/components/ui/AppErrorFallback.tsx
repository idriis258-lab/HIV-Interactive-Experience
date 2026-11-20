import { RotateCcw } from 'lucide-react'
import { useTranslation } from '@/app/providers/I18nProvider'
import { Button } from '@/components/ui/Button'
import { Kicker } from '@/components/ui/Kicker'

export function AppErrorFallback() {
  const t = useTranslation()

  return (
    <div
      role="alert"
      className="flex min-h-svh items-center justify-center bg-ink px-[var(--safe-x)] py-16"
    >
      <div className="w-full max-w-xl">
        <Kicker>{t('error.title')}</Kicker>
        <h1 className="mt-6 font-display text-title text-bone">{t('error.title')}</h1>
        <p className="mt-5 max-w-md text-small text-mist">{t('error.body')}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button
            onClick={() => window.location.reload()}
            leadingIcon={<RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />}
          >
            {t('error.reload')}
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              window.location.hash = '#/'
              window.location.reload()
            }}
          >
            {t('error.home')}
          </Button>
        </div>
      </div>
    </div>
  )
}
