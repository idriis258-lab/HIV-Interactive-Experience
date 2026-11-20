import { useTranslation } from '@/app/providers/I18nProvider'

export function CanvasLoading() {
  const t = useTranslation()

  return (
    <div
      role="status"
      aria-live="polite"
      className="pointer-events-none absolute inset-0 grid place-items-center"
    >
      <div className="flex flex-col items-center gap-4">
        <span className="label text-[0.58rem] text-mist">{t('loading.canvas')}</span>
        <span className="relative block h-px w-32 overflow-hidden bg-line">
          <span className="loading-sweep absolute inset-y-0 start-0 w-1/2 bg-crimson" />
        </span>
      </div>
    </div>
  )
}
