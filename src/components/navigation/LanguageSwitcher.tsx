import { useI18n } from '@/app/providers/I18nProvider'
import { LOCALES } from '@/config/i18n'
import { cn } from '@/utils/cn'

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n()

  return (
    <div
      role="group"
      aria-label={t('a11y.language')}
      dir="ltr"
      className="flex items-center border border-line p-0.5"
    >
      {LOCALES.map((definition) => {
        const isActive = definition.code === locale

        return (
          <button
            key={definition.code}
            type="button"
            lang={definition.htmlLang}
            aria-pressed={isActive}
            aria-label={`${definition.shortLabel} — ${t('a11y.langOption', {
              language: definition.nativeLabel,
            })}`}
            title={definition.nativeLabel}
            onClick={() => setLocale(definition.code)}
            className={cn(
              'label h-8 min-w-8 px-2 text-[0.54rem] transition-colors duration-200',
              isActive ? 'bg-bone text-ink' : 'text-mist hover:text-bone',
            )}
          >
            {definition.shortLabel}
          </button>
        )
      })}
    </div>
  )
}
