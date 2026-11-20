import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  DEFAULT_LOCALE,
  isLocale,
  LOCALE_MAP,
  LOCALE_STORAGE_KEY,
  type Locale,
  type TextDirection,
} from '@/config/i18n'
import { DICTIONARIES, type TranslationKey } from '@/content/translations'
import { formatTemplate } from '@/utils/format'
import { readStorage, writeStorage } from '@/utils/storage'

interface I18nContextValue {
  locale: Locale
  dir: TextDirection
  setLocale: (locale: Locale) => void
  t: (key: TranslationKey, values?: Record<string, string | number>) => string
  formatNumber: (value: number) => string
}

const I18nContext = createContext<I18nContextValue | null>(null)

function readInitialLocale(): Locale {
  if (typeof window === 'undefined') return DEFAULT_LOCALE

  const queryLocale = new URLSearchParams(window.location.search).get('lang')
  if (isLocale(queryLocale)) return queryLocale

  const storedLocale = readStorage(LOCALE_STORAGE_KEY)
  if (isLocale(storedLocale)) return storedLocale

  return DEFAULT_LOCALE
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readInitialLocale)

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale)
    writeStorage(LOCALE_STORAGE_KEY, nextLocale)
  }, [])

  useEffect(() => {
    const definition = LOCALE_MAP[locale]
    document.documentElement.lang = definition.htmlLang
    document.documentElement.dir = definition.dir
    document.documentElement.dataset.locale = locale
  }, [locale])

  const t = useCallback(
    (key: TranslationKey, values?: Record<string, string | number>) => {
      const dictionary = DICTIONARIES[locale]
      const fallback = DICTIONARIES.en
      return formatTemplate(dictionary[key] ?? fallback[key] ?? key, values)
    },
    [locale],
  )

  const formatNumber = useCallback(
    (value: number) => {
      const numberLocale = locale === 'ar' ? 'ar-EG' : locale === 'fr' ? 'fr-FR' : 'en-GB'
      return new Intl.NumberFormat(numberLocale).format(value)
    },
    [locale],
  )

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      dir: LOCALE_MAP[locale].dir,
      setLocale,
      t,
      formatNumber,
    }),
    [locale, setLocale, t, formatNumber],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n(): I18nContextValue {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider')
  }
  return context
}

export function useTranslation() {
  return useI18n().t
}
