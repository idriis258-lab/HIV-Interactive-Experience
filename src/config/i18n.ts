export const LOCALE_CODES = ['en', 'fr', 'ar'] as const

export type Locale = (typeof LOCALE_CODES)[number]
export type TextDirection = 'ltr' | 'rtl'

export interface LocaleDefinition {
  code: Locale
  label: string
  nativeLabel: string
  shortLabel: string
  dir: TextDirection
  htmlLang: string
}

export const LOCALES: readonly LocaleDefinition[] = [
  {
    code: 'en',
    label: 'English',
    nativeLabel: 'English',
    shortLabel: 'EN',
    dir: 'ltr',
    htmlLang: 'en',
  },
  {
    code: 'fr',
    label: 'French',
    nativeLabel: 'Français',
    shortLabel: 'FR',
    dir: 'ltr',
    htmlLang: 'fr',
  },
  {
    code: 'ar',
    label: 'Arabic',
    nativeLabel: 'العربية',
    shortLabel: 'AR',
    dir: 'rtl',
    htmlLang: 'ar',
  },
]

export const DEFAULT_LOCALE: Locale = 'en'
export const LOCALE_STORAGE_KEY = 'hiv.locale'

export const LOCALE_MAP: Record<Locale, LocaleDefinition> = {
  en: LOCALES[0]!,
  fr: LOCALES[1]!,
  ar: LOCALES[2]!,
}

export function isLocale(value: string | null | undefined): value is Locale {
  return value === 'en' || value === 'fr' || value === 'ar'
}
