import type { Locale } from '@/config/i18n'
import { ar } from './ar'
import { en, type TranslationKey } from './en'
import { fr } from './fr'

export type Dictionary = Record<TranslationKey, string>

export const DICTIONARIES: Record<Locale, Dictionary> = {
  en,
  fr,
  ar,
}

export { ar, en, fr }
export type { TranslationKey }
